import { ButtonStyled } from "./style";

interface ButtonProps {
  texto: string;
}

function Button({ texto }: ButtonProps) {
  return (
    <ButtonStyled>{texto}</ButtonStyled>
  );
}

export default Button;