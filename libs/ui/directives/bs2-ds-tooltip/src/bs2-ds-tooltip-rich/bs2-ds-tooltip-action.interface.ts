
export type Bs2DSActionVariant = 'primary' | 'secondary';

export interface Bs2DSTooltipAction {
    label: string;
    variant?: Bs2DSActionVariant;
    onClick?: () => void;
}
