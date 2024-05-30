// Copyright Epic Games, Inc. All Rights Reserved.

#include "UEClassDraw.h"
#include "UEClassDrawStyle.h"
#include "UEClassDrawCommands.h"
#include "LevelEditor.h"
#include "Widgets/Docking/SDockTab.h"
#include "Widgets/Layout/SBox.h"
#include "Widgets/Text/STextBlock.h"
#include "ToolMenus.h"

static const FName UEClassDrawTabName("UEClassDraw");

#define LOCTEXT_NAMESPACE "FUEClassDrawModule"

void FUEClassDrawModule::StartupModule()
{
	// This code will execute after your module is loaded into memory; the exact timing is specified in the .uplugin file per-module
	
	FUEClassDrawStyle::Initialize();
	FUEClassDrawStyle::ReloadTextures();

	FUEClassDrawCommands::Register();
	
	PluginCommands = MakeShareable(new FUICommandList);

	PluginCommands->MapAction(
		FUEClassDrawCommands::Get().OpenPluginWindow,
		FExecuteAction::CreateRaw(this, &FUEClassDrawModule::PluginButtonClicked),
		FCanExecuteAction());

	UToolMenus::RegisterStartupCallback(FSimpleMulticastDelegate::FDelegate::CreateRaw(this, &FUEClassDrawModule::RegisterMenus));
	
	FGlobalTabmanager::Get()->RegisterNomadTabSpawner(UEClassDrawTabName, FOnSpawnTab::CreateRaw(this, &FUEClassDrawModule::OnSpawnPluginTab))
		.SetDisplayName(LOCTEXT("FUEClassDrawTabTitle", "UEClassDraw"))
		.SetMenuType(ETabSpawnerMenuType::Hidden);
}

void FUEClassDrawModule::ShutdownModule()
{
	// This function may be called during shutdown to clean up your module.  For modules that support dynamic reloading,
	// we call this function before unloading the module.

	UToolMenus::UnRegisterStartupCallback(this);

	UToolMenus::UnregisterOwner(this);

	FUEClassDrawStyle::Shutdown();

	FUEClassDrawCommands::Unregister();

	FGlobalTabmanager::Get()->UnregisterNomadTabSpawner(UEClassDrawTabName);
}

TSharedRef<SDockTab> FUEClassDrawModule::OnSpawnPluginTab(const FSpawnTabArgs& SpawnTabArgs)
{
	FText WidgetText = FText::Format(
		LOCTEXT("WindowWidgetText", "Add code to {0} in {1} to override this window's contents"),
		FText::FromString(TEXT("FUEClassDrawModule::OnSpawnPluginTab")),
		FText::FromString(TEXT("UEClassDraw.cpp"))
		);

	return SNew(SDockTab)
		.TabRole(ETabRole::NomadTab)
		[
			// Put your tab content here!
			SNew(SBox)
			.HAlign(HAlign_Center)
			.VAlign(VAlign_Center)
			[
				SNew(STextBlock)
				.Text(WidgetText)
			]
		];
}

void FUEClassDrawModule::PluginButtonClicked()
{
	FGlobalTabmanager::Get()->TryInvokeTab(UEClassDrawTabName);
}

void FUEClassDrawModule::RegisterMenus()
{
	// Owner will be used for cleanup in call to UToolMenus::UnregisterOwner
	FToolMenuOwnerScoped OwnerScoped(this);

	{
		UToolMenu* Menu = UToolMenus::Get()->ExtendMenu("LevelEditor.MainMenu.Window");
		{
			FToolMenuSection& Section = Menu->FindOrAddSection("WindowLayout");
			Section.AddMenuEntryWithCommandList(FUEClassDrawCommands::Get().OpenPluginWindow, PluginCommands);
		}
	}

	{
		UToolMenu* ToolbarMenu = UToolMenus::Get()->ExtendMenu("LevelEditor.LevelEditorToolBar");
		{
			FToolMenuSection& Section = ToolbarMenu->FindOrAddSection("Settings");
			{
				FToolMenuEntry& Entry = Section.AddEntry(FToolMenuEntry::InitToolBarButton(FUEClassDrawCommands::Get().OpenPluginWindow));
				Entry.SetCommandList(PluginCommands);
			}
		}
	}
}

#undef LOCTEXT_NAMESPACE
	
IMPLEMENT_MODULE(FUEClassDrawModule, UEClassDraw)