import removeFirstAndLast from "../../removeFirstAndLast";
import backendURL from "../../../backendURL";
import getFromStore from "../../getFromStore";


const addToFavorites = async (subject,token) => {
    let ownId2 = await getFromStore("ownId");
    ownId2 = removeFirstAndLast(ownId2)
    let axios = require('axios');
    let qs = require('qs');
    let data = qs.stringify({
        'userId': ownId2,
        'subjectId': subject.id,
    });
    console.log('Bearer ' + token)
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
