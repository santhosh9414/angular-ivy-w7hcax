import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';

@Component({
  selector: 'app-task-status-component',
  templateUrl: './task-status-component.component.html',
  styleUrls: ['./task-status-component.component.css'],
})
export class TaskStatusComponentComponent implements OnInit {
  userDetails = [];
  uniqueStatus = [];
  public pieChartOptions: ChartOptions = {
    // responsive: true,
  };
  public pieChartData: SingleDataSet = [300, 500, 100, 150, 102];

  constructor(private api: ApiService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

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
    this.getUniqueStatus();
  }

  getUniqueStatus() {
    this.uniqueStatus = [
      ...new Set(this.userDetails.map(({ status }) => status)),
    ];
  }
}
