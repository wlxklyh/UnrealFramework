#include "Widgets/SImguiWidget.h"
#include "imgui.h"
#include "imgui_internal.h"
#include "Logging.h"
#include "ImguiWrap/ImguiInputAdapter.h"
#include "ImguiWrap/ImguiContext.h"
#include "ImguiWrap/ImguiResourceManager.h"
#include "ImguiWrap/ImguiUEWrap.h"
#include "Render/ImguiDrawer.h"
#include "Widgets/Input/SEditableText.h"

void SImguiRenderProxy::Construct(const FArguments& InArgs)
{
	HSizingRule = InArgs._HSizingRule;
	VSizingRule = InArgs._VSizingRule;
	bAutoSetWidgetPos = InArgs._AutoSetWidgetPos;
	PersistWndID = InArgs._ProxyWndName ? ImHashStr(InArgs._ProxyWndName) : 0;
	Context = InArgs._InContext;
	Adapter = InArgs._InAdapter;
	bBlockInput = InArgs._BlockInput;
	bBlockWheel = InArgs._BlockWheel;

	SetVisibility(InArgs._Visibility);
}

void SImguiRenderProxy::SetContext(UImguiContext* InContext)
{
	check(InContext != nullptr);
	Context = InContext;
	if (Adapter) Adapter->SetContext(Context);
}

void SImguiRenderProxy::SetAdapter(UImguiInputAdapter* InAdapter)
{
	check(InAdapter != nullptr);
	Adapter = InAdapter;
	if (Context) Adapter->SetContext(Context);	
}

void SImguiRenderProxy::AddReferencedObjects(FReferenceCollector& Collector)
{
	Collector.AddReferencedObject(Context);
	Collector.AddReferencedObject(Adapter);
}

FString SImguiRenderProxy::GetReferencerName() const
{
	return TEXT("ImguiRenderProxy");
}

FReply SImguiRenderProxy::OnKeyChar(const FGeometry& MyGeometry, const FCharacterEvent& InCharacterEvent)
{
	Super::OnKeyChar(MyGeometry, InCharacterEvent);
	if (!Adapter) return FReply::Unhandled();
	FReply AdapterReply = Adapter->OnKeyChar(InCharacterEvent);
	return bBlockInput ? AdapterReply : FReply::Unhandled();
}

FReply SImguiRenderProxy::OnKeyDown(const FGeometry& MyGeometry, const FKeyEvent& InKeyEvent)
{
	Super::OnKeyDown(MyGeometry, InKeyEvent);
	if (!Adapter) return FReply::Unhandled();
	FReply AdapterReply = Adapter->OnKeyDown(InKeyEvent);
	return bBlockInput ? AdapterReply : FReply::Unhandled();
}

FReply SImguiRenderProxy::OnKeyUp(const FGeometry& MyGeometry, const FKeyEvent& InKeyEvent)
{
	Super::OnKeyUp(MyGeometry, InKeyEvent);
	if (!Adapter) return FReply::Unhandled();
	FReply AdapterReply = Adapter->OnKeyUp(InKeyEvent);
	return bBlockInput ? AdapterReply : FReply::Unhandled();
}

FReply SImguiRenderProxy::OnMouseButtonDown(const FGeometry& MyGeometry, const FPointerEvent& MouseEvent)
{
	Super::OnMouseButtonDown(MyGeometry, MouseEvent);
	if (!Adapter) return FReply::Unhandled();
	FReply AdapterReply = Adapter->OnMouseButtonDown(MouseEvent);
	return bBlockInput ? AdapterReply : FReply::Unhandled();
}

FReply SImguiRenderProxy::OnMouseButtonUp(const FGeometry& MyGeometry, const FPointerEvent& MouseEvent)
{
	Super::OnMouseButtonDown(MyGeometry, MouseEvent);
	if (!Adapter) return FReply::Unhandled();
	FReply AdapterReply = Adapter->OnMouseButtonUp(MouseEvent);
	return bBlockInput ? AdapterReply : FReply::Unhandled();
	
}

FReply SImguiRenderProxy::OnMouseButtonDoubleClick(const FGeometry& InMyGeometry,
	const FPointerEvent& InMouseEvent)
{
	Super::OnMouseButtonDoubleClick(InMyGeometry, InMouseEvent);
	if (!Adapter) return FReply::Unhandled();
	FReply AdapterReply = Adapter->OnMouseButtonDoubleClick(InMouseEvent);
	return bBlockInput ? AdapterReply : FReply::Unhandled();
}

FReply SImguiRenderProxy::OnMouseWheel(const FGeometry& MyGeometry, const FPointerEvent& MouseEvent)
{
	Super::OnMouseWheel(MyGeometry, MouseEvent);
	if (!Adapter) return FReply::Unhandled();
	FReply AdapterReply = Adapter->OnMouseWheel(MouseEvent);
	return bBlockInput && bBlockWheel ? AdapterReply : FReply::Unhandled();
}

FReply SImguiRenderProxy::OnMouseMove(const FGeometry& MyGeometry, const FPointerEvent& MouseEvent)
{
	if (!GetAdapter()) return FReply::Unhandled();
	FReply AdapterReply = Adapter->OnMouseMove(FVector2D::ZeroVector, MouseEvent);
	return bBlockInput ? AdapterReply : FReply::Unhandled();
}

int32 SImguiRenderProxy::OnPaint(
	const FPaintArgs& Args,
	const FGeometry& AllottedGeometry,
	const FSlateRect& MyCullingRect,
	FSlateWindowElementList& OutDrawElements,
	int32 LayerId,
	const FWidgetStyle& InWidgetStyle,
	bool bParentEnabled) const
{
	if (!BoundViewport || !BoundViewport->DrawData) return LayerId;

	if (BoundViewport->DrawData->DisplaySize.x <= 0.0f || BoundViewport->DrawData->DisplaySize.y <= 0.0f)
	{
		return LayerId + 1;
	}

	// get window
	CachedWnd = StaticCastSharedRef<SWindow>(OutDrawElements.GetPaintWindow()->AsShared());
	
	// get vertex offset
	FVector2D ImguiVertexOffset = AllottedGeometry.GetAbsolutePosition() - FVector2D{ BoundViewport->Pos.x, BoundViewport->Pos.y };

	// build ortho matrix 
	auto Size = OutDrawElements.GetPaintWindow()->GetSizeInScreen();
	FMatrix OrthoMatrix(
        FPlane(2.0f / Size.X,   0.0f,			0.0f,			0.0f),
        FPlane(0.0f,			-2.0f / Size.Y,	0.0f,			0.0f),
        FPlane(0.0f,			0.0f,			1.f / 5000.f,	0.0f),
        FPlane(-1,			    1,				0.5f,			1.0f));

	// setup drawer 
	auto Drawer = FImguiDrawer::AllocDrawer();
	Drawer->SetSlateTransform(ImguiVertexOffset, 1, OrthoMatrix);
	Drawer->SetClipRect(MyCullingRect);
	Drawer->SetDrawData(BoundViewport->DrawData);

	// add to draw list 
	FSlateDrawElement::MakeCustom(OutDrawElements, LayerId, Drawer);

	// draw next layer 
	return LayerId + 1;
}

void SImguiRenderProxy::Tick(const FGeometry& AllottedGeometry, const double InCurrentTime,
	const float InDeltaTime)
{
	Super::Tick(AllottedGeometry, InCurrentTime, InDeltaTime);

	// get context 
	UImguiContext* UECtx = GetContext();
	if (!UECtx) return;
	ImGuiContext* Ctx = UECtx->GetContext();

	// find window 
	ImGuiWindow* Wnd = (ImGuiWindow*)Ctx->WindowsById.GetVoidPtr(PersistWndID);
	if (!Wnd) return;

	// update imgui wnd size
	FVector2D Size = AllottedGeometry.GetAbsoluteSize();
	if (HSizingRule == EImguiSizingRule::UESize)
	{
		Wnd->Size.x = Size.X;
	}
	if (VSizingRule == EImguiSizingRule::UESize)
	{
		Wnd->Size.y = Size.Y;
	}

	// update imgui pos
	FVector2D Pos = AllottedGeometry.GetAbsolutePosition();
	if (bAutoSetWidgetPos)
	{
		Wnd->Pos = { (float)Pos.X, (float)Pos.Y };
	}
}

FVector2D SImguiRenderProxy::ComputeDesiredSize(float) const
{
	UImguiContext* UECtx = GetContext();
	if (!UECtx) return FVector2D::ZeroVector;
	ImGuiContext* Ctx = UECtx->GetContext();

	FVector2D OriginPoint = GetCachedGeometry().GetAccumulatedRenderTransform().GetTranslation();
	FVector2D NewDesiredSize(0);

	ImGuiWindow* Wnd = (ImGuiWindow*)Ctx->WindowsById.GetVoidPtr(PersistWndID);
	if (!Wnd) return FVector2D::ZeroVector;
	
	// HSizing 
	switch (HSizingRule)
	{
	case EImguiSizingRule::ImSize:
		NewDesiredSize.X = Wnd->Size.x;
		break;
	case EImguiSizingRule::ImContentSize:
		NewDesiredSize.X = Wnd->ContentSize.x + (Wnd->WindowBorderSize + Wnd->WindowPadding.x) * 2;
		break;
	default: ;
	}

	// VSizing
	switch (VSizingRule)
	{
	case EImguiSizingRule::ImSize:
		NewDesiredSize.Y = Wnd->Size.y;
		break;
	case EImguiSizingRule::ImContentSize:
		NewDesiredSize.Y = Wnd->ContentSize.y + (Wnd->WindowBorderSize + Wnd->WindowPadding.y) * 2;
		break;
	default: ;
	}

	return NewDesiredSize;
}

float SImguiRenderProxy::GetDpiScale()
{
	return CachedWnd.IsValid() ? CachedWnd.Pin()->GetDPIScaleFactor() : 1.0f;
	return 1.0f;
}

EVisibility SImguiRenderProxy::_GetVisibility() const
{
	return Context && Context->GetIO() && Context->GetIO()->WantCaptureMouse ? EVisibility::Visible : EVisibility::SelfHitTestInvisible;
}

bool SImguiRenderProxy::SupportsKeyboardFocus() const
{
	return Adapter && Adapter->CanReceiveKeyboardInput();
}

void SImguiRenderProxy::OnFocusLost(const FFocusEvent& InFocusEvent)
{
	// if (!GetContext()) return;
	// // change context 
	// ImGuiContext* LastCtx = ImGui::GetCurrentContext();
	// ImGuiContext* Ctx = GetContext()->GetContext();
	// GetContext()->ApplyContext();
	// ImGuiWindow* Wnd = (ImGuiWindow*)Ctx->WindowsById.GetVoidPtr(PersistWndID);
	//
	// // remove focus
	// if (Ctx->ActiveIdWindow && Ctx->ActiveIdWindow->RootWindow != Wnd)
	// 	ImGui::FocusWindow(nullptr);
	//
	// // resume context 
	// ImGui::SetCurrentContext(LastCtx);
}

FReply SImguiRenderProxy::OnFocusReceived(const FGeometry& MyGeometry, const FFocusEvent& InFocusEvent)
{
	return FReply::Unhandled();
}

FCursorReply SImguiRenderProxy::OnCursorQuery(const FGeometry& MyGeometry, const FPointerEvent& CursorEvent) const
{
	Super::OnCursorQuery(MyGeometry, CursorEvent);
	if (!Adapter) return FCursorReply::Cursor(EMouseCursor::Default);
	return Adapter->OnCursorQuery(CursorEvent);
}

