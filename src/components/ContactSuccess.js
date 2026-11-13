import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';

export default function ContactSuccess() {
  const { state } = useLocation();
  // Direct visit (or refresh) without submitted data: go back to the form.
  if (!state) return <Navigate to="/contact" replace />;

  return (
    <div className="container my-3">
      <div className="alert alert-success" role="alert">
        Thank you! Your message has been submitted successfully.
      </div>
      <h2>Submitted details</h2>
      <table className="table table-bordered w-auto">
        <tbody>
          <tr><th scope="row">Name</th><td>{state.name}</td></tr>
          <tr><th scope="row">Email</th><td>{state.email}</td></tr>
          <tr><th scope="row">Phone</th><td>{state.phone}</td></tr>
          <tr><th scope="row">Description</th><td style={{ whiteSpace: 'pre-wrap' }}>{state.description}</td></tr>
        </tbody>
      </table>
      <Link to="/contact" className="btn btn-secondary">Back to Contact Us</Link>
    </div>
  );
}
