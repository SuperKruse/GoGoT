# GoGoT - Game of Game of Thrones

A Game of Thrones deadpool written in html5 - Extremely simple and featureless.
There is no backend. Everything is in the three files index, script and style.

## Data management
All data are stored in script.js.

### Add person
Persons are placed in the bets array.
```
{
        id: 'simon',
        name: 'Simon Kruse',
        deadpoo": ['cersei', 'theon', 'mountain', 'melisandre', 'euron']
}
```
The id in "deadpool" must match the id in characters.

### Add character
Characters are placed in the characters array
```
{
        id: 'cersei',
        name: 'Cersei Lannister',
        picture: 'cersei.webp',
        status: 'alive' | 'dead'
}
```

If the character's status is set to dead will the characters picture fade.
