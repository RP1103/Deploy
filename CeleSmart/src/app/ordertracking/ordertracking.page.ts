import { Component } from '@angular/core';

@Component({
  selector: 'app-ordertracking',
  templateUrl: './ordertracking.page.html',
  styleUrls: ['./ordertracking.page.scss'],
})
export class OrdertrackingPage {
  trackingStages = [
    { title: 'Order Placed', status: 'Completed' },
    { title: 'Processing', status: 'Completed' },
    { title: 'Shipped', status: 'In Progress' },
    { title: 'In Transit', status: 'Pending' },
    { title: 'Out for Delivery', status: 'Pending' },
    { title: 'Delivered', status: 'Pending' },
  ];

  trackingEvents = [
    { date: new Date(), status: 'Order Placed' },
    { date: new Date(), status: 'Processing' },
    { date: new Date(), status: 'Shipped' },
    { date: new Date(), status: 'In Transit' },
    { date: new Date(), status: 'Out for Delivery' },
    { date: new Date(), status: 'Delivered' },
  ];
}
