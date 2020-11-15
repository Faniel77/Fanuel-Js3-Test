/*
  This list gives the ids of all the great houses that we want to look up.
  It should be inserted into the html above all the other files to ensure it is available
*/
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

function fetchHouseData(arr) {
  arr.map(house => {
      let housesUrl = `https://anapioficeandfire.com/api/houses/${house}`;
      fetch(housesUrl)
      .then(response => {
        return response.json();
      })
      .then(parsedData => {
        //console.log(parsedData.currentLord);
        let currentLord = parsedData.currentLord;


        // This will render the House Name 
        let gotHouse = document.createElement('div');
        gotHouse.className = 'got-house'; 
        let houseTitle = document.createElement ('h1');
        houseTitle.textContent = parsedData.name;
        houseTitle.className = 'got-house__title';

        //This was intended to render the currentLord 
        fetch(currentLord)
        .then(data => {
          return data.json(); 
        })
        .then( realData => {
          console.log(realData.name); 
        let currentLordName = document.createElement('span');
        currentLordName.textContent = parsedData.currentLord;
        currentLordName.className = 'got-house__current-lord';
        gotHouse.appendChild(currentLordName);
        })
        

        gotHouse.appendChild(houseTitle);
        document.body.appendChild(gotHouse);


      })
      
    });

    
  }

  fetchHouseData(houseIdList);

  
