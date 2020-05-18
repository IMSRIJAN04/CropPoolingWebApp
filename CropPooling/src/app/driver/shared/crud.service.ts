import { Injectable } from '@angular/core';
import { Truck } from '../shared/truck';  // truck data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
@Injectable({
  providedIn: 'root'
})

export class CrudService {

  trucksRef: AngularFireList<any>;    // Reference to truck data list, its an Observable
  truckRef: AngularFireObject<any>;   // Reference to truck object, its an Observable too

    // Inject AngularFireDatabase Dependency in Constructor
    constructor(private db: AngularFireDatabase) { }

    // Create Truck
    AddTruck(truck: Truck) {
      this.trucksRef.push({
        truckName: truck.truckName,
        truckId: truck.truckId,
        truckCapacity: truck.truckCapacity,
        truckLoad: truck.truckLoad,
        truckType: truck.truckType
     
      })
    }
  
    // Fetch Single Truck Object
    GetTruck(id: string) {
      this.truckRef = this.db.object('truck-list/' + id);
      return this.truckRef;
    }
  
    // Fetch trucks List
    GettrucksList() {
      this.trucksRef = this.db.list('trucks-list');
      return this.trucksRef;
    }  
  
    // Update truck Object
    Updatetruck(truck: Truck) {
      this.truckRef.update({
        truckName: truck.truckName,
        truckId: truck.truckId,
        truckCapacity: truck.truckCapacity,
        truckLoad: truck.truckLoad,
        truckType: truck.truckType
      })
    }  
  
    // Delete truck Object
    Deletetruck(id: string) { 
      this.truckRef = this.db.object('trucks-list/'+id);
      this.truckRef.remove();
    }

}
