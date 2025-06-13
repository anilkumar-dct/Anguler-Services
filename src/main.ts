import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
//import { TasksService } from './app/tasks/tasks-list/tast.services';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
//other way of providing the services to the all component in our app is below we use (Provider:[]) in here add the services that are needed
// bootstrapApplication(AppComponent,
//     {providers: [TasksService]}

// ).catch((err) => console.error(err));
