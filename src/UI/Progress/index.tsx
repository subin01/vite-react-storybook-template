import "./styles.scss";

interface Props {
  value: number;
  max?: number;
  children: React.ReactNode;
}

export default function Progress({
  value,
  max = 100,
  children,
  ...props
}: Props) {
  return (
    <progress className="progress" max={max} value={value} {...props}>
      {children}
    </progress>
  );
}
