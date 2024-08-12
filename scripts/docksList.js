import { getDocks, getHaulingShips } from "./database.js"


export const DockList = () => {
    const docks = getDocks()
    const sortedDocks = docks.sort(function(a, b) {
        return a.location.localeCompare(b.location);
    });
    console.log(sortedDocks)

    let docksHTML = `<ul class="ulParent">`

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-loc="${dock.location}" data-type="dock" data-id="${dock.id}" class="ulChild">${dock.location} || Capacity: ${dock.volume}</li>`
    }

    docksHTML += `</ul>`

    return docksHTML
}

let haulerData = getHaulingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // GET DOCK ID
        const dockID = itemClicked.dataset.id
        const dockLoc = itemClicked.dataset.loc
        let haulerName = []

        if (itemClicked.dataset.type === "dock") {

        // ITERATE HAULERS TO MATCH DOCK ID
        for (let hauler of haulerData) {
             if (parseInt(dockID) === hauler.dockId) {
            haulerName.push(hauler.name)
        }
        }
        if (haulerName.length === 0) {
            haulerName.push("nothing")
        }
        window.alert(`The ${dockLoc} dock is currently unloading ${haulerName.join(", ")}`)
      }
    }
)