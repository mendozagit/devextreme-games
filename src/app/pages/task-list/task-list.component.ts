import { Component, ViewChild } from '@angular/core';
import { ScreenService } from '../../shared/services';
import { taskPanelItems } from '../../shared/types/resource';
import { ItemClickEvent } from 'devextreme/ui/tabs';
import { DxTabsTypes } from 'devextreme-angular/ui/tabs';
import { Task, newTask } from '../../shared/types/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  // @ViewChild('planningDataGrid', { static: false }) dataGrid: TaskListGridComponent;

  // @ViewChild('planningGantt', { static: false }) gantt: TaskListGanttComponent;

  // @ViewChild('planningKanban', { static: false }) kanban: TaskListKanbanComponent;

  // @ViewChild(TaskFormComponent, { static: false }) taskForm: TaskFormComponent;
  //chooseColumnDataGrid = () => this.dataGrid.showColumnChooser();
  newTask = newTask;

  taskPanelItems = taskPanelItems;

  displayTaskComponent = this.taskPanelItems[0].text;

  isAddTaskPopupOpened = false;

  displayGrid = this.displayTaskComponent === this.taskPanelItems[0].text;

  displayKanban = this.displayTaskComponent === this.taskPanelItems[1].text;

  taskCollections$!: Observable<{ allTasks: Task[]; filteredTasks: Task[] }>;

  constructor(protected screen: ScreenService) {
  }

  tabValueChange(e: DxTabsTypes.ItemClickEvent) {
    const { itemData } = e;

    this.displayTaskComponent = itemData.text;
    this.displayGrid = this.displayTaskComponent === this.taskPanelItems[0].text;
    this.displayKanban = this.displayTaskComponent === this.taskPanelItems[1].text;
  };

  addTask = () => {
    this.isAddTaskPopupOpened = true;
  };

  refresh = () => {
    if (this.displayGrid) {
      //this.dataGrid.refresh();
    } else if (this.displayKanban) {
      //this.kanban.refresh();
    } else {
      //this.gantt.refresh();
    }
  };
}
