import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './style.css'

function RoomPasscodeInput() {

    function handleSubmit(e) {
        e.preventDefault()

    }

    return (
        <>
            <Form id="room-passcode-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <FloatingLabel
                        controlId="floatingPasscode"
                        label="room passcode"
                        className="mb-3"
                    >
                        <Form.Control type="text" autoFocus />
                    </FloatingLabel>
                </Form.Group>
                <Button variant="primary" size="sm" type="submit" id="enter-rm-btn">Enter room</Button>
            </Form>
        </>
    )
}

export default RoomPasscodeInput;