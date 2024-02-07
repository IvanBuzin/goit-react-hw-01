const data = {
  id: "1",
  cardNumber: "1234 5678 9012 3456",
  cardType: "Visa",
  cardOwner: "John Doe",
  date: "2024-01-01",
  amount: 100,
  description: "Payment for groceries",
};

const Payment = () => {
  return (
    <div>
      <p>Amount: </p>
      <p>Status: Paid or Pending</p>
      <p>Description:</p>
      <p>Card Nunber:</p>
      <p>Card Type:</p>
      <p>Card Holder Name:</p>
      <p>Payment Date:</p>
    </div>
  );
};

export const App = () => {
  return (
    <>
      <Payment />
      <Payment />
      <Payment />
    </>
  );
};
