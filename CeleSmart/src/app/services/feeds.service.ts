import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Feed {
  _id: number;
  name: string;
  imgurl: string;
  kgs: number;
  price: number;

}

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  creatFeed(feed: Feed): Observable<any> {
    return this.httpClient.post<Feed>('http://localhost:3201/api/create-feed', feed, this.httpOptions)
      .pipe(
        catchError(this.handleError<Feed>('Error occured'))
      );
  }

  getFeed(id): Observable<Feed[]> {
    return this.httpClient.get<Feed[]>('http://localhost:3201/api/fetch-feed/' + id)
      .pipe(
        tap(_ => console.log(`feed fetched: ${id}`)),
        catchError(this.handleError<Feed[]>(`Get feed id=${id}`))
      );
  }

  getFeeds(): Observable<Feed[]> {
    return this.httpClient.get<Feed[]>('http://localhost:3201/api')
      .pipe(
        tap(feeds => console.log('feeds retrieved!')),
        catchError(this.handleError<Feed[]>('Get feed', []))
      );
  }

  updateFeed(id, feed: Feed): Observable<any> {
    return this.httpClient.put('http://localhost:3201/api/update-feed/' + id, feed, this.httpOptions)
      .pipe(
        tap(_ => console.log(`feed updated: ${id}`)),
        catchError(this.handleError<Feed[]>('Update feed'))
      );
  }

  deleteFeed(id): Observable<Feed[]> {
    return this.httpClient.delete<Feed[]>('http://localhost:3201/api/delete-Feed/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`feed deleted: ${id}`)),
        catchError(this.handleError<Feed[]>('Delete feed'))
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

