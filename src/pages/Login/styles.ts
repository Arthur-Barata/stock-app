import styled from "styled-components";

export const Container = styled.div({
  maxWidth: "23.4375rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
});

export const LogoImage = styled.img({
  maxWidth: "9.0625rem",
  maxHeight: "10.4375rem",
});

export const Title = styled.h1({
  color: "#BBAB8C",
  fontFamily: "Inter, sans-serif",
});

export const Input = styled.input({
  minHeight: "2.1875rem",
  minWidth: "18.75rem",
  borderRadius: "1.5rem",
  borderWidth: "0.0625rem",
  backgroundColor: "#FAEED1",
  boxSizing: "border-box",
  textAlign: "center",
  color: "#BBAB8C",
  fontWeight: "600",
  fontSize: "1.125rem",
  fontFamily: "Inter, sans-serif",

  "&::placeholder": {
    color: "#BBAB8C",
  },
  "&:focus": {
    outline: "none",
    borderWidth: "0.125rem",
    borderColor: "white",
  },
});

export const FormContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});
