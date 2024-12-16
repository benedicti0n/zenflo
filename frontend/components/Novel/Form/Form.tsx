'use client';

import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            alert('Failed to submit the form.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
            <div className="mb-4">
                <label className="block">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block">Message:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border"
                    required
                />
            </div>
            <button type="submit" className="p-2 bg-blue-500 text-white">
                Submit
            </button>
        </form>
    );
};

export default Form;
