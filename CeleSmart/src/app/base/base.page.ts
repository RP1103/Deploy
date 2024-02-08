import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage {
  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -100,
  };

  public data:any;
  constructor(private http:HttpClient) {
    this.getData();
  }
getData(): void {
  const url:string = 'http://localhost:8080/www/ap/new.php';
  
  let data: any = {
    "id":1
  };
  let a = this.http.post(url,data).subscribe((res)=>{
    console.log(res);
    this.data=res;
  });


  }
}