import "./styles.scss";

interface Props {
  label: string;
  disabled?: boolean;
}

export default function CheckBox({ label, disabled, ...props }: Props) {
  return (
    <label className="checkbox">
      <input type="checkbox" disabled={disabled} {...props} />
      <span>{label}</span>
    </label>
  );
}
