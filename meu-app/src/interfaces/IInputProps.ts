export default interface InputProps {
    id: string;
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    className?: string;
}