import style from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr className={style.headLine}>
          <th className={style.column}>Type</th>
          <th className={style.column}>Amount</th>
          <th className={style.column}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={style.tableColumn} key={item.id}>
            <td className={style.typeTransaction}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
