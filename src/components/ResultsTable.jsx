import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultsTable({ userInputs }) {
  const results = calculateInvestmentResults(userInputs);
  const calcTotalInterest = function (i) {
    return results.slice(0, i + 1).reduce((acc, cur) => acc + cur.interest, 0);
  };

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results?.map((item, i) => (
            <tr key={i}>
              <td className="center">{item?.year}</td>
              <td className="center">
                {formatter.format(item?.valueEndOfYear)}
              </td>
              <td className="center">{formatter.format(item?.interest)}</td>
              <td className="center">
                {formatter.format(calcTotalInterest(i))}
              </td>
              <td className="center">
                {formatter.format(item?.annualInvestment)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {(userInputs.duration !== "") & (userInputs.duration < 1) ? (
        <p className="center">Please enter a valid duration (&gt;0)</p>
      ) : (
        ""
      )}
    </>
  );
}
