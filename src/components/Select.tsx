import Option from "../ui/Option";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select {...props}>
      {options.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} />
      ))}
    </select>
  );
};

export default Select;