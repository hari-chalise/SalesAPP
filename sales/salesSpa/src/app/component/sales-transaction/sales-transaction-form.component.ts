import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeUntil, delay } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalesTransactionService } from './sales-transaction.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-sales-transaction-form',
  templateUrl: './sales-transaction-form.component.html',
  styleUrls: ['./sales-transaction.component.scss']
})
export class SalesTransactionFormComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly toDestroy$ = new Subject<void>();
  transactionForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private saleService: SalesTransactionService,
    private cdr: ChangeDetectorRef,
    private dialogRef: MatDialogRef<SalesTransactionFormComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)
    public data: {id: number}
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.transactionForm = this.fb.group({
      id: 0,
      saleId: [null, Validators.required],
      productId: [null, Validators.required],
      customerId: [null, Validators.required],
      actualSalingPrice: null,
      saleDate: null,
      saleTime: null,
    });
  }


  patchForm(s: any) {
    this.transactionForm.patchValue({
      id: s.id,
      saleId: s.saleId,
      productId: s.productId,
      customerId: s.customerId,
      actualSalingPrice: s.actualSalingPrice,
      saleDate: s.saleDate,
      saleTime: s.saleTime,
    });
  }

  saveChanges() {
    this.saleService.addOrUpdate(this.transactionForm.value)
    .pipe(takeUntil(this.toDestroy$))
    .subscribe(res => {
      this.cdr.markForCheck();
      this.dialogRef.close(res);
    });
    this.snackBar.open('Success!!!', '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['mat-toolbar', 'mat-primary']
    });

  }

  ngAfterViewInit() {
    if (this.data.id > 0) {
      this.saleService.getListById(this.data.id)
      .pipe(takeUntil(this.toDestroy$), delay(600))
      .subscribe(res => {
        const s: any = res;
        this.patchForm(s);
      });
    }

  }

  ngOnDestroy() {
    this.toDestroy$.next();
    this.toDestroy$.complete();
  }

}
