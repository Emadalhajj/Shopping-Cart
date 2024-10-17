// localStorage.setItem("carName","BMW")
// console.log(localStorage.getItem("carName"));
// localStorage.removeItem("name")

// localStorage.clear()

window.onload=function(){

let username = document.querySelector("#username")
let password = document.querySelector("#password")
let logingbtn = document.getElementById("sign_in")

let getuser = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")

 logingbtn.addEventListener("click" , (e)=>{
    e.preventDefault()
    if(username.value =="" || password.value ==""){
        alert("please find info")
    }else{
           if(username.value.trim() === getuser && getuser.trim() && password.value.trim() === getpassword &&getpassword.trim()){
            setTimeout(()=>{
                window.location ="index.html"
            },500)
    }else{
        alert("please make sure user or Password")
    }

    }
})



}




