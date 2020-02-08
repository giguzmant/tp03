const getAllUsers = async () => {
    try {
        const res = await axios.get(`${baseUrl}`)
        return res.data
    }
    catch (err) {
        return null;
    }
};