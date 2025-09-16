import React from "react";

export default function Footer() {
  return (
    <footer className="py-5">
      <div className="container">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="/" className="nav-link px-2">Home</a></li>
          <li className="nav-item"><a href="/" className="nav-link px-2">Features</a></li>
          <li className="nav-item"><a href="/" className="nav-link px-2">Pricing</a></li>
          <li className="nav-item"><a href="/" className="nav-link px-2">FAQs</a></li>
          <li className="nav-item"><a href="/" className="nav-link px-2">About</a></li>
        </ul>
        <p className="text-center">© 2025 Company, Inc</p>
      </div>
    </footer>
  )
}