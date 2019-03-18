import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AmsService } from 'src/app/ams.service';
@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

  customer: any;

  constructor(
    public activeModal: NgbActiveModal,
    private amsService: AmsService
  ) { }

  ngOnInit() {
    this.getCustomerById();
  }
  getCustomerById() {
    this.amsService
    .getCustomerById(this.amsService.Id)
    .subscribe((res: any) => {
      this.customer = res.data;
      console.log(this.amsService.Id, this.customer, 'customer at view');
    });
}

close() {
  this.activeModal.close();
}

}



