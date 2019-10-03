import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Editor from './Editor';
import Output from './Output'

class ContainerComponent extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col xs="auto"></Col>
                    <Col xs="5"><Editor/></Col>
                    <Col xs="1">
                    <Button color="secondary">Compile</Button>
                    <Button color="primary">Run</Button>
                    </Col>
                    <Col xs="5"><Output/></Col>
                    <Col xs="auto"></Col>
                </Row>
            </Container>
        );
    }
}

export default ContainerComponent;