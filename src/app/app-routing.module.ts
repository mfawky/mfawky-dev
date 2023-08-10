import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
