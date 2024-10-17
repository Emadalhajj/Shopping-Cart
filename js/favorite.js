

// let productsincart = localStorage.getItem("productsincart")
let allProducts = document.querySelector(".products")
let nodata = document.querySelector(".nodata")
// let products = JSON.parse(localStorage.getItem('products'))


// if(productsincart){
//     let item = JSON.parse(productsincart) //for convert string to object 
//     drawcartpro(item)
// }

function drawfavoritepro(allproduct = []){

    if(JSON.parse(localStorage.getItem("productsfavorite")).leangth == 0){
        nodata.innerHTML = "nodata"
    }

    let products = JSON.parse(localStorage.getItem("productsfavorite")) || allproduct;
    let y = products.map((items)=>{
        return `
        <div class="prodouct_item">
                <img src="${items.imageUrl}" alt="">
                <div class="product_item_desc">
                    <h2>${items.title}</h2>
                    <p> ${items.desc}</p>
                    <span>${items.color}</span><br>
                    <span>Quantity : ${items.qty}</span>
                </div>
                <div class="product_item_action">
                    <button class="add_to_cart" onclick="removefavoite(${items.id})"> Remvoe from favorat</button>
                </div>
            </div>
        `
    })
    allProducts.innerHTML = y.join("")
   
}
drawfavoritepro()
function removefavoite(id){
    let productsfavorite = localStorage.getItem("productsfavorite")
    if(productsfavorite){
        let items = JSON.parse(productsfavorite)
        let filteredItems = items.filter((item)=> item.id !== id)
        localStorage.setItem("productsfavorite",JSON.stringify(filteredItems))
        drawfavoritepro(filteredItems)
    } 
}


