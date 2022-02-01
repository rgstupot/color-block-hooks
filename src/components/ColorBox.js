import React from 'react';
import './ColorBox.css';

const ColorBox = ({ color }) => {
    const colorStyle = {
        backgroundColor: color
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="color-box rounded m-3" style={colorStyle}></div>
        </div >
    );
}

export default ColorBox;