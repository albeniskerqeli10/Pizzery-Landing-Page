

const orderbtn = document.querySelector(".order");
const forminput = document.querySelector(".form-control");
const ordercont = document.querySelector(".ordercontainer");
const  result = document.querySelector(".result");
const thanks = document.querySelector(".thankyou");
const formpage = document.querySelector("form");
const year = document.querySelector(".date");
console.log(year);



var firebaseConfig = {
    apiKey: "AIzaSyAA4Q-n-upTaff8gqkSX5yGAk7wf9HxsaY",
    authDomain: "pizzery-ordering-system.firebaseapp.com",
    projectId: "pizzery-ordering-system",
    storageBucket: "pizzery-ordering-system.appspot.com",
    messagingSenderId: "715271965452",
    appId: "1:715271965452:web:2153a98540d4da66015729"
  };

	firebase.initializeApp(firebaseConfig);
var firestore =  firebase.firestore();

let userName = document.querySelector("#userFullName");
let userEmail = document.querySelector("#userEmail");
let userMessage = document.querySelector("#userMessage");

const db = firestore.collection("orderingData");





orderbtn.addEventListener("click" , ()=> {
if( forminput.value ==="") {
result.innerHTML = "Please fill all Fields";
ordercont.appendChild(result);
console.log(result);

}

else {
	
let userNameInput = userName.value;
let userEmailInput = userEmail.value;
let userMessageInput = userMessage.value;
  thanks.style.display = "flex";
  formpage.action = "#thank";
  console.log("Very");
  result.style.opacity = "0";
	db.doc().set({
customer_name:userNameInput,
	email_address:userEmailInput,
	home_address:userMessageInput
}).then(function() {
	console.log("Data Saved");
}).catch(function(error) {
	console.log("Error");
})

}
})

let date = new Date().getFullYear();
year.innerHTML= date;
console.log(date);
  console.log(formpage.action);

