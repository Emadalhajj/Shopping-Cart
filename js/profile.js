
let Username = localStorage.getItem('username')
let email = localStorage.getItem('emil')
let products = JSON.parse(localStorage.getItem('products')) || productsDB
let myprducts = products.filter((ite) => ite.isMe === 'Y')

//varibles
let User = document.getElementById('username')
let userEmail = document.getElementById('email')
let productsLength = document.getElementById('productsLength')

User.innerHTML = Username
userEmail.innerHTML = email
if(myprducts.length != 0){
    productsLength.innerHTML = `countnt is : ${myprducts.length}`
}else{
    productsLength.remove()
}