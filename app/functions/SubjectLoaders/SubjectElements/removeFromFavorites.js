import removeFirstAndLast from "../../removeFirstAndLast";
import backendURL from "../../../backendURL";

const removeFromFavorites = async (subject,ownId,token) => {
    let axios = require('axios');
    let qs = require('qs');
    let data = qs.stringify({
        'userId': ownId,
        'subjectId': subject.id,
    });
    console.log(data)
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
