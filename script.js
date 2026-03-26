// LOGIN FUNCTION
function login(){

let name = document.getElementById("name").value;

localStorage.setItem("user", name);

document.getElementById("status").innerHTML =
"Logged in as " + name;
}


// GRADUATE RECOMMENDATION
function recommend(){

let grev = document.getElementById("grev").value;
let greq = document.getElementById("greq").value;
let cgpa = document.getElementById("cgpa").value;

if(grev > 150 && greq > 160 && cgpa > 3.5){

document.getElementById("result").innerHTML =
"Recommended Universities:<br>Stanford University<br>Columbia University<br>Boston University";

}
else{

document.getElementById("result").innerHTML =
"Recommended Universities:<br>Ohio State University<br>Texas A&M University";

}
}


// UNDERGRADUATE RECOMMENDATION
function undergrad(){

let sat = document.getElementById("sat").value;
let fees = document.getElementById("fees").value;

if(sat > 1200 && fees < 50000){

document.getElementById("result").innerHTML =
"Recommended Universities:<br>University of Florida<br>University of Texas";

}
else{

document.getElementById("result").innerHTML =
"Recommended Universities:<br>Arizona State University<br>University of Houston";

}
}


// SEARCH FUNCTION
function search(){

let uni = document.getElementById("searchUni").value;

if(uni == "Stanford"){

document.getElementById("searchResult").innerHTML =
"Stanford University – Avg GRE 325 – GPA 3.8";

}
else{

document.getElementById("searchResult").innerHTML =
"University not found";

}
}
