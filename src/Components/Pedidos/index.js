import React from 'react'
import { ListGroup } from "react-bootstrap";


export default function Pedidos(props) {
    return (
        <div>
                      <div>
            <ListGroup vertical className="col-lg-6 col-sm-10 mx-auto">
              <ListGroup.Item variant="danger">{`Código do Pedido: ${props.idpedido}`}</ListGroup.Item>
              <ListGroup.Item variant="danger">{`Data do Pedido: ${props.data}`}</ListGroup.Item>
              <ListGroup.Item variant="danger">{`Descrição do Produto: ${props.descricao}`}</ListGroup.Item>
              <ListGroup.Item variant="danger">{`Preço: ${props.precofinal}`}</ListGroup.Item>
            </ListGroup>
            <br></br>
          </div>
            
        </div>
    )
}
