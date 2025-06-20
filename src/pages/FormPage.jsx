import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Typography, TextField, MenuItem, Button, Box, Select, InputLabel, FormControl, OutlinedInput, Chip, CircularProgress, Alert
} from '@mui/material';

const loanTypeOptions = [
  "Auto Loan", "Business Loan", "Credit-Builder Loan", "Debt Consolidation Loan",
  "Home Equity Loan", "Mortgage Loan", "Not Specified", "Payday Loan",
  "Personal Loan", "Student Loan"
];

const occupationOptions = [
  "Scientist", "Teacher", "Engineer", "Entrepreneur", "Developer", "Lawyer", "Media_Manager",
  "Doctor", "Journalist", "Manager", "Accountant", "Musician", "Mechanic", "Writer", "Architect", "Other"
];

const creditMixOptions = ["Bad", "Standard", "Good"];
const paymentOfMinAmountOptions = ["No", "Yes"];
const spendLevelOptions = ["Low", "High"];
const paymentSizeOptions = ["Small", "Medium", "Large"];

const initialFormData = {
  Age: '',
  Annual_Income: '',
  Monthly_Inhand_Salary: '',
  Occupation: '',
  Num_Bank_Accounts: '',
  Num_Credit_Card: '',
  Monthly_Balance: '',
  Changed_Credit_Limit: '',
  Credit_History_Age: '',
  Outstanding_Debt: '',
  Num_of_Delayed_Payment: '',
  Credit_Mix: '',
  Credit_Utilization_Ratio: '',
  Delay_from_due_date: '',
  Num_of_Loan: '',
  Interest_Rate: '',
  Total_EMI_per_month: '',
  Loan_Type: [],
  Payment_of_Min_Amount: '',
  Spend_Level: '',
  Payment_Size: '',
  Amount_invested_monthly: ''
};

function FormPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoanTypeChange = (event) => {
    const { value } = event.target;
    setFormData(prev => ({
      ...prev,
      Loan_Type: typeof value === 'string' ? value.split(',') : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Prepare data for backend (Loan_Type as comma-separated string)
      const payload = { ...formData, Loan_Type: formData.Loan_Type.join(',') };
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Prediction failed');
      const result = await response.json();
      setLoading(false);
      navigate('/result', { state: { result } });
    } catch (err) {
      setLoading(false);
      setError('Failed to get prediction. Please check your input and try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6, mb: 6, p: 4, bgcolor: 'white', borderRadius: 3, boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight={700}>
        AI Credit Scoring Application
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField label="Age (years)" name="Age" type="number" value={formData.Age} onChange={handleChange} required />
          <TextField label="Annual Income" name="Annual_Income" type="number" value={formData.Annual_Income} onChange={handleChange} required />
          <TextField label="Monthly Inhand Salary" name="Monthly_Inhand_Salary" type="number" value={formData.Monthly_Inhand_Salary} onChange={handleChange} required />
          <FormControl required>
            <InputLabel>Occupation</InputLabel>
            <Select name="Occupation" value={formData.Occupation} onChange={handleChange} label="Occupation">
              {occupationOptions.map(opt => <MenuItem key={opt} value={opt}>{opt.replace('_', ' ')}</MenuItem>)}
            </Select>
          </FormControl>
          <TextField label="Number of Bank Accounts" name="Num_Bank_Accounts" type="number" value={formData.Num_Bank_Accounts} onChange={handleChange} required />
          <TextField label="Number of Credit Cards" name="Num_Credit_Card" type="number" value={formData.Num_Credit_Card} onChange={handleChange} required />
          <TextField label="Monthly Balance" name="Monthly_Balance" type="number" value={formData.Monthly_Balance} onChange={handleChange} required />
          <TextField label="Changed Credit Limit" name="Changed_Credit_Limit" type="number" value={formData.Changed_Credit_Limit} onChange={handleChange} required />
          <TextField label="Credit History Age (months)" name="Credit_History_Age" type="number" value={formData.Credit_History_Age} onChange={handleChange} required />
          <TextField label="Outstanding Debt" name="Outstanding_Debt" type="number" value={formData.Outstanding_Debt} onChange={handleChange} required />
          <TextField label="Number of Delayed Payments" name="Num_of_Delayed_Payment" type="number" value={formData.Num_of_Delayed_Payment} onChange={handleChange} required />
          <FormControl required>
            <InputLabel>Credit Mix</InputLabel>
            <Select name="Credit_Mix" value={formData.Credit_Mix} onChange={handleChange} label="Credit Mix">
              {creditMixOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
            </Select>
          </FormControl>
          <TextField label="Credit Utilization Ratio" name="Credit_Utilization_Ratio" type="number" value={formData.Credit_Utilization_Ratio} onChange={handleChange} required />
          <TextField label="Delay From Due Date" name="Delay_from_due_date" type="number" value={formData.Delay_from_due_date} onChange={handleChange} required />
          <TextField label="Number of Loans" name="Num_of_Loan" type="number" value={formData.Num_of_Loan} onChange={handleChange} required />
          <TextField label="Interest Rate" name="Interest_Rate" type="number" value={formData.Interest_Rate} onChange={handleChange} required />
          <TextField label="Total EMI per Month" name="Total_EMI_per_month" type="number" value={formData.Total_EMI_per_month} onChange={handleChange} required />
          <FormControl required>
            <InputLabel>Loan Types</InputLabel>
            <Select
              multiple
              name="Loan_Type"
              value={formData.Loan_Type}
              onChange={handleLoanTypeChange}
              input={<OutlinedInput label="Loan Types" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {loanTypeOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl required>
            <InputLabel>Payment of Minimum Amount</InputLabel>
            <Select name="Payment_of_Min_Amount" value={formData.Payment_of_Min_Amount} onChange={handleChange} label="Payment of Minimum Amount">
              {paymentOfMinAmountOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl required>
            <InputLabel>Spend Level</InputLabel>
            <Select name="Spend_Level" value={formData.Spend_Level} onChange={handleChange} label="Spend Level">
              {spendLevelOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl required>
            <InputLabel>Payment Size</InputLabel>
            <Select name="Payment_Size" value={formData.Payment_Size} onChange={handleChange} label="Payment Size">
              {paymentSizeOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
            </Select>
          </FormControl>
          <TextField label="Amount Invested Monthly" name="Amount_invested_monthly" type="number" value={formData.Amount_invested_monthly} onChange={handleChange} required />
          {error && <Alert severity="error">{error}</Alert>}
          <Button type="submit" variant="contained" color="primary" size="large" disabled={loading} sx={{ mt: 2 }}>
            {loading ? <CircularProgress size={24} /> : 'Predict Credit Score'}
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default FormPage; 