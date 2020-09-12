import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteConfirmComponent } from './../../shared/delete-confirm/delete-confirm.component';
import { SalesTransactionFormComponent } from './sales-transaction-form.component';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject, from } from 'rxjs';
import { SalesTransactionService} from './sales-transaction.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { takeUntil, delay, filter, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './sales-transaction.component.html',
  styleUrls: ['./sales-transaction.component.scss']
})
export class SalesTransactionComponent implements OnInit, OnDestroy {
private readonly toDestroy$ = new Subject<void>();
sales: any[] = [];
  constructor(
    private salesService: SalesTransactionService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.cdr.markForCheck();
    this.salesService.getList().pipe(takeUntil(this.toDestroy$), delay(500))
    .subscribe(res => {
      this.cdr.markForCheck();
      this.sales = res;
    });
  }


  onAction(id: number) {
    let instance: MatDialogRef<SalesTransactionFormComponent, any>;
    const data = this.sales.find(x => x.id === id);
    instance = this.dialog.open(SalesTransactionFormComponent, {
      width: '500px',
      data: data ? data : [],
      autoFocus: false,
    });
  }

onDelete(id: number) {
  const instance = this.dialog.open(DeleteConfirmComponent)
  instance.afterClosed()
  .pipe(takeUntil(this.toDestroy$),
  filter(yes => yes),
  switchMap(() => this.salesService.delete(id)
  .pipe(takeUntil(this.toDestroy$))))
  .subscribe({
    next: res => {
      this.cdr.markForCheck();
      const index = this.sales.findIndex(x => x.id === id);
      if (index > -1) {
        this.sales.splice(index, 1);
      }
      this.snackBar.open('Deletion Successfull!!!', 'res', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['mat-toolbar', 'mat-warn']
      });

    }
  });
}
ngOnDestroy() {
  this.toDestroy$.next();
  this.toDestroy$.complete();
}

}
