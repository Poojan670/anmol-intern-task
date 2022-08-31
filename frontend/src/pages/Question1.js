import React, { useState } from 'react'
import Question1Comp from '../components/Question1Comp';
import Button from 'react-bootstrap/Button';
import NavBar from '../components/NavBar';

const Question1 = () => {

    const [values, setValues] = useState('')

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { Name, email, PhoneNo } = values
        alert("From Submitted")
        console.log("Name", Name)
        console.log("email", email)
        console.log("PhoneNo", PhoneNo)
    }

    return (
        <main>
            <NavBar />
            <form className="q1-form">
                {/* Name */}
                < Question1Comp
                    type="text"
                    name="Name"
                    value={values.Name}
                    handleChange={handleChange} />

                {/* Email */}
                <Question1Comp
                    type="email"
                    name="email"
                    value={values.email}
                    handleChange={handleChange} />

                {/* PhoneNo */}
                <Question1Comp
                    type="text"
                    name="PhoneNo"
                    value={values.PhoneNo}
                    handleChange={handleChange} />

            </form>
            <div className='q1-btn'>
                <Button variant="secondary" onClick={handleSubmit} >Submit</Button>
            </div>
        </main>
    )
}

export default Question1