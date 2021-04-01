import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  __projects: BehaviorSubject<Project[]> = new BehaviorSubject(null);

  get projects() {
    return this.__projects.asObservable();
  }

  constructor(private http: HttpClient) {
    this.getProjectsDataSource().subscribe(this.__projects);
  }

  getProject(id: string): Observable<Project> {
    return this.projects.pipe(
      take(1),
      map((projects) => {
        return { ...projects.find((p) => p.id === id) };
      })
    );
  }

  getProjectsDataSource(): Observable<Project[]> {
    return this.http.get<Project[]>('./assets/testing/projects.json');
  }
}
