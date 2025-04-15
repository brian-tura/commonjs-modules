const getFullName = require('./name.js');
const getHobbies = require('./hobbies.js');

const getInfo = () => {
    return {
        fullName: getFullName('Brian', 'Tura'),
        hobbies: getHobbies('Videogames', 'Apicoltura', 'IDK')
    }
}

console.log(getInfo());