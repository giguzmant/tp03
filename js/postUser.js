const postUser = async (fullname, email, address, phone) => {
    try {
        const res = await axios.post(`${baseUrl}`, {
            fullname,
            email,
            address,
            phone
        });      

        return res.data;
    } catch (err) {
        return null;
    }
};

const addUser = (user, userList) => {
    userList.push(user);
    return userList;
};

//MOSTRAR Y CERRAR MODAL ADD EMPLOYEE
const addModal = () => {
    const addEmployeeModal = document.querySelector("#form-add");
    addEmployeeModal.setAttribute("style", "display: block");

    const closeAddEmployeeModal = document.querySelector("#close-add-modal");
    closeAddEmployeeModal.onclick = function () {
        addEmployeeModal.setAttribute("style", "display: none")
    }
    event.preventDefault();
    const cancelAddEmployeeModal = document.querySelector("#cancel-button")
    cancelAddEmployeeModal.onclick = function () {
        addEmployeeModal.setAttribute("style", "display: none")
    }
}

const addNewEmployeeButton = document.querySelector("#add-employee-button");
addNewEmployeeButton && addNewEmployeeButton.addEventListener("click", () => {
    addModal();
});

const nameInput = document.querySelector("#input-name");
const emailInput = document.querySelector("#input-email");
const adressInput = document.querySelector("#input-address");
const numberInput = document.querySelector("#input-number");
const submitButton = document.querySelector("#submit-button");

submitButton && submitButton.addEventListener("click", async () => {
    event.preventDefault();
    const newUser = await postUser(nameInput.value, emailInput.value, adressInput.value, numberInput.value);
    if (newUser) {
        Users = addUser(newUser, Users);
        showEmployees(Users);

        //PARA QUE AL AGREGAR EL MODAL SE VAYA
        const addEmployeeModal = document.querySelector("#form-add");
        addEmployeeModal.setAttribute("style", "display: none")
    } else {
        handleError("Error al eliminar");
    }
});

module.exports = {
    addUser
};