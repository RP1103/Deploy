import { Component, OnInit } from '@angular/core';
// import { CarvingsService, Carving  } from '../services/carvings.service';
import { CarvingService } from '../_services/carving.service';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.page.html',
  styleUrls: ['./designs.page.scss'],
})
export class DesignsPage implements OnInit {
  carvings: any = [];
  products = [];
  // carvings: Carving[] = [];
  constructor(
    private carvingService: CarvingService,
    // private carvingsService: CarvingsService
  ) {}

  ngOnInit() {
    // this.products = this.carvingService.getProducts();
    // this.loadCarvings(); // Load carvings when the page is initialized
  }

  ionViewDidEnter() {
    // this.loadCarvings(); // Load carvings when the page is entered or re-entered
  }

  // loadCarvings() {
  //   this.carvingsService.getCarvings().subscribe((response) => {
  //     this.carvings = response;
  //   });
  // }

  // editCarving(carving: Carving) {
  //   // Navigate to an edit page or display a modal for editing the carving
  //   // You can implement the navigation logic here
  // }

  // deleteCarving(carving: Carving) {
  //   this.carvingsService.deleteCarving(carving._id).subscribe(() => {
  //     // Carving successfully deleted, update the list
  //     this.loadCarvings();
  //   });
  // }
}
