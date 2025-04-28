import { BankAccount } from "./bankAccount.js";
let chosenAccount = undefined;
let chosenAction = undefined;
let amount = undefined;

//New Accounts Defined

const account1 = new BankAccount (11228822, "Harvey", 2000);
const account2 = new BankAccount (11228484, "Niamh", 2500);
const account3 = new BankAccount (11225533, "Greg", 50000);

//Function that sets selected account text

function selectAccount() {
        document.getElementById("selected-account").textContent = 
        "Account Holder: " + chosenAccount.accountHolder + " Account Number: " + chosenAccount.accountNumber; 
};

//Functions that change text

function changeTextWindow(textinput) {
    document.getElementById("textwindow").textContent = textinput;
}

function changeActionText(textinput) {
    document.getElementById("actiontext").textContent = textinput;
}

//Option Button Event Listeners

function accountListener (id, account) {
    document.getElementById(id).addEventListener("click", () => {
        chosenAccount = account;
        selectAccount()
    })
}

accountListener ("button1", account1);
accountListener ("button2", account2);
accountListener ("button3", account3);


// Action button event listeners

document.getElementById("deposit").addEventListener("click", () => {
    actionSelect("deposit");
});

document.getElementById("withdraw").addEventListener("click", () => {
    actionSelect("withdraw");
});


//Function for clicking deposit or withdraw buttons

function actionSelect (type) {
    if (type === "deposit"){
        chosenAction = "deposit";
        changeActionText("Deposit selected.");
    }
    else if (type === "withdraw"){
        chosenAction = "withdraw";
        changeActionText("Withdraw selected.");
    }
    else {
        changeActionText("No action selected.");
    }
}

//Event listener for money buttons

function amountListener(id, buttonAmount) {
    document.getElementById(id).addEventListener("click", () => {
        if (chosenAccount) {
            amount = buttonAmount;
            try {
                if (chosenAction === "deposit") {
                    chosenAccount.deposit(amount);
                    changeTextWindow("£" + amount + " has been deposited into account: " + chosenAccount.accountHolder);
                } else if (chosenAction === "withdraw") {
                    chosenAccount.withdraw(amount);
                    changeTextWindow("£" + amount + " has been withdrawn from account: " + chosenAccount.accountHolder);
                } else {
                    changeTextWindow("No action selected.");
                }
            } catch (error) {
                changeTextWindow("Error: " + error.message);
            }
        } else {
            changeTextWindow("No account selected.");
        }
    });
}

amountListener("5", 5);
amountListener("50", 50);
amountListener("100", 100);

//Check Balance

document.getElementById("check-balance").addEventListener("click", () => {
    actionSelect("check");
    if (chosenAccount) {
        changeTextWindow(chosenAccount.checkBalance());
    } else {
        changeTextWindow("No account selected");
    }
});

