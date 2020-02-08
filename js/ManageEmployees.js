let Users = [];
const employeesOnTable = document.querySelector("#manage-employees");

//showEmployees es como imprimir()

const showEmployees = (users) => {
    employeesOnTable.innerHTML="";
        
    users.forEach(user=>{
        let list = document.createElement("tr");
        list.classList.add("table-employee-info");
      
        let checkbox = document.createElement("td");
        
        let newId = document.createElement("input");
        newId.setAttribute("type", "checkbox");
        newId.classList.add("table-checkbox");
        
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
        
        list.appendChild(checkbox);
        checkbox.appendChild(newId);
        list.appendChild(newFullName);
        list.appendChild(newEmail);
        list.appendChild(newAddress);
        list.appendChild(newPhone);
        list.appendChild(iconosContainer);
        iconosContainer.appendChild(newEdit);
        iconosContainer.appendChild(newDelete);
        employeesOnTable.appendChild(list);
        
        
        newDelete.addEventListener('click', ()=>{
            showDeleteModal();
            let deleteBttn = document.querySelector("#delete");  
            deleteBttn.onclick = () => onDeleteClick(user.id);
              
        })
        
	    newEdit.addEventListener("click", ()=>{
            modifyModal();
            
            let modifyFullName = document.querySelector("#user-name-update");
            let modifyEmail = document.querySelector("#user-email-update");
            let modifyAddress = document.querySelector("#user-address-update");
            let modifyPhone = document.querySelector("#user-phone-update");
            
            modifyFullName.value = user.fullname;
            modifyEmail.value =  user.email;
            modifyAddress.value = user.address;
            modifyPhone.value = user.phone;
            
                const buttonModify = document.querySelector("#user-update");
                buttonModify.onclick = function () {
                
                putUser(user.id, modifyFullName.value, modifyEmail.value, modifyAddress.value, modifyPhone.value);
                const modifyUser = document.querySelector("#form-edit");
                modifyUser.style.display="none";
                event.preventDefault();
                
                }
       })
        
    })
}

const onDeleteClick = (userId) =>{
    const deleted = deleteUser(userId);
    if (deleted) {
        hideDeleteModal();
        Users = removeUserFromList(userId, Users);
        showEmployees(Users);
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
    showEmployees(Users);
}

load();