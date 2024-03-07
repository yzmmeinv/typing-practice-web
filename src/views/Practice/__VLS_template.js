import ECharts from '@/components/ECharts.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, scoreInfo, chartData1 } from './AfterPracticeView.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'ant-row'?: boolean; } &
{ 'ant-card'?: boolean; } &
{ 'ant-col'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'ACard', typeof __VLS_localComponents, "ACard", "aCard", "a-card"> &
__VLS_WithComponent<'ARow', typeof __VLS_localComponents, "ARow", "aRow", "a-row"> &
__VLS_WithComponent<'ACol', typeof __VLS_localComponents, "ACol", "aCol", "a-col"> &
__VLS_WithComponent<'ADivider', typeof __VLS_localComponents, "ADivider", "aDivider", "a-divider"> &
__VLS_WithComponent<'ECharts', typeof __VLS_localComponents, "ECharts", "ECharts", "ECharts">;
__VLS_components.ACard; __VLS_components.ACard; __VLS_components.aCard; __VLS_components.aCard; __VLS_components["a-card"]; __VLS_components["a-card"];
// @ts-ignore
[ACard, ACard,];
__VLS_components.ARow; __VLS_components.ARow; __VLS_components.ARow; __VLS_components.ARow; __VLS_components.ARow; __VLS_components.ARow; __VLS_components.ARow; __VLS_components.ARow; __VLS_components.ARow; __VLS_components.ARow; __VLS_components.aRow; __VLS_components.aRow; __VLS_components.aRow; __VLS_components.aRow; __VLS_components.aRow; __VLS_components.aRow; __VLS_components.aRow; __VLS_components.aRow; __VLS_components.aRow; __VLS_components.aRow; __VLS_components["a-row"]; __VLS_components["a-row"]; __VLS_components["a-row"]; __VLS_components["a-row"]; __VLS_components["a-row"]; __VLS_components["a-row"]; __VLS_components["a-row"]; __VLS_components["a-row"]; __VLS_components["a-row"]; __VLS_components["a-row"];
// @ts-ignore
[ARow, ARow, ARow, ARow, ARow, ARow, ARow, ARow, ARow, ARow,];
__VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"];
// @ts-ignore
[ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol, ACol,];
__VLS_components.ADivider; __VLS_components.aDivider; __VLS_components["a-divider"];
// @ts-ignore
[ADivider,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_components.ECharts;
// @ts-ignore
[ECharts,];
{
const __VLS_0 = ({} as 'ACard' extends keyof typeof __VLS_ctx ? { 'ACard': typeof __VLS_ctx.ACard; } : 'aCard' extends keyof typeof __VLS_ctx ? { 'ACard': typeof __VLS_ctx.aCard; } : 'a-card' extends keyof typeof __VLS_ctx ? { 'ACard': (typeof __VLS_ctx)["a-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACard;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, title: ("成绩详情"), headStyle: (({ textAlign: 'center' })), }));
({} as { ACard: typeof __VLS_0; }).ACard;
({} as { ACard: typeof __VLS_0; }).ACard;
const __VLS_2 = __VLS_1({ ...{}, title: ("成绩详情"), headStyle: (({ textAlign: 'center' })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, title: ("成绩详情"), headStyle: (({ textAlign: 'center' })), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'ARow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.ARow; } : 'aRow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.aRow; } : 'a-row' extends keyof typeof __VLS_ctx ? { 'ARow': (typeof __VLS_ctx)["a-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ARow;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { ARow: typeof __VLS_5; }).ARow;
({} as { ARow: typeof __VLS_5; }).ARow;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, span: ((12)), }));
({} as { ACol: typeof __VLS_10; }).ACol;
({} as { ACol: typeof __VLS_10; }).ACol;
const __VLS_12 = __VLS_11({ ...{}, span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, span: ((12)), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(__VLS_ctx.scoreInfo.nickName);
(__VLS_13.slots!).default;
}
{
const __VLS_15 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, span: ((12)), }));
({} as { ACol: typeof __VLS_15; }).ACol;
({} as { ACol: typeof __VLS_15; }).ACol;
const __VLS_17 = __VLS_16({ ...{}, span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, span: ((12)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
(__VLS_ctx.scoreInfo.mode);
(__VLS_18.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_20 = ({} as 'ARow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.ARow; } : 'aRow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.aRow; } : 'a-row' extends keyof typeof __VLS_ctx ? { 'ARow': (typeof __VLS_ctx)["a-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ARow;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { ARow: typeof __VLS_20; }).ARow;
({} as { ARow: typeof __VLS_20; }).ARow;
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, span: ((12)), }));
({} as { ACol: typeof __VLS_25; }).ACol;
({} as { ACol: typeof __VLS_25; }).ACol;
const __VLS_27 = __VLS_26({ ...{}, span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, span: ((12)), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
(__VLS_ctx.scoreInfo.title);
(__VLS_28.slots!).default;
}
{
const __VLS_30 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, span: ((12)), }));
({} as { ACol: typeof __VLS_30; }).ACol;
({} as { ACol: typeof __VLS_30; }).ACol;
const __VLS_32 = __VLS_31({ ...{}, span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, span: ((12)), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
(__VLS_ctx.scoreInfo.startTime);
(__VLS_33.slots!).default;
}
(__VLS_23.slots!).default;
}
{
const __VLS_35 = ({} as 'ADivider' extends keyof typeof __VLS_ctx ? { 'ADivider': typeof __VLS_ctx.ADivider; } : 'aDivider' extends keyof typeof __VLS_ctx ? { 'ADivider': typeof __VLS_ctx.aDivider; } : 'a-divider' extends keyof typeof __VLS_ctx ? { 'ADivider': (typeof __VLS_ctx)["a-divider"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ADivider;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, style: ({}), dashed: (true), }));
({} as { ADivider: typeof __VLS_35; }).ADivider;
const __VLS_37 = __VLS_36({ ...{}, style: ({}), dashed: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, style: ({}), dashed: (true), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
{
const __VLS_40 = ({} as 'ARow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.ARow; } : 'aRow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.aRow; } : 'a-row' extends keyof typeof __VLS_ctx ? { 'ARow': (typeof __VLS_ctx)["a-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ARow;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, }));
({} as { ARow: typeof __VLS_40; }).ARow;
({} as { ARow: typeof __VLS_40; }).ARow;
const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
{
const __VLS_45 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, span: ((8)), }));
({} as { ACol: typeof __VLS_45; }).ACol;
({} as { ACol: typeof __VLS_45; }).ACol;
const __VLS_47 = __VLS_46({ ...{}, span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, span: ((8)), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
(__VLS_ctx.scoreInfo.totalWc);
(__VLS_48.slots!).default;
}
{
const __VLS_50 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, span: ((8)), }));
({} as { ACol: typeof __VLS_50; }).ACol;
({} as { ACol: typeof __VLS_50; }).ACol;
const __VLS_52 = __VLS_51({ ...{}, span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, span: ((8)), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
(__VLS_ctx.scoreInfo.accuracy);
(__VLS_53.slots!).default;
}
{
const __VLS_55 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, span: ((8)), }));
({} as { ACol: typeof __VLS_55; }).ACol;
({} as { ACol: typeof __VLS_55; }).ACol;
const __VLS_57 = __VLS_56({ ...{}, span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, span: ((8)), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
(__VLS_ctx.scoreInfo.actualDuration);
(__VLS_58.slots!).default;
}
(__VLS_43.slots!).default;
}
{
const __VLS_60 = ({} as 'ARow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.ARow; } : 'aRow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.aRow; } : 'a-row' extends keyof typeof __VLS_ctx ? { 'ARow': (typeof __VLS_ctx)["a-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ARow;
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, }));
({} as { ARow: typeof __VLS_60; }).ARow;
({} as { ARow: typeof __VLS_60; }).ARow;
const __VLS_62 = __VLS_61({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
{
const __VLS_65 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{}, span: ((8)), }));
({} as { ACol: typeof __VLS_65; }).ACol;
({} as { ACol: typeof __VLS_65; }).ACol;
const __VLS_67 = __VLS_66({ ...{}, span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, span: ((8)), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
(__VLS_ctx.scoreInfo.rate);
(__VLS_68.slots!).default;
}
{
const __VLS_70 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, span: ((8)), }));
({} as { ACol: typeof __VLS_70; }).ACol;
({} as { ACol: typeof __VLS_70; }).ACol;
const __VLS_72 = __VLS_71({ ...{}, span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, span: ((8)), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
(__VLS_ctx.scoreInfo.speed);
(__VLS_73.slots!).default;
}
(__VLS_63.slots!).default;
}
{
const __VLS_75 = ({} as 'ARow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.ARow; } : 'aRow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.aRow; } : 'a-row' extends keyof typeof __VLS_ctx ? { 'ARow': (typeof __VLS_ctx)["a-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ARow;
const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{}, }));
({} as { ARow: typeof __VLS_75; }).ARow;
({} as { ARow: typeof __VLS_75; }).ARow;
const __VLS_77 = __VLS_76({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
{
const __VLS_80 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{}, span: ((24)), }));
({} as { ACol: typeof __VLS_80; }).ACol;
({} as { ACol: typeof __VLS_80; }).ACol;
const __VLS_82 = __VLS_81({ ...{}, span: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, span: ((24)), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
if (__VLS_ctx.scoreInfo.incorrectWords) {
{
const __VLS_85 = __VLS_intrinsicElements["div"];
const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
for (const [word] of __VLS_getVForSourceType((__VLS_ctx.scoreInfo.incorrectWords)!)) {
{
const __VLS_90 = __VLS_intrinsicElements["span"];
const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
const __VLS_92 = __VLS_91({ ...{}, key: ((word)), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{}, key: ((word)), });
const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!;
let __VLS_94!: __VLS_NormalizeEmits<typeof __VLS_93.emit>;
(word);
(__VLS_93.slots!).default;
}
// @ts-ignore
[scoreInfo, scoreInfo, scoreInfo, scoreInfo, scoreInfo, scoreInfo, scoreInfo, scoreInfo, scoreInfo, scoreInfo, scoreInfo,];
}
(__VLS_88.slots!).default;
}
}
else {
{
const __VLS_95 = __VLS_intrinsicElements["div"];
const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
const __VLS_97 = __VLS_96({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_96));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!;
let __VLS_99!: __VLS_NormalizeEmits<typeof __VLS_98.emit>;
(__VLS_98.slots!).default;
}
}
(__VLS_83.slots!).default;
}
(__VLS_78.slots!).default;
}
{
const __VLS_100 = ({} as 'ECharts' extends keyof typeof __VLS_ctx ? { 'ECharts': typeof __VLS_ctx.ECharts; } : typeof __VLS_resolvedLocalAndGlobalComponents).ECharts;
const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{}, data: ((__VLS_ctx.chartData1)), }));
({} as { ECharts: typeof __VLS_100; }).ECharts;
const __VLS_102 = __VLS_101({ ...{}, data: ((__VLS_ctx.chartData1)), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_100, typeof __VLS_102> & Record<string, unknown>) => void)({ ...{}, data: ((__VLS_ctx.chartData1)), });
const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102)!;
let __VLS_104!: __VLS_NormalizeEmits<typeof __VLS_103.emit>;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[chartData1, chartData1, chartData1,];
return __VLS_slots;
}
