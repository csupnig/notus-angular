import { Component, OnInit } from "@angular/core";

@Component({
  selector: "customer-voices",
  templateUrl: "./customer-voices.component.html",
  styleUrls: ['./customer-voices.component.scss']
})
export class CustomerVoicesComponent implements OnInit {
  collapseShow = "hidden";
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
