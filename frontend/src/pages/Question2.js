import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import Card from 'react-bootstrap/Card';

const Question2 = () => {
    const [value, setValue] = useState(0);
    return (
        <main>
            <NavBar />
            <div className='question2'>
                <Card style={{ width: '18rem' }}>
                    <div className='card-2'>
                        <Card.Body>
                            <h1 className='title-2'>{value}</h1>
                            <button className='btn-2' onClick={() => setValue(value + 5)}>
                                Add 5
                            </button>
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </main>
    )
}

export default Question2