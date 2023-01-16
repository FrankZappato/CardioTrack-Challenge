import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import TiresModalForm from './Form/TIresModalForm'

function Tires() {
    const [show, setShow] = useState(false);
    console.log('tires');
    return (
        <Container>
            <div>Tires</div>
            <TiresModalForm show={show} setShow={setShow} />
            <Button variant='primary' onClick={() => setShow(true)} > Add a New Tire</Button>

        </Container>
    )
}

export default Tires