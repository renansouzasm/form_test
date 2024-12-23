interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (id: string, value: string) => void;
  pattern?: string;
  minLength?: number;
  title?: string;
}

export function Input({
  type,
  id,
  placeholder,
  value,
  onChange,
  pattern,
  minLength,
  title,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(id, e.target.value);
  };

  return (
    <input
      className="input"
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      pattern={pattern}
      minLength={minLength}
      title={title}
      required
    />
  );
}
