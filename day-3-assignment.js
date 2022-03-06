/* 
**********
DAY 3 ASSIGNMENT
**********

Assignment tasks: https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit?usp=sharing

*/


/* 1. FOR THE GIVEN JSON ITERATE OVER ALL THE FOR LOOPS (for, for in, for of, forEach).
*/

let people = [
    {
        "fname": "John",
        "lname": "Smith",
        "age": 21,
        "designation": "Master",
        "experience": 6,
    },
    {
        "fname": "Bob",
        "lname": "Marley",
        "age": 25,
        "designation": 'Producer',
        "experience": 10
    },
    {
        "fname": "Phineas",
        "lname": 'Flynn',
        "age": 10,
        "designaion": "Researcher",
        "experience": 2
    },
    {
        "fname": "Luke",
        "lname": "Skywalker",
        "age": 26,
        "designation": "Security Manager",
        "experience": 5
    },
    {
        "fname": "Jack",
        "lname": "Sparrow",
        "age": 35,
        "designation": "Shipping",
        "experience": 12,
    },
    {
        "fname": "Spongebob",
        "lname": "Squarepants",
        "age": 22,
        "designation": "Chef",
        "experience": 3
    },
    {
        "fname": "Shaggy",
        "lname": "Rogers",
        "age": 31,
        "designation": "Analyst",
        "experience": 7
    },
    {
        "fname": "Richie",
        "lname": "Stallman",
        "age": 54,
        "designation": "IT Head",
        "experience": 30,
    },
    {
        "fname": "Harland",
        "lname": "Sanders",
        "age": 60,
        "designation": "Marketing coordinator",
        "experience": 32
    },
    {
        "fname": "Patrizia",
        "lname": "Reggiani",
        "age": 35,
        "designation": "Quality Control Officer",
        "experience": 14
    }
]


// For Loop, For In Loop
for(let i = 0; i < people.length; i++) {
    console.log(`\n`)

    for(let key in people[i]) {
        console.log(`${key}: ${people[i][key]}`)
    }
}


// For Of Loop 
for(person of people) {
    console.log(`\n`)

    for(let key in person) {
        console.log(`${key}: ${person[key]}`)
    }
}


// forEach loop
people.forEach(person => {
    console.log('\n')
    
    for(let key in person) {
        console.log(`${key}: ${person[key]}`)
    }
})

/* ==================== */


/* 2. CREATE YOUR OWN REDUME DATA IN JSON FORMAT.
*/

let myResume = {
    "fname": "Bob",
    "lname": "Smith",
    "age": 29,
    "role": "Full-Stack Developer",
    "techStack": "MERN",
    "languages": ["JavaScript", "Nodejs", "HTML", "CSS"],
    "education": [
        {
            "qualification": "Post Graduation",
            "subject": "History",
            "year": 2019
        },
        {
            "qualification": "Graduation",
            "subject": "Commerce",
            "year": 2014
        } 
    ]
}

/* ==================== */