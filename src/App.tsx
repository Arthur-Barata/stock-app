import { useEffect } from "react";
import "./App.css";
import { IUsersList } from "./interfaces/user-list.interface";
import { MainRoutesTree } from "./routes";

function App() {
  const initFakeDb = () => {
    const users: IUsersList[] = [
      {
        id: "3919bf85-ac24-43a7-b0c3-42b98f5cefeb",
        name: "arthur barata",
        user: "arthur-barata",
        role: "admin",
        password: "123456",
      },
      {
        id: "7b3e2cd9-1e4f-4a92-836c-2d5d3a8cb1ab",
        name: "Maria Silva",
        user: "maria-silva",
        role: "seller",
        password: "senha123",
      },
      {
        id: "a62d3e08-3c7d-4bfe-9f81-586eff5f70cd",
        name: "João Oliveira",
        user: "joao-oliveira",
        role: "manager",
        password: "abcdef",
      },
      {
        id: "4e2c1f7a-98fc-4a36-b472-9c1482b8e46d",
        name: "Fernanda Santos",
        user: "fernanda-santos",
        role: "supervisor",
        password: "senha456",
      },
    ];

    const usersSerialized = JSON.stringify(users);

    sessionStorage.setItem("users", usersSerialized);
  };

  useEffect(() => {
    initFakeDb();
  }, []);
  return (
    <div className="App">
      <MainRoutesTree></MainRoutesTree>
    </div>
  );
}

export default App;
