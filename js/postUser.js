//MOSTRAR Y CERRAR MODAL ADD EMPLOYEE

const addNewEmployeeButton = document.querySelector("#add-employee-button");
const addEmployeeModal = document.querySelector("#form-add");
addNewEmployeeButton.addEventListener("click", () =>{
    addEmployeeModal.setAttribute("style", "display: block")
});

const closeAddEmployeeModal = document.querySelector("#close-add-modal");
const cancelAddEmployeeModal = document.querySelector("#cancel-button")
closeAddEmployeeModal.addEventListener("click", () =>{
    addEmployeeModal.setAttribute("style", "display: none")
});

cancelAddEmployeeModal.addEventListener("click", () =>{
    addEmployeeModal.setAttribute("style", "display: none")
})

const nameInput = document.querySelector("#input-name");
const emailInput = document.querySelector("#input-email");
const adressInput = document.querySelector("#input-adress");
const numberInput = document.querySelector("#input-number");
const employeesList = document.querySelector("#manage-employees");
const submitButton = document.querySelector("#submit-button");

const postUser = async () =>{
    let fullName = nameInput.value;
    let email = emailInput.value;    
    let adress = adressInput.value;
    let phone = numberInput.value;

    let newEmployee = {
        fullName,
        email,
        adress,
        phone
    }
    try {
        const res = await axios.post(baseUrl, newEmployee);
        newEmployee = res.data
        Users.push(newEmployee)
        showEmployees();
    }
    catch (err){
        handleError(err)
    }

};

submitButton.addEventListener("click", postUser)
/*
const postUser = async () => {

    try {
        const res = await axios.post(`${baseUrl}`, {
            fullname,
            email,
            address,
            phone
        })
        newUser = res.data
        Users.push(newUser)
        load();
    }
    catch (err){
        handleError(err)
    }
};*/