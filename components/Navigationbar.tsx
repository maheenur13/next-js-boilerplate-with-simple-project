import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const Navigationbar: FC = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Link href="/"><Navbar.Brand>Navbar</Navbar.Brand></Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto d-flex align-items-center">
						<Nav.Link>
							<Link href="/">Home</Link>
						</Nav.Link>
						<Nav.Link>
							<Link href="/about">About</Link>
						</Nav.Link>

					</Nav>

				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigationbar;
