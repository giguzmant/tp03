const { deleteUser, removeUserFromList } = require("./deleteUser");

test("al querer borrar un usuario inexistente se retorna falso", async()=>{
    const deletedUser = await deleteUser(-1);
    expect(deletedUser).toBe(false);
});

test("se actualiza la lista borra el usuario de la lista utilizando su id", ()=>{
    const users = [{id:1 ,fullname: 'Nombre de usuario'}];
    const newUserList = removeUserFromList(1, users);
    expect(newUserList.length).toBe(0);
});


