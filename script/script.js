//referenciar os elementos do html no js
let input_description = document.querySelector(".description");
let input_amount = document.querySelector(".amount");
let input_date = document.querySelector(".date");
let add_btn = document.querySelector(".add-btn");
let ul = document.querySelector(".transactions");
let trash = `<i class="bi bi-trash3"></i>`;


//criar uma array fictícia, chumbada inicialmente
let dataTransactions = [
    {id: 1, description: "salário", amount: 3000, date:"01-11-2022"},
    {id: 2, description: "mochila", amount: -200, date:"01-04-2023"},
    {id: 3, description: "lanche", amount: 70, date:"19-04-2023"}
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
            ${transaction.description}  <span>  ${operator}R$${amount_operator} ${formatDate(transaction.date)} ${trash}</span>
        `
    ul.prepend(li);//prepend: mais nova em cima. append: mais antigas em cima
}

add_transaction(dataTransactions[2])
add_transaction(dataTransactions[1])
add_transaction(dataTransactions[0])


function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}

//validar os campos

add_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input_description.value == "" || input_amount.value == "" || input_date.value == "") {
        alert("preencha")

        return
    } else {
        alert("cadastro realizado")
        return
    }
})