
let allproducts = document.querySelector(".products")

let products = productsDB
let searchInbut = document.querySelector('.input-search')



function drawitem(products = [] ){
    let y = products.map((item)=>{
        // console.log("eee", item);
        return `

        <div class="prodouct_item" style="border:${item.isMe === 'Y' ? "2px solid green" : ""}">
                <img src="${item.imageUrl}" alt="">
                <div class="product_item_desc">
                    <a onClick="saveItemData(${item.id})">${item.title}</a>
                    <p>Discription :  ${item.desc}</p>
                    <p>Size : ${item.size}</p>
                    <span> Color : ${item.color}</span>
                    <p>Price : ${item.price} $</p>
                    ${item.isMe === "Y" ? "<button class='btn-edite' onclick='editeProduct(" +item.id+ ")'> edite product </button>" : ""}

                </div>
                <div class="product_item_action">
                    <button class="add_to_cart"onClick="addtocart(${item.id})"> ADD TO CART</button>
                    <i class="far fa-heart fav"style="color: ${item.liked == true ? "red":""}" onclick="addtofavorite(${item.id})"></i>
                </div>
            </div>
        `
    })
    allproducts.innerHTML = y.join("") //تم عمل فاصل مابين المصفوفات باضافة كومة ولالغاء هذه الكومة نقوم باستخدام فنكشن الانجوي
}
drawitem(JSON.parse(localStorage.getItem('products')) || products) 

        
        function addtocart(id){
            if(localStorage.getItem("username")){   
                let prodctutforEach = JSON.parse(localStorage.getItem("products")) || products
                let product = prodctutforEach.find((item)=> item.id === id) //
                let checkifitemexisiting = storageItems.some((i)=> i.id === product.id) //ا
                if(checkifitemexisiting){
                    storageItems.forEach((p)=>{
                        if(p.id === product.id) { //عمل لوب على العنصر اللي موجود اذا كان موجود من اول ضيف عليه 
                            p.qty += 1 // لو غير موجود ضيفه من جديد
                        } 
                        return p // اذا غير موجود تعال جيبه 
                    })
                }else {
                    product.qty = 1
                    storageItems.push(product)
                }
                
                
                  let sum =  storageItems.reduce((accu ,curr)=> {
                        return accu + (curr.price * curr.qty)
                    },0)
                
            
                
                cartproductdiv.innerHTML = "" 
                storageItems.forEach((item)=>{ //نستحدم الفوايتش لعمل لوب على المنتاج و نعدل عليه في نفس الاريري
                    

                    cartproductdiv.innerHTML += 
                    `<p>${item.title} - QTY : <span class="item-qty"> ${item.qty} </span>
                    <br>Price : <span class="total-price">${item.price}  </span> 
                    <br>Total unite price : <span class="total-price">${item.price * item.qty} </span> 
                    <hr></p>
                    
                    `
                })
                cartproductdiv.innerHTML += `<p>Total Price: <span class="total-price"> ${sum} $</span></p>`;
                        
                // تخزين العناصر
                let uniqueproducts = getUnequearry(storageItems, "id");
                localStorage.setItem("productsincart", JSON.stringify(uniqueproducts));
                //save items in the localStorge and convet to string because the localstorage allow to string only not  object 
                badge.style.display="block";
                badge.innerHTML = storageItems.length
                cartproductdiv.style.display = "block";

                // storageItems = [...storageItems , chooseItem]
                // let uniqueproducts = getUnequearry(storageItems , "id")

                // let pragItemsPrud = document.querySelectorAll(".carts_products div p")
              

          
                
            }
            else{
                    window.location = "login.html"
                }
         }
// for deny repet items 
         function getUnequearry(arr , filterType){
            let unique = arr.map((item) => item[filterType])
            .map((item , ind , fainl)=> fainl.indexOf(item) === ind && ind)//هنا ماسك الانكسس تبع العناصر في حال كان احدهم متكرر يرجعها فولس
            .filter((item)=> arr[item])//return items without fasle
            .map((item)=> arr[item])//return items  
            return unique
         }
//////////////


function saveItemData(dd){
    localStorage.setItem('saveitemId',dd)
    window.location = 'cardDetials.html'
}
//SEARCH - 
searchInbut.addEventListener('keyup', function(e){
    
       search(e.target.value,products)
    
    if(e.target.value.trim() === ""){
        drawitem(JSON.parse(localStorage.getItem('products')))   
    }
}) 

function search(title , myArray){
   
    let searchitem = myArray.filter((item)=>item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1) // if you want return not array you can use find function
    drawitem(searchitem)

     // for (let i = 0; i < myArray.length; i++) {
    //   if(myArray[i].title === title){
    //     console.log(myArray[i]);
    //   } 
        
    // }
}
// add to favorite
vaforatitems = localStorage.getItem("productsfavorite")
 ? JSON.parse(localStorage.getItem("productsfavorite"))
 : [];

function addtofavorite(id){
    if(localStorage.getItem("username")){
        let choosenitem = products.find((item)=> item.id === id)
        vaforatitems = [...vaforatitems , choosenitem ]
        // localStorage.setItem("productsfavorite", JSON.stringify(vaforatitems))
        //unique function for deny repete
        let uniqueproducts = getUnequearry(vaforatitems , "id")
        localStorage.setItem("productsfavorite", JSON.stringify(uniqueproducts))
        //liked
        choosenitem.liked = true;
        products.map((item)=>{
            if(item.id === choosenitem.id){
                item.liked = true
            }
        })
        localStorage.getItem("products",JSON.stringify(products))
        drawitem(products)
        
    }else{
        window.location = 'login.html'
    }
}

//filter priducts by size
let filterbysize = document.querySelector("#size-filter")

filterbysize.addEventListener("change",getproductfilterbysize)

function getproductfilterbysize(e){
let val = e.target.value
let productsofcard = JSON.parse(localStorage.getItem("products")) || products

if(val === "all"){
    drawitem(productsofcard)
}else {
    products = productsofcard.filter((i)=> i.size === val)
    drawitem(products)
}
}

//Edit Products


function editeProduct(id){
    localStorage.setItem("editProdcut" , id)
    window.location = 'editProdcut.html'
}