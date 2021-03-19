/*
- Kí hiệu $, trường liên quan đến hiển thị
*/
class Register {
    $formRegister;
    $txtEmail;
    $txtDisplayName;
    $txtPassword;
    $txtConfirmPassword;
    $errorMessage;
    $btnSubmit;
    constructor(){
        // Khởi tạo cho trường dữ liệu 
        this.$txtEmail = document.createElement("input");
        this.$txtEmail.type = "email";
        this.$txtEmail.placeholder = "Enter email...";

        this.$txtDisplayName = document.createElement("input");
        this.$txtDisplayName.type = "text";
        this.$txtDisplayName.placeholder = "Enter display name...";

        this.$txtPassword= document.createElement("input");
        this.$txtPassword.type = "password"
        this.$txtPassword.placeholder = "Enter Password..."

        this.$txtConfirmPassword = document.createElement("input");
        this.$txtConfirmPassword.type = "password"
        this.$txtConfirmPassword.placeholder = "Enter Confirm Password..."
        
        this.$formRegister = document.createElement("form");
        this.$formRegister.addEventListener('submit', this.handleSubmit);
        
        this.$btnSubmit = document.createElement("button");
        this.$btnSubmit.type = "submit";
        this.$btnSubmit.innerHTML  = "Register";

        this.$errorMessage = document.createElement("p");
        this.$errorMessage.classList.add("error-message");
    }

    handleSubmit = (event) => {
        // console.log(event);
        event.preventDefault(); // ==> Ko bi Reload trang Web
        const email = this.$txtEmail.value;
        const displayName = this.$txtDisplayName.value;
        const password = this.$txtPassword.value;
        const confirmPassword = this.$txtConfirmPassword.value;
        
        if(displayName === "") {
            this.setErrorMessage("Display Name cannot empty!");
            return;
        }
        if(password === "") {
            this.setErrorMessage("Password cannot empty!");
            return;
        }
        if(confirmPassword === "") {
            this.setErrorMessage("Confirm Password cannot empty!");
            return;
        }
        if(password !== confirmPassword) {
            this.setErrorMessage("Password & Confirm Password are not matched!");
            return;
        }
        this.setErrorMessage("");

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
                console.log(userCredential)
                firebase.auth().currentUser.updateProfile({
                    displayName: displayName
                })
                firebase.auth().currentUser.sendEmailVerification();
        });
        console.log(email, displayName, password, confirmPassword);
    }
    setErrorMessage = (content) => {
        this.$errorMessage.innerHTML = content;
        if(content !== ""){
            this.$errorMessage.style.display = "block";
        }else{
            this.$errorMessage.style.display = "none";
        }
    }

    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add('d-flex', 'flex-column' ,'centering');
        const title = document.createElement("h1");
        title.innerHTML = "Create Account";
        flexContainer.appendChild(title);
        
        this.$formRegister.appendChild(flexContainer);
        flexContainer.appendChild(this.$errorMessage);
        flexContainer.appendChild(this.$txtEmail);
        flexContainer.appendChild(this.$txtDisplayName);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$txtConfirmPassword);
        flexContainer.appendChild(this.$btnSubmit);

        container.appendChild(this.$formRegister);
    };
}
// ---------------- HW ---------------- 
// class Input {

// }
export default Register;