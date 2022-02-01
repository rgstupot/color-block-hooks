import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = () => {
    return (
        <div>
            <Container fluid className="bg-primary">
                <Row>
                    <Col className="text-white text-center">
                        <h1>Color Box with React Hooks</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Title;