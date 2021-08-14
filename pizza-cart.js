const smallAddBtn = document.querySelector(".addBtn.small");
const medAddBtn = document.querySelector(".addBtn.med");
const largeAddBtn = document.querySelector(".addBtn.large");

const smallAddBtnBuy = document.querySelector(".addBtn.small.buy");
const medAddBtnBuy = document.querySelector(".addBtn.med.buy");
const largeAddBtnBuy = document.querySelector(".addBtn.large.buy");

const smallMinusBtn = document.querySelector(".minusBtn.small");
const medMinusBtn = document.querySelector(".minusBtn.med");
const largeMinusBtn = document.querySelector(".minusBtn.large");

const smallPizzaQty = document.querySelector(".smallPizzaQty");
const medPizzaQty = document.querySelector(".medPizzaQty");
const largePizzaQty = document.querySelector(".largePizzaQty");

const smallPizzaTotal = document.querySelector(".smallPizzaTotal");
const medPizzaTotal = document.querySelector(".medPizzaTotal");
const largePizzaTotal = document.querySelector(".largePizzaTotal");
const cartTotal = document.querySelector(".cartTotal");

const checkOut = document.querySelector(".checkOut");

const payOut = document.querySelector(".payOut");
const message = document.querySelector(".message");
const payAmt = document.querySelector(".payAmt");
const payBtn = document.querySelector(".payBtn");

var smallQty = 0;
var medQty = 0;
var largeQty = 0;
var totalCart = 0;

function BtnClick() {
    if (event.target.className == "addBtn small" || event.target.className == "addBtn small buy") {
        smallQty++;
        smallPizzaQty.innerHTML = smallQty;
    } else if (event.target.className == "addBtn med" || event.target.className == "addBtn med buy") {
        medQty++;
        medPizzaQty.innerHTML = medQty;
    } else if (event.target.className == "addBtn large" || event.target.className == "addBtn large buy") {
        largeQty++;
        largePizzaQty.innerHTML = largeQty;
    }

    if (event.target.className === "minusBtn small") {
        smallQty--;
        if (smallQty < 0) {
            smallQty = 0;
        }
        smallPizzaQty.innerHTML = smallQty;
    } else if (event.target.className === "minusBtn med") {
        medQty--;
        if (medQty < 0) {
            medQty = 0;
        }
        medPizzaQty.innerHTML = medQty;
    } else if (event.target.className === "minusBtn large") {
        largeQty--;
        if (largeQty < 0) {
            largeQty = 0;
        }
        largePizzaQty.innerHTML = largeQty;
    }

    smallPizzaTotal.innerHTML = (smallQty * 49).toFixed(2);
    medPizzaTotal.innerHTML = (medQty * 89).toFixed(2);
    largePizzaTotal.innerHTML = (largeQty * 129).toFixed(2);
    totalCart = smallQty * 49.00 + medQty * 89.00 + largeQty * 129.00;
    cartTotal.innerHTML = totalCart.toFixed(2);
}

function checkOutClick(){
    checkOut.classList.add('hidden');
    payOut.classList.remove('hidden');
}

function payment(){
    message.classList.toggle('hidden');
    var paymentAmt = Number(payAmt.value);
 if (paymentAmt == totalCart){
    message.innerHTML = "Enjoy your Pizza!";
 } else if (paymentAmt > totalCart) {
    var change = paymentAmt - totalCart;
    message.innerHTML = "Enjoy your Pizza, here is your change R" + change.toFixed(2);
 } else {
    message.innerHTML = "Sorry, that is not enough money!";
 }
}

smallAddBtn.addEventListener('click', BtnClick);
smallMinusBtn.addEventListener('click', BtnClick);
smallAddBtnBuy.addEventListener('click', BtnClick);

medAddBtn.addEventListener('click', BtnClick);
medMinusBtn.addEventListener('click', BtnClick);
medAddBtnBuy.addEventListener('click',BtnClick);

largeAddBtn.addEventListener('click', BtnClick);
largeMinusBtn.addEventListener('click', BtnClick);
largeAddBtnBuy.addEventListener('click',BtnClick);

checkOut.addEventListener('click', checkOutClick)

payBtn.addEventListener('click',payment)