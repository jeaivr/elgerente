import { useLocation } from "react-router-dom";
import gerenteImg from "../img/gerente2.jpg"

export function Gerente() {
  const location = useLocation();
  let string = location.pathname.substring(1).replace("/", " y ");
  return (
    <>
      <center>
        <h1>El gerente es {string}</h1>
        <img src={gerenteImg} style = {{height:"95vh"}} alt="El Gerente"/>
      </center>
    </>
  );
}