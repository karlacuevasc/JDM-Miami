import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
	return (
		<>
			<Navbar variant="light" bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="/">JDM</Navbar.Brand>

					<Nav className="justify-content-center" activeKey="/home">
						<>
							<Nav.Item className="loginTab pr-3">
								<Nav.Link href="/login">About</Nav.Link>
							</Nav.Item>
						</>
						<></>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};
