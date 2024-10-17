
let prodctuts_for_update = JSON.parse(localStorage.getItem("products")) || productsDB
let productId = JSON.parse(localStorage.getItem("editProdcut"))

let getproduct =  prodctuts_for_update.find((i)=> i.id === productId )


let productName = document.querySelector("#product-name");
let productDescration = document.querySelector("#product-desc");
let productSize = document.querySelector("#product-size");
let updateForm = document.querySelector("#updateForm");
let uploudIamge = document.querySelector("#uploud-iamge-file");
let productsizevalue;
let prductImage


productName.value = getproduct.title
productDescration.value = getproduct.desc
productSize.value = getproduct.size
prductImage = getproduct.imageUrl

// //event
productSize.addEventListener("change" , getproductsizevalue)
updateForm.addEventListener("submit" , updateProduct)
uploudIamge.addEventListener("change", uploudIamgefun)

//functond
function getproductsizevalue(e){
productsizevalue = e.target.value

}

function updateProduct(e){
    e.preventDefault()
    getproduct.title = productName.value
    getproduct.desc = productDescration.value
    getproduct.size = productSize.value
    getproduct.imageUrl = prductImage
 
    localStorage.setItem("products", JSON.stringify(prodctuts_for_update)) // حفظ البيانات في اللوكل استورج بعد العديل
    setTimeout(()=> 
        window.location = 'index.html' , 500)
}

// //uploudIamge 

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
   