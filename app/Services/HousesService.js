import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js"

class HousesService {

  deleteHouse(houseId){
    let houseIndex = appState.houses.findIndex(h=>h.id==houseId)

    if(houseIndex==-1){
    throw new Error('This is not a house id 🫠')
  }

  appState.houses.splice(houseIndex,1)
  saveState('houses',appState.houses)
  appState.emit('houses')
 }
}
// singleton pattern more on this later
export const housesService = new HousesService()