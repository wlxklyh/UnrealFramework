#include "AnimNode_Custom.h"

#include "Animation/AnimNode_SequencePlayer.h"

#include "Animation/AnimMontage.h"
#include "Animation/AnimInstanceProxy.h"
#include "Animation/AnimationPoseData.h"
#include "Animation/AnimPoseSearchProvider.h"
#include "Animation/ExposedValueHandler.h"
#include "Logging/TokenizedMessage.h"
#include "AnimationRuntime.h"

#define LOCTEXT_NAMESPACE "CustomAnimNode"
bool FAnimNode_Custom::SetSequence(UAnimSequenceBase* InSequence)
{
	Sequence = InSequence;
	return true;
}

bool FAnimNode_Custom::SetLoopAnimation(bool bInLoopAnimation)
{
#if WITH_EDITORONLY_DATA
	bLoopAnimation = bInLoopAnimation;
#endif
	
	if(bool* bLoopAnimationPtr = GET_INSTANCE_ANIM_NODE_DATA_PTR(bool, bLoopAnimation))
	{
		*bLoopAnimationPtr = bInLoopAnimation;
		return true;
	}

	return false;
}

UAnimSequenceBase* FAnimNode_Custom::GetSequence() const
{
	return Sequence;
}

float FAnimNode_Custom::GetPlayRateBasis() const
{
	return GET_ANIM_NODE_DATA(float, PlayRateBasis);
}

float FAnimNode_Custom::GetPlayRate() const
{
	return GET_ANIM_NODE_DATA(float, PlayRate);
}

const FInputScaleBiasClampConstants& FAnimNode_Custom::GetPlayRateScaleBiasClampConstants() const
{
	return GET_ANIM_NODE_DATA(FInputScaleBiasClampConstants, PlayRateScaleBiasClampConstants);
}

float FAnimNode_Custom::GetStartPosition() const
{
	return GET_ANIM_NODE_DATA(float, StartPosition);
}

bool FAnimNode_Custom::IsLooping() const
{
	return GET_ANIM_NODE_DATA(bool, bLoopAnimation);
}

bool FAnimNode_Custom::GetStartFromMatchingPose() const
{
	return GET_ANIM_NODE_DATA(bool, bStartFromMatchingPose);
}

FName FAnimNode_Custom::GetGroupName() const
{
	return GET_ANIM_NODE_DATA(FName, GroupName);
}

EAnimGroupRole::Type FAnimNode_Custom::GetGroupRole() const
{
	return GET_ANIM_NODE_DATA(TEnumAsByte<EAnimGroupRole::Type>, GroupRole);
}

EAnimSyncMethod FAnimNode_Custom::GetGroupMethod() const
{
	return GET_ANIM_NODE_DATA(EAnimSyncMethod, Method);
}

bool FAnimNode_Custom::GetIgnoreForRelevancyTest() const
{
	return GET_ANIM_NODE_DATA(bool, bIgnoreForRelevancyTest);
}

bool FAnimNode_Custom::SetGroupName(FName InGroupName)
{
#if WITH_EDITORONLY_DATA
	GroupName = InGroupName;
#endif

	if(FName* GroupNamePtr = GET_INSTANCE_ANIM_NODE_DATA_PTR(FName, GroupName))
	{
		*GroupNamePtr = InGroupName;
		return true;
	}

	return false;
}

bool FAnimNode_Custom::SetGroupRole(EAnimGroupRole::Type InRole)
{
#if WITH_EDITORONLY_DATA
	GroupRole = InRole;
#endif

	if(TEnumAsByte<EAnimGroupRole::Type>* GroupRolePtr = GET_INSTANCE_ANIM_NODE_DATA_PTR(TEnumAsByte<EAnimGroupRole::Type>, GroupRole))
	{
		*GroupRolePtr = InRole;
		return true;
	}

	return false;
}

bool FAnimNode_Custom::SetGroupMethod(EAnimSyncMethod InMethod)
{
#if WITH_EDITORONLY_DATA
	Method = InMethod;
#endif

	if(EAnimSyncMethod* MethodPtr = GET_INSTANCE_ANIM_NODE_DATA_PTR(EAnimSyncMethod, Method))
	{
		*MethodPtr = InMethod;
		return true;
	}

	return false;
}

bool FAnimNode_Custom::SetIgnoreForRelevancyTest(bool bInIgnoreForRelevancyTest)
{
#if WITH_EDITORONLY_DATA
	bIgnoreForRelevancyTest = bInIgnoreForRelevancyTest;
#endif

	if(bool* bIgnoreForRelevancyTestPtr = GET_INSTANCE_ANIM_NODE_DATA_PTR(bool, bIgnoreForRelevancyTest))
	{
		*bIgnoreForRelevancyTestPtr = bInIgnoreForRelevancyTest;
		return true;
	}

	return false;
}

bool FAnimNode_Custom::SetStartPosition(float InStartPosition)
{
	if(float* StartPositionPtr = GET_INSTANCE_ANIM_NODE_DATA_PTR(float, StartPosition))
	{
		*StartPositionPtr = InStartPosition;
		return true;
	}

	return false;
}


bool FAnimNode_Custom::SetPlayRate(float InPlayRate)
{
	if(float* PlayRatePtr = GET_INSTANCE_ANIM_NODE_DATA_PTR(float, PlayRate))
	{
		*PlayRatePtr = InPlayRate;
		return true;
	}

	return false;
}
#undef LOCTEXT_NAMESPACE

