import { CustomerModule } from './customer/customer.module';
import { SalesTransactionModule } from './sales-transaction/sales-transaction.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';

import { ProductModule} from './product/product.module'
import { from } from 'rxjs';
// import { ProductComponent} from './product/product.component'
// import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ProductModule,
    SalesTransactionModule,
    CustomerModule
  ],
  declarations: [




  ]
})
export class ComponentsModule {}
