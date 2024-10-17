let productName = document.querySelector("#product-name");
let productDescration = document.querySelector("#product-desc");
let productSize = document.querySelector("#product-size");
let createForm = document.querySelector("#create-form");
let uploudIamge = document.querySelector("#uploud-iamge-file");
let productPrice = document.querySelector("#product-price");
let productsizevalue;

//event
productSize.addEventListener("change" , getproductsizevalue)
createForm.addEventListener("submit" , createProduct)
uploudIamge.addEventListener("change", uploudIamgefun)

//functond
function getproductsizevalue(e){
productsizevalue = e.target.value
}

function createProduct(e){
    e.preventDefault()
    let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB // عند اضافة المنتج ضيفها ولو كان في منتجات جيبها ملف الداتا
    let nameValue = productName.value
    let descValue = productDescration.value
    let PriceValue = productPrice.value
    // let nameValue = productDescration.value

    if(nameValue && descValue  ){

    let obj = {
        id : allProducts ? allProducts.length + 1 : 1, //قبل اضافة الايدي شيك ما اذا كان هناك منتجات اول لا لو في ضيف عليها واحد
        qty:1,
        imageUrl : prductImage,
        size: productsizevalue,
        title : nameValue,
        desc:descValue,
        isMe: "Y",
        price : PriceValue
    }
    let newProduct = allProducts ? [...allProducts , obj] :[obj]
    localStorage.setItem("products", JSON.stringify(newProduct))
    productName.value=""
    productDescration.value =""
    productSize.value = ""
    uploudIamge.value = ""
    productPrice.value = ""

    setTimeout(()=>{
    window.location ="index.html"
    },500)

    }else {
         alert("add the name and descriptions please ")
    }
   

}

//uploudIamge 
let prductImage
function uploudIamgefun() {
    let file = this.files[0] //تاج الانبت من نوع ملف يتكون من عدة ملفات ونحتاج في هذه العملية لاول عنصر وهو الذي يتم اختياره
 
    console.log(file);
    let types = ["image/jpeg" , "image/png"]
    if(types.indexOf(file.type) == -1){
        alert("type not supported")
        return
    }
    if(file.size > 2 * 1024 *1027){
        alert("image not exect 2mg")
        return
    }
    // prductImage = URL.createObjectURL(file) //create blob -  عمل مسار للصورة على شكل بيانري ليتم اتسخدام الصورة على شكل رابط - وتسمى بلوب
    getImageBase64(file)
    
    // 
   
}
function getImageBase64(file){ // عملية حفظ الصور يتم من خلال حفظها في السيرفر ويتم استدعاءمن السيرفر لكن باانه هنا نعمل على للوكل هوست نقوم باستخدم بيز 46 وهو تحويل البلوب الى بيز 46
    let reader = new FileReader() //اوبكجت يقوم بقراءة ملف الصور وتحويله الى بيز 46
    reader.readAsDataURL(file)

    reader.onload = function(){
        prductImage = reader.result;
    }

    reader.onerror = function(){
        alert("Erorr ||")
    }
}
   