const createMedalTable = require('./index');

describe('Medal Table Generator', () => {
  // Test function, please do not edit
  it('creates correct data structure ', () => {
    // Input data
    const medals = [{
      sport: 'cycling',
      podium: ['1.China', '2.Germany', '3.ROC']
    },
    {
      sport: 'fencing',
      podium: ['1.ROC', '2.France', '3.Italy']
    },
    {
      sport: 'high jump',
      podium: ['1.Italy', '2.Qatar', '3.Belarus']
    },
    {
      sport: 'swimming',
      podium: ['1.USA', '2.France', '3.Brazil']
    }
    ];

    // Expected output data
    const medalTable = {
      'Italy': 4,
      'France': 4,
      'ROC': 4,
      'USA': 3,
      'China': 3,
      'Qatar': 2,
      'Germany': 2,
      'Brazil': 1,
      'Belarus': 1,
    };

    const actualResult = createMedalTable(medals);
    expect(actualResult).toMatchObject(medalTable);
  });
});