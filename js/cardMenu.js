
let badge = document.querySelector(".badge")
var cartproductdiv = document.querySelector(".carts_products div")

let storageItems = localStorage.getItem("productsincart") ? JSON.parse(localStorage.getItem("productsincart")):[] ;
//في حال كان هناك منتج للوكل استورج قم بتحويله لابجكت و ضيف عليه اي جديد اما اذا لا اضيف لداخل المصفوفة الفاضية
if(storageItems){
    storageItems.map((item)=>{
        cartproductdiv.innerHTML += `<p>${item.title} ${item.qty}</p>`
    })
    badge.style.display = "block"
    badge.innerHTML = storageItems.length
}

let shopping_cart = document.querySelector(".shopping_cart")
let carts_products = document.querySelector(".carts_products")


shopping_cart.addEventListener("click",opencart)
// open card menu
function opencart() {
    
    if(cartproductdiv.innerHTML !=""){
        if(carts_products.style.display == "block"){ //اذا كانت مخفيها اعرضها اواذا كانت معروضة اخفيها عند الضغط على الايقونة
            carts_products.style.display ="none"
        }else{
            carts_products.style.display ="block"
        }
    }
}


