import { Component, Input } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { Task, Service } from './invoice.service';

@Component({
  selector: 'detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrl: './detail-grid.component.scss'
})
export class DetailGridComponent {
  @Input() key!: number;

  tasksDataSource!: DataSource;

  tasks: Task[];

  constructor(private service: Service) {
    this.tasks = service.getTasks();
  }

  ngAfterViewInit() {
    this.tasksDataSource = new DataSource({
      store: new ArrayStore({
        data: this.tasks,
        key: 'ID',
      }),
      filter: ['EmployeeID', '=', this.key],
    });
  }

  completedValue(rowData:any) {
    return rowData.Status == 'Completed';
  }
}
