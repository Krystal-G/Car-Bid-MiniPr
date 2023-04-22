let cityMap = new Map([    ["Indian Institute of Information Technology Lucknow", new Map([        ["Lohia Park", 1.3],
        ["Amul Dairy", 1.8],
        ["Fun Republic Mall", 2.4],
        ["Phoenix United Mall", 2.9],
        ["Hazratganj", 6.8]
    ])],
    ["Lohia Park", new Map([        ["Indian Institute of Information Technology Lucknow", 1.3],
        ["Amul Dairy", 2.5],
        ["Ambedkar Park", 4.2]
    ])],
    ["Amul Dairy", new Map([        ["Indian Institute of Information Technology Lucknow", 1.8],
        ["Lohia Park", 2.5],
        ["Janeshwar Mishra Park", 8.2],
        ["Hazratganj", 6.5]
    ])],
    ["Fun Republic Mall", new Map([        ["Indian Institute of Information Technology Lucknow", 2.4],
        ["Phoenix United Mall", 1.5],
        ["Hazratganj", 7.1]
    ])],
    ["Phoenix United Mall", new Map([        ["Indian Institute of Information Technology Lucknow", 2.9],
        ["Fun Republic Mall", 1.5],
        ["Hazratganj", 7.7]
    ])],
    ["Hazratganj", new Map([        ["Indian Institute of Information Technology Lucknow", 6.8],
        ["Amul Dairy", 6.5],
        ["Fun Republic Mall", 7.1],
        ["Phoenix United Mall", 7.7]
    ])],
    ["Ambedkar Park", new Map([        ["Lohia Park", 4.2],
        ["Janeshwar Mishra Park", 7.6]
    ])],
    ["Janeshwar Mishra Park", new Map([        ["Amul Dairy", 8.2],
        ["Ambedkar Park", 7.6],
        ["Gomti Nagar", 11.5]
    ])],
    ["Gomti Nagar", new Map([        ["Janeshwar Mishra Park", 11.5],
        ["Indira Gandhi Pratishthan", 5.3],
        ["Chaudhary Charan Singh International Airport", 23.4]
    ])],
    ["Indira Gandhi Pratishthan", new Map([        ["Gomti Nagar", 5.3],
        ["Chaudhary Charan Singh International Airport", 16.5]
    ])],
    ["Chaudhary Charan Singh International Airport", new Map([        ["Gomti Nagar", 23.4],
        ["Indira Gandhi Pratishthan", 16.5]
    ])]
]);

module.exports = cityMap;