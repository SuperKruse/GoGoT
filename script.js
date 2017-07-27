
const bets = [
    {
        "id": "simon",
        "name": "Simon Kruse",
        "deadpool": ["cersei", "theon", "mountain", "melisandre", "euron"]
    }, {
        "id": "anders",
        "name": "Anders",
        "deadpool": ["mountain", "cersei", "grey", "jorah", "tormund"]
    }, {
        "id": "jan",
        "name": "Jan",
        "deadpool": ["jorah", "euron", "melisandre", "tormund", "mountain"]
    }, {
        "id": "emil",
        "name": "Emil",
        "deadpool": ["petyr", "ellaria", "euron", "mountain", "melisandre"]
    }, {
        "id": "lone",
        "name": "Lone",
        "deadpool": ["cersei", "ilyn", "mountain", "melisandre", "theon"]
    }
]

const characters = [
    {
        id: 'cersei',
        name: 'Cersei Lannister',
        picture: 'cersei.webp',
        status: 'alive'
    }, {
        id: 'mountain',
        name: 'Gregor Clegane<br>(The Mountain)',
        picture: 'gregor-clegane.jpg',
        status: 'alive'
    }, {
        id: 'theon',
        name: 'Theon Greyjoy',
        picture: 'theon-greyjoy.webp',
        status: 'alive'
    }, {
        id: 'melisandre',
        name: 'Melisandre',
        picture: 'melisandre.webp',
        status: 'alive'
    }, {
        id: 'euron',
        name: 'Euron Greyjoy',
        picture: 'euron-greyjoy.jpg',
        status: 'alive'
    }, {
        id: 'hound',
        name: 'Sandor Clegane<br>(The Hound)',
        picture: 'The_Hound.webp',
        status: 'alive'
    }, {
        id: 'grey',
        name: 'Grey Worm',
        picture: 'grey-worm.webp',
        status: 'alive'
    }, {
        id: 'jorah',
        name: 'Jorah Mormont',
        picture: 'jorah-mormont.webp',
        status: 'alive'
    }, {
        id: 'tormund',
        name: 'Tormund Giantsbane',
        picture: 'tormund-giantsbane.webp',
        status: 'alive'
    }, {
        id: 'petyr',
        name: 'Petyr Baelish',
        picture: 'petyr-baelish.webp',
        status: 'alive'
    }, {
        id: 'ellaria',
        name: 'Ellaria Sand',
        picture: 'ellaria-sand.webp',
        status: 'alive'
    }, {
        id: 'ilyn',
        name: 'Ilyn Payne',
        picture: 'ilyn-payne.jpg',
        status: 'alive'
    }
]

const container = document.getElementsByClassName("container")[0]

//Adds owners name and div's for persons in the deadpool
const addName = function (person) {
    const motherDiv = `<div class="deadpool">
    <div class="ownerName">${person.name}</div> 
    <div class="persons" id="${person.id}"> </div>
    </div>`
    container.insertAdjacentHTML('beforeend', motherDiv)
}

//Adds a person with pic and name, and colors the pic if the person is dead
const addPerson = function (person, ownerId) {
    const deadpoolCon = document.getElementById(ownerId)
    const motherDiv = ` <div class="item ${person.status}" id=" ${person.id}">
            <img src="./pictures/${person.picture}">
            <div class="name">${person.name}</div>
        </div>`
    deadpoolCon.insertAdjacentHTML('beforeend', motherDiv)
}

//Creates a new array with the deadpool array filled with the full character objects
const fullBets = bets.map(bet => {
    return {
        id: bet.id,
        name: bet.name,
        deadpool: characters.filter((char) => bet.deadpool.find((deadpoolCharacter) => deadpoolCharacter === char.id))
    }
})

fullBets.forEach(bet => {
    addName(bet)
    const userDeadpool = document.getElementById(bet.name)
    bet
        .deadpool
        .forEach(deadpoolPerson => {
            addPerson(deadpoolPerson, bet.id)
        })
})
