// import FigureCaption from 'react-bootstrap/esm/FigureCaption'

import "./produto.css";

export default function Produto(props) {
  function show_info(event) {
    const target = event.currentTarget;
    const elemento = target.getElementsByTagName("figcaption")[0];
    elemento.style.visibility = "initial";
  }
  function hide_info(event) {
    const target = event.currentTarget;
    const elemento = target.getElementsByTagName("figcaption")[0];
    elemento.style.visibility = "hidden";
  }
  return (
    <figure
      className={
        props.categoria + "produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto"
      }
      onMouseOver={show_info}
      onMouseOut={hide_info}
    >
      <img
        src={require(`./${props.box_imagens}`).default}
        alt="Imagem de Produtos"
      />
      <figcaption style={{ visibility: "hidden" }}>
        <p className="descricao">{props.descricao}</p>
        <p className="descricao2">R$ {props.descricao2}</p>
        <p className="preco">R$ {props.precofinal}</p>
      </figcaption>
    </figure>
  );
}
