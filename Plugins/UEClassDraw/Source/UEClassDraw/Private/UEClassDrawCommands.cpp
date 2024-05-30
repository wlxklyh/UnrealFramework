// Copyright Epic Games, Inc. All Rights Reserved.

#include "UEClassDrawCommands.h"

#define LOCTEXT_NAMESPACE "FUEClassDrawModule"

void FUEClassDrawCommands::RegisterCommands()
{
	UI_COMMAND(OpenPluginWindow, "UEClassDraw", "Bring up UEClassDraw window", EUserInterfaceActionType::Button, FInputChord());
}

#undef LOCTEXT_NAMESPACE
