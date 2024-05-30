/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 112104FB49EDB6D47FB234AB6E9F399C
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection {
        enum AnimEnum_CardinalDirection { Forward, Backward, Left, Right, AnimEnum_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A0A24BB04D349EDAFD0942BB6B24F02F
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimEnum_RootYawOffsetMode {
        enum AnimEnum_RootYawOffsetMode { BlendOut, Hold, Accumulate, AnimEnum_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 79249A5948F7DCFE0732B1BE005B3527
    namespace Game.Characters.Heroes.Mannequin.Rig.ABP_Manny_PostProcess {
        class ABP_Manny_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_Manny_PostProcess(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Manny_PostProcess_C;
            static Load(InName: string): ABP_Manny_PostProcess_C;
        
            __tid_ABP_Manny_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 79249A5948F7DCFE0732B1BE005B3527
    namespace Game.Characters.Heroes.Mannequin.Rig.ABP_Manny_PostProcess {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_49: string, __NameProperty_50: string, __StructProperty_51: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base, AnimGraphNode_Root: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_LinkedInputPose: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_ControlRig: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_13: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_12: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_11: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_10: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_9: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_8: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_7: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_6: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_5: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_4: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_3: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_2: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_PoseDriver: UE.AnimNodeExposedValueHandler_PropertyAccess);
            __NameProperty_49: string;
            __NameProperty_50: string;
            __StructProperty_51: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            AnimGraphNode_Root: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_LinkedInputPose: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_ControlRig: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_13: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_12: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_11: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_10: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_9: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_8: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_7: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_6: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_5: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_4: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_3: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_2: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_PoseDriver: UE.AnimNodeExposedValueHandler_PropertyAccess;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 854C712F43DF612DE1DE7CA79CB796A7
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_Procedural {
        class CR_Mannequin_Procedural_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Procedural_C;
            static Load(InName: string): CR_Mannequin_Procedural_C;
        
            __tid_CR_Mannequin_Procedural_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 854C712F43DF612DE1DE7CA79CB796A7
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_Procedural {
        class RigVMMemory_Literal extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SetRotation_2_Item__Const: UE.RigElementKey;
            SetRotation_2_Space__Const: UE.ERigVMTransformSpace;
            GetTransform_6_Item__Const: UE.RigElementKey;
            GetTransform_6_bInitial__Const: boolean;
            GetTransform_6_1_bInitial__Const: boolean;
            MathQuaternionSwingTwist_TwistAxis__Const: UE.Vector;
            MathQuaternionSlerp_2_B__Const: UE.Quat;
            MathQuaternionSlerp_2_T__Const: number;
            SetRotation_2_Weight__Const: number;
            SetRotation_2_1_Item__Const: UE.RigElementKey;
            MathQuaternionSlerp_T__Const: number;
            SetTranslation_Space__Const: UE.ERigVMTransformSpace;
            GetTransform_1_Item__Const: UE.RigElementKey;
            MathTransformLerp_T__Const: number;
            SetRotation_2_1_1_Item__Const: UE.RigElementKey;
            MathQuaternionSlerp_1_T__Const: number;
            MathTransformLerp_1_T__Const: number;
            SetRotation_2_1_2_Item__Const: UE.RigElementKey;
            MathQuaternionSlerp_2_3_T__Const: number;
            SetRotation_1_Item__Const: UE.RigElementKey;
            GetTransform_5_1_Item__Const: UE.RigElementKey;
            MathQuaternionSlerp_4_T__Const: number;
            SetRotation_Item__Const: UE.RigElementKey;
            SetRotation_2_2_Item__Const: UE.RigElementKey;
            GetTransform_6_3_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_Item__Const: UE.RigElementKey;
            GetTransform_1_1_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_1_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_1_1_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_1_1_1_Item__Const: UE.RigElementKey;
            GetTransform_6_5_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_1_1_1_1_Item__Const: UE.RigElementKey;
            SetRotation_2_2_1_Item__Const: UE.RigElementKey;
            GetTransform_6_3_1_Item__Const: UE.RigElementKey;
            MathQuaternionSlerp_2_2_T__Const: number;
            SetRotation_2_1_3_2_Item__Const: UE.RigElementKey;
            GetTransform_1_2_Item__Const: UE.RigElementKey;
            SetRotation_3_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_2_1_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_2_1_1_Item__Const: UE.RigElementKey;
            GetTransform_6_3_1_2_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_2_1_1_1_Item__Const: UE.RigElementKey;
            SetRotation_2_2_1_1_Item__Const: UE.RigElementKey;
            GetTransform_6_3_1_3_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_2_2_Item__Const: UE.RigElementKey;
            GetTransform_1_2_1_Item__Const: UE.RigElementKey;
            SetRotation_3_1_Item__Const: UE.RigElementKey;
            SetRotation_3_2_Item__Const: UE.RigElementKey;
            SetRotation_3_2_1_Item__Const: UE.RigElementKey;
            GetTransform_6_3_1_5_Item__Const: UE.RigElementKey;
            SetRotation_3_2_1_1_Item__Const: UE.RigElementKey;
            SetTranslation_4_1_2_Item__Const: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Literal;
            static Load(InName: string): RigVMMemory_Literal;
        
            __tid_RigVMMemory_Literal_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 854C712F43DF612DE1DE7CA79CB796A7
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_Procedural {
        class RigVMMemory_Work extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ExecuteContext_: UE.ControlRigExecuteContext;
            MathQuaternionMul_Result: UE.Quat;
            MathQuaternionInverse_3_Result: UE.Quat;
            MathQuaternionSwingTwist_Twist: UE.Quat;
            MathTransformMakeRelative_3_Local: UE.Transform;
            GetTransform_6_Transform: UE.Transform;
            GetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_Transform: UE.Transform;
            GetTransform_6_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_Input: UE.Quat;
            MathQuaternionSwingTwist_Swing: UE.Quat;
            MathQuaternionSlerp_2_Result: UE.Quat;
            MathQuaternionInverse_2_Result: UE.Quat;
            SetRotation_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_Result: UE.Quat;
            SetRotation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_Result: UE.Transform;
            GetTransform_Transform: UE.Transform;
            GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_Transform: UE.Transform;
            GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_Translation: UE.Vector;
            SetTranslation_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_Result: UE.Quat;
            SetRotation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_Result: UE.Transform;
            SetTranslation_1_Translation: UE.Vector;
            SetTranslation_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_3_Result: UE.Quat;
            MathQuaternionInverse_3_3_Result: UE.Quat;
            MathQuaternionSwingTwist_4_Twist: UE.Quat;
            MathTransformMakeRelative_3_4_Local: UE.Transform;
            GetTransform_6_2_Transform: UE.Transform;
            GetTransform_6_2_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_1_Transform: UE.Transform;
            GetTransform_6_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_4_Input: UE.Quat;
            MathQuaternionSwingTwist_4_Swing: UE.Quat;
            MathQuaternionSlerp_2_3_Result: UE.Quat;
            MathQuaternionInverse_2_4_Result: UE.Quat;
            SetRotation_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_4_Result: UE.Quat;
            MathQuaternionSwingTwist_3_Twist: UE.Quat;
            MathTransformMakeRelative_3_3_Local: UE.Transform;
            GetTransform_5_1_Transform: UE.Transform;
            GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_5_Transform: UE.Transform;
            GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_3_Input: UE.Quat;
            MathQuaternionSwingTwist_3_Swing: UE.Quat;
            SetRotation_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_3_Result: UE.Transform;
            GetTransform_4_Transform: UE.Transform;
            GetTransform_4_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_3_Transform: UE.Transform;
            GetTransform_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_5_Translation: UE.Vector;
            SetTranslation_5_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_3_Result: UE.Quat;
            SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_4_Result: UE.Transform;
            SetTranslation_5_1_Translation: UE.Vector;
            SetTranslation_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_1_Result: UE.Quat;
            MathQuaternionInverse_3_1_Result: UE.Quat;
            MathQuaternionSwingTwist_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_1_Local: UE.Transform;
            GetTransform_6_3_Transform: UE.Transform;
            GetTransform_6_3_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_Transform: UE.Transform;
            GetTransform_6_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_1_Input: UE.Quat;
            MathQuaternionSwingTwist_1_Swing: UE.Quat;
            MathQuaternionSlerp_2_1_Result: UE.Quat;
            MathQuaternionInverse_2_1_Result: UE.Quat;
            SetRotation_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_3_Result: UE.Quat;
            SetRotation_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_2_Result: UE.Transform;
            GetTransform_2_Transform: UE.Transform;
            GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_1_Transform: UE.Transform;
            GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_2_Translation: UE.Vector;
            SetTranslation_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_1_Result: UE.Quat;
            SetRotation_2_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_1_Result: UE.Transform;
            SetTranslation_2_1_Translation: UE.Vector;
            SetTranslation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_3_1_Result: UE.Quat;
            MathQuaternionInverse_3_3_1_Result: UE.Quat;
            MathQuaternionSwingTwist_4_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_4_1_Local: UE.Transform;
            GetTransform_6_4_Transform: UE.Transform;
            GetTransform_6_4_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_3_Transform: UE.Transform;
            GetTransform_6_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_4_1_Input: UE.Quat;
            MathQuaternionSwingTwist_4_1_Swing: UE.Quat;
            MathQuaternionSlerp_2_3_1_Result: UE.Quat;
            MathQuaternionInverse_2_4_1_Result: UE.Quat;
            SetRotation_2_1_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_3_1_1_Result: UE.Quat;
            MathQuaternionSwingTwist_3_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_3_1_Local: UE.Transform;
            GetTransform_6_5_Transform: UE.Transform;
            GetTransform_6_5_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_4_Transform: UE.Transform;
            GetTransform_6_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_3_1_Input: UE.Quat;
            MathQuaternionSwingTwist_3_1_Swing: UE.Quat;
            SetRotation_2_1_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_3_1_Result: UE.Transform;
            GetTransform_4_1_Transform: UE.Transform;
            GetTransform_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_3_1_Transform: UE.Transform;
            GetTransform_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_2_1_1_Translation: UE.Vector;
            SetTranslation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_3_1_Result: UE.Quat;
            SetRotation_2_1_3_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_4_1_Result: UE.Transform;
            SetTranslation_2_1_1_1_Translation: UE.Vector;
            SetTranslation_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_2_Result: UE.Quat;
            MathQuaternionInverse_3_2_Result: UE.Quat;
            MathQuaternionSwingTwist_2_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_Local: UE.Transform;
            GetTransform_6_3_1_Transform: UE.Transform;
            GetTransform_6_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_Transform: UE.Transform;
            GetTransform_6_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_Input: UE.Quat;
            MathQuaternionSwingTwist_2_Swing: UE.Quat;
            MathQuaternionSlerp_2_2_Result: UE.Quat;
            MathQuaternionInverse_2_2_Result: UE.Quat;
            SetRotation_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetRotation_2_1_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_3_Result: UE.Transform;
            GetTransform_3_Transform: UE.Transform;
            GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_2_Transform: UE.Transform;
            GetTransform_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_3_Translation: UE.Vector;
            SetTranslation_3_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_2_Result: UE.Quat;
            SetRotation_3_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_2_Result: UE.Transform;
            SetTranslation_3_1_Translation: UE.Vector;
            SetTranslation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_2_2_Result: UE.Quat;
            MathQuaternionInverse_3_2_2_Result: UE.Quat;
            MathQuaternionSwingTwist_2_2_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_2_Local: UE.Transform;
            GetTransform_6_3_1_1_Transform: UE.Transform;
            GetTransform_6_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_1_Transform: UE.Transform;
            GetTransform_6_1_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_2_Input: UE.Quat;
            MathQuaternionSwingTwist_2_2_Swing: UE.Quat;
            MathQuaternionSlerp_2_2_2_Result: UE.Quat;
            MathQuaternionInverse_2_2_2_Result: UE.Quat;
            SetRotation_2_1_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_2_2_2_1_Result: UE.Quat;
            MathQuaternionSwingTwist_2_2_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_2_1_Local: UE.Transform;
            GetTransform_6_3_1_2_Transform: UE.Transform;
            GetTransform_6_3_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_2_Transform: UE.Transform;
            GetTransform_6_1_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_2_1_Input: UE.Quat;
            MathQuaternionSwingTwist_2_2_1_Swing: UE.Quat;
            SetRotation_2_1_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_2_2_Result: UE.Transform;
            GetTransform_3_2_Transform: UE.Transform;
            GetTransform_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_2_2_Transform: UE.Transform;
            GetTransform_1_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_3_1_1_Translation: UE.Vector;
            SetTranslation_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetRotation_2_1_3_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_3_2_Result: UE.Transform;
            SetTranslation_3_1_1_1_Translation: UE.Vector;
            SetTranslation_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_2_1_Result: UE.Quat;
            MathQuaternionInverse_3_2_1_Result: UE.Quat;
            MathQuaternionSwingTwist_2_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_1_Local: UE.Transform;
            GetTransform_6_3_1_3_Transform: UE.Transform;
            GetTransform_6_3_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_3_Transform: UE.Transform;
            GetTransform_6_1_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_1_Input: UE.Quat;
            MathQuaternionSwingTwist_2_1_Swing: UE.Quat;
            MathQuaternionSlerp_2_2_1_Result: UE.Quat;
            MathQuaternionInverse_2_2_1_Result: UE.Quat;
            SetRotation_2_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetRotation_2_1_3_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_3_1_Result: UE.Transform;
            GetTransform_3_1_Transform: UE.Transform;
            GetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_2_1_Transform: UE.Transform;
            GetTransform_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_4_Translation: UE.Vector;
            SetTranslation_4_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_2_1_Result: UE.Quat;
            SetRotation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_2_1_Result: UE.Transform;
            SetTranslation_4_1_Translation: UE.Vector;
            SetTranslation_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_2_2_1_Result: UE.Quat;
            MathQuaternionInverse_3_2_2_1_Result: UE.Quat;
            MathQuaternionSwingTwist_2_2_2_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_2_2_Local: UE.Transform;
            GetTransform_6_3_1_4_Transform: UE.Transform;
            GetTransform_6_3_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_4_Transform: UE.Transform;
            GetTransform_6_1_2_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_2_2_Input: UE.Quat;
            MathQuaternionSwingTwist_2_2_2_Swing: UE.Quat;
            MathQuaternionSlerp_2_2_2_2_Result: UE.Quat;
            MathQuaternionInverse_2_2_2_1_Result: UE.Quat;
            SetRotation_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_2_2_2_1_1_Result: UE.Quat;
            MathQuaternionSwingTwist_2_2_1_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_2_1_1_Local: UE.Transform;
            GetTransform_6_3_1_5_Transform: UE.Transform;
            GetTransform_6_3_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_5_Transform: UE.Transform;
            GetTransform_6_1_2_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_2_1_1_Input: UE.Quat;
            MathQuaternionSwingTwist_2_2_1_1_Swing: UE.Quat;
            SetRotation_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_2_2_1_Result: UE.Transform;
            GetTransform_3_2_1_Transform: UE.Transform;
            GetTransform_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_2_2_1_Transform: UE.Transform;
            GetTransform_1_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_4_1_1_Translation: UE.Vector;
            SetTranslation_4_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetRotation_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_3_2_1_Result: UE.Transform;
            SetTranslation_4_1_2_Translation: UE.Vector;
            SetTranslation_4_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Work;
            static Load(InName: string): RigVMMemory_Work;
        
            __tid_RigVMMemory_Work_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 34B105414117D7F5DF9F1B9534DCA89C
    namespace Game.StarterContent.Blueprints.BP_LightStudio {
        class BP_LightStudio_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SkyLight1: UE.SkyLightComponent;
            ExponentialHeightFog1: UE.ExponentialHeightFogComponent;
            PrevisArrow: UE.StaticMeshComponent;
            Skybox: UE.StaticMeshComponent;
            Scene1: UE.SceneComponent;
            GlobalBrightness: number;
            Use_HDRI: boolean;
            UseSunLight: boolean;
            SunBrightness: number;
            SunTint: UE.LinearColor;
            StationaryLightForSun: boolean;
            SunDirectionalLight: UE.DirectionalLightComponent;
            UseAtmosphere: boolean;
            AtmosphereBrightness: number;
            AtmosphereTint: UE.LinearColor;
            PrevisArrowMaterial: UE.MaterialInstanceDynamic;
            LightColor: UE.LinearColor;
            SunColorCurve: UE.CurveLinearColor;
            OverrideSunColor: boolean;
            AtmosphereDensityMultiplier: number;
            AtmosphereAltitude: number;
            DisableSunDisk: boolean;
            UseFog: boolean;
            FogBrightness: number;
            FogTint: UE.LinearColor;
            FogAltitude: number;
            FogMaxOpacity: number;
            FogHeightFalloff: number;
            FogDensity: number;
            FogBrightnessCurve: UE.CurveFloat;
            FogStartDistance: number;
            DisableGroundScattering: boolean;
            AtmosphereDistanceScale: number;
            SkyboxMaterial: UE.MaterialInstanceDynamic;
            HDRI_Brightness: number;
            HDRI_Contrast: number;
            HDRI_Tint: UE.LinearColor;
            HDRI_Cubemap: UE.Texture;
            HDRI_Rotation: number;
            AtmosphereOpacityHorizon: number;
            AtmosphereOpacityZenith: number;
            HighDensityAtmosphere: boolean;
            AtmosphericFog: UE.AtmosphericFogComponent;
            UseSkylight: boolean;
            Shadowdistance: number;
            LightShaftBloom: boolean;
            LightShaftOcclusion: boolean;
            OcclusionMaskDarkness: number;
            BloomScale: number;
            BloomThreshold: number;
            BloomTint: UE.Color;
            AtmosphereFogMultiplier: number;
            AtmosphereDensityHeight: number;
            AtmosphereMaxScatteringOrder: number;
            AtmosphereAltitudeSampleNumber: number;
            LightFunctionMaterial: UE.MaterialInterface;
            MIC_Black: UE.MaterialInstance;
            MIC_HDRI: UE.MaterialInstance;
            AtmosphereDensity() : void;
            CalculateSunColor() : void;
            NormalizedSunAngle(Angle: $Ref<number>) : void;
            SunMobility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_LightStudio_C;
            static Load(InName: string): BP_LightStudio_C;
        
            __tid_BP_LightStudio_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6A1AE04E46BB2DCE8E8DA5B318ECB60F
    namespace Game.StarterContent.Blueprints.Blueprint_WallSconce {
        class Blueprint_WallSconce_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SM_Lamp_Wall: UE.StaticMeshComponent;
            PointLight2: UE.SpotLightComponent;
            Scene1: UE.SceneComponent;
            Brightness: number;
            Color: UE.LinearColor;
            ["Inner Cone Angle"]: number;
            ["Outer Cone Angle"]: number;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_WallSconce_C;
            static Load(InName: string): Blueprint_WallSconce_C;
        
            __tid_Blueprint_WallSconce_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 62110038444C84D1EC760AB254B78A07
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Steam {
        class Blueprint_Effect_Steam_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Steam AUdio"]: UE.AudioComponent;
            P_Steam_Lit: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Steam_C;
            static Load(InName: string): Blueprint_Effect_Steam_C;
        
            __tid_Blueprint_Effect_Steam_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0D94FA604928B24E62003083BA722E3C
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Sparks {
        class Blueprint_Effect_Sparks_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Sparks Audio"]: UE.AudioComponent;
            Sparks: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Sparks_C;
            static Load(InName: string): Blueprint_Effect_Sparks_C;
        
            __tid_Blueprint_Effect_Sparks_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2678356F40E4E16306BDD687933AE2D1
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Smoke {
        class Blueprint_Effect_Smoke_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Smoke Audio"]: UE.AudioComponent;
            P_Smoke: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Smoke_C;
            static Load(InName: string): Blueprint_Effect_Smoke_C;
        
            __tid_Blueprint_Effect_Smoke_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A0AD22D447F99B83A9A31C9B9426B5C0
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Fire {
        class Blueprint_Effect_Fire_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Fire Audio"]: UE.AudioComponent;
            P_Fire: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Fire_C;
            static Load(InName: string): Blueprint_Effect_Fire_C;
        
            __tid_Blueprint_Effect_Fire_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 862A26E84A42F13FB193AC87521ABCE8
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Explosion {
        class Blueprint_Effect_Explosion_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Explosion Audio"]: UE.AudioComponent;
            P_Explosion: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Explosion_C;
            static Load(InName: string): Blueprint_Effect_Explosion_C;
        
            __tid_Blueprint_Effect_Explosion_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 819FE165412B370746C9159B51857ADC
    namespace Game.StarterContent.Blueprints.Blueprint_CeilingLight {
        class Blueprint_CeilingLight_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SM_Lamp_Ceiling: UE.StaticMeshComponent;
            PointLight1: UE.PointLightComponent;
            Scene1: UE.SceneComponent;
            Brightness: number;
            Color: UE.LinearColor;
            ["Source Radius"]: number;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_CeilingLight_C;
            static Load(InName: string): Blueprint_CeilingLight_C;
        
            __tid_Blueprint_CeilingLight_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B326F06C450F3DD1F4FD86A6325B0EF8
    namespace Game.Characters.Heroes.Mannequin_UE4.Animations.ABP_UE4_Mannequin_Retarget {
        class ABP_UE4_Mannequin_Retarget_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_RetargetPoseFromMesh: UE.AnimNode_RetargetPoseFromMesh;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_UE4_Mannequin_Retarget(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_UE4_Mannequin_Retarget_C;
            static Load(InName: string): ABP_UE4_Mannequin_Retarget_C;
        
            __tid_ABP_UE4_Mannequin_Retarget_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B70771234E6948887BE8D5AF11A7829A
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_FootPlant {
        class CR_Mannequin_FootPlant_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            LeftFootOffset: UE.Vector;
            RightFootOffset: UE.Vector;
            CurrentLeftFootHitNormal: UE.Vector;
            TargetLeftFootOffsetZ: number;
            CurrentRightFootHitNormal: UE.Vector;
            DidLeftFootTraceHit: boolean;
            TargetRightFootOffsetZ: number;
            DidRightFootTraceHit: boolean;
            CurrentPelvisOffsetZ: number;
            PelvisBlendSpeed: number;
            CurrentLeftFootOffsetZ: number;
            CurrentRightFootOffsetZ: number;
            MathVectorDistance_Result: number;
            AlphaInterp_Result: number;
            isCharacterSloping: boolean;
            characterSlopeAngle: UE.Vector;
            isCrouching: boolean;
            isSlopingAndCrouching: boolean;
            isMoving2D: boolean;
            MathVectorUnit_Result: UE.Vector;
            ThighLength: number;
            CalfLength: number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_FootPlant_C;
            static Load(InName: string): CR_Mannequin_FootPlant_C;
        
            __tid_CR_Mannequin_FootPlant_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2982914A40B0DB7830A45EB17654E75F
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_Body {
        class CR_Mannequin_Body_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            arm_l_ik_mode: boolean;
            arm_r_ik_mode: boolean;
            leg_l_ik_mode: boolean;
            leg_r_ik_mode: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Body_C;
            static Load(InName: string): CR_Mannequin_Body_C;
        
            __tid_CR_Mannequin_Body_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B352F0074292067F1F6A3ABAD41E394E
    namespace Game.Characters.Heroes.Mannequin.Rig.ABP_Quinn_PostProcess {
        class ABP_Quinn_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_Quinn_PostProcess(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Quinn_PostProcess_C;
            static Load(InName: string): ABP_Quinn_PostProcess_C;
        
            __tid_ABP_Quinn_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C73B93274FCECE28C7F49699213E6F3B
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Unarmed.ABP_UnarmedAnimLayers_Feminine {
        class ABP_UnarmedAnimLayers_Feminine_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_UnarmedAnimLayers_Feminine_C;
            static Load(InName: string): ABP_UnarmedAnimLayers_Feminine_C;
        
            __tid_ABP_UnarmedAnimLayers_Feminine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5BADF0CE4BE023F4C1EC93BE7DD5CB91
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Unarmed.ABP_UnarmedAnimLayers {
        class ABP_UnarmedAnimLayers_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_UnarmedAnimLayers_C;
            static Load(InName: string): ABP_UnarmedAnimLayers_C;
        
            __tid_ABP_UnarmedAnimLayers_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B8C4A9454500E777712847A55907B3E2
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Shotgun.ABP_ShotgunAnimLayers_Feminine {
        class ABP_ShotgunAnimLayers_Feminine_C extends UE.Game.Characters.Heroes.Mannequin.Animations.Locomotion.Rifle.ABP_RifleAnimLayers_Feminine.ABP_RifleAnimLayers_Feminine_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_ShotgunAnimLayers_Feminine_C;
            static Load(InName: string): ABP_ShotgunAnimLayers_Feminine_C;
        
            __tid_ABP_ShotgunAnimLayers_Feminine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 22AA100845D4C9DA39EC6AA509812949
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Shotgun.ABP_ShotgunAnimLayers {
        class ABP_ShotgunAnimLayers_C extends UE.Game.Characters.Heroes.Mannequin.Animations.Locomotion.Rifle.ABP_RifleAnimLayers.ABP_RifleAnimLayers_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_ShotgunAnimLayers_C;
            static Load(InName: string): ABP_ShotgunAnimLayers_C;
        
            __tid_ABP_ShotgunAnimLayers_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CBC9DAC745CB513B80A9DB936143FAD7
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Rifle.ABP_RifleAnimLayers_Feminine {
        class ABP_RifleAnimLayers_Feminine_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_RifleAnimLayers_Feminine_C;
            static Load(InName: string): ABP_RifleAnimLayers_Feminine_C;
        
            __tid_ABP_RifleAnimLayers_Feminine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6CBC786747D4AAFEE3C371900516E8A3
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Rifle.ABP_RifleAnimLayers {
        class ABP_RifleAnimLayers_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_RifleAnimLayers_C;
            static Load(InName: string): ABP_RifleAnimLayers_C;
        
            __tid_ABP_RifleAnimLayers_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8E78EF294250383E971BE5993CD890F2
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Pistol.ABP_PistolAnimLayers_Feminine {
        class ABP_PistolAnimLayers_Feminine_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_PistolAnimLayers_Feminine_C;
            static Load(InName: string): ABP_PistolAnimLayers_Feminine_C;
        
            __tid_ABP_PistolAnimLayers_Feminine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0929FACE4084A8B7AE0AB1BF764E34E1
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Pistol.ABP_PistolAnimLayers {
        class ABP_PistolAnimLayers_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_PistolAnimLayers_C;
            static Load(InName: string): ABP_PistolAnimLayers_C;
        
            __tid_ABP_PistolAnimLayers_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: DDFAACD7479BF84B265EFF88E5A6D0BA
    namespace Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ALI_ItemAnimLayers {
        class ALI_ItemAnimLayers_C extends UE.AnimLayerInterface {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            FullBody_Aiming(PreAimPose: UE.PoseLink, AimYaw: number, AimPitch: number, FullBody_Aiming: $Ref<UE.PoseLink>) : void;
            FullBody_CycleState(FullBody_CycleState: $Ref<UE.PoseLink>) : void;
            FullBody_FallLandState(FullBody_FallLandState: $Ref<UE.PoseLink>) : void;
            FullBody_FallLoopState(FullBody_FallLoopState: $Ref<UE.PoseLink>) : void;
            FullBody_IdleState(FullBody_IdleState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpApexState(FullBody_JumpApexState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpStartLoopState(FullBody_JumpStartLoopState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpStartState(FullBody_JumpStartState: $Ref<UE.PoseLink>) : void;
            FullBody_PivotState(FullBody_PivotState: $Ref<UE.PoseLink>) : void;
            FullBody_SkeletalControls(InPose: UE.PoseLink, FullBody_SkeletalControls: $Ref<UE.PoseLink>) : void;
            FullBody_StartState(FullBody_StartState: $Ref<UE.PoseLink>) : void;
            FullBody_StopState(FullBody_StopState: $Ref<UE.PoseLink>) : void;
            FullBodyAdditives(FullBodyAdditives: $Ref<UE.PoseLink>) : void;
            LeftHandPose_OverrideState(InputPose: UE.PoseLink, LeftHandPose_OverrideState: $Ref<UE.PoseLink>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ALI_ItemAnimLayers_C;
            static Load(InName: string): ALI_ItemAnimLayers_C;
        
            __tid_ALI_ItemAnimLayers_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 07DA35BE42EDC8BE3D59C98B3C8946F3
    namespace Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            constructor(__AnimSequenceBase: UE.AnimSequenceBase, __AnimSequenceBase_0: UE.AnimSequenceBase, __FloatProperty_1: number, __AnimSequenceBase_2: UE.AnimSequenceBase, __AnimSequenceBase_3: UE.AnimSequenceBase, __AnimSequenceBase_4: UE.AnimSequenceBase, __AnimSequenceBase_5: UE.AnimSequenceBase, __FloatProperty_6: number, __FloatProperty_7: number, __FloatProperty_8: number, __FloatProperty_9: number, __AnimSequenceBase_10: UE.AnimSequenceBase, __FloatProperty_11: number, __AnimSequenceBase_12: UE.AnimSequenceBase, __AnimSequenceBase_13: UE.AnimSequenceBase, __AnimSequenceBase_14: UE.AnimSequenceBase, __FloatProperty_15: number, __FloatProperty_16: number, __AnimSequenceBase_17: UE.AnimSequenceBase);
            __AnimSequenceBase: UE.AnimSequenceBase;
            __AnimSequenceBase_0: UE.AnimSequenceBase;
            __FloatProperty_1: number;
            __AnimSequenceBase_2: UE.AnimSequenceBase;
            __AnimSequenceBase_3: UE.AnimSequenceBase;
            __AnimSequenceBase_4: UE.AnimSequenceBase;
            __AnimSequenceBase_5: UE.AnimSequenceBase;
            __FloatProperty_6: number;
            __FloatProperty_7: number;
            __FloatProperty_8: number;
            __FloatProperty_9: number;
            __AnimSequenceBase_10: UE.AnimSequenceBase;
            __FloatProperty_11: number;
            __AnimSequenceBase_12: UE.AnimSequenceBase;
            __AnimSequenceBase_13: UE.AnimSequenceBase;
            __AnimSequenceBase_14: UE.AnimSequenceBase;
            __FloatProperty_15: number;
            __FloatProperty_16: number;
            __AnimSequenceBase_17: UE.AnimSequenceBase;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 07DA35BE42EDC8BE3D59C98B3C8946F3
    namespace Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase {
        class ABP_ItemAnimLayersBase_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            __AnimBlueprintMutables: UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.AnimBlueprintGeneratedMutableData;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_NodeRelevancy: UE.AnimSubsystemInstance_NodeRelevancy;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_TwoBoneIK_1: UE.AnimNode_TwoBoneIK;
            AnimGraphNode_ComponentToLocalSpace_4: UE.AnimNode_ConvertComponentToLocalSpace;
            AnimGraphNode_LegIK: UE.AnimNode_LegIK;
            AnimGraphNode_ModifyBone_1: UE.AnimNode_ModifyBone;
            AnimGraphNode_CopyBone: UE.AnimNode_CopyBone;
            AnimGraphNode_ModifyBone: UE.AnimNode_ModifyBone;
            AnimGraphNode_HandIKRetargeting: UE.AnimNode_HandIKRetargeting;
            AnimGraphNode_Root_14: UE.AnimNode_Root;
            AnimGraphNode_SequencePlayer_8: UE.AnimNode_SequencePlayer;
            AnimGraphNode_LayeredBoneBlend_7: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_10: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_13: UE.AnimNode_Root;
            AnimGraphNode_SequencePlayer_7: UE.AnimNode_SequencePlayer;
            AnimGraphNode_LayeredBoneBlend_6: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_9: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_12: UE.AnimNode_Root;
            AnimGraphNode_SequenceEvaluator_8: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_LayeredBoneBlend_5: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_7: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_11: UE.AnimNode_Root;
            AnimGraphNode_SequencePlayer_6: UE.AnimNode_SequencePlayer;
            AnimGraphNode_LayeredBoneBlend_4: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_6: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_10: UE.AnimNode_Root;
            AnimGraphNode_SequencePlayer_5: UE.AnimNode_SequencePlayer;
            AnimGraphNode_LayeredBoneBlend_3: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_5: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_9: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose_2: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_RotationOffsetBlendSpace_1: UE.AnimNode_RotationOffsetBlendSpace;
            AnimGraphNode_SaveCachedPose: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_TwoWayBlend_1: UE.AnimNode_TwoWayBlend;
            AnimGraphNode_UseCachedPose_1: UE.AnimNode_UseCachedPose;
            AnimGraphNode_UseCachedPose: UE.AnimNode_UseCachedPose;
            AnimGraphNode_RotationOffsetBlendSpace: UE.AnimNode_RotationOffsetBlendSpace;
            AnimGraphNode_Root_8: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_14: UE.AnimNode_TransitionResult;
            AnimGraphNode_ComponentToLocalSpace_3: UE.AnimNode_ConvertComponentToLocalSpace;
            AnimGraphNode_StateResult_10: UE.AnimNode_StateResult;
            AnimGraphNode_ComponentToLocalSpace_2: UE.AnimNode_ConvertComponentToLocalSpace;
            AnimGraphNode_StateResult_9: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_3: UE.AnimNode_StateMachine;
            AnimGraphNode_LayeredBoneBlend_2: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_4: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_7: UE.AnimNode_Root;
            AnimGraphNode_SequenceEvaluator_3: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_LayeredBoneBlend_1: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_2: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_6: UE.AnimNode_Root;
            AnimGraphNode_TwoBoneIK: UE.AnimNode_TwoBoneIK;
            AnimGraphNode_LocalToComponentSpace: UE.AnimNode_ConvertLocalToComponentSpace;
            AnimGraphNode_ComponentToLocalSpace_1: UE.AnimNode_ConvertComponentToLocalSpace;
            AnimGraphNode_LinkedInputPose_1: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_Root_5: UE.AnimNode_Root;
            AnimGraphNode_Root_4: UE.AnimNode_Root;
            AnimGraphNode_SequenceEvaluator_1: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_LayeredBoneBlend: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_ComponentToLocalSpace: UE.AnimNode_ConvertComponentToLocalSpace;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_Root_3: UE.AnimNode_Root;
            AnimGraphNode_Root_2: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_13: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_12: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_11: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_10: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_9: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_8: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_7: UE.AnimNode_TransitionResult;
            AnimGraphNode_SequencePlayer_4: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_8: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_3: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_7: UE.AnimNode_StateResult;
            AnimGraphNode_SequenceEvaluator: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_StateResult_6: UE.AnimNode_StateResult;
            AnimGraphNode_TransitionResult_6: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_5: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_4: UE.AnimNode_TransitionResult;
            AnimGraphNode_SequencePlayer_2: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_5: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_1: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_4: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_2: UE.AnimNode_StateMachine;
            AnimGraphNode_StateResult_3: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_1: UE.AnimNode_StateMachine;
            AnimGraphNode_Root_1: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_3: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_2: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_1: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult: UE.AnimNode_TransitionResult;
            AnimGraphNode_IdentityPose: UE.AnimNode_RefPose;
            AnimGraphNode_TwoWayBlend: UE.AnimNode_TwoWayBlend;
            AnimGraphNode_SequencePlayer: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_2: UE.AnimNode_StateResult;
            AnimGraphNode_StateResult_1: UE.AnimNode_StateResult;
            AnimGraphNode_StateResult: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine: UE.AnimNode_StateMachine;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AimPitch: number;
            AimYaw: number;
            K2Node_PropertyAccess_64: number;
            K2Node_PropertyAccess_63: number;
            K2Node_PropertyAccess_62: number;
            K2Node_PropertyAccess_61: number;
            K2Node_PropertyAccess_60: boolean;
            K2Node_PropertyAccess_59: UE.Vector;
            K2Node_PropertyAccess_56: UE.PawnMovementComponent;
            K2Node_PropertyAccess_51: boolean;
            K2Node_PropertyAccess_50: boolean;
            K2Node_PropertyAccess_49: boolean;
            K2Node_PropertyAccess_36: UE.AnimInstance;
            K2Node_PropertyAccess_27: number;
            K2Node_PropertyAccess_26: UE.Vector;
            K2Node_PropertyAccess_25: UE.Vector;
            Walk_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Crouch_Walk_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Idle_ADS: UE.AnimSequence;
            Idle_Hipfire: UE.AnimSequence;
            Idle_Breaks: TArray<UE.AnimSequence>;
            Jog_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Jog_Pivot_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Jog_Start_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Jog_Stop_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Jump_Start: UE.AnimSequence;
            Jump_Apex: UE.AnimSequence;
            Jump_FallLand: UE.AnimSequence;
            Jump_RecoveryAdditive: UE.AnimSequence;
            Crouch_Idle: UE.AnimSequence;
            WantsIdleBreak: boolean;
            TimeUntilNextIdleBreak: number;
            CurrentIdleBreakIndex: number;
            Aim_HipFirePose: UE.AnimSequence;
            Aim_HipFirePose_Crouch: UE.AnimSequence;
            TurnInPlaceAnimTime: number;
            PlayRateClampStartsPivots: UE.Vector2D;
            PivotStartingAcceleration: UE.Vector;
            IdleAimOffset: UE.AimOffsetBlendSpace;
            ADS_Start_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Crouch_Start_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            ADS_Stop_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Crouch_Stop_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            ADS_Pivot_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Crouch_Pivot_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            RaiseWeaponAfterFiringWhenCrouched: boolean;
            DisableHandIK: boolean;
            EnableLeftHandPoseOverride: boolean;
            RaiseWeaponAfterFiringDuration: number;
            HipFireUpperBodyOverrideWeight: number;
            IdleBreakDelayTime: number;
            Jump_StartLoop: UE.AnimSequence;
            Jump_FallLoop: UE.AnimSequence;
            LandRecoveryAlpha: number;
            TimeFalling: number;
            HandIK_Right_Alpha: number;
            HandIK_Left_Alpha: number;
            StrideWarpingStartAlpha: number;
            StrideWarpingPivotAlpha: number;
            StrideWarpingCycleAlpha: number;
            TimeAtPivotStop: number;
            StrideWarpingBlendInDurationScaled: number;
            StrideWarpingBlendInStartOffset: number;
            Crouch_Idle_Entry: UE.AnimSequence;
            Crouch_Idle_Exit: UE.AnimSequence;
            LeftHandPose_Override: UE.AnimSequence;
            LocomotionDistanceCurveName: string;
            JumpDistanceCurveName: string;
            AimOffsetBlendWeight: number;
            RelaxedAimOffset: UE.AimOffsetBlendSpace;
            PlayRateClampCycle: UE.Vector2D;
            TurnInPlace_Left: UE.AnimSequence;
            LeftHandPoseOverrideWeight: number;
            ["Hand FKWeight"]: number;
            TurnInPlaceRotationDirection: number;
            TurnInPlace_Right: UE.AnimSequence;
            Crouch_TurnInPlace_Left: UE.AnimSequence;
            Crouch_TurnInPlace_Right: UE.AnimSequence;
            TurnInPlaceRecoveryDirection: number;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation Blueprint is updated on a worker thread, just prior to graph update
             */
            BlueprintThreadSafeUpdateAnimation(DeltaTime: number) : void;
            CanPlayIdleBreak() : boolean;
            ChooseIdleBreakDelayTime() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_058DB4E0417ED39E88D33C91173BA695() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_224806A94B545D339CE8A9ADF5CC1D50() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_371F3DE74736AE1449FACEBE80488585() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_3EBC79A34BA5BDBB35C3AEA73A7FF303() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_BBCED9454BC26FA40FD3939B43D7563D() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_C1B2373E4CD96E6AA5AC29B5006E923D() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_CB948B21469605C8A4C5109A2408CE02() : void;
            ExecuteUbergraph_ABP_ItemAnimLayersBase(EntryPoint: number) : void;
            FullBody_Aiming(PreAimPose: UE.PoseLink, AimYaw: number, AimPitch: number, FullBody_Aiming: $Ref<UE.PoseLink>) : void;
            FullBody_CycleState(FullBody_CycleState: $Ref<UE.PoseLink>) : void;
            FullBody_FallLandState(FullBody_FallLandState: $Ref<UE.PoseLink>) : void;
            FullBody_FallLoopState(FullBody_FallLoopState: $Ref<UE.PoseLink>) : void;
            FullBody_IdleState(FullBody_IdleState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpApexState(FullBody_JumpApexState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpStartLoopState(FullBody_JumpStartLoopState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpStartState(FullBody_JumpStartState: $Ref<UE.PoseLink>) : void;
            FullBody_PivotState(FullBody_PivotState: $Ref<UE.PoseLink>) : void;
            FullBody_SkeletalControls(InPose: UE.PoseLink, FullBody_SkeletalControls: $Ref<UE.PoseLink>) : void;
            FullBody_StartState(FullBody_StartState: $Ref<UE.PoseLink>) : void;
            FullBody_StopState(FullBody_StopState: $Ref<UE.PoseLink>) : void;
            FullBodyAdditives(FullBodyAdditives: $Ref<UE.PoseLink>) : void;
            GetDesiredPivotSequence(InDirection: UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection.AnimEnum_CardinalDirection) : UE.AnimSequenceBase;
            GetMainAnimBPThreadSafe() : UE.Object;
            GetMovementComponent() : UE.CharacterMovementComponent;
            GetPredictedStopDistance() : number;
            ["Land Recovery Start"](Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            LeftHandPose_OverrideState(InputPose: UE.PoseLink, LeftHandPose_OverrideState: $Ref<UE.PoseLink>) : void;
            ProcessIdleBreakTransitionLogic(DeltaTime: number) : void;
            ResetIdleBreakTransitionLogic() : void;
            SelectTurnInPlaceAnimation(Direction: number, Result: $Ref<UE.AnimSequence>) : void;
            SetLeftHandPoseOverrideWeight(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpFallLandAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpIdleBreakAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpIdleState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetupIdleTransition(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpPivotAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpStartAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpStopAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetupTurnInPlaceAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpTurnInPlaceRecoveryState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpTurnInPlaceRotationState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            ShouldDistanceMatchStop() : boolean;
            ["Update Blend Weight Data"](DeltaTime: number) : void;
            UpdateCycleAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateFallLandAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateHipFireRaiseWeaponPose(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateIdleAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateIdleState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateJumpFallData(DeltaTime: number) : void;
            UpdatePivotAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateSkelControlData() : void;
            UpdateStartAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateStopAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateTurnInPlaceAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateTurnInPlaceRecoveryAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_ItemAnimLayersBase_C;
            static Load(InName: string): ABP_ItemAnimLayersBase_C;
        
            __tid_ABP_ItemAnimLayersBase_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: EB4E6BA54CF85BFA187EA88FBBC81F74
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimNotifies.TransitionToLocomotion {
        class TransitionToLocomotion_C extends UE.AnimNotifyState {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TransitionToLocomotion_C;
            static Load(InName: string): TransitionToLocomotion_C;
        
            __tid_TransitionToLocomotion_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6DE8C23C4AC7F275DA008D9F66B848D6
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimModifiers.TurnYawAnimModifier {
        class TurnYawAnimModifier_C extends UE.AnimationModifier {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            RootBoneName: string;
            TurnYawCurveName: string;
            WeightCurveName: string;
            ExecuteUbergraph_TurnYawAnimModifier(EntryPoint: number) : void;
            /*
             *Executed when the Animation is initialized (native event for debugging _ testing purposes)
             */
            OnApply(AnimationSequence: $Nullable<UE.AnimSequence>) : void;
            OnRevert(AnimationSequence: $Nullable<UE.AnimSequence>) : void;
            PopulateCurveKeys(AnimSequence: $Nullable<UE.AnimSequence>, FirstZeroTurnYawFrame: $Ref<number>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TurnYawAnimModifier_C;
            static Load(InName: string): TurnYawAnimModifier_C;
        
            __tid_TurnYawAnimModifier_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 59A5DCB64653B96ECCF41594B3D77F6B
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimModifiers.FootFXAnimModifier_FootDefinition {
        class FootFXAnimModifier_FootDefinition {
            constructor();
            constructor(BoneName: string, NotifyTrackName: string, NotifyType: UE.Class);
            BoneName: string;
            NotifyTrackName: string;
            NotifyType: UE.Class;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_FootFXAnimModifier_FootDefinition_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A427F4374D62C5B82F6137922B265D2E
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimModifiers.FootFXAnimModifier {
        class FootFXAnimModifier_C extends UE.AnimationModifier {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            SampleStep: number;
            FeetDefinitions: TArray<UE.Game.Characters.Heroes.Mannequin.Animations.AnimModifiers.FootFXAnimModifier_FootDefinition.FootFXAnimModifier_FootDefinition>;
            FootUnplantedSpeedThreshold: number;
            FootPlantedSpeedThreshold: number;
            NotifiesToRemove: TArray<string>;
            ApplyModifier(AnimSequence: $Nullable<UE.AnimSequence>) : void;
            ExecuteUbergraph_FootFXAnimModifier(EntryPoint: number) : void;
            GetBoneComponentSpaceTransform(AnimSequence: $Nullable<UE.AnimSequenceBase>, BoneName: string, Time: number) : UE.Transform;
            /*
             *Executed when the Animation is initialized (native event for debugging _ testing purposes)
             */
            OnApply(AnimationSequence: $Nullable<UE.AnimSequence>) : void;
            OnRevert(AnimationSequence: $Nullable<UE.AnimSequence>) : void;
            ProcessFoot(AnimSequence: $Nullable<UE.AnimSequence>, FootDefinition: UE.Game.Characters.Heroes.Mannequin.Animations.AnimModifiers.FootFXAnimModifier_FootDefinition.FootFXAnimModifier_FootDefinition) : void;
            RevertModifier(AnimSequence: $Nullable<UE.AnimSequence>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FootFXAnimModifier_C;
            static Load(InName: string): FootFXAnimModifier_C;
        
            __tid_FootFXAnimModifier_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 106240FB4992899B95087F968EB09FB6
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimStruct_TurnInPlaceEntry {
        class AnimStruct_TurnInPlaceEntry {
            constructor();
            constructor(Angle: number, AngleModifier: number, AnimSequence: UE.AnimSequence, CrouchAnimSequence: UE.AnimSequence, DelayBeforeTrigger: number, AngleRange: UE.Vector2D);
            Angle: number;
            AngleModifier: number;
            AnimSequence: UE.AnimSequence;
            CrouchAnimSequence: UE.AnimSequence;
            DelayBeforeTrigger: number;
            AngleRange: UE.Vector2D;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimStruct_TurnInPlaceEntry_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 138B1242469C0E7518A00384421F3169
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections {
        class AnimStruct_CardinalDirections {
            constructor();
            constructor(Forward: UE.AnimSequence, Backward: UE.AnimSequence, Left: UE.AnimSequence, Right: UE.AnimSequence);
            Forward: UE.AnimSequence;
            Backward: UE.AnimSequence;
            Left: UE.AnimSequence;
            Right: UE.AnimSequence;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimStruct_CardinalDirections_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: EDF841E24E229E09B2E8E68A72578786
    namespace Game.Characters.Heroes.Mannequin.Animations.ABP_Mannequin_Retarget {
        class ABP_Mannequin_Retarget_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_RetargetPoseFromMesh: UE.AnimNode_RetargetPoseFromMesh;
            ComponentPlayingAnim: UE.SkeletalMeshComponent;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation is updated
             */
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            ExecuteUbergraph_ABP_Mannequin_Retarget(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Mannequin_Retarget_C;
            static Load(InName: string): ABP_Mannequin_Retarget_C;
        
            __tid_ABP_Mannequin_Retarget_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 99C7C5D34E2AE6A52458029092521965
    namespace Game.Characters.Heroes.Mannequin.Animations.ABP_Mannequin_CopyPose {
        class ABP_Mannequin_CopyPose_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_CopyPoseFromMesh: UE.AnimNode_CopyPoseFromMesh;
            ComponentPlayingAnim: UE.SkeletalMeshComponent;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_Mannequin_CopyPose(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Mannequin_CopyPose_C;
            static Load(InName: string): ABP_Mannequin_CopyPose_C;
        
            __tid_ABP_Mannequin_CopyPose_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 00689F40406AD898E777B5A7DE788E1B
    namespace Game.Characters.Heroes.Abilities.W_JumpTouchButton {
        class W_JumpTouchButton_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): W_JumpTouchButton_C;
            static Load(InName: string): W_JumpTouchButton_C;
        
            __tid_W_JumpTouchButton_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: AB7E9F43479541029CA9A2963C172D51
    namespace Game.Characters.Heroes.Abilities.W_CrouchTouchButton {
        class W_CrouchTouchButton_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): W_CrouchTouchButton_C;
            static Load(InName: string): W_CrouchTouchButton_C;
        
            __tid_W_CrouchTouchButton_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
