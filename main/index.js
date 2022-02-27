const elForm = document.querySelector(".form")
const elUserName = document.querySelector(".Username")
const elPassword = document.querySelector(".password")
const elConfirm = document.querySelector(".confirm")


elForm.addEventListener(('submit'), (evt) => {
    evt.preventDefault()
    const confirm = elConfirm.value.trim()
    const passwordInput = elPassword.value.trim()
    if(passwordInput == ""){
                alert("ismiz va passwordiz kirgizing");
            }
        
            else if (passwordInput != confirm){
                alert ("password bilan confirm password bir xil kirgiznig!")
                return false
            }
        
            else if (passwordInput == confirm ){
             window.location.replace("redim.html")  
            }
            return true
   
})

