import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
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

 setActiveHouse(houseId){
  const house = appState.houses.find(h=>h.id == houseId)

  // const house = appState.houses.find( h => h.id == houseId)
  if (!house){
    throw new Error('there is no house with that id')
  }
  appState.house = house
 }




  createHouse(formData) {
    let house = new House(formData)

    appState.houses.push(house)
    appState.emit('houses')
    saveState('houses',appState.houses)

  }

}
// singleton pattern more on this later
export const housesService = new HousesService()