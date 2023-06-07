import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
const AddToDo = (props) => {
    const [value , setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <>
            <Row>
                <Col md={8}>
                    <Form.Control type="text" onChange={(event) => onChange(event)} />
                </Col>
                <Col md={4}>
                    <Button variant="outline-dark" onClick={() => props.UnaPropiedad(value)}>Add</Button>
                </Col>
            </Row>
        </>
    );
}

export default AddToDo;