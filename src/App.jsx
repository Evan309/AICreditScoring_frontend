import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
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
    Type_of_Loan: '',
    Payment_of_Min_Amount: '',
    Spend_Level: '',
    Payment_Size: '',
    Amount_invested_monthly: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const predict = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to get prediction');
      }

      const data = await response.json();
      setPrediction(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='title-container'>
        <h1>AI Credit Score Predictor</h1>
      </div>
      <div className='form-output-grid'>
        <div className='form-container'>
          <h2>Financial Information</h2>
          <form onSubmit={predict}>
            <section className = 'form-section'>
              <h3>Personal Information</h3>

              <div className = 'form-grid'>

                <div className = 'form-group'>
                  <label htmlFor='Age'>Age</label>
                  <input 
                    type='number' 
                    name="Age"
                    value={formData.Age}
                    onChange={handleInputChange}
                    placeholder="Enter your age" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Annual_Income'>Annual Income ($)</label>
                  <input 
                    type='number' 
                    name="Annual_Income"
                    value={formData.Annual_Income}
                    onChange={handleInputChange}
                    placeholder="Enter annual income" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Monthly_Inhand_Salary'>Monthly Inhand Salary ($)</label>
                  <input 
                    type='number' 
                    name="Monthly_Inhand_Salary"
                    value={formData.Monthly_Inhand_Salary}
                    onChange={handleInputChange}
                    placeholder="Enter monthly in-hand salary" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Occupation'>Occupation</label>
                  <select 
                    id='Occupation'
                    name="Occupation"
                    value={formData.Occupation}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Occupation</option>
                    <option value="Scientist">Scientist</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Developer">Developer</option>
                    <option value="Lawyer">Lawyer</option>
                    <option value="Media_Manager">Media Manager</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Journalist">Journalist</option>
                    <option value="Manager">Manager</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Musician">Musician</option>
                    <option value="Mechanic">Mechanic</option>
                    <option value="Writer">Writer</option>
                    <option value="Architect">Architect</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
              </div>
            </section>

            <section className = 'form-section'>
              <h3>Banking & Credit Cards</h3>

              <div className = 'form-grid'>

                <div className = 'form-group'>
                  <label htmlFor='Num_Bank_Accounts'>Number of Bank Accounts</label>
                  <input 
                    type='number' 
                    name="Num_Bank_Accounts"
                    value={formData.Num_Bank_Accounts}
                    onChange={handleInputChange}
                    placeholder="Enter number of bank accounts" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Num_Credit_Card'>Number of Credit Cards</label>
                  <input 
                    type='number' 
                    name="Num_Credit_Card"
                    value={formData.Num_Credit_Card}
                    onChange={handleInputChange}
                    placeholder="Enter number of credit cards" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Monthly_Balance'>Monthly Balance ($)</label>
                  <input 
                    type='number' 
                    name="Monthly_Balance"
                    value={formData.Monthly_Balance}
                    onChange={handleInputChange}
                    placeholder="Enter monthly balance" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Changed_Credit_Limit'>Changed Credit Limit</label>
                  <input 
                    type='number' 
                    name="Changed_Credit_Limit"
                    value={formData.Changed_Credit_Limit}
                    onChange={handleInputChange}
                    placeholder="Enter changed credit limit" 
                  />
                </div>

              </div>
            </section>

            <section className = 'form-section'>
              <h3>Credit History</h3>

              <div className = 'form-grid'>

                <div className = 'form-group'>
                  <label htmlFor='Credit_History_Age'>Credit History Length</label>
                  <input 
                    type='number' 
                    name="Credit_History_Age"
                    value={formData.Credit_History_Age}
                    onChange={handleInputChange}
                    placeholder="Enter credit history length" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Outstanding_Debt'>Outstanding Debt ($)</label>
                  <input 
                    type='number' 
                    name="Outstanding_Debt"
                    value={formData.Outstanding_Debt}
                    onChange={handleInputChange}
                    placeholder="Enter outstanding debt" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Num_of_Delayed_Payment'>Number of Delayed Payments</label>
                  <input 
                    type='number' 
                    name="Num_of_Delayed_Payment"
                    value={formData.Num_of_Delayed_Payment}
                    onChange={handleInputChange}
                    placeholder="Enter number of delayed payments" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Credit_Mix'>Credit Mix</label>
                  <select 
                    id='Credit_Mix'
                    name="Credit_Mix"
                    value={formData.Credit_Mix}
                    onChange={handleInputChange}
                  >
                    <option value="">Select credit mix</option>
                    <option value="Bad">Bad</option>
                    <option value="Standard">Standard</option>
                    <option value="Good">Good</option>
                  </select>
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Credit_Utilization_Ratio'>Credit Utilization Ratio (%)</label>
                  <input 
                    type='number' 
                    name="Credit_Utilization_Ratio"
                    value={formData.Credit_Utilization_Ratio}
                    onChange={handleInputChange}
                    placeholder="Enter credit utilization ratio" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Delay_from_due_date'>Delay from Due Date (days)</label>
                  <input 
                    type='number' 
                    name="Delay_from_due_date"
                    value={formData.Delay_from_due_date}
                    onChange={handleInputChange}
                    placeholder="Enter average delay from due date" 
                  />
                </div>

              </div>
            </section>

            <section className = 'form-section'>
              <h3>Loans</h3>

              <div className = 'form-grid'>

                <div className = 'form-group'>
                  <label htmlFor='Num_of_Loan'>Number of Loans</label>
                  <input 
                    type='number' 
                    name="Num_of_Loan"
                    value={formData.Num_of_Loan}
                    onChange={handleInputChange}
                    placeholder="Enter number of loans" 
                  />
                </div>
                
                <div className = 'form-group'>
                  <label htmlFor='Interest_Rate'>Interest Rate (%)</label>
                  <input 
                    type='number' 
                    name="Interest_Rate"
                    value={formData.Interest_Rate}
                    onChange={handleInputChange}
                    placeholder="Enter interest rate" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Total_EMI_per_month'>Total EMI per Month ($)</label>
                  <input 
                    type='number' 
                    name="Total_EMI_per_month"
                    value={formData.Total_EMI_per_month}
                    onChange={handleInputChange}
                    placeholder="Enter total EMI per month" 
                  />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Type_of_Loan'>Type of Loan</label>
                  <select 
                    id="Type_of_Loan"
                    name="Type_of_Loan"
                    value={formData.Type_of_Loan}
                    onChange={handleInputChange}
                  >
                    <option value="">Select loan types</option>
                  </select>
                  {/* create drop down check box for input values. display only if 
                  num of loans is greater than 0 */}
                </div>

              </div>
            </section>

            <section className = 'form-section'>
              <h3>Payment Behavior</h3>

              <div className = 'form-group'>
                  <label htmlFor='Payment_of_Min_Amount'>Payment of Minimum Amount</label>
                  <select 
                    id='Payment_of_Min_Amount'
                    name="Payment_of_Min_Amount"
                    value={formData.Payment_of_Min_Amount}
                    onChange={handleInputChange}
                  >
                    <option value="">Select payment behavior</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Spend_Level'>Spend Level</label>
                  <select 
                    id='Spend_Level'
                    name="Spend_Level"
                    value={formData.Spend_Level}
                    onChange={handleInputChange}
                  >
                    <option value="">Select spend level</option>
                    <option value="Low">Low</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Payment_Size'>Payment Size</label>
                  <select 
                    id='Payment_Size'
                    name="Payment_Size"
                    value={formData.Payment_Size}
                    onChange={handleInputChange}
                  >
                    <option value="">Select payment size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                </div>
            </section>

            <section className = 'form-section'>
              <h3>Investment</h3>

              <div className = 'form-grid'>

                  <div className = 'form-group'>
                    <label htmlFor='Amount_invested_monthly'>Amount Invested Monthly ($)</label>
                    <input 
                      type='number' 
                      name="Amount_invested_monthly"
                      value={formData.Amount_invested_monthly}
                      onChange={handleInputChange}
                      placeholder="Enter monthly investment amount" 
                    />
                  </div>

              </div>
            </section>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Predicting...' : 'Predict Credit Score'}
            </button>
          </form>
        </div>

        <div className = 'output-container'>
          <h2>Predicted Credit Score</h2>

          <div className = 'output-group'>
            <h3>Your Credit Score</h3>
            {loading && <p>Calculating your credit score...</p>}
            {error && <p className="error">Error: {error}</p>}
            {prediction && (
              <div className="prediction-result">
                <p className="score">{prediction.score}</p>
                <p className="confidence">Confidence: {prediction.confidence}%</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>

    
  )
}

export default App
