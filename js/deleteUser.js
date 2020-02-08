const deleteUser = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
        return true;
    }
    catch (err) {
        return false;
    }
};

const removeUserFromList = (id, users) => {
    const index = users.findIndex(user => user.id === id);
    users.splice(index, 1);

    return users;
};

const showDeleteModal = () => {
    const deleteEmployee = document.querySelector("#delete-message");
    deleteEmployee.style.display = "block";

    const closeDeleteMessage = document.querySelector(".modal-delete-close");
    closeDeleteMessage.onclick = function () {
        deleteEmployee.style.display = "none";
    }

    const cancelDelete = document.querySelector(".modal-cancel-delete");
    cancelDelete.onclick = function () {
        deleteEmployee.style.display = "none";
    }
};

const hideDeleteModal = () =>{
    const deleteEmployee = document.querySelector("#delete-message");
    deleteEmployee.style.display = "none";
};

module.exports = {
    deleteUser,
    removeUserFromList
}
