import { DockList } from "./docksList.js";
import { HaulerList } from "./haulersList.js";
import { shipList } from "./shipList.js";

let mainElement = document.getElementById("container")


const docks = DockList()
const haulers = HaulerList()
const ships = shipList()

mainElement.innerHTML = `${docks}${haulers}${ships}`