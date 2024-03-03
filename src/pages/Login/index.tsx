import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/main-logo/mainLogo.png";
import { GenericButton } from "../../components/buttons/generic-button";
import { IUsersList } from "../../interfaces/user-list.interface";
import { Container, FormContainer, Input, LogoImage, Title } from "./styles";

export const Login = () => {
  const [user, setUser] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = (user: string, password: string) => {
    const usersListSerialized = sessionStorage.getItem("users");
    const usersList: IUsersList[] = JSON.parse(usersListSerialized!);

    usersList.forEach((userData) => {
      const isValidLogin =
        userData.user === user && userData.password === password;
      if (isValidLogin) {
        navigate("/"); //TODO: put the next page address in this method

        console.log("login success");
      }
    });
  };

  return (
    <Container>
      <Title>StockWise</Title>
      <LogoImage src={mainLogo}></LogoImage>
      <FormContainer>
        <Input
          placeholder="Usuário"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setUser(event.target.value);
          }}
        ></Input>
        <Input
          placeholder="Senha"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
        ></Input>

        <GenericButton
          text="Acessar"
          handleClick={() => Login(user, password)}
        ></GenericButton>
      </FormContainer>
    </Container>
  );
};
