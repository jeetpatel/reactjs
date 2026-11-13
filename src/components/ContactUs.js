import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-()\s]{7,15}$/;

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!EMAIL_REGEX.test(values.email.trim())) errors.email = 'Enter a valid email address';
  if (!values.phone.trim()) errors.phone = 'Phone is required';
  else if (!PHONE_REGEX.test(values.phone.trim())) errors.phone = 'Enter a valid phone number';
  if (!values.description.trim()) errors.description = 'Description is required';
  return errors;
};

export default function ContactUs() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: '', email: '', phone: '', description: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    navigate('/contact-success', { state: { ...values } });
  };

  const field = (id, label, props = {}) => (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label} <span className="text-danger">*</span></label>
      {props.as === 'textarea' ? (
        <textarea id={id} name={id} rows="4" value={values[id]} onChange={handleChange}
          className={`form-control ${errors[id] ? 'is-invalid' : ''}`} />
      ) : (
        <input id={id} name={id} type={props.type || 'text'} value={values[id]} onChange={handleChange}
          className={`form-control ${errors[id] ? 'is-invalid' : ''}`} />
      )}
      {errors[id] && <div className="invalid-feedback">{errors[id]}</div>}
    </div>
  );

  return (
    <div className="container my-3">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate>
        {field('name', 'Name')}
        {field('email', 'Email', { type: 'email' })}
        {field('phone', 'Phone', { type: 'tel' })}
        {field('description', 'Description', { as: 'textarea' })}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
