import removeFirstAndLast from "../../removeFirstAndLast";
const qs = require("qs");
import backendURL from "../../../backendURL";
const axios = require("axios");


const removeFromFavorites = async (subject,ownId,token) => {
    let axios = require('axios');
    let qs = require('qs');
    ownId = removeFirstAndLast(ownId);
    let data = qs.stringify({
        'userId': parseInt(ownId),
        'subjectId': subject.id,
    });
    let config = {
        method: 'delete',
        url: backendURL + '/userManagement/users/student/favouriteSubject',
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(token),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };
    axios(config)
        // .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        // })
        .catch(function (error) {
            console.log(error);
        });
}

export default removeFromFavorites;
