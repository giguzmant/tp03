const { addUser } = require("./postUser");
 
test("se agrega usuario", () => {
    const users = addUser({ fullname: "nombre usuario", email: "email", address: "address", phone: 123456 }, []);
    expect(users.length).toBe(1);
});

