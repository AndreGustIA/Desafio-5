import type InputProps from "../../interfaces/IInputProps";


const Input = ({
    id,
    name,
    label,
    type,
    placeholder,
    value,
    onChange,
    error,
    className,
}: InputProps) =>{

    return (
        <>
            {/* <div>Possivelmente, uma divContainer com o código abaixo dentro</div> */}
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                /*required*/
                className={className}
            />
            {error && <p>{error}</p> } {/* Local para exibir erro*/}
        </>
    )
}

export default Input;