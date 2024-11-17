import { useLocation } from "react-router-dom";

export function Gerente() {
  const location = useLocation();
  let string = location.pathname.substring(1).replace("/", " y ");
  return (
    <>
      <center><h1>El gerente es {string}</h1></center>
    </>
  );
}