import removeFirstAndLast from "../../removeFirstAndLast";
import backendURL from "../../../backendURL";


const addToFavorites = async (subject,ownId,token) => {
    let axios = require('axios');
    let qs = require('qs');
    let data = qs.stringify({
        'userId': ownId,
        'subjectId': subject.id,
    });
    let config = {
        method: 'post',
        url: backendURL + '/userManagement/users/student/addFavouriteSubject',
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(token),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };
    axios(config)
        .then(function (response) {

        })
        .catch(function (error) {
            console.log(error);
        });
}

export default addToFavorites;
