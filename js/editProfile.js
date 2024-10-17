
let Username = localStorage.getItem('username')
let email = localStorage.getItem('emil')

//varibles
let User = document.getElementById('username')
let userEmail = document.getElementById('email')

let changename = document.getElementById('changename')
let changeEmail = document.getElementById('changeEmail')
let sendchange = document.getElementById('sendchange')
let changeImage = document.getElementById('changeImage')
let userAvatar = document.querySelector('.user-avatar')

//setting value of input 
changename.value = Username
changeEmail.value = email
changeImage = userAvatar.src;

// event
//uploudIamge 

sendchange.addEventListener('submit',changeinfoProfile)


function changeinfoProfile(e){
    e.preventDefault()
    localStorage.setItem('username',changename.value) 
    localStorage.setItem('emil',changeEmail.value)
    // localStorage.setItem('emil',changeEmail.value)


    setTimeout(()=>{
        window.location = 'profile.html'
    },500)
}

changeImage.addEventListener('change',uploudIamgefun)


// let changeImage
function uploudIamgefun() {
    let file = this.files[0] //تاج الانبت من نوع ملف يتكون من عدة ملفات ونحتاج في هذه العملية لاول عنصر وهو الذي يتم اختياره
 
    console.log(file);
    let types = ["image/jpeg" , "image/png"]
    if(types.indexOf(file.type) == -1){
        alert("type not supported")
        return
    }
    if(file.size > 2 * 1024 *1024){
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
        userAvatar.src = reader.result;
    }

    reader.onerror = function(){
        alert("Erorr ||")
    }
}



