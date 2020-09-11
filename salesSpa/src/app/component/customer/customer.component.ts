import { CustomerFormComponent } from './customer-form.component';
import { CustomerService } from './customer.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { from, Subject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { takeUntil, delay, switchMap, filter } from 'rxjs/operators';
// import { filter } from 'rxjs-compat/operator/filter';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteConfirmComponent } from '../../shared/delete-confirm/delete-confirm.component';

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {
  customers: any[] = [];
  private readonly toDestroy$ = new Subject<void>();
  // trackById = (_: number, item: any) => item.id;

  constructor(private cService: CustomerService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.cService.getList()
    .pipe(takeUntil(this.toDestroy$), delay(600)).subscribe(res => {
      this.customers = res;
    });
  }


  onAction(id: number) {
    let instance: MatDialogRef<CustomerFormComponent, any>;
    const data = this.customers.find(x => x.id === id);
   instance = this.dialog.open(CustomerFormComponent, {
      width: '700px',
      data: data ? data : {},
      autoFocus: false,
    });

    // instance.afterClosed()
    // .pipe(takeUntil(this.toDestroy$),
    // filter(res => res && res),
    // .tap(res => {
    //   this.cdr.markForCheck();
    //   const s :any = res;
    //   const index = this.products.findIndex(x => x.id === s.id);
    //    if (index > -1) {
    //      this.products[index] = s;
    //    } else {
    //      this.products.unshift(s);
    //    }
    // }))
    // .subscribe(res => {

    // })

  };

  onDelete(id: number) {
    const instance = this.dialog.open(DeleteConfirmComponent);
    instance.afterClosed()
    .pipe(takeUntil(this.toDestroy$),
    filter(yes => yes),
    switchMap(() => this.cService.delete(id)
    .pipe(takeUntil(this.toDestroy$))))
    .subscribe(res => {
      this.cdr.markForCheck();
      const index = this.customers.findIndex(x => x.id === id);
      if (index > -1) {
        this.customers.splice(index, 1);
      }
      this.snackBar.open('Deletion successfully !!', 'res', {
           duration: 2000,
           horizontalPosition: 'right',
           verticalPosition: 'top',
           panelClass: ['mat-toolbar', 'mat-secondary'],
         });
    });


  }

  ngOnDestroy() {
    this.toDestroy$.next();
    this.toDestroy$.complete();
  }

}
