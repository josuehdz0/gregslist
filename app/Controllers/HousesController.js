import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { housesService } from "../Services/HousesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawHouses() {
  let template = ''
  appState.houses.forEach(h=> template += h.HouseCardTemplate)
  setHTML('listings',template)
  
}

function _drawHouse(){
  // setText('listingModalLabel', `${appState.houses.name} ${appState.houses.price}`)
  // setHTML('listing-modal-body', appState.houses.HousesDetailsTemplate)
}
export class HousesController {


  constructor() {
    console.log('Hello this is the houses Controller')

    appState.on('houses',_drawHouses)
    appState.on('house',_drawHouse)
  }

  show(){
    console.log('TODO houses')
    setText('add-listing-button', 'Wanna sell your 🏡? ')
    setText('listingFormLabel', 'Sell it here!')
    setHTML('the-actual-form',House.HouseForm())


    _drawHouses()
  }

  handleFormSubmit() {
    try{
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)

      housesService.createHouse(formData)

      console.log(formData)
      form.reset()
    } catch (error){
      Pop.error(error)
    }

  }

  async deleteCar(houseId) {
    try {
      const yes = await Pop.confirm('Are you really sure you don\'t want to delete the House maybe yes?')
      if (!yes) { return } // full stop

      housesService.deleteCar(houseId)
    } catch (error) {
      Pop.error(error)
    }
  }

}
