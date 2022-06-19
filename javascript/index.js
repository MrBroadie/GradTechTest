// function that checks if a sport exists in the table and creates it if not
function createMedalTable(medals) {
  //create object to hold medal totals
  const medalTable = {};
  medals.map(sport => {
    return sport.podium.map(country => {
      //map returns automatically, forEach doesn't
      country = country.slice(2)
      if(!medalTable[country]) medalTable[country] = 0;
    })
  })
  // helper function to add medals to table
  addMedalsToTable(medals, medalTable);
  // helper function to sort medal table into order
  return sortTable(medalTable);
}

function addMedalsToTable(medals, medalTable) {
  medals.map(sport => {
    // The winner gets 3 points, second place 2 points and third place 1 point
    sport.podium.forEach(country => {
      //get position out of string and convert to number type
      const position = +country.slice(0, 1)
      country = country.slice(2);
      position === 1 ? medalTable[country] =  medalTable[country] + 3 
        : position === 2 ? medalTable[country] = medalTable[country] + 2
          : position === 3 ? medalTable[country] = medalTable[country] + 1
            : console.log(`${country} is out of medal range in ${sport.sport}`);
    })
  })
}

function sortTable(medalTable) {
  const sortedTable = Object.fromEntries(
    Object.entries(medalTable).sort(([,a],[,b]) => b - a)
  );
  return sortedTable;
}

console.log()
module.exports = createMedalTable;