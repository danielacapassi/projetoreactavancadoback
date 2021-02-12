import { Row } from "react-bootstrap";
import Menu from "../Components/Menu"
import Rodape from "../Components/Rodape"
import Head from 'next/head';


export default function PaginaInicial(props) {
  return (
    <>
    
        <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Head>
    <Menu/>

    <Row>
      <div
        style={{ margin: "0px 250px",padding: "0px 250px 2vh 50px" }}
        className="col-sm-12 mx-auto"
      >
        <h1>
          <b>Seja bem vindx!</b>
        </h1>
        <p className="lead">
          Aqui em nossa loja,{" "}
          <em>
            <strong>programadores tem desconto</strong>
          </em>{" "}
          nos produtos para sua casa!
        </p>
        <div className="col-lg-6 col-sm-12 mx-auto">
          <img src="/eletrodomesticos.png" />
        </div>
      </div>
    </Row>
    <Rodape/>
    </>
  );
}
