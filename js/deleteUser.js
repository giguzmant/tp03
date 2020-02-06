const deleteUser = async (id) => {
    try {   
        const res = await axios.delete(`${baseUrl}/${id}`)
        const index = Users.findIndex(user => {
            return user.id == id
        })
        Users.splice(index, 1)
        load();
    }
    catch (err){
        handleError(err)
    }
    
};

const deleteModal = () => {
    const deleteEmployee = document.querySelector("#delete-message");
    deleteEmployee.style.display="block";
    
    const closeDeleteMessage = document.querySelector(".modal-delete-close");
    closeDeleteMessage.onclick = function () {
        deleteEmployee.style.display="none";
    }
    
    const cancelDelete = document.querySelector(".modal-cancel-delete");
    cancelDelete.onclick= function() {
       deleteEmployee.style.display="none";
    }
}

