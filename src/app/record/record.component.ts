import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { MOCK_RECORD } from '../data/mock-data';
import { from, of } from 'rxjs';
import { Record} from '../interfaces/record.interface';
import { Impression } from '../interfaces/impression.interface';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {
  isLoading: WritableSignal<boolean> = signal(true);

  record!: Record;
  record$ = of<Record>(MOCK_RECORD.record);
  displayedColumns: string[] = ['description', 'count'];
  beforeStateDataSource: any;
  afterStateDataSource: any; 

  constructor() {
    this.record$.subscribe(data => { 
      this.record = data; 
      this.beforeStateDataSource = data.beforeState.impressions;
      this.afterStateDataSource = data.afterState.impressions;
      this.isLoading.set(false);
    });
  }
}
