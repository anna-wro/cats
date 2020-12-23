import getColorScheme from './scheme';

type SafetyLabelProps = Readonly<{
  danger: number;
}>;

export default function SafetyLabel({ danger }: SafetyLabelProps) {
  const { text, label } = getColorScheme(danger);

  return <div className={` ${text} font-semibold pt-3`}>{label}</div>;
}
