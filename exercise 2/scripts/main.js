function mycreateElement(type, attributes = {}) {
    const createdElement = document.createElement(type);

    for (let [key, value] of Object.entries(attributes)) {
        if (key == 'class') {
            createdElement.classList.add(value);
        } else {
            createdElement.setAttribute(key, value);
        }
    }
    return createdElement;
}

function appendChildren(parent, children = []) {
    if (children.length == 1) {
        parent.appendChild(children[0]);
        return parent;
    }
    children.forEach(child => {
        parent.appendChild(child);
    })
    return parent;
}

let bodyContainer = mycreateElement('div', {class: 'body-container'});
let formContainer = mycreateElement('div', {class: 'form-container'});
let remeberSec = mycreateElement('div', {class: 'sec-remember'});
let imgContainer = mycreateElement('img', {class: 'imgUser'})
let notMember = mycreateElement('div', {class: 'container-create'})
var img = "./images/user.svg";
imgContainer.src = img;
let username = mycreateElement('input', {placeholder: 'Type Your Username'});
let password = mycreateElement('input', {placeholder: 'Type Your Password'});
let userContainer = mycreateElement('div', {class: 'user-container'});
let checkContainer = mycreateElement('div', {class: 'check-container'});
let checkBox = mycreateElement('input', {id: 'remember', type: 'checkbox'});


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

appendChildren(notMember, [spanMember, linkMember]);

signIn.classList.add('user-sign')
signIn.textContent = "Sign In";
btnSign.textContent = "Sign In";

// username.placeholder = "Type Your Username";

label.setAttribute('for', 'remember');
label.textContent = "Remember Me"
forgotPass.textContent = "Forgot Password?"


// imgContainer.classList.add('imgUser')
notMember.classList.add('container-create')

document.body.appendChild(bodyContainer);
appendChildren(bodyContainer, [userContainer, signIn, formContainer, notMember]);

userContainer.appendChild(imgContainer);

appendChildren(formContainer, [username, password, btnSign, remeberSec]);

appendChildren(remeberSec, [checkContainer, forgotPass]);


