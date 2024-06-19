const getEmi = () => {
  let amount = document.getElementById("amount").value;
  let interest = document.getElementById("rate").value;
  let month = document.getElementById("month").value;

  // calculate interest

  let interestRate = (amount * (interest * 0.01)) / month;
  const total = (amount / month + interestRate).toFixed(2);

  // calculate Emi
  document.getElementById("emi").innerHTML = ` Your Emi per Month is  ${total} /- Rs `;
};
