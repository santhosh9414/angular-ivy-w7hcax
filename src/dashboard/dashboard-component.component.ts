import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  
  userDetails = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getDataFromService();
  }

  getDataFromService() {
    this.api
      .get('https://run.mocky.io/v3/e0087535-9bdf-418c-aff9-02a045796242')
      .subscribe((res) => {
        this.formNewJson(res);
      });
  }

  formNewJson(data) {
    let taskData = data.taskData;
    let taskSchema = data.taskSchema;
    let arr = [];
    for (let i = 0; i < taskData.length; i++) {
      let element = taskData[i];
      let json = {};
      for (let j = 0; j < taskSchema.length; j++) {
        let res = taskSchema[j];
        json[res] = element[j];
      }
      this.userDetails.push(json);
    }
  }

}