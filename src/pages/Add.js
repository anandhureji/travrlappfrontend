import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Add = () => {
  const [branchName, setBranchName] = useState('');
  const [place, setPlace] = useState('');
  const [website, setWebsite] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();


    // Form validation
    if (!branchName || !place || !website || !contact || !email) {
      alert('Please fill in all the fields.');
      return;
    }
    if (!website.includes('www')) {
      alert('Website should contain "www".');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Invalid email format.');
      return;
    }
    if (!/^\d{10}$/.test(contact)) {
      alert('Contact number should be a 10-digit number.');
      return;
    }

    // Submit form data
    const formData = {
      branchName,
      place,
      website,
      contact,
      email,
    };

    // Clear form fields
    setBranchName('');
    setPlace('');
    setWebsite('');
    setContact('');
    setEmail('');
  };

  return (
    <div className="add-container">

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div>
        <h2>Add Company</h2>
        <Link to="/search" style={{ position: 'absolute', top: 80, right: 50 }}>

          Home

 </Link>
        <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
          <label>
            Branch Name:
            <input type="text" className="form-control" style={{ fontSize: '14px' }} value={branchName} onChange={(e) => setBranchName(e.target.value)} required />
          </label>
          <br />
          <label>
            Place:
            <input type="text" className="form-control" style={{ fontSize: '14px' }} value={place} onChange={(e) => setPlace(e.target.value)} required />
          </label>
          <br />
          <label>
            Website:
            <input type="text" className="form-control" style={{ fontSize: '14px' }} value={website} onChange={(e) => setWebsite(e.target.value)} required />
          </label>
          <br />
          <label>
            Contact:
            <input type="text" className="form-control" style={{ fontSize: '14px' }} value={contact} onChange={(e) => setContact(e.target.value)} required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" className="form-control" style={{ fontSize: '14px' }} value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <br />
          <button type="submit" className="btn btn-primary">Add Company</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Add;
