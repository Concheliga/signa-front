import { SelectProps } from "../interfaces/interfaces";

const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value} label={option.label} />
      ))}
    </select>
  );
};

export default Select;