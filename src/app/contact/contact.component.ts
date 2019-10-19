import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;
  selectednum;
  getClickedButton: any;
  constructor(
    private appService: AppService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.appService.clickedbutton.subscribe((value) => {
      this.getClickedButton = value;
    })
  }

  sendcontact(){
    if (this.getClickedButton === '1') {
      this.appService.phonenumber1.next(this.contact);
    }
    if (this.getClickedButton === '2') {
      this.appService.phonenumber2.next(this.contact);
    }
    this.router.navigate(['/']);
 }
}
