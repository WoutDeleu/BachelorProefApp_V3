

function getBoosted(name) {
    let ret = "";
    if(name.length === 0) return "Not yet assigned"
    else {
        for(let i=0; i<name.length; i++) {
            if(i===0) ret = name[i].lastName + " "  + name[i].firstName;
            else ret = ret + ", " + name[i].lastName + " "  + name[i].firstName;
        }
        return ret;
    }
}

export default getBoosted;