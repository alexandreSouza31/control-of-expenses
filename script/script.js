//referenciar os elementos do html no js
let total_incomes = document.querySelector(".total-incomes");
let total_expenses = document.querySelector(".total-expenses");
let balance = document.querySelector(".balance");

let input_description = document.querySelector(".description");
let input_amount = document.querySelector(".amount");
let input_date = document.querySelector(".date");
let add_btn = document.querySelector(".add-btn");
const cancel_btn = document.querySelector(".cancel-btn");
let ul = document.querySelector(".transactions");

const new_btn = document.querySelector(".new")
let modal_add = document.querySelector(".modal-add");
let modal_edit = document.querySelector(".modal-edit");
let form_add = document.querySelector(".form-add-transactions");
const edit_description = document.querySelector(".edit-description");
const edit_amount = document.querySelector(".edit-amount");
const edit_date = document.querySelector(".edit-date");
const save_btn = document.querySelector(".save-btn");
const cancel_edit_btn = document.querySelector(".cancel-edit-btn");


//criar uma array fictícia, chumbada inicialmente
let data_transactions = [
    { id: 1, description: "salário", amount: 3000, date: "01-11-2022" },
    { id: 2, description: "mochila", amount: -200, date: "01-04-2023" },

    { id: 3, description: "lanche", amount: -70, date: "10-04-2023" },

]
const deleteTransactions = id => {
    //vai retornar pelo filtro todas as transações que têm id diferente do id clicado.
    data_transactions = data_transactions.filter(transaction => transaction.id !== id)
    init()
}

const editTransaction = (id) => {

    let test = data_transactions.filter(transaction => transaction.id == id)
    modal_edit.style.display = "flex";
    edit_description.value = test[0].description
    edit_amount.value = test[0].amount
    edit_date.value = test[0].date
    console.log(test[0].amount)
    updateBalance()

    save_btn.addEventListener("click", () => {
        test = data_transactions.filter(transaction => transaction.id == id)
        console.log(test[0].description)
        test[0].description = edit_description.value;
        test[0].amount = Number(edit_amount.value);
        test[0].date = edit_date.value;
        modal_edit.style.display = "none";
        init()

    })
}

const cancelEdit= () => {
    modal_add.style.display = "none";
    modal_edit.style.display = "none";
    form_add.style.display = "none"
    test = ""
}


new_btn.addEventListener("click", () => {
    modal_add.style.display = "flex";
    form_add.style.display = "flex"
})


const add_transaction = transaction => {
    let trash = `<i class="bi bi-trash3" onClick='deleteTransactions(${transaction.id})' style:"z-index=1"></i>`;
    const operator = transaction.amount < 0 ? "-" : "+";//se for negativo mostra sinal de menos, se positivo, de mais
    //esse método Math.abs deixa só o número, mesmo que tenha string. 
    const amount_operator = Math.abs(transaction.amount);
    const CSSClass = transaction.amount < 0 ? "minus" : "plus";//se o valor for menor que zero receberá a classe de cor vermelha, senão, verde.
    const li = document.createElement("li");
    li.classList.add(CSSClass);

    li.innerHTML =
        `<li >
            <span class='span-description'onClick='editTransaction(${transaction.id})'>${transaction.description}</span>
            <span class='span-amount' onClick='editTransaction(${transaction.id})'>${operator}R$${amount_operator}</span>
            <span onClick='editTransaction(${transaction.id})'>${formatDate(transaction.date)}</span>
            ${trash}
        </li>
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
    form_add.style.display = "none";
    modal_add.style.display = "none";
    modal_edit.style.display = "none";

}
init()

function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}

const generateId = () => Math.round(Math.random() * 1000);//gera id aleatória

//adicionar
add_btn.addEventListener("click", (e) => {
    e.preventDefault();

    const _input_description = input_description.value;
    const _input_amount = input_amount.value;
    const _input_date = input_date.value;
    if (_input_description == "" || _input_amount == "" || _input_date == "") {
        alert("preencha")
        return

    } else {
        let transaction = {
            id: generateId(),
            description: _input_description,
            amount: Number(_input_amount),
            date: _input_date
        }

        data_transactions.push(transaction)
        init()

        alert("cadastro realizado")
        return
    }
})


