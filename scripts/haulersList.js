import { getHaulingShips, getShippingShips } from "./database.js"

export const HaulerList = () => {
    const haulers = getHaulingShips()
    const sortedHaulers = haulers.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
    console.log(sortedHaulers)

    let haulersHTML = `<ul class="ulParent">`

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        haulersHTML += `<li data-id="${hauler.id}" data-type="hauler" class="ulChild">${hauler.name} || Dock: ${hauler.dockId}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}

let ships = getShippingShips ()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
       if (itemClicked.dataset.type === "hauler") {
            // Get the id of the hauler clicked
            let haulerIndex = itemClicked.dataset.id
            // Start a counter variable at 0
            let counter = 0
            // Iterate all of the shipping ships
            for (let ship of ships) {
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerIndex) === ship.haulerId) {
                    // Increase the counter by 1
                    counter++
                }
            }
            window.alert(`This hauler is carrying ${counter} ships`)
       }

    }
)