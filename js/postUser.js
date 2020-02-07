const nameInput = document.querySelector("#input-name");
const emailInput = document.querySelector("#input-email");
const addressInput = document.querySelector("#input-address");
const numberInput = document.querySelector("#input-number");

const addNameValidation = document.querySelector("#validation-add-name");
const addEmailValidation = document.querySelector("#validation-add-email");
const addAddressValidation = document.querySelector("#validation-add-address");
const addPhoneValidation = document.querySelector("#validation-add-phone");


const postUser = async (fullname, email, address, phone) => {
    try {
        const res = await axios.post(`${baseUrl}`, {
            fullname,
            email,
            address,
            phone
        })
        newUser = res.data
        Users.push(newUser)
        showEmployees();
        nameInput.value="";
        addressInput.value="";
        numberInput.value="";
        emailInput.value="";
    }
    catch (err){
        handleError(err)
    }
};


const addModal = () => {
    const addEmployeeModal = document.querySelector("#form-add");
    addEmployeeModal.setAttribute("style", "display: block")

    const closeAddEmployeeModal = document.querySelector("#close-add-modal");
    closeAddEmployeeModal.onclick = function () {
        addEmployeeModal.setAttribute("style", "display: none");
        
        addNameValidation.innerHTML="";
        addPhoneValidation.innerHTML = "";
        addAddressValidation.innerHTML="";
        addEmailValidation.innerHTML = "";
        
    }
    const cancelAddEmployeeModal = document.querySelector("#cancel-add");
    
    cancelAddEmployeeModal.onclick = function () {
        addEmployeeModal.setAttribute("style", "display: none");
        
        addNameValidation.innerHTML="";
        addPhoneValidation.innerHTML = "";
        addAddressValidation.innerHTML="";
        addEmailValidation.innerHTML = "";
        
    }
    
}


    const addNewEmployeeButton = document.querySelector("#add-employee-button");
    addNewEmployeeButton.addEventListener("click", () =>{
        addModal();
    });

    const submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener("click", ()=> {

        let hasError = false;
        if(!nameInput.checkValidity()) {
        addNameValidation.innerHTML = nameInput.validationMessage;
         hasError = true;
        }
        
        if(!emailInput.checkValidity()) {
            addEmailValidation.innerHTML = emailInput.validationMessage;
            hasError = true;
        }
        
        if(!addressInput.checkValidity()) {
            addAddressValidation.innerHTML = addressInput.validationMessage;
            hasError = true;
        }
        
        if(!numberInput.checkValidity()) {
            addPhoneValidation.innerHTML = numberInput.validationMessage;
            hasError = true;
        } 
        
        
        if(!hasError){
            postUser(nameInput.value, emailInput.value, addressInput.value, numberInput.value);
            const addEmployeeModal = document.querySelector("#form-add");
            addEmployeeModal.setAttribute("style", "display: none");
            
            addNameValidation.innerHTML="";
            addPhoneValidation.innerHTML = "";
            addAddressValidation.innerHTML="";
            addEmailValidation.innerHTML = "";
        }

 
    }) 
    

