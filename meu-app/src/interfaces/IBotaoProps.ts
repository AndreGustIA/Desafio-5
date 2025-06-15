export default interface BotaoProps {
    children: React.ReactNode; // Onde vai (texto, ícone, etc.)
    onClick?: () => void; // Função opcional para ser chamada ao clicar
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean; // Para desabilitar o botão ou padrão 
    className?: string; // Para estilizaçao 
}