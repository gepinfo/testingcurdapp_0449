import { Component, OnInit } from '@angular/core';
import { CreatesstudentService } from './createsstudent.service';

@Component({
  selector: 'app-createsstudent',
  templateUrl: './createsstudent.component.html',
  styleUrls: ['./createsstudent.component.scss'],
})

export class CreatesstudentComponent implements OnInit {
    public detailscollege = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }

    constructor (
        private createsstudentService: CreatesstudentService,
    ) { }

    ngOnInit() {
        this.detailscollege.created_by = sessionStorage.getItem('email') || ''; 
    }
}