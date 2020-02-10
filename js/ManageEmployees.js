let Users = [];
const employeesOnTable = document.querySelector("#manage-employees");

const editNameValidation = document.querySelector("#validation-edit-name");
const editEmailValidation = document.querySelector("#validation-edit-email");
const editAddressValidation = document.querySelector("#validation-edit-address");
const editPhoneValidation = document.querySelector("#validation-edit-phone");

const modifyFullName = document.querySelector("#user-name-update");
const modifyEmail = document.querySelector("#user-email-update");
const modifyAddress = document.querySelector("#user-address-update");
const modifyPhone = document.querySelector("#user-phone-update");

const showEmployees = (users) => {
    employeesOnTable.innerHTML="";
        
    users.forEach(user=>{
        let list = document.createElement("tr");
        list.classList.add("table-employee-info");
      
        let checkboxContainer = document.createElement("td");
        let checkboxLabel = document.createElement("label");
        checkboxLabel.className="container-checkbox";
        checkboxContainer.appendChild(checkboxLabel);

        let checkboxInput = document.createElement("input");
        checkboxInput.setAttribute("type", "checkbox");
        checkboxInput.className="checkbox";
        checkboxLabel.appendChild(checkboxInput);
        let checkboxSpan = document.createElement("span");
        checkboxSpan.className="checkmark";
        checkboxLabel.appendChild(checkboxSpan);

        let checkboxIcon = document.createElement("i");
        checkboxIcon.className= `fa fa-check-square`
        checkboxSpan.appendChild(checkboxIcon);
        
        let newFullName = document.createElement("td");
        newFullName.innerHTML = user.fullname;

        let newEmail = document.createElement("td");
        newEmail.innerHTML = user.email;

        let newAddress = document.createElement("td");
        newAddress.innerHTML = user.address;

        let newPhone = document.createElement("td");
        newPhone.innerHTML = user.phone;

        let iconosContainer = document.createElement("td");
        let newEdit = document.createElement("i");
        newEdit.id = "edit-icon-button";
        newEdit.title = "Edit";
        newEdit.innerHTML = "&#xE254;"
        newEdit.classList.add("material-icons", "edit-icon");

        let newDelete = document.createElement("i");
        newDelete.id = "delete-icon-button";
        newDelete.classList.add("material-icons", "delete-icon");
        newDelete.title = "Delete";
        newDelete.innerHTML = "&#xE872;";
        
        list.appendChild(checkboxContainer);
        list.appendChild(newFullName);
        list.appendChild(newEmail);
        list.appendChild(newAddress);
        list.appendChild(newPhone);
        list.appendChild(iconosContainer);
        iconosContainer.appendChild(newEdit);
        iconosContainer.appendChild(newDelete);
        employeesOnTable.appendChild(list);
        
        // DELETE EMPLOYEE //
        
        newDelete.addEventListener('click', ()=>{
            showDeleteModal();
            let deleteBttn = document.querySelector("#delete");  
            deleteBttn.onclick = () => onDeleteClick(user.id);
              
        })
        

        // EDIT EMPLOYEE //
        
	    newEdit.addEventListener("click", ()=>{
            modifyModal();
            
            modifyFullName.value = user.fullname;
            modifyEmail.value =  user.email;
            modifyAddress.value = user.address;
            modifyPhone.value = user.phone;
            
                const buttonModify = document.querySelector("#user-update");
                buttonModify.onclick = function () {
                    
                    let hasError = false;
                    if(!modifyFullName.checkValidity()) {
                        editNameValidation.innerHTML = modifyFullName.validationMessage;
                        hasError = true;
                    }
                    
                    if(!modifyEmail.checkValidity()) {
                        editEmailValidation.innerHTML = modifyEmail.validationMessage;
                        hasError = true;
                    }
                    
                    if(!modifyAddress.checkValidity()) {
                        editAddressValidation.innerHTML = modifyAddress.validationMessage;
                        hasError = true;
                    }
                    
                    if(!modifyPhone.checkValidity()) {
                        editPhoneValidation.innerHTML = modifyPhone.validationMessage;
                        hasError = true;
                    }
                    
                    if(!hasError) { 
                        putUser(user.id, modifyFullName.value, modifyEmail.value, modifyAddress.value, modifyPhone.value);
                        const modifyUser = document.querySelector("#form-edit");
                        modifyUser.style.display="none"
                        
                        editAddressValidation.innerHTML="";
                        editEmailValidation.innerHTML="";
                        editNameValidation.innerHTML="";
                        editPhoneValidation.innerHTML="";
                    }
                
                }
                
                editAddressValidation.innerHTML="";
                editEmailValidation.innerHTML="";
                editNameValidation.innerHTML="";
                editPhoneValidation.innerHTML="";
                
       })
       
        
    })
    
 
}

const onDeleteClick = (userId) =>{
    const deleted = deleteUser(userId);
    if (deleted) {
        hideDeleteModal();
        Users = removeUserFromList(userId, Users);
        showEmployees(Users);
    } else {
        handleError("Error al eliminar usuario");
    } 
}

const onSearch = async(search)=>{
    await searchUser(search);
    showEmployees(Users);
}

const search = document.getElementById("search")
search.addEventListener("keyup",(event)=> {
    if(event.key === "Enter"){
         onSearch(event.target.value);
    }
});

//CARGA LA PAGINA
const load = async () => {
    Users = await getAllUsers();
    if (!Users) {
        handleError('Error al cargar');
    } else {
        showEmployees(Users);
    }
}

load();