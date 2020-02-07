const baseUrl = "https://tp-js-2-api-wjfqxquokl.now.sh/users";

let Users = [];

let myUser = {
    fullname: "",
    email: "",
    address: "",
    phone: ""
};

const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};