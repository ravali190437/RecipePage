
function loginfunc(){
    const name=document.getElementById("name").value;
    console.log(name);
    const pass=document.getElementById("password").value;
    if(name=="Ravali" && pass=="ramarama")
        window.location.href="recipes.html";
    else
       alert("Login credentials are incorrect please enter correct details!");
}