import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit, OnDestroy {
  projects: Observable<Project[]>;
  private projectSub: Subscription;

  constructor(public projectService: ProjectsService) {
    this.projects = this.projectService.projects;
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.projectSub) {
      this.projectSub.unsubscribe();
    }
  }
}
