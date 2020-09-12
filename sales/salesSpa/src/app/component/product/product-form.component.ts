import { Component, OnInit, Inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from './product.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeUntil, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductFormComponent implements OnInit, AfterViewInit {
  private readonly toDestroy$ = new Subject<void>();
  productForm!: FormGroup;

  constructor(private fb : FormBuilder,
              private productService: ProductService,
              private dialog: MatDialog,
              private cdr: ChangeDetectorRef,
              private dialogRef: MatDialogRef<ProductFormComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: {id : number}) { }

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.productForm = this.fb.group({
      id: 0,
      pId: [null, Validators.required],
      name: [null, Validators.required],
      company: null,
      quantity: null,
      rate: null,
      finalPrice: null,
      description: null,
    });
  }

  saveChanges() {
    this.productService.addOrUpdate(this.productForm.value)
    .subscribe(res => 
      this.dialogRef.close(res));
  }


  private patchForm(p: any) {
    this.productForm.patchValue({
      id: p.id,
      pId: p.pId,
      name: p.name,
      company: p.company,
      quantity: p.quantity,
      rate: p.rate,
      description: p.description
    });

  }
ngAfterViewInit() {
  if (this.data.id > 0) {
    this.productService.getListById(this.data.id)
    .pipe(takeUntil(this.toDestroy$), delay(600))
    .subscribe(res => {
      this.cdr.markForCheck();
      const s: any = res;
      this.patchForm(s);
    });
  }
}


}
