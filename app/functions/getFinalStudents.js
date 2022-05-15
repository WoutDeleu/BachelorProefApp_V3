import getRoles from "./getRoles";

function getFinalStudents(name) {
    if(name.length === 0) return "Not yet assigned"
    else return getRoles(name);
}

export default getFinalStudents;