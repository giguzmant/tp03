const getAllUsers = async () => {
    try {
        const res = await axios.get(`${baseUrl}`)
        Users = res.data
    }
    catch (err) {
        handleError(err);
    }
};