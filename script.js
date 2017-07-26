
const bets = [
    {
        "id": "simon",
        "name": "Simon Kruse",
        "deadpool": ["cersei", "theon", "mountain", "melisandre", "euron"]
    }, {
        "id": "anders",
        "name": "Anders",
        "deadpool": ["hound", "theon", "mountain", "melisandre", "euron"]
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
        id: '',
        name: 'The hound',
        picture: 'gregor-clegane.jpg',
        status: 'alive'
    }
]

const container = document.getElementsByClassName("container")[0]

//Adds owners name and div's for persons in the deadpool
const addName = function (person) {
    const motherDiv = `<div class="deadpool">
    <div class="ownerName">${person.name}'s kandidater</div> 
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

bets.forEach(bet => {
    addName(bet)
    const userDeadpool = document.getElementById(bet.name)
    bet
        .deadpool
        .forEach(deadpoolPerson => {
            const foundcharecter = characters.find((char) => char.id == deadpoolPerson)
            addPerson(foundcharecter, bet.id)
        })
})
