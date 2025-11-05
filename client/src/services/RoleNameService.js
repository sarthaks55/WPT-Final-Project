export function storeRoleID(role_id){
    localStorage.setItem("role_id",role_id);
}

export function getRoleID(){
    return localStorage.getItem("role_id");
}

export function removeRoleID(){
    localStorage.removeItem("role_id");
}


export function storeUsername(username){
    localStorage.setItem("username",username);
}

export function getUsername(){
    return localStorage.getItem("username");
}

export function removeUsername(){
    localStorage.removeItem("username");
}

export function storeUserID(id){
    localStorage.setItem("user_id",id);
}

export function getUserID(){
    return localStorage.getItem("user_id");
}

export function removeUserID(){
    localStorage.removeItem("user_id");
}