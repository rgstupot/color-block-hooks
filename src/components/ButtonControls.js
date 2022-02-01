import React from 'react';
import Button from 'react-bootstrap/Button';

const ButtonControls = ({ setStyle }) => {
    return (
        <div className="d-flex justify-content-center">
            <Button variant="primary" className="m-3" onClick={() => setStyle('#0c6cfc')}>Blue</Button>
            <Button variant="danger" className="m-3" onClick={() => setStyle('#dc3444')}>Red</Button>
        </div>
    );
}

export default ButtonControls;