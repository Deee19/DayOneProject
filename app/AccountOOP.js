class Account {
	constructor(accountNumber, openingAmount) {
		this.accountNumber = accountNumber;
		this.balance = openingAmount;
	}

	deposit(amount) {
		this.balance += amount;
		return this.balance;
	}
}
class SavingsAccount extends Account {
	constructor(accountNumber, openingAmount) {
		super(accountNumber, openingAmount);
	}
	deposit(depAmount) {
		super.deposit(depAmount);
	}
	withdrawal(amount) {
		if (amount > this.balance) {
			return "Overdraft";
		}
		else if ((this.balance - amount) < 1000) {
			return "Invalid withdrawal amount";
		}
		else {
			this.balance -= amount;
			return this.balance;
		}
	}
}

class CurrentAccount extends Account {
	constructor(accountNumber, openingAmount) {
		super(accountNumber, openingAmount);
	}
	deposit(depAmount) {
		super.deposit(depAmount);
	}
	withdrawal(amount) {
		if (amount > this.balance) {
			return "Overdraft";
		}
		else {
			this.balance -= amount;
			return this.balance;
		}
	}
	getloan(amount) {
		if (this.balance > 1000) {
			return "Loan can be granted";
		}
		else {
			return "Loan cannot be granted";
		}
	}
}
// console.log('SavingsAccount')
// var dami = new SavingsAccount(23435233, 2000);
// dami.deposit(1000);
// console.log(dami.balance)
// dami.withdrawal(200)
// console.log(dami.balance)
// dami.withdrawal(2000)

// console.log('CurrentAccount')
// var dam = new CurrentAccount(56778882, 3000);
// dam.deposit(2000);
// console.log(dam.balance)
// console.log(dam.getloan(10000))
// dam.withdrawal(4500)
// console.log(dam.getloan(10000))