import { Button } from "./styles";

interface IButton {
  text: string;
  handleClick: Function;
}

export const GenericButton = ({ text, handleClick }: IButton) => {
  return <Button onClick={() => handleClick()}>{text}</Button>;
};
