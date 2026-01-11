const jmena = [
    ["Michal", "Martin", "Jan"],
    ["Marketa", "Jana", "Adela"],
    ["Vlasta", "Zdenek", "Kristyna"]
]

const vyslednyEmail = jmena.flat().map(jmeno => `${jmeno}@firma.cz`)

console.log(vyslednyEmail)