const employeesOnTable = document.querySelector("#manage-employees");

//showEmployees es como imprimir()

const showEmployees = () => {
    employeesOnTable.innerHTML="";
    
    for(let employee of Users) {
        let list = document.createElement("tr");
        list.classList.add("table-employee-info");
        //checkear cual funciona para borrar!
        list.id= `fila-${employee.id}`
        list.value=employee.id;
        
        let checkbox = document.createElement("td");
        checkbox.value=employee.id;
        
        let newId = document.createElement("input");
        newId.setAttribute("type", "checkbox");
        newId.classList.add("table-checkbox");
        
        //checkear cual funciona para borrar!
        newId.value=employee.id;
        newId.id= `id-${employee.id}`;
        newId.innerHTML=employee.id;
        
        let newFullName = document.createElement("td");
        newFullName.innerHTML = employee.fullname;

        let newEmail = document.createElement("td");
        newEmail.innerHTML = employee.email;

        let newAddress = document.createElement("td");
        newAddress.innerHTML = employee.address;

        let newPhone = document.createElement("td");
        newPhone.innerHTML = employee.phone;

        let iconos = document.createElement("td");
        let newEdit = document.createElement("i");
        newEdit.id = "edit-icon-button";
        newEdit.classList.add("material-icons");
        newEdit.classList.add("edit-icon");
        newEdit.title = "Edit";
        newEdit.innerHTML = "&#xE254;"

        let newDelete = document.createElement("i");
        newDelete.id = "delete-icon-button";
        newDelete.classList.add("material-icons");
        newDelete.classList.add("delete-icon");
        newDelete.title = "Delete";
        newDelete.innerHTML = "&#xE872;";
        
        //EVENTO PARA QUE SALGA MODAL
        newDelete.addEventListener('click', ()=>{
            let deleteEmployee = document.querySelector("#delete-message");
            deleteEmployee.style.display="block";
            
            let closeDeleteMessage = document.querySelector(".modal-delete-close");
            closeDeleteMessage.onclick = function () {
                deleteEmployee.style.display="none";
            }
        })
        //CONFIMARCION DE DELETE, SOLO BORRA EL ÚLTIMO ¿?¿?¿
        const deleteBttn = document.querySelector("#delete-bttn");
        deleteBttn.onclick = function() {
            deleteUser(newId.value);
        list.remove();
        let deleteEmployee1 = document.querySelector("#delete-message");
        deleteEmployee1.style.display="none";
        }
        
        list.appendChild(checkbox);
        checkbox.appendChild(newId);
        list.appendChild(newFullName);
        list.appendChild(newEmail);
        list.appendChild(newAddress);
        list.appendChild(newPhone);
        list.appendChild(iconos);
        iconos.appendChild(newEdit);
        iconos.appendChild(newDelete);
        employeesOnTable.appendChild(list);
        
    }
}

//CARGA LA PAGINA
const load = async () => {
    await getAllUsers();
    showEmployees();
}

load();