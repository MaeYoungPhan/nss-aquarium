/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            image: "https://www.tankfacts.com/photos/12/Articles/freshwater_pufferfish.jpg",
            name: "Bart",
            species: "Ocellated pufferfish",
            harvestLocation: "Mekong River",
            length: "3 inches",
            diet: "crustaceans"
            
        },
        {
            id: 2,
            image: "https://www.thesprucepets.com/thmb/1mzNuO0Z4jlUnm7Uschss0QdZSY=/2121x1414/filters:fill(auto,1)/GettyImages-1209874964-462370fea7814eb3b216ac2a47327409.jpg",
            name: "Simba",
            species: "Lionfish",
            harvestLocation: "Indian Ocean",
            length: "16 inches",
            diet: "crustaceans and fish"
            
        },
        {
            id: 3,
            image: "https://cdn.mos.cms.futurecdn.net/BgZFhT7piMqXpyzfWrdKyP.jpg",
            name: "Dory",
            species: "Royal Blue Tang",
            harvestLocation: "Great Barrier Reef",
            length: "10 inches",
            diet: "algae"
            
        },
        {
            id: 4,
            image: "https://i1.wp.com/www.sharkophile.com/wp-content/uploads/2019/01/dwarflantern.jpg?fit=600%2C400&ssl=1",
            name: "Baby Jaws",
            species: "Dwarf Lantern Shark",
            harvestLocation: "Carribean Sea",
            length: "7 inches",
            diet: "shrimp and small fish"
            
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

// console.log(database)