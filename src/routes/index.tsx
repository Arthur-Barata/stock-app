import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { DefaultTemplate } from "../templates/default-template";

export const MainRoutesTree = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultTemplate />}>
          <Route path="/login" element={<Login></Login>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
