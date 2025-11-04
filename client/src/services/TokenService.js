export function storeToken(tokenValue){
    localStorage.setItem("token",tokenValue);
}
export function storeID(ID){
    localStorage.setItem("user_id",ID);
}

export function getToken(){
    return localStorage.getItem("token");
}

export function removeToken(){
    localStorage.removeItem("token");
}