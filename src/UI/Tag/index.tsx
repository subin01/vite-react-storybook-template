import "./styles.scss";

interface Props {
  disabled?: boolean;
  selected?: boolean;
  children: React.ReactNode;
}

export default function Tag({
  selected = false,
  disabled,
  children,
  ...props
}: Props) {
  return (
    <button
      className="tag"
      role="switch"
      aria-checked={selected}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
