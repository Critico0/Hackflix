import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logoN from "../assets/icons/N.svg";
import notification from "../assets/icons/Notification.svg";
import avatar from "../assets/icons/Avatar.svg";
import SearchBtn from "./SearchBtn";

function NavbarMain() {
  return (
    <>
      <Navbar className="d-flex justify-content-between navbar">
        <Container className="w-75">
          <Navbar.Brand>
            <Link to={"/"} className="nav-text fs-4">
              <img className="logo" src={logoN}></img>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item className="link-to">Home</Nav.Item>
            <Nav.Item className="link-to">TV Shows</Nav.Item>
            <Nav.Item className="link-to">Movies</Nav.Item>
            <Nav.Item className="link-to">New & Popular</Nav.Item>
            <Nav.Item className="link-to">My List</Nav.Item>
            <Nav.Item className="link-to">Browse by Lenguages</Nav.Item>
          </Nav>
        </Container>
        <Container className="d-flex justify-content-end me-4 w-25">
          <Nav.Item className="mx-3">
            <SearchBtn />
            {/* <img className="icon" src={search}></img> */}
          </Nav.Item>
          <Nav.Item className="mx-2">
            <img className="icon" src={notification}></img>
          </Nav.Item>
          <Nav.Item className="mx-3">
            <img className="logo" src={avatar}></img>
          </Nav.Item>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMain;
