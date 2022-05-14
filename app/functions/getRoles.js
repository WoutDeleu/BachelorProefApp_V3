function getRoles(roles) {
    if(roles===null) return "not defined";
    let roles_names = [];
    for(let i =0; i<roles.length; i++) {
        roles_names.push(roles[i].name);
    }
    let stringRoles="";
    for(let i = 0; i<roles.length; i++) {
        if(i===0) stringRoles = roles[i].name;
        else stringRoles = stringRoles + ", \n" + roles[i].name;
    }
    return stringRoles;
}

export default getRoles;