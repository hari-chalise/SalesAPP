import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesTransactionService {

  constructor(private http: HttpClient) { }


  //  for working with real Api Data
  getSalesTransactiont() {
    return  this.http.get(environment.baseUrl + '/SalesTransaction');
    }

    getSalesTransactionById(id: number): Observable<any> {
      return this.http.get(environment.baseUrl + '/SalesTransaction' + id);

    }
    addOrUpdates(body: any): Observable<any> {
      return body.id < 0
      ? this.http.post(environment.baseUrl + '/SalesTransaction', body)
      : this.http.put(environment.baseUrl + '/SalesTransaction/' + body.id, body);
    }
    deleteSalesTransaction(id: number) {
      return this.http.delete(environment.baseUrl + '/SalesTransaction/' + id);
    }


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
    List[data] = body;
    body.id = List[data].id;
    return of (body);
  } else {
    List.push(body);
    body.id = List.length + 1;
    return of (body);
  }
}

delete(id: number): Observable<any> {
  const index = List.findIndex(x => x.id === id);
  List.splice(index , 1);
  return of (List);
}

}





let List = [
  {
    id: 1,
    saleId: 's56',
    productId: 'P67',
    customerId: 'c456',
    actualSalingPrice: '50000',
    saleDate: '2020/08/09',
    saleTime: '05:56 PM'
  },
  {
    id: 2,
    saleId: 's53',
    productId: 'P65',
    customerId: 'c476',
    actualSalingPrice: '50000',
    saleDate: '2020/08/09',
    saleTime: '05:56 PM'
  },
  {
    id: 3,
    saleId: 's51',
    productId: 'P64',
    customerId: 'c406',
    actualSalingPrice: '50000',
    saleDate: '2020/08/09',
    saleTime: '05:56 PM'
  },
  {
    id: 4,
    saleId: 's59',
    productId: 'P68',
    customerId: 'c454',
    actualSalingPrice: '50000',
    saleDate: '2020/08/09',
    saleTime: '05:56 PM'
  },
];
