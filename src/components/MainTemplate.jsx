import PropTypes from "prop-types";
import {Container, Navbar, Stack} from "react-bootstrap";

export default function MainTemplate({ myName = "Guest" }) {
    return (
        <div className="d-flex flex-column vh-100">
            {/* Navbar */}
            <Navbar className="bg-black">
                <Container>
                    <Navbar.Brand className="text-white">MyApp</Navbar.Brand>
                </Container>
            </Navbar>

            {/* Main Content */}
            <Container className="d-flex flex-grow-1 justify-content-center align-items-center">
                {/*<Stack className="justify-content-center align-items-center">*/}
                    <h1 className="m-5">Hello, {myName || "Guest"}!</h1>
                {/*</Stack>*/}
            </Container>

            {/* Footer */}
            <Container
                fluid
                className="bg-black d-flex justify-content-center align-items-center py-3"
            >
                <h3 className="text-white">2025</h3>
            </Container>
        </div>
    );
}

// Prop validation
MainTemplate.propTypes = {
    myName: PropTypes.string,
    variant: PropTypes.string, // Allows customizing the color theme of the Alert
};
