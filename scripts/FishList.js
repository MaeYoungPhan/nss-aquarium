// Import the function that returns a copy of the fish array
import {getFish} from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList main"> \n <secion class="fish">'

    // Create HTML representations of each fish here 
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<div class="fish">
            <img  class="fish__img image--card" src="${fish.image}" /></div>
            <div class="fish">
            <ul class="fish__text">
            <li class="fish--property">Name:</li>
            <li class="fish--detail">${fish.name}</li>
            <li class="fish--property">Species:<li> 
            <li class="fish--detail">${fish.species}</li>
            <li class="fish--property">Length:</li> 
            <li class="fish--detail">${fish.length}</li>
            <li class="fish--property">Harvest Location:<li> 
            <li class="fish--detail">${fish.harvestLocation}</li>
            <li class="fish--property">Diet:</li> 
            <li class="fish--detail">${fish.diet}</li>
            </div>
`
    }
    htmlString += `</section> \n </article>`

    return htmlString
}