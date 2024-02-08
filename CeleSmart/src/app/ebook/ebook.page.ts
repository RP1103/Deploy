import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ElectService } from '../services/elect.service';
import { Elect1Service } from '../services/elect1.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.page.html',
  styleUrls: ['./ebook.page.scss'],
})
export class EbookPage implements OnInit {
  elects:any=[];
  elects1:any=[];
  id: any = [];
  Elect:any=[];
  data: any = [];
  elect1Form: FormGroup;

  constructor(private electService:ElectService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private elect1Service:Elect1Service) {
      this.elect1Form = this.formBuilder.group({
        name: [''],
        // imgurl:[''],
        salary:[''],
        workers:[''],
      })
     }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getElect();
   }
 
  ionViewDidEnter() {
    this.electService.getElects().subscribe((response) => {
      this.elects = response;
    })
  }

   getElect(){
    this.electService.getElect(this.id).subscribe((data) => {
      this.elects = data;
      console.log(data);
    });
   }

}
