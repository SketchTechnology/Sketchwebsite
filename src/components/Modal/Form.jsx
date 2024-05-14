import { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

function FormControl() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true); // Show validation feedback
        } else {
            setValidated(true); // Show validation feedback
            // Perform further form submission logic if needed
            console.log('Form Data:', formData);
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={(event) => handleForm(event)}>
            <Form.Group className='mb-2'>
                <Form.Label className='text-dark'>First Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className='text-dark'
                    placeholder="Michal Jonson"
                    style={{backgroundColor:'rgb(234, 225, 225)'}}
                />
                <Form.Control.Feedback type="invalid">Please provide a valid first name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label className='text-dark'>Email address</Form.Label>
                <Form.Control
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className='text-dark '
                    style={{backgroundColor:'rgb(234, 225, 225)'}}
                />
                <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label className='text-dark'>Phone</Form.Label>
                <Form.Control
                    required
                    type="number"
                    className='text-dark'
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="30"
                    style={{backgroundColor:'rgb(234, 225, 225)'}}
                />
                <Form.Control.Feedback type="invalid">Please provide a valid phone number.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-2' controlId="exampleForm.ControlTextarea1">
                <Form.Label className='text-dark'>Send message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message...."
                    className='text-dark'
                    style={{backgroundColor:'rgb(234, 225, 225)'}}
                />
            </Form.Group>
            <div className="d-flex my-2 w-100 justify-content-center">
                <Button type='submit' className='w-50'>Send</Button>
            </div>
        </Form>
    );
}

export default FormControl;
