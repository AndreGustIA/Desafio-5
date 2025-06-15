import type BotaoProps from "../../interfaces/IBotaoProps";

const Botao = ({
    children,
    onClick,
    type,
    disabled,
    className,
}: BotaoProps) => {

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`button ${className}`}
        >
           {children} 
        </button>
    )
}

export default Botao;
