const employeesOnTable = document.querySelector("#manage-employees");

//showEmployees es como imprimir()

const showEmployees = () => {
    employeesOnTable.innerHTML="";
        
    Users.forEach(user=>{
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
        
        //EVENTO PARA QUE SALGA MODAL Y ELIMINE 
        
        newDelete.addEventListener('click', ()=>{
            const deleteEmployee = document.querySelector("#delete-message");
            deleteEmployee.style.display="block";
            
            let closeDeleteMessage = document.querySelector(".modal-delete-close");
            closeDeleteMessage.onclick = function () {
                deleteEmployee.style.display="none";
            }
            
            let cancelDelete = document.querySelector(".modal-cancel-delete");
            cancelDelete.onclick= function() {
               deleteEmployee.style.display="none";
            }
            
            let deleteBttn = document.querySelector("#delete");    
            
            deleteBttn.onclick = function() {
                deleteUser(user.id);
                list.remove();
            deleteEmployee.style.display="none";
            }
            
        })
        
    })
}

//CARGA LA PAGINA
const load = async () => {
    await getAllUsers();
    showEmployees();
}

load();