import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskStatusComponentComponent } from './task-status-component/task-status-component.component';
import { PerformanceComponentComponent } from './performance-component/performance-component.component';
import { DashboardComponentComponent } from './dashboard-component.component';
import { ApiService } from './api.service';
import { FilterPipe } from './filter.pipe';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ChartsModule],
  declarations: [DashboardComponentComponent, TaskStatusComponentComponent, PerformanceComponentComponent, FilterPipe],
  providers: [ApiService],
  bootstrap:    [ DashboardComponentComponent ]
})
export class DashboardModule {}
