const firstname=document.querySelector("#first-name")
const lastname=document.querySelector("#last-name")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const form=document.querySelector(".main-form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkinput();
})

function setError(input,message){
    const mainForm=input.parentElement;
    const small=mainForm.querySelector(".small")

    // add error msg
    small.innerText=message
    mainForm.className='section error'
}


function setSuccess(input){
    const mainForm=input.parentElement;
    mainForm.className='section success'
}

function checkinput(){
    const firstnamevalue=firstname.value.trim();
    const lastnamevalue=lastname.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();

    if(firstnamevalue===""){
        // show error and add error class
        setError(firstname,"Firstname cannot be blank");
    }
    else{
        setSuccess(firstname);
    }

    if(lastnamevalue===""){
        // show error and add error class
        setError(lastname,"Lastname cannot be blank");
    }
    else{
        setSuccess(lastname);
    }

    if(emailvalue===""){
        // show error and add error class
        setError(email,"Email cannot be blank");
    }
    else{
        setSuccess(email);
    }

    if(passwordvalue===""){
        // show error and add error class
        setError(password,"Password cannot be blank");
    }
    else{
        setSuccess(password);
    }
}