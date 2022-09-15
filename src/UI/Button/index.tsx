import "./styles.scss";

interface Props {
  label: string;
  secondary?: boolean;
  size?: "" | "small" | "large";
  disabled?: boolean;
  icon?: string;
}

export default function Button({
  label,
  secondary,
  size,
  disabled,
  icon,
  ...props
}: Props) {
  const variantClass = secondary ? "button--secondary" : "";
  const sizeClass = size !== "" ? `button--${size}` : "";
  const iconClass = icon !== "" ? `icon-${icon}` : "";
  return (
    <button
      type="button"
      className={["button", variantClass, sizeClass, iconClass].join(" ")}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
}
