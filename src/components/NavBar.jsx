import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const NavBar = ({ expanded, setExpanded }) => {
  function closeIfLink(e) {
    if (e.target.classList.contains("nav-link")) {
      setExpanded(false);
    }
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        position="sticky"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            IlBets
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav" onClick={closeIfLink}>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                ליגת החלומות
              </Nav.Link>
              <Nav.Link as={Link} to="/BetForm">
                תוכניה
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/Register">
                הרשמה
              </Nav.Link>
              <Nav.Link as={Link} to="/Login">
                התחברות
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
