import styles from './InvesmentResult.module.css';

const InvesmentResult = ({ yearlyData, initialInvesment }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((data) => (
          <tr key={Math.random()}>
            <td>{data.year}</td>
            <td>{formatter.format(data.savingsEndOfYear)}</td>
            <td>{formatter.format(data.yearlyInterest)}</td>
            <td>
              {formatter.format(
                (data.savingsEndOfYear -
                  -initialInvesment -
                  data.yearlyContribution) *
                  data.year
              )}
            </td>
            <td>
              {formatter.format(
                (initialInvesment + data.yearlyContribution) * data.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvesmentResult;
