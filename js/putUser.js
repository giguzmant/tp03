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
        const modifyUser = document.querySelector("#form-edit");
        modifyUser.style.display="block";
        /*const closeModifyModal = document.querySelector("#form-close-edit");
        closeModifyModal.onclick = function () {
        modifyUser.style.display="none";
        }
        
        const cancelModify = document.querySelector("#form-cancel-edit");
        cancelModify.onclick = function () {
            modifyUser.style.display="none";
        }*/
    }