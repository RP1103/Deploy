import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EntryformService } from '../services/entryform.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.page.html',
  styleUrls: ['./detail-view.page.scss'],
})
export class DetailViewPage implements OnInit {

  entryforms: any;
  entryform: FormGroup;
  id: string;
  constructor(private entryformService: EntryformService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone) {


     }

  /*ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getEntryform();
  }
  getEntryform(){
    this.entryformService.getEntryform(this.id).subscribe((response) => {
      this.entryforms = response;
      console.log(response);
    });
   }
}*/
ngOnInit() {
}

ionViewDidEnter() {
  this.entryformService.getEntryforms().subscribe((response) => {
    this.entryforms = response;
  });
}
}











