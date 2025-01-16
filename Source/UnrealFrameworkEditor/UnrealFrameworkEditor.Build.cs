using UnrealBuildTool;

public class UnrealFrameworkEditor : ModuleRules
{
    public UnrealFrameworkEditor(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = ModuleRules.PCHUsageMode.UseExplicitOrSharedPCHs;
        OverridePackageType = PackageOverrideType.EngineDeveloper;
        PublicDependencyModuleNames.AddRange(
            new string[]
            {
                "Core",
                "AnimGraph",
                "UnrealFramework",
                "AnimGraphRuntime",
                "AnimGraph",
                "BlueprintGraph",
            }
        );

        PrivateDependencyModuleNames.AddRange(
            new string[]
            {
                "CoreUObject",
                "Engine",
                "Slate",
                "SlateCore"
            }
        );
    }
}