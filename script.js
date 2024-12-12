var body = document.querySelector("body")
var  btnDarkMode = document.querySelector("#darkMode")
btnDarkMode.addEventListener("click", darkMode)
function darkMode() {
    body.classList.toggle("darkMode")
    if(btnDarkMode.textContent == "ativar"){
        btnDarkMode.textContent = "Desativar"
        
    }else{
        btnDarkMode.textContent = "ativar"
    }
 }



    
