'use strict'; 

const houseIdList = [
  7, // Eyrie
  17, // Baratheon
  169, // Greyjoy
  229, // Lannister
  362, // Stark
  378, // Targaryen
  395, // Tully
  398, // Tyrell
];
 
function fetchCurrentLord(arr2) {
  arr2.map(house => {
      let housesUrl = `https://anapioficeandfire.com/api/characters/${house}`;
      fetch(housesUrl)
      .then(response => {
        return response.json();
      })
      .then(parsedData => {
        console.log(parsedData);

      });
  });
}
fetchCurrentLord(houseIdList);

