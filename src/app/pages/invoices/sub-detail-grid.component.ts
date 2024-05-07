import { Component, Input } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { Task, Service, Activity } from './invoice.service';

@Component({
  selector: 'sub-detail-grid',
  templateUrl: './sub-detail-grid.component.html',
  styleUrl: './sub-detail-grid.component.scss'
})
export class SubDetailGridComponent {
  @Input() key!: number;

  activitiesDataSource!: DataSource;

  activities: Activity[];

  constructor(private service: Service) {
    this.activities = service.getActivities();
    console.log(this.activities);

  }

  ngAfterViewInit() {
    this.activitiesDataSource = new DataSource({
      store: new ArrayStore({
        data: this.activities,
        key: 'ID',
      }),
      filter: ['TaskID', '=', this.key],
    });
  }

  completedValue(rowData:any) {
    return rowData.Status == 'Completed';
  }
}
