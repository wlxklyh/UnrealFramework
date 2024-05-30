// Copyright Epic Games, Inc. All Rights Reserved.

#pragma once

#include "CoreMinimal.h"
#include "Framework/Commands/Commands.h"
#include "UEClassDrawStyle.h"

class FUEClassDrawCommands : public TCommands<FUEClassDrawCommands>
{
public:

	FUEClassDrawCommands()
		: TCommands<FUEClassDrawCommands>(TEXT("UEClassDraw"), NSLOCTEXT("Contexts", "UEClassDraw", "UEClassDraw Plugin"), NAME_None, FUEClassDrawStyle::GetStyleSetName())
	{
	}

	// TCommands<> interface
	virtual void RegisterCommands() override;

public:
	TSharedPtr< FUICommandInfo > OpenPluginWindow;
};