import { Component, OnInit } from '@angular/core';
import { ElectService } from '../services/elect.service';

@Component({
  selector: 'app-electrician',
  templateUrl: './electrician.page.html',
  styleUrls: ['./electrician.page.scss'],
})
export class ElectricianPage implements OnInit {
  elects:any=[];

  constructor(private electService: ElectService) { }
  

  ngOnInit() {}
    ionViewDidEnter() {
      this.electService.getElects().subscribe((response) => {
        this.elects = response;
      })
    }
  
    removeelect(elect, i) {
      if (window.confirm('Are you sure')) {
        this.electService.deleteElect(elect._id)
        .subscribe(() => {
            this.elects.splice(i, 1);
            console.log('elect deleted!')
          }
        )
      }
    
  }
}


