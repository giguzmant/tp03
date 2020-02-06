const putUser = async (id, fullname, email, address, phone) => {
    let data = {
        fullname,
        email,
        address,
        phone
    };
    try {
        const res = await axios.put(`${baseUrl}/${id}`, data)
        Users = res.data;
        showEmployees();
    }
    catch (err){
        handleError(err);
    }
};


const modifyModal = () => {
        //MODAL PARA QUE APAREZCA COMO BLOCK FORM DE MODIFICAR
        const modifyUser = document.querySelector("#form-edit");
        modifyUser.style.display="block";
        
        //PARA QUE NO ENVIE INFO A UNA BASE DE DATOS QUE NO EXISTE
        event.preventDefault();
        const closeModifyModal = document.querySelector(".form-close");
        //CUANDO APRETAS EL ICONO x VUELVE A SER NONE
        closeModifyModal.onclick = function () {
        modifyUser.style.display="none";
        }
        //CUANDO APRETAS CANCEL VUELVE A SER NONE
        const cancelModify = document.querySelector(".form-cancel");
        cancelModify.onclick = function () {
            modifyUser.style.display="none";
        }
    }