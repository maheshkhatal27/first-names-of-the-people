const namesObj = require("./country/states/city/index");

const getPeopleInCity = (namesObj) => {
  return list.map((eachPerson) => eachPerson.firstName);
};

module.exports = getPeopleInCity;
