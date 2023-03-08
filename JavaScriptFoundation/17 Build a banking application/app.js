const customer = {
    name: "",
    balance: 0,
    deposit: function(amount) {
      this.balance += amount;
    },
    withdraw: function(amount) {
      if (this.balance < amount) {
        console.log("Insufficient balance.");
        return;
      }
      this.balance -= amount;
    }
  };
  
  const nameInput = document.getElementById("name");
  const initialBalanceInput = document.getElementById("initial-balance");
  const transactionAmountInput = document.getElementById("transaction-amount");
  const depositButton = document.getElementById("deposit-button");
  const withdrawButton = document.getElementById("withdraw-button");
  const balanceDisplay = document.getElementById("balance");
  
  depositButton.addEventListener("click", function() {
    const amount = Number(transactionAmountInput.value);
    if (!isNaN(amount) && amount > 0) {
      customer.deposit(amount);
      balanceDisplay.textContent = `Balance: Rs. ${customer.balance}`;
    }
  });
  
  withdrawButton.addEventListener("click", function() {
    const amount = Number(transactionAmountInput.value);
    if (!isNaN(amount) && amount > 0) {
      customer.withdraw(amount);
      balanceDisplay.textContent = `Balance: Rs. ${customer.balance}`;
    }
  });
  
  nameInput.addEventListener("input", function() {
    customer.name = nameInput.value;
  });
  
  initialBalanceInput.addEventListener("input", function() {
    customer.balance = Number(initialBalanceInput.value);
    balanceDisplay.textContent = `Balance: Rs. ${customer.balance}`;
  });
  