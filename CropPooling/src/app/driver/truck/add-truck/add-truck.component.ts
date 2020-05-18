import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/driver/shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

@Component({
  selector: 'app-add-truck',
  templateUrl: './add-truck.component.html',
  styleUrls: ['./add-truck.component.scss']
})


export class AddTruckComponent implements OnInit {
  public truckForm: FormGroup;  // Define FormGroup to truck's form
 
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }

 
  ngOnInit() {
    this.crudApi.GettrucksList();  // Call GettrucksList() before main form is being called
    this.trucForm();              // Call truck form when component is ready
  }

  // Reactive truck form
  trucForm() {
    this.truckForm = this.fb.group({
      truckName:  ['', [Validators.required, Validators.minLength(2)]],
      truckId:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      truckCapacity:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      truckLoad:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      truckType: ['', [Validators.required, Validators.minLength(2)]],
      truckSrc: ['', [Validators.required, Validators.minLength(2)]],
      truckDes: ['', [Validators.required, Validators.minLength(2)]]
    })  
  }

  // Accessing form control using getters
  get truckName() {
    return this.truckForm.get('truckName');
  }

  get truckId() {
    return this.truckForm.get('truckId');
  }

  get truckCapacity() {
    return this.truckForm.get('truckCapacity');
  }

  get truckLoad() {
    return this.truckForm.get('truckLoad');
  }

  get truckSrc() {
    return this.truckForm.get('truckSrc');
  }

  get truckDes() {
    return this.truckForm.get('truckDes');
  }

  get truckType() {
    return this.truckForm.get('truckType');
  }

  // Reset truck form's values
  ResetForm() {
    this.truckForm.reset();
  }  
 
  submittruckData() {
    this.crudApi.AddTruck(this.truckForm.value); // Submit truck data using CRUD API
    this.toastr.success(this.truckForm.controls['truckName'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   };

}
