const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ children, ...props }) => {
    return (
        <input {...props}>
            {children}
        </input>
    );
};

export default Input;