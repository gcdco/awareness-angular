import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { RecordComponent } from './app/record/record.component';
import { from, of } from 'rxjs';
import { MOCK_RECORD } from './app/data/mock-data';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RecordComponent],
  template: `
   <app-record></app-record> 
  `,
})
export class App {
  name = 'Angular';
  
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()]
});