import { Routes } from '@angular/router';

import { ProductComponent}  from './product/product.component';
import { CustomerComponent}  from './customer/customer.component';
import { SalesTransactionComponent}  from './sales-transaction/sales-transaction.component';

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [

			{
				path: 'customer',
				component: CustomerComponent,
				data: {
					title: 'Customer',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Customer' }
					]
				}
			},
			{
				path: 'product',
				component: ProductComponent,
				data: {
					// title: 'product',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Cards' }
					]
				}
			},

			{
				path: 'sales-transaction',
				component: SalesTransactionComponent,
				data: {
					title: 'Sales-transaction',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Sales-transaction' }
					]
				}
			},





		]
	}
];
