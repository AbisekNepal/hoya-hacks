// Function to parse URL parameters
function getURLParams() {
    var params = new URLSearchParams(window.location.search);
    var formData = {};
    for (var pair of params.entries()) {
        formData[pair[0]] = pair[1];
    }
    return formData;
}

// Function to calculate carbon emissions for air travel from a specific state to Virginia
function calculateCarbonEmission(state) {
    // Define average distances from each state capital to Richmond, Virginia (in miles)
    var stateDistances = {
        'AL': 733, 'AK': 3378, 'AZ': 2136, 'AR': 850, 'CA': 2402, 'CO': 1543,
        'CT': 371, 'DE': 127, 'FL': 792, 'GA': 536, 'HI': 4843, 'ID': 2085,
        'IL': 644, 'IN': 532, 'IA': 904, 'KS': 1026, 'KY': 476, 'LA': 1078,
        'ME': 643, 'MD': 120, 'MA': 535, 'MI': 574, 'MN': 1147, 'MS': 954,
        'MO': 831, 'MT': 1997, 'NE': 1067, 'NV': 2222, 'NH': 548, 'NJ': 248,
        'NM': 1691, 'NY': 335, 'NC': 246, 'ND': 1399, 'OH': 350, 'OK': 1144,
        'OR': 2414, 'PA': 237, 'RI': 442, 'SC': 394, 'SD': 1345, 'TN': 433,
        'TX': 1329, 'UT': 1834, 'VT': 525, 'VA': 0, 'WA': 2378, 'WV': 205,
        'WI': 754, 'WY': 1521
    };

    // Define average emissions per passenger-mile for domestic flights (in kg CO2)
    var emissionsPerMile = 0.20;

    // Define the distance from the specified state to Virginia
    var distanceToVirginia = stateDistances[state];

    // Calculate emissions for the specified state
    var totalEmissions = distanceToVirginia * emissionsPerMile;

    return totalEmissions.toFixed(2); // Return total emissions rounded to 2 decimal places
}
// Function to get a random club recommendation from the provided list
function getRandomClubRecommendation() {
    var clubs = [
        "ASSOCIATION FOR CAMPUS EVENTS (ACE)",
        "AMERICAN MEDICAL STUDENT ASSOCIATION, MARYMOUNT CHAPTER",
        "BLUE CREW",
        "CHEER TEAM",
        "CO-CURRICULAR COUNCIL",
        "COMMUTER ACTIVITIES BOARD",
        "CAMPUS CRUSADE FOR CHRIST (CRU)",
        "DANCE TEAM",
        "FASHION CLUB",
        "FILM CLUB",
        "FULL SPECTRUM",
        "INTERNATIONAL AFFAIRS SOCIETY (IAS)",
        "LADIES INSPIRING STRENGTH FOR TOMORROW (L.I.S.T.)",
        "MARYMOUNT ACTORS GUILD (MAG)",
        "MARYTHON",
        "RESPECT LIFE CLUB",
        "SCIENCE CLUB",
        "STUDENT GOVERNMENT ASSOCIATION (SGA)",
        "STUDENT NURSING ASSOCIATION (SNA)"
    ];

    var randomIndex = Math.floor(Math.random() * clubs.length);
    return clubs[randomIndex];
}
var randomClubRecommendation = getRandomClubRecommendation();


// Get form data from URL parameters
var formData = getURLParams();

// Display form data in thank you message
document.getElementById('fullName').textContent = formData.firstName + ' ' + formData.lastName;

// Calculate and display carbon emissions
var state = formData.state;
var carbonEmission = calculateCarbonEmission(state);
document.getElementById('carbonEmission').innerHTML = "Since you are traveling from " + state + ", your airplane carbon emission would be " + carbonEmission + " kg CO2. You can <a href='https://marketplace.goldstandard.org/collections/projects' target='_blank'>visit this page</a> to offset your carbon footprint by buying credits.";

// Function to get ethnicity clubs based on race
function getEthnicityClubs(race) {
    // Example clubs
    var ethnicityClubs = {
        "hispanic": ["LATINO STUDENT ASSOCIATION"],
        "americanIndian": ["INTERNATIONAL CLUB"],
        "asian": ["SOUTH ASIAN SOCIETY (SAS)", "SAUDI STUDENT ASSOCIATION"],
        "black": ["BLACK STUDENT ALLIANCE (BSA)", "AFRICAN CARIBBEAN STUDENT ASSOCIATION (ACSA)"],
        "hawaiian": ["INTERNATIONAL CLUB"],
        "multiple": ["INTERNATIONAL CLUB"],
        "white": ["INTERNATIONAL CLUB"],
        "other": ["INTERNATIONAL CLUB"]
    };
    return ethnicityClubs[race.toLowerCase()] || [];
}

// Display ethnicity clubs based on race
var race = formData.race.toLowerCase();
var ethnicityClubs = getEthnicityClubs(race);
if (ethnicityClubs.length > 0) {
    document.getElementById('ethnicityClubs').textContent = "Diversity is an important issue here at MU, here are the clubs that we recommend you to join in Marymount: " + ethnicityClubs.join(", ") + ", " + randomClubRecommendation;
} else {
    document.getElementById('ethnicityClubs').textContent = "There are currently no recommended clubs based on your race at Marymount.";
}

