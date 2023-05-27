import React from 'react'
import { Col, Form, InputGroup, Row, Button } from 'react-bootstrap'

const AddTodo = ({ setInput, addTodos }) => {

  return (
    <div>

        <Row sm={6} className='justify-content-md-center'>
            <Col>
                <InputGroup className="mb-3">
                    <Form.Control
                        onChange={e=> setInput(prev => ({ ...prev, title: e.target.value })) }
                        placeholder="Todo"/>
                </InputGroup>
            </Col>
            <Col>
                <InputGroup className="mb-3">
                    <Button onClick={addTodos}>Add Todo</Button>
                </InputGroup>
            </Col>
        </Row>
    </div>
  )
}

export default AddTodo