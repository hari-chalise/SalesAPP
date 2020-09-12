import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ProductService} from './product.service'
import { from, Subject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductFormComponent } from './product-form.component';
import { takeUntil, delay, switchMap, filter } from 'rxjs/operators';
// import { filter } from 'rxjs-compat/operator/filter';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteConfirmComponent } from 'app/shared/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  products: any[] = [];
  private readonly toDestroy$ = new Subject<void>();
  // trackById = (_: number, item: any) => item.id;

  constructor(private productService: ProductService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.productService.getList()
    .pipe(takeUntil(this.toDestroy$), delay(600)).subscribe(res => {
      this.products = res;
    });
  }


  onAction(id: number) {
    let instance: MatDialogRef<ProductFormComponent, any>;
    const data = this.products.find(x => x.id === id);
   instance = this.dialog.open(ProductFormComponent, {
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
    switchMap(() => this.productService.delete(id)
    .pipe(takeUntil(this.toDestroy$))))
    .subscribe(res => {
      this.cdr.markForCheck();
      const index = this.products.findIndex(x => x.id === id);
      if (index > -1) {
        this.products.splice(index, 1);
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
