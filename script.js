const orderbtn = document.querySelector(".order");
const forminput = document.querySelector(".form-control");
const ordercont = document.querySelector(".ordercontainer");
const  result = document.querySelector(".result");
const thanks = document.querySelector(".thankyou");
const formpage = document.querySelector("form");
console.log(formpage);
console.log(forminput);
orderbtn.addEventListener("click" , ()=> {
if( forminput.value ==="") {
result.innerHTML = "Please fill all Fields";
ordercont.appendChild(result);
console.log(result);

}

else {
  thanks.style.display = "flex";
  formpage.action = "#thank";
  console.log("Very");
  result.style.opacity = "0";
}
})

