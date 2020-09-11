import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private http: HttpClient) { }

//  for working with real Api Data
getCustomer() {
  return  this.http.get(environment.baseUrl + '/Customer');
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + '/Customer' + id);

  }
  addOrUpdates(body: any): Observable<any> {
    return body.id < 0
    ? this.http.post(environment.baseUrl + '/Customer', body)
    : this.http.put(environment.baseUrl + '/Customer/' + body.id, body);
  }
  deleteCustomer(id: number) {
    return this.http.delete(environment.baseUrl + '/Customer/' + id);
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
    customerId: 'c24',
    customerName: 'Shyam',
    customerAddress: 'Baglung',
    emailAddress: 'ram@gmail.com',
  },
  {
    id: 2,
    customerId: 'c24',
    customerName: 'Shyam',
    customerAddress: 'Baglung',
    emailAddress: 'ram@gmail.com',
  },
  {
    id: 3,
    customerId: 'c24',
    customerName: 'Shyam',
    customerAddress: 'Baglung',
    emailAddress: 'ram@gmail.com',
  },
  {
    id: 4,
    customerId: 'c24',
    customerName: 'Shyam',
    customerAddress: 'Baglung',
    emailAddress: 'ram@gmail.com',
  },
];
