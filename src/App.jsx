import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  


  return (
    <>
      <div className='title-container'>
        <h1>AI Credit Score Predictor</h1>
      </div>
      <div className='form-output-grid'>
        <div className='form-container'>
          <h2>Financial Information</h2>
          <form>
            <section className = 'form-section'>
              <h3>Personal Information</h3>

              <div className = 'form-grid'>

                <div className = 'form-group'>
                  <label htmlFor='Age'>Age</label>
                  <input type='number' placeholder="Enter your age" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Annual_Income'>Annual Income ($)</label>
                  <input type='number' placeholder="Enter annual income" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Monthly_Inhand_Salary'>Monthly Inhand Salary ($)</label>
                  <input type='number' placeholder="Enter monthly in-hand salary" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Occupation'>Occupation</label>
                  <select id='Occupation'>
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
                  <input type='number' placeholder="Enter number of bank accounts" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Num_Credit_Card'>Number of Credit Cards</label>
                  <input type='number' placeholder="Enter number of credit cards" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Monthly_Balance'>Monthly Balance ($)</label>
                  <input type='number' placeholder="Enter monthly balance" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Changed_Credit_Limit'>Changed Credit Limit</label>
                  <input type='number' placeholder="Enter changed credit limit" />
                </div>

              </div>
            </section>

            <section className = 'form-section'>
              <h3>Credit History</h3>

              <div className = 'form-grid'>

                <div className = 'form-group'>
                  <label htmlFor='Credit_History_Age'>Credit History Length</label>
                  <input type='number' placeholder="Enter credit history length" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Outstanding_Debt'>Outstanding Debt ($)</label>
                  <input type='number' placeholder="Enter outstanding debt" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Number_of_Delayed_Payment'>Number of Delayed Payments</label>
                  <input type='number' placeholder="Enter number of delayed payments" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Credit_Mix'>Credit Mix</label>
                  <select id='Credit_Mix'>
                    <option value="">Select credit mix</option>
                    <option value="Bad">Bad</option>
                    <option value="Standard">Standard</option>
                    <option value="Good">Good</option>
                  </select>
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Credit_Utilization_Ratio'>Credit Utilization Ratio (%)</label>
                  <input type='number' placeholder="Enter credit utilization ratio" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Delay_From_Due_Date'>Delay from Due Date (days)</label>
                  <input type='number' placeholder="Enter average delay from due date" />
                </div>

              </div>
            </section>

            <section className = 'form-section'>
              <h3>Loans</h3>

              <div className = 'form-grid'>

                <div className = 'form-group'>
                  <label htmlFor='Number_of_Loans'>Number of Loans</label>
                  <input type='number' placeholder="Enter number of loans" />
                </div>
                
                <div className = 'form-group'>
                  <label htmlFor='Interest_Rate'>Interest Rate (%)</label>
                  <input type='number' placeholder="Enter interest rate" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Total_EMI_Per_Month'>Total EMI per Month ($)</label>
                  <input type='number' placeholder="Enter total EMI per month" />
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Loan_Type'>Type of Loan</label>
                  <select id="Loan_Type">
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
                  <label htmlFor='Payment_of_Minimum_Amount'>Payment of Minimum Amount</label>
                  <select id='Payment_of_Minimum_Amount'>
                    <option value="">Select payment behavior</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Spend_Level'>Spend Level</label>
                  <select id='Spend_Level'>
                    <option value="">Select spend level</option>
                    <option value="Low">Low</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div className = 'form-group'>
                  <label htmlFor='Payment_Size'>Payment Size</label>
                  <select id='Payment_Size'>
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
                    <label htmlFor='Amount_Invested_Monthly'>Amount Invested Monthly ($)</label>
                    <input type='number' placeholder="Enter monthly investment amount" />
                  </div>

              </div>
            </section>

          </form>
        </div>

        <div className = 'output-container'>
          <h2>Predicted Credit Score</h2>

          <div className = 'output-group'>
            <h3>Your Credit Score</h3>
          </div>
        </div>
      </div>
    </>

    
  )
}

export default App
