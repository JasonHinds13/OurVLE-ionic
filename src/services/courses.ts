import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService{

  courses: any[];

  constructor(){
  }

  getCourses(token: string, userid: string){
    //format: json
    //function: core_enrol_get_users_courses
    //http://ourvle.mona.uwi.edu/webservice/rest/server.php?wstoken=&wsfunction=&moodlewsrestformat=&userid=
    return this.courses;
  }
}
