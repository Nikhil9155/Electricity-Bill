import React, { useState } from 'react';
import './style.css';
import * as XLSX from 'xlsx';

const ElectricityBillingSystem = (props) => {
  const [customerInfoList, setCustomerInfoList] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
  });

  const [meterReadings, setMeterReadings] = useState({
    prevReading: 0,
    currentReading: 0,
  });

  const [billAmount, setBillAmount] = useState(0);

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleMeterReadingsChange = (e) => {
    const { name, value } = e.target;
    setMeterReadings((prevReadings) => ({
      ...prevReadings,
      [name]: parseInt(value),
    }));
  };

  const calculateBillAmount = () => {
    const { prevReading, currentReading } = meterReadings;
    const unitsConsumed = currentReading - prevReading;
    const ratePerUnit = 8; // Assuming rate per unit is $10
    const bill = unitsConsumed * ratePerUnit;
    setBillAmount(bill);
  };

  const addCustomerInfo = () => {
    const newCustomerInfo = {
      name: customerInfo.name,
      address: customerInfo.address,
      prevReading: meterReadings.prevReading,
      currentReading: meterReadings.currentReading,
      billAmount: billAmount,
    };
    setCustomerInfoList([...customerInfoList, newCustomerInfo]);
    setCustomerInfo({ name: '', address: '' });
    setMeterReadings({ prevReading: 0, currentReading: 0 });
    setBillAmount(0);
  };

  const downloadExcel = () => {
    const data = [
      ['Name', 'Address', 'Previous Reading', 'Current Reading', 'Bill Amount'],
      ...customerInfoList.map((info) => [
        info.name,
        info.address,
        info.prevReading,
        info.currentReading,
        info.billAmount,
      ]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Billing Data');
    XLSX.writeFile(wb, 'billing_data.xlsx');
  };

  return (
    <div className="electricity-billing-system">
      <h1>Enter Your Details</h1>
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
      <button onClick={addCustomerInfo}>Add Entry</button>
      <div>
        <h2>Bill Amount: ₹{billAmount}</h2>
      </div>
      <button onClick={downloadExcel}>Download Excel</button>
    </div>
  );
};

export default ElectricityBillingSystem;
