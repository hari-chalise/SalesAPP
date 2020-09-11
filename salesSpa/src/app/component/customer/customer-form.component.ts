import { CustomerService } from './customer.service';
import { Component, OnInit, Inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeUntil, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerFormComponent implements OnInit, AfterViewInit {
  private readonly toDestroy$ = new Subject<void>();
  customerForm!: FormGroup;

  constructor(private fb : FormBuilder,
              private cService: CustomerService,
              private dialog: MatDialog,
              private cdr: ChangeDetectorRef,
              private dialogRef: MatDialogRef<CustomerFormComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: {id : number}) { }

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.customerForm = this.fb.group({
      id: 0,
      customerId: [null, Validators.required],
      customerName: [null, Validators.required],
      customerAddress: null,
      emailAddress: null,

    });
  }

  saveChanges() {
    this.cService.addOrUpdate(this.customerForm.value)
    .subscribe(res =>
      this.dialogRef.close(res));
  }


  private patchForm(c: any) {
    this.customerForm.patchValue({
      id: c.id,
      customerId: c.customerId,
      customerName: c.customerName,
      customerAddress: c.customerAddress,
      emailAddress: c.emailAddress,
    });

  }
ngAfterViewInit() {
  if (this.data.id > 0) {
    this.cService.getListById(this.data.id)
    .pipe(takeUntil(this.toDestroy$), delay(600))
    .subscribe(res => {
      this.cdr.markForCheck();
      const s: any = res;
      this.patchForm(s);
    });
  }
}


}
