import { Outlet } from "react-router-dom";
import { Container } from "./styles";

export const DefaultTemplate = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
