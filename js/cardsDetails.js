
let products = JSON.parse(localStorage.getItem('products'))
let saveitemId = localStorage.getItem('saveitemId')
let itemsDom = document.querySelector(".item-details")
let productDetails = products.find((item)=> item.id == saveitemId)
// let editeProduct
itemsDom.innerHTML = `

     <img src="${productDetails.imageUrl}" alt="chickyour photo">
     <h2> ${productDetails.title}</h2>
     <span>${productDetails.color}</span>
     <p>${productDetails.desc}</p>
     <p>${productDetails.size}</p>
     <span>quantatiy ${productDetails.qty}</span><br>
     <button onclick="editeProduct${saveitemId}">editeProdect</button>

`
//Edit Products

// function editeProduct(id){
//      localStorage.setItem("editProdcut" , id)
//      window.location = 'editProdcut.html'
//  }