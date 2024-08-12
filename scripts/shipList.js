import { getShippingShips, getHaulingShips } from "./database.js";

export const shipList = () => {
    const ships = getShippingShips()
    const sortedShips = ships.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    let shipsHTML = `<ul class="ulParent">`

    for (const ship of ships) {
        // Convert each ship object to an <li> and append to the shipsHTML string
        shipsHTML += `<li data-name="${ship.name}" data-type="ship" data-haulerId="${ship.haulerId}" class="ulChild">${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

let haulers = getHaulingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "ship") {
            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.haulerid
            console.log(haulerId)
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler 
            for (const hauler of haulers) {
                if (parseInt(haulerId) === hauler.id ) {
                    // const haulerName = hauler.name
                    // haulingShip.name = haulerName
                    haulingShip.name = hauler.name
                    break
                }
            }

                // Does the haulerId foreign key match the id of the current hauler?

                    // Reassign the value of `haulingShip` to the current hauler

            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }
)