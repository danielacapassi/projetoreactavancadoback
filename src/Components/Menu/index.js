import { NavBar, nav, Navbar, Nav } from "react-bootstrap";
import styles from "./Menu.module.css"


function BaseMenu(props) {
  let  logo = "/full_stack_logo_.png";

  const { location } = props;
  return (
    <>
    <Navbar className="navbar-dark" bg="danger" expand="lg">
      <Navbar.Brand>
        <img width="150px" src={logo} alt="Formas de pagamento" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="item-menu" />
      <Navbar.Collapse id="item-menu">
        <Nav className="ml-auto mr-3">
          <Nav.Item>
            <Nav.Link  href="/" to="/">
              Página Inicial
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="/produtos" to="/produtos">
              Produtos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="/contatos" to="/contatos">
              Contatos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="/pedidos" to="/pedidos">
              Pedidos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="/lojas" to="/lojas">
              Lojas
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default BaseMenu;
