import { Component, OnInit } from '@angular/core';
import { EntryformService } from '../services/entryform.service';

@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.page.html',
  styleUrls: ['./rental-update.page.scss'],
})
export class RentalUpdatePage implements OnInit {
  entryforms: any;
  constructor(private entryformService: EntryformService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.entryformService.getEntryforms().subscribe((response) => {
      this.entryforms = response;
      console.log(response);
    });
  }
}
