import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService{

  participants: any[];

  constructor(){
  }

  getParticipants(token: string, courseid: string){
    //format: json
    //function: core_enrol_get_enrolled_users
    //http://ourvle.mona.uwi.edu/webservice/rest/server.php?wstoken=&wsfunction=&moodlewsrestformat=&courseid=
    return this.participants;
  }
}
