import { Component } from '@angular/core';

import { ContainerPage } from '../container/container';
import { DiscussionPage } from '../discussion/discussion';
import { EventsPage } from '../events/events';
import { ParticipantsPage } from '../participants/participants';

@Component({
  templateUrl: 'ctabs.html'
})
export class CTabsPage {

  tab1Root = ContainerPage;
  tab2Root = DiscussionPage;
  tab3Root = EventsPage;
  tab4Root = ParticipantsPage;

  constructor() {

  }
}
