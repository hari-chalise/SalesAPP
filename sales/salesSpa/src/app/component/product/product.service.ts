import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
      private http: HttpClient ) { }


//  for working with real Api Data
      getProduct() {
      return  this.http.get(environment.baseUrl + '/Product');
      }

      getProductById(id: number): Observable<any> {
        return this.http.get(environment.baseUrl + '/Product' + id);

      }
      addOrUpdates(body: any): Observable<any> {
        return body.id < 0
        ? this.http.post(environment.baseUrl + '/Product', body)
        : this.http.put(environment.baseUrl + '/Product/' + body.id, body);
      }
      deleteProduct(id: number) {
        return this.http.delete(environment.baseUrl + '/Product/' + id);
      }


// For Local data Only for Working Without API

  getList(): Observable<any> {
      return of (List);
  }

  getListById(id: number): Observable<any> {
      const data = List.find(x => x.id === id);
      return of (data);
  }

addOrUpdate(body: any): Observable<any> {
    if (body.id > 0) {
        const data = List.findIndex(x => x.id === body.id);
        const d = List.find(x => x.id === body.id);
        List[data] = body;
        body.id = d?.id;
        return of (body);
    } else {
        List.push(body);
        body.id = List.length + 1;
        return of (body);
    }
}

delete(id: number): Observable<any> {
    const index = List.findIndex(x => x.id === id);
    List.splice(index, 1);
    return of (List);
}

}



let List = [
    {
        id: 1,
        pId: 'L23',
        name: 'Laptop',
        company: 'Dell',
        quantity: '5 pices',
        rate: '50000 npr',
        description: 'This is the Top Brand of the World',
    },
    {
        id: 2,
        pId: 'L23',
        name: 'Laptop',
        company: 'Dell',
        quantity: '5 pices',
        rate: '50000 npr',
        description: 'This is the Top Brand of the World',
    },
    {
        id: 3,
        pId: 'L23',
        name: 'Laptop',
        company: 'Dell',
        quantity: '5 pices',
        rate: '50000 npr',
        description: 'This is the Top Brand of the World',
    },
    {
        id: 4,
        pId: 'L23',
        name: 'Laptop',
        company: 'Dell',
        quantity: '5 pices',
        rate: '50000 npr',
        description: 'This is the Top Brand of the World',
    },
    {
        id: 4,
        pId: 'L23',
        name: 'Laptop',
        company: 'Dell',
        quantity: '5 pices',
        rate: '50000 npr',
        description: 'This is the Top Brand of the World',
    },
    {
        id: 4,
        pId: 'L23',
        name: 'Laptop',
        company: 'Dell',
        quantity: '5 pices',
        rate: '50000 npr',
        description: 'This is the Top Brand of the World',
    },
    {
        id: 4,
        pId: 'L23',
        name: 'Laptop',
        company: 'Dell',
        quantity: '5 pices',
        rate: '50000 npr',
        description: 'This is the Top Brand of the World',
    },

]
