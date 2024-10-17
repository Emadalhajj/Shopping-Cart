

// let productsincart = localStorage.getItem("productsincart")
let allProducts = document.querySelector(".products")
let nodata = document.querySelector(".nodata")
// let products = JSON.parse(localStorage.getItem('products'))


// if(productsincart){
//     let item = JSON.parse(productsincart) //for convert string to object 
//     drawcartpro(item)
// }

function drawcartpro(allproduct = []){

    if(JSON.parse(localStorage.getItem("productsincart")).length == 0){
        nodata.innerHTML = "nodata"
    }

    let products = JSON.parse(localStorage.getItem("productsincart")) || allproduct;
    let y = products.map((items)=>{
        return `
        <div class="prodouct_item">
                <img src="${items.imageUrl}" alt="">
                <div class="product_item_desc">
                    <h2>${items.title}</h2>
                    <p> ${items.desc} </p>
                    <span> Color : ${items.color}</span><br>
                    <p> Size : ${items.size}</p>
                    <span>Quantity : ${items.qty}</span>
                    <p>Price : ${items.price} $</p>
                    <p>Total Price : ${items.price * items.qty} $</p>
                </div>
                <div class="product_item_action">
                    <button class="add_to_cart"onclick="removeFromcart(${items.id})"> Remvoe from CART</button>
                </div>
            </div>
        `
    })
    allProducts.innerHTML = y.join("")
   
}
drawcartpro()
function removeFromcart(id){
    let productsincart = localStorage.getItem("productsincart")
    if(productsincart){
        let items = JSON.parse(productsincart)
        let filteredItems = items.filter((item)=> item.id !== id)
        localStorage.setItem("productsincart",JSON.stringify(filteredItems))
        drawcartpro(filteredItems)
    }
    
}


