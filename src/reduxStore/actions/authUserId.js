const authUserIdGenerator = (uId)=>{
    return {
        type: "AUTHENTICATED",
        uId
    }
}
export default authUserIdGenerator