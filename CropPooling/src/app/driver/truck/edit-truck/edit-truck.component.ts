import { Component, OnInit, AfterViewInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/driver/shared/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-truck',
  templateUrl: './edit-truck.component.html',
  styleUrls: ['./edit-truck.component.scss']
})
export class EditTruckComponent implements OnInit {

  editForm: FormGroup;  // Define FormGroup to student's edit form
  constructor(
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ) { }

  ngOnInit() {
    this.updateTruckData();   // Call updateStudentData() as soon as the component is ready 
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.GetTruck(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
    })
  }

  // Accessing form control using getters
  get truckName() {
    return this.editForm.get('truckName');
  }

  get truckId() {
    return this.editForm.get('truckId');
  }

  get truckCapacity() {
    return this.editForm.get('truckCapacity');
  }

  get truckLoad() {
    return this.editForm.get('truckLoad');
  }

  get truckSrc() {
    return this.editForm.get('truckSrc');
  }

  get truckDes() {
    return this.editForm.get('truckDes');
  }

  get truckType() {
    return this.editForm.get('truckType');
  }

  updateTruckData() {
    this.editForm = this.fb.group({
      truckName:  ['', [Validators.required, Validators.minLength(2)]],
      truckId:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      truckCapacity:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      truckLoad:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      truckType: ['', [Validators.required, Validators.minLength(2)]],
      truckSrc: ['', [Validators.required, Validators.minLength(2)]],
      truckDes: ['', [Validators.required, Validators.minLength(2)]]
    })  
  }

  
  // Go back to previous component
  goBack() {
    this.location.back();
  }
  // Below methods fire when somebody click on submit button
  updateForm(){
    console.log("yes");
    this.crudApi.Updatetruck(this.editForm.value);       // Update student data using CRUD API
    this.toastr.success(this.editForm.controls['truckName'].value + ' updated successfully');   // Show succes message when data is successfully submited
    this.router.navigate(['view-trucks']);               // Navigate to student's list page when student data is updated
  }


}
