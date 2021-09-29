import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const Navigationbar: FC = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>
							<Link href="/about">About</Link>
						</Nav.Link>
						<Nav.Link>
							{/* ok */}
							<Link href="/">Home</Link>
						</Nav.Link>
					</Nav>
					
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigationbar;
