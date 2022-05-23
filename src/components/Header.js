import { Navbar, Nav, Container} from "react-bootstrap";
import logo from "../assets/logo.svg";
import notifier from "../assets/notifier_bell.svg";
import flag from "../assets/flag_us.svg";
import arrow from "../assets/arrow_down.svg";

export default function Header(){
    return (
        <>
            <Navbar expand="lg" style={{padding:'1.25rem 1rem', background:'#FFF', boxShadow: '0px 4px 22px 0px #363C4126'}}>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="TrueWill" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" style={{color:'#363C41',fontSize:'1.25rem',fontWeight:'500',marginLeft:'2rem'}}>Dashboard</Nav.Link>
                        </Nav>
                        <Nav className="d-flex">
                            <Nav.Link href="#action1" style={{color:'#3484F0',fontSize:'1rem',fontWeight:'700'}}>Refer & earn</Nav.Link>
                            <Nav.Link href="#">
                                <img src={notifier} alt="Notifier" />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <img src={flag} alt="Flag" />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <p style={{margin:'-6px 0px 0px',background:'#E9EEF1',padding:'6px',borderRadius:'50%',color:'#363C41',fontWeight:'500'}}>MJ</p>
                            </Nav.Link>
                            <Nav.Link href="#">
                                <img src={arrow} alt="Arrow" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
