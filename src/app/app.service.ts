import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    phonenumber1 = new BehaviorSubject('');
    phonenumber2 = new BehaviorSubject('');

    clickedbutton = new BehaviorSubject('');

    constructor() {
    }
}
