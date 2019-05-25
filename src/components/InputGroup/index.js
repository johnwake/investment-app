import React from 'react';
import Input from '../Input';
import Header from '../Header';

const InputGroup = ({label, input}) => {
    return (
        <div className="InputGroup">
            <h2>Investment amount</h2>
            <Header size={5}>{label} </Header>
            <Input {...input} />
        </div>
    );
};

export default InputGroup;
