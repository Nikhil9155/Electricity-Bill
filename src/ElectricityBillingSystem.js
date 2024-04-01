import React, { useState } from 'react';
import './style.css'
const ElectricityBillingSystem = (props) => {
  // State for customer information
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
  });

  // State for meter readings
  const [meterReadings, setMeterReadings] = useState({
    prevReading: 0,
    currentReading: 0,
  });

  // State for bill amount
  const [billAmount, setBillAmount] = useState(0);

  // Function to handle customer info input change
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Function to handle meter readings input change
  const handleMeterReadingsChange = (e) => {
    const { name, value } = e.target;
    setMeterReadings((prevReadings) => ({
      ...prevReadings,
      [name]: parseInt(value),
    }));
  };

  // Function to calculate bill amount
  const calculateBillAmount = () => {
    const { prevReading, currentReading } = meterReadings;
    const unitsConsumed = currentReading - prevReading;
    const ratePerUnit = 8; // Assuming rate per unit is $10
    const bill = unitsConsumed * ratePerUnit;
    setBillAmount(bill);
  };

  return (
    <div className="electricity-billing-system">
      <h1>Electricity Billing System</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={customerInfo.name}
          onChange={handleCustomerInfoChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={customerInfo.address}
          onChange={handleCustomerInfoChange}
        />
      </div>
      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Welcome"}</h2> */}
      <div>
        <label>Previous Reading:</label>
        <input
          type="number"
          name="prevReading"
          value={meterReadings.prevReading}
          onChange={handleMeterReadingsChange}
        />
      </div>
      <div>
        <label>Current Reading:</label>
        <input
          type="number"
          name="currentReading"
          value={meterReadings.currentReading}
          onChange={handleMeterReadingsChange}
        />
      </div>
      <button onClick={calculateBillAmount}>Calculate Bill</button>
      <div>
        <h2>Bill Amount: ₹{billAmount}</h2>
      </div>
    </div>
  );
};

export default ElectricityBillingSystem;
