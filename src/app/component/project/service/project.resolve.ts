import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProjectService } from './project.service';
// import { ContactService } from '../../contact/service/contact.service';


@Injectable()
export class ProjectResolve implements Resolve<any>{

  constructor(private projectService: ProjectService){}
  resolve(){
    return this.projectService.getProjects();
  }
}

@Injectable()
export class DetailProjectResolve implements Resolve<any>{

  constructor(private projectService: ProjectService){}

  resolve(route: ActivatedRouteSnapshot){
    return this.projectService.getProject("1");
  }
} 

@Injectable()
export class ViewProjectResolve implements Resolve<any>{

  constructor(private projectService: ProjectService){}

  resolve(route: ActivatedRouteSnapshot){
    return this.projectService.getProjectView("1");
  }
}  