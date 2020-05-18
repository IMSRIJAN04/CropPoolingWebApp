import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/driver/shared/crud.service';  // CRUD API service class
import { Truck } from 'src/app/driver/shared/truck';   // Student interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr


@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit {

  p: number = 1;                      // Settup up pagination variable
  Truck: Truck[];                 // Save students data in Student's array.
  hideWhenNoTruck: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true; 

  constructor(
    public crudApi: CrudService,
    public toastr: ToastrService 
  ) { }

  ngOnInit() {
    this.dataState(); // Initialize student's list, when component is ready
    let s = this.crudApi.GettrucksList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Truck = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Truck.push(a as Truck);
      })
    })
  }
 // Using valueChanges() method to fetch simple list of students data. It updates the state of hideWhenNoStudent, noData & preLoader variables when any changes occurs in student data list in real-time.
  dataState() {     
   this.crudApi.GettrucksList().valueChanges().subscribe(data => {
    this.preLoader = false;
    if(data.length <= 0){
      this.hideWhenNoTruck = false;
      this.noData = true;
    } else {
      this.hideWhenNoTruck = true;
      this.noData = false;
    }
  })
 }

  // Method to delete student object
   deleteTruck(truck) {
    if (window.confirm('Are sure you want to delete this truck ?')) { // Asking from user before Deleting student data.
      this.crudApi.Deletetruck(truck.$key) // Using Delete student API to delete student.
      this.toastr.success(truck.truckName + ' successfully deleted!'); // Alert message will show up when student successfully deleted.
    }
   }
}
