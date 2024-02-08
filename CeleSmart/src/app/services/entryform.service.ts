import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Entryform {
  _id: number;
  date: Date;
  rentalunitowner: string;
  rentalunitaddress: string;
  tenantname: string;
  tenantaddress: string;
  tenantphone: number;
  rent: string;
  deposit: string;
  contractstartdate: Date;
  contractperiod: string;
  electricity: string;
  water: string;
  internet: string;
  other: string;
  noticeperiod: string;
  petspolicy: string;
  checklist: string;

}

@Injectable({
  providedIn: 'root'
})
export class EntryformService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  creatEntryform(entryform: Entryform): Observable<any> {
    return this.httpClient.post<Entryform>('http://localhost:3100/api/create-Entryform', entryform, this.httpOptions)
      .pipe(
        catchError(this.handleError<Entryform>('Error occured'))
      );
  }

  getEntryform(id): Observable<Entryform[]> {
    return this.httpClient.get<Entryform[]>('http://localhost:3100/api/fetch-Entryform/' + id)
      .pipe(
        tap(_ => console.log(`Entryform fetched: ${id}`)),
        catchError(this.handleError<Entryform[]>(`Get Entryform id=${id}`))
      );
  }

  getEntryforms(): Observable<Entryform[]> {
    return this.httpClient.get<Entryform[]>('http://localhost:3100/api')
      .pipe(
        tap(entryforms => console.log('Entryforms retrieved!')),
        catchError(this.handleError<Entryform[]>('Get Entryform', []))
      );
  }

  updateEntryform(id, entryform: Entryform): Observable<any> {
    return this.httpClient.put('http://localhost:3100/api/update-Entryform/' + id, entryform, this.httpOptions)
      .pipe(
        tap(_ => console.log(`light updated: ${id}`)),
        catchError(this.handleError<Entryform[]>('Update Entryform'))
      );
  }

  deleteEntryform(id): Observable<Entryform[]> {
    return this.httpClient.delete<Entryform[]>('http://localhost:3100/api/delete-Entryform/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Entryform deleted: ${id}`)),
        catchError(this.handleError<Entryform[]>('Delete light'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } ;

}

