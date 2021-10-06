// records
var arrEmails = ['samson.ocran@gmail.com', 'joyblessing@hotmail.com', 'jamesborn@yahoo.com'];
// var passwordDetails = ['everything23', 'nice1there', 'joymila87'];

function formValidation(){
let errorMsg = document.getElementById('error')
let email = document.getElementById('emailInput').value
let password = document.getElementById('passwordInput').value
let confirmPass = document.getElementById('confirmPassInput').value


  // check all input
  if(email ==="" && password ==="") {
    alert('Enter your details')
    return;
  }
  // check email input
  else if(email ===""){
    alert('enter your email')
    return;
  }
  // check password input
  else if(password ==="") {
    alert('enter a password')
    return;
  }
  
  //confirming your password
  if (password !== confirmPass) {
    // errorMsg.innerHTML = "<em>password invalid</em>";
    alert('invalid passwod');
    return;
  } 
  //if password correspond?

 // check our records for the given email
  let numbOfEmails = arrEmails.length;
  for(index =0; index < numbOfEmails; index++) {
      // if record exist... weclome
      if(email === arrEmails[index]){
        alert(`welcome ${arrEmails[index]}`);
        return;
      }
  }
    // record does not exist
    alert("Record does not exist");
    
}