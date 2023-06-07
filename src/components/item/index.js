import { Button, Card, Col, Row ,Form} from 'react-bootstrap'
import { PencilSquare, Trash3 } from 'react-bootstrap-icons';

const Item = (props) => {

    return (
        <>
            <Card border="dark" key={props.index + 100} className="mb-3">
                <Card.Body>
                    <Row>
                        <Col md="2">
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                // label="Check this switch"
                                checked={props.item.mark}
                                onChange={() => props.MarkCompleteTask(props.index)}
                            />
                        </Col>
                        <Col md="7">
                            {props.item.text}
                        </Col>
                        <Col md="3" >
                            <Button variant="outline-danger" onClick={() => props.DeleteTask(props.index)}>
                                < Trash3 size="15" />
                            </Button>
                            <Button variant="outline-success">
                                < PencilSquare size="15" />
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </>
    );
}

export default Item;