import { } from 'react-bootstrap';
import React from 'react'
import styles from "./rodape.module.css"

function Rodape (props) {
  let pagamento = '/formaspagamento.jpeg'

    return (
 
 <div style={ {padding:"0px", display:"flex", flexDirection:"column"}} className={styles.rodape}>
    <div>
    <h5 >Formas de pagamento:</h5> 
    </div>
    <div>
      <img width="200" src={pagamento} alt="Formas de pagamento" />
    </div>
    <div>
    <p>&copy; Desenvolvedor: Daniela Capassi - Recode Pro</p>
    </div>

  </div>
    );
}


export default Rodape;