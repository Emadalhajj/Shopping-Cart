
//for check your there is user or not يتم انشاء ملف سكبت خاص بالدخول او الحقق ما ذا كان هناك دخول الى اليوزر او لا
var links = document.querySelector("#links")
let user = document.querySelector("#user")
let user_info = document.querySelector("#user_info")

if(localStorage.getItem("username")){
    links.remove()
    user_info.style.display ="flex"   
    user.innerHTML = `Welcome:${localStorage.getItem("username")}`

}
let logout = document.querySelector("#logout")
/////////////////////////////
logout.addEventListener("click", logOut)
function logOut(){
    localStorage.clear()
    setTimeout(()=>{
        window.location = "login.html"
    },1500)
}