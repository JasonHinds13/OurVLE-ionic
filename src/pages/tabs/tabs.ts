import { Component } from '@angular/core';

import { CalendarPage } from '../calendar/calendar';
import { NewsPage } from '../news/news';
import { CoursesPage } from '../courses/courses';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CoursesPage;
  tab2Root = CalendarPage;
  tab3Root = NewsPage;

  constructor() {

  }
}
