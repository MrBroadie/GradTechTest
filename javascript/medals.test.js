//function that checks if a sport exists in the table and creates it if not
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
        let counter = 0;
        // The winner gets 3 points, second place 2 points and third place 1 point
        sport.podium.forEach(country => {
            country = country.slice(2);
            counter === 0 ? medalTable[country] =  medalTable[country] + 3 
            : counter === 1 ? medalTable[country] = medalTable[country] + 2
            : counter === 2 ? medalTable[country] = medalTable[country] + 1
            : console.log(`${country} is out of medal range in ${sport.sport}`);
            counter++;
        })
    })
}

function sortTable(medalTable) {
    const sortedTable = Object.fromEntries(
        Object.entries(medalTable).sort(([,a],[,b]) => b - a)
    );
    return sortedTable;
}

describe("Medal Table Generator", () => {
    // Test function, please do not edit
    it("creates correct data structure ", () => {
        // Input data
        const medals = [{
                sport: "cycling",
                podium: ["1.China", "2.Germany", "3.ROC"]
            },
            {
                sport: "fencing",
                podium: ["1.ROC", "2.France", "3.Italy"]
            },
            {
                sport: "high jump",
                podium: ["1.Italy", "2.Qatar", "3.Belarus"]
            },
            {
                sport: "swimming",
                podium: ["1.USA", "2.France", "3.Brazil"]
            }
        ];

        // Expected output data
        const medalTable = {
            "Italy": 4,
            "France": 4,
            "ROC": 4,
            "USA": 3,
            "China": 3,
            "Qatar": 2,
            "Germany": 2,
            "Brazil": 1,
            "Belarus": 1,
        };

        const actualResult = createMedalTable(medals);
        expect(actualResult).toMatchObject(medalTable);
    });
});