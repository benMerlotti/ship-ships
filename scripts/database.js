const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Big Boy", dockId: 2},
        { id: 2, name: "The Boatest of All Time", dockId: 2},
        { id: 3, name: "Flotay", dockId: 3},
        { id: 4, name: "Deep Dive", dockId: 4}
    ],
    shippingShips: [
        { id: 1, name: "Sea Breeze", haulerId: 3},
        { id: 2, name: "Ocean Voyager", haulerId: 3},
        { id: 3, name: "Aquaholic", haulerId: 3},
        { id: 4, name: "Nautical Dream", haulerId: 4},
        { id: 5, name: "Serenity", haulerId: 2},
        { id: 6, name: "Wave Rider", haulerId: 1},
        { id: 7, name: "Mariner's Bliss", haulerId: 3},
        { id: 8, name: "Sail Away", haulerId: 4}
    ]
}

export const getDocks = () => {
    // You write the code for copying the array and returning it
    return database.docks.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
    // You write the code for copying the array and returning it
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShippingShips = () => {
    // You write the code for copying the array and returning it
    return database.shippingShips.map(ship => ({...ship}))
}