const searchUser = async (search) => {
    try {
        const res = await axios.get(`${baseUrl}?search=${search}`)
         Users = res.data
    }
    catch (err) {
        handleError(err)
    }
};