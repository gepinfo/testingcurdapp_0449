import { Component, OnInit } from '@angular/core';
import { CreatestudentService } from './createstudent.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.scss'],
})

export class CreatestudentComponent implements OnInit {
    public detailsstudent = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        age: '',
    }

    constructor (
        private createstudentService: CreatestudentService,
    ) { }

    ngOnInit() {
        this.detailsstudent.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createstudentService.GpCreate(this.detailsstudent).subscribe(data => {
            this.detailsstudent.name = ''
 	 	this.detailsstudent.age = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}