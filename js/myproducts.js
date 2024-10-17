
let productsdom = document.querySelector(".products")
let nodata = document.querySelector(".nodata")

// let products = JSON.parse(localStorage.getItem('products'))  || productsDB


// console.log(myProducts);

function drawitem(products = [] ){

    let myProducts = products.filter((item)=> item.isMe === 'Y')
    if(myProducts.length != 0 ){
        
        console.log('yes')
    }
    if(myProducts != 0 ){
        let productsUI = myProducts.map((item)=>{
        // console.log("eee", item);

        return `
        <div class="prodouct_item" style="border:${item.isMe === 'Y' ? "2px solid green" : ""}">
                <img src="${item.imageUrl}" alt="">
                <div class="product_item_desc">
                    <a onClick="saveItemData(${item.id})">${item.title}</a>
                    <p>discription :  ${item.desc}</p>
                    <p>size : ${item.size}</p>
                    <span>${item.color}</span>
                    <button class='btn-edite' onclick='editeProduct(${item.id})'> edite product </button>
                    <button style="display:block" class='btn-edite' onclick='deleteProduct(${item.id})'> Delete </button>
                </div>
              
            </div>
        `
    })
    productsdom.innerHTML = productsUI//تم عمل فاصل مابين المصفوفات باضافة كومة ولالغاء هذه الكومة نقوم باستخدام فنكشن الانجوي
}else{
    nodata.innerHTML = "nodata"
}   

}
drawitem(JSON.parse(localStorage.getItem('products')) || productsDB) 

//Edit Products

function editeProduct(id){
    localStorage.setItem("editProdcut" , id)
    window.location = 'editProdcut.html'
}

// deleteProduct


function deleteProduct(id){
    let products = JSON.parse(localStorage.getItem('products')) || productsDB; // جيب لي المنتجات من اللوكل استورج واذا ما في اعطني اللي في الداتا
    let productsDelete = products.filter((item)=> item.isMe === "Y") //رجع لي العناصر اللي من قيمة اليز مي  ب واي وحفظها داخل متغير
   
    let filtered = productsDelete.filter((item)=> item.id !== id) //اعمل فلتر للمتجات اللي داخل البرودكات ديليت واللي قيمتها لا تسوي الاي  
    

    let checked = productsDelete.find((i)=> i.id === id) // اجلب العنصر الذي تم تحديده 
    products = products.filter((i)=> i.id !== checked.id ) // اعمل فلتر لكل العناصر المحفوظة داخل متغير الاتشكت
    localStorage.setItem("products",JSON.stringify(products)) //احفظ المنتجات بعد التعديل بالقيمة الجديدة

    drawitem(filtered)
}


