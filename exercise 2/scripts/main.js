const bodyContainer = document.createElement('div');
const formContainer = document.createElement('div');
const remeberSec = document.createElement('div');

const notMember = document.createElement('div');

const imgContainer = document.createElement('img');
const userContainer = document.createElement('div');
const username = document.createElement('input');
const password = document.createElement('input');

const checkContainer = document.createElement('div');
checkContainer.classList.add('check-container');
const checkBox = document.createElement('input');
const label = document.createElement('label');
checkContainer.appendChild(checkBox);
checkContainer.appendChild(label);

const forgotPass = document.createElement('a');
forgotPass.classList.add('forgot-pass')

const btnSign = document.createElement('button');

const signIn = document.createElement('span');

const spanMember = document.createElement('span');
spanMember.textContent = "Not a Member?";
const linkMember = document.createElement('a'); 
linkMember.textContent = "Create an Account"


notMember.appendChild(spanMember);
notMember.append(linkMember);


var img = "./images/user.svg";

imgContainer.src = img;
console.log(imgContainer);

signIn.classList.add('user-sign')
signIn.textContent = "Sign In";
btnSign.textContent = "Sign In";

username.placeholder = "Type Your Username";
username.classList.add('username');
password.classList.add('password');
checkBox.type = "checkbox";
checkBox.setAttribute('id', 'remember');
label.setAttribute('for', 'remember');
label.textContent = "Remember Me"
forgotPass.textContent = "Forgot Password?"
password.placeholder = "Type Your Password";

bodyContainer.classList.add('body-container');
formContainer.classList.add('form-container');
userContainer.classList.add('user-container');
remeberSec.classList.add('sec-remember');
imgContainer.classList.add('imgUser')
notMember.classList.add('container-create')

document.body.appendChild(bodyContainer);


userContainer.appendChild(imgContainer);

bodyContainer.appendChild(userContainer);
bodyContainer.appendChild(signIn);
bodyContainer.appendChild(formContainer);

formContainer.appendChild(username);
formContainer.appendChild(password);
formContainer.appendChild(btnSign);
formContainer.appendChild(remeberSec);

remeberSec.appendChild(checkContainer);

remeberSec.append(forgotPass);

bodyContainer.appendChild(notMember);



