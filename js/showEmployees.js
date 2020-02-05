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
        
        //newEdit es el nombre de la variable cuando creamos el icono de editar
	    newEdit.addEventListener("click", ()=>{
            //LLAMO AL MODAL
            modifyModal();
            //inputs de edit
            let modifyFullName = document.querySelector("#user-name-update");
            let modifyEmail = document.querySelector("#user-email-update");
            let modifyAddress = document.querySelector("#user-address-update");
            let modifyPhone = document.querySelector("#user-phone-update");
            //PARA QUE APAREZCA #setteados LOS VALORES A MODIFICAR
            modifyFullName.value = user.fullname;
            modifyEmail.value =  user.email;
            modifyAddress.value = user.address;
            modifyPhone.value = user.phone;
                const buttonModify = document.querySelector("#user-update");
                buttonModify.onclick = function () {
                putUser(user.id, modifyFullName.value, modifyEmail.value, modifyAddress.value, modifyPhone.value).then(showEmployees);
                const modifyUser = document.querySelector("#form-edit");
                modifyUser.style.display="none";
                event.preventDefault();
                }
       })
        
    })
}


//Buscar y renderizar employess.
const onSearch = async(search)=>{
    await searchUser(search);
    showEmployees();
}
//ejecutar busqueda luego de que el usurio ingresa enter.
const search = document.getElementById("search")
search.addEventListener("keyup",(event)=> {
    if(event.key === "Enter"){
         onSearch(event.target.value);
    }

});


//CARGA LA PAGINA
const load = async () => {
    await getAllUsers();
    showEmployees();
}

load();