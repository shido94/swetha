import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  refundForm: FormGroup;
  contact1: any;
  contact2: any;
  constructor(
    private appService: AppService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.appService.phonenumber1.subscribe((contact1) => {
      this.contact1 = contact1;
    });

    this.appService.phonenumber2.subscribe((contact2) => {
      this.contact2 = contact2;
    });
  }

  buttonClick(value: any) {
    if(value === 1) {
      this.appService.clickedbutton.next('1');
    }
    if(value === 2) {
      this.appService.clickedbutton.next('2');
    }
    this.router.navigate(['/contact']);
  }
}
