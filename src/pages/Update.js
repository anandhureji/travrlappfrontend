import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Update = ({ companyData, onUpdateTariff }) => {
  const [companyName, setCompanyName] = useState('');
  const [tariffValue, setTariffValue] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();

    // Reset error
    setError('');

    // Find the company in the companyData
    const company = companyData.find(
      (company) => company.branchName.toLowerCase() === companyName.toLowerCase()
    );

    // Check if the company exists
    if (!company) {
      setError('Company not found');
      return;
    }

    // Validate and convert tariff values
    const updatedTariffValue = parseInt(tariffValue);

    if (isNaN(updatedTariffValue) || updatedTariffValue < 50000 || updatedTariffValue > 100000) {
      setError('Invalid tariff value');
      return;
    }

    // Update the tariff value of the sample
    company.tariff = updatedTariffValue.toString();

    // Call the onUpdateTariff function to update the tariff value
    onUpdateTariff(tariffValue);

    // Clear the form inputs
    setCompanyName('');
    setTariffValue('');
  
  };



  return (
    <div>
          <div className="update-container">

      <h2>Update Tariff Values</h2>
      <Link to="/search" style={{ position: 'absolute', top: 80, right: 50 }}>

          Home

 </Link>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter company branch name"
        />
        <div>
          <label>Tariff</label>
          <input
            type="number"
            value={tariffValue}
            onChange={(e) => setTariffValue(e.target.value)}
            min="50000"
            max="100000"
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
    </div>
  );

};

export default Update;
