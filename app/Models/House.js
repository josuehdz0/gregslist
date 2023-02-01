import { generateId } from "../Utils/generateId.js";


export class House {
  constructor(data){
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }


  get HouseCardTemplate(){
    return /*html*/`
    <div class="col-md-4 my-3">
    <div class="card elevation-2 car" onclick="app.HousesController.setActiveHouse('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
      <img
        src="${this.imgUrl}"
        alt="${this.name}" class="rounded">
      <p><b>${this.name} ${this.bedrooms}b/${this.bathrooms}bth - $${this.price}</b></p>
    </div>
  </div>
    `
  }

  get HouseDetailsTemplate(){
    return /*html*/`
      <div>
        <button class="btn btn-danger" data-bs-dismiss="modal" onclick="app.housesController.deleteHouse('${this.id}')">DELETE THE House!!!!!</button>
      </div>
    `
  }

  static HouseForm() {
    return /*html*/`
    <form onsubmit="app.carsController.handleFormSubmit()">

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="name" required minlength="3" maxlength="30">
          <label for="name">Name</label>
        </div>

        
        
        <div class="row">

        <div class="col-6">
        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="bedrooms" required>
          <label for="bedrooms">Bedrooms</label>
        </div>
        </div>

        <div class="col-6">
        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="bathrooms" required>
          <label for="bathrooms">Bathrooms</label>
       </div>
        </div>
        
        
        </div>
        
        
        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="price" required min="0">
          <label for="price"> Price</label>
        </div>
        


        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="year" required min="1886" max="9999">
          <label for="year">Year</label>
        </div>

        <div class="form-floating mb-3">
          <input type="url" class="form-control" name="imgUrl">
          <label for="imgUrl">Image Url <i>(We are too lazy for uploads)</i></label>
        </div>

        <div class="form-floating">
          <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
          <label for="description">Description</label>
        </div>

        <div class="d-flex my-4 gap-5 align-items-center">
          <button class="btn" type="reset">Cancel</button>
          <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit</button>
        </div>

      </form>
    `
  }

 }
