import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-performance-component',
  templateUrl: './performance-component.component.html',
  styleUrls: ['./performance-component.component.css'],
})
export class PerformanceComponentComponent implements OnInit {
  userDetails = [];
  uniqueUserName: any;
  filteredUserName: any = '';

  constructor(private api: ApiService) {}

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
    this.getUniqueUserNamesForFilter();
  }

  onFilterChange(event) {
    // let filterFlag = this.userDetails.filter(ele => ele.name == json['name']);
    // if(){}else{}
  }

  getUniqueUserNamesForFilter() {
    this.uniqueUserName = [
      ...new Set(this.userDetails.map(({ userName }) => userName)),
    ];
  }
}
