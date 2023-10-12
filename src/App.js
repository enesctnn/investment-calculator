import { useState } from 'react';
import Header from './Components/Header/Header';
import InvestForm from './Components/Invesment/InvesmentForm';
import InvesmentResult from './Components/Invesment/InvesmentResult';

function App() {
  const [invesmentData, setInvesmentData] = useState(null);

  const calculateHandler = (invesmentData) => {
    setInvesmentData(invesmentData);
  };

  let yearlyData = [];

  if (invesmentData) {
    let currentSavings = +invesmentData.currentSavings;
    const yearlyContribution = +invesmentData['yearlyContribution'];
    const expectedReturn = +(invesmentData['expectedReturn'] / 100);
    const duration = +invesmentData['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: +yearlyInterest,
        savingsEndOfYear: +currentSavings,
        yearlyContribution: +yearlyContribution,
      });
    }
  }

  const resetButtonHandler = () => {
    yearlyData = [];
    setInvesmentData(null);
  };

  return (
    <div>
      <Header />
      <InvestForm onSubmit={calculateHandler} onReset={resetButtonHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {invesmentData && (
        <InvesmentResult
          yearlyData={yearlyData}
          initialInvesment={invesmentData.currentSavings}
        />
      )}
      {!invesmentData && (
        <div className="greeting">
          <p>Welcome To The Invesment Calculator</p>
        </div>
      )}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
