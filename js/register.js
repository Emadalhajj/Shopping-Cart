// alert("asdd")
let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let registerBtn = document.getElementById("sign_in")


registerBtn.addEventListener("click",function (e){
    e.preventDefault() // for cancele default refresh
    if(username.value==="" || email.value==="" || password.value=== "" ){
        alert("please fild it")
    }else {
        localStorage.setItem("username",username.value)
        localStorage.setItem("emil",email.value)
        localStorage.setItem("password",password.value)

        setTimeout(()=>{
        window.location = "login.html"
        },2000)
    }
})

