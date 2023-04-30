//referenciar os elementos do html no js
let total_incomes = document.querySelector(".total-incomes");
let total_expenses = document.querySelector(".total-expenses");
let balance = document.querySelector(".balance");

let input_description = document.querySelector(".description");
let input_amount = document.querySelector(".amount");
let input_date = document.querySelector(".date");
let add_btn = document.querySelector(".add-btn");
let ul = document.querySelector(".transactions");
let trash = `<i class="bi bi-trash3"></i>`;


//criar uma array fictícia, chumbada inicialmente
let data_transactions = [
    { id: 1, description: "salário", amount: 3000, date: "01-11-2022" },
    { id: 2, description: "mochila", amount: -200, date: "01-04-2023" },

    { id: 3, description: "lanche", amount: 70, date: "10-04-2023" },

]

const add_transaction = transaction => {
    const operator = transaction.amount < 0 ? "-" : "+";//se for negativo mostra sinal de menos, se positivo, de mais
    //console.log(operator)
    //esse método Math.abs deixa só o número, mesmo que tenha string. 
    const amount_operator = Math.abs(transaction.amount);
    const CSSClass = transaction.amount < 0 ? "minus" : "plus";//se o valor for menor que zero receberá a classe de cor vermelha, senão, verde.
    const li = document.createElement("li");
    li.classList.add(CSSClass);

    li.innerHTML =
        `
        <span class='span-description'>${transaction.description}</span>
        <span>${operator}R$${amount_operator}</span>
        <span>${formatDate(transaction.date)}</span>
        <span>${trash}</span>
        `
    ul.prepend(li);//prepend: mais nova em cima. append: mais antigas em cima
}


const updateBalance = () => {//atualiza as informações gerais de despesas e receitas
    const transactions_amounts = data_transactions
        .map(transaction => transaction.amount);
    const total_amount = transactions_amounts//soma entradas e saídas
        .reduce((accumulator, transaction) => accumulator + transaction, 0)
        .toFixed(2);
    balance.innerHTML = total_amount;
    const CSSClass = total_amount <= 0 ? "minus" : "plus";
    balance.classList.add(CSSClass);
    
    const income_amount = transactions_amounts
        .filter(value => value > 0)//soma só as entradas(maior que zero)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2);
    total_incomes.innerHTML = income_amount;

    const income_expense = Math.abs(transactions_amounts
        .filter(value => value <= 0)//soma só as saídas(menor ou igual a zero)
        .reduce((accumulator, value) => accumulator + value, 0))
        .toFixed(2);
    total_expenses.innerHTML = income_expense;
}


const init = () => {
    ul.innerHTML = "";//preciso zerar a ul pra não duplicar sempre que a init for chamada
    data_transactions.forEach(add_transaction)
    updateBalance()
}
init()

function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}

//validar os campos
const generateId = () => Math.round(Math.random() * 1000);//gera id aleatória

add_btn.addEventListener("click", (e) => {
    e.preventDefault();

    const _input_description = input_description.value;
    const _input_amount = input_amount.value;
    const _input_date = input_date.value;
    if (_input_description == "" || _input_amount == "" || _input_date == "") {
        alert("preencha")
        return

    } else {
        const transaction = {
            id: generateId(),
            description: _input_description,
            amount: Number(_input_amount),
            date: _input_date
        }
        console.log(transaction)
        data_transactions.push(transaction)
        init()

        alert("cadastro realizado")
        return
    }
    
})
