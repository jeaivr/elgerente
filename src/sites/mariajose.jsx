import mariajoseImg from "../img/mariajose.jpg"

export function MariaJose() {
  return (
    <>
      <center>
        <h1>El gerente es María José</h1>
        <img src={mariajoseImg} style = {{height:"50vh"}} alt="Maria Jose"/>
      </center>
    </>
  );
}