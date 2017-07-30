import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CalendarPage } from '../pages/calendar/calendar';
import { NewsPage } from '../pages/news/news';
import { CoursesPage } from '../pages/courses/courses';
import { TabsPage } from '../pages/tabs/tabs';

import { ContainerPage } from '../pages/container/container';
import { DiscussionPage } from '../pages/discussion/discussion';
import { EventsPage } from '../pages/events/events';
import { ParticipantsPage } from '../pages/participants/participants';
import { CTabsPage } from '../pages/ctabs/ctabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalendarPage,
    TabsPage,
    NewsPage,
    CoursesPage,
    ContainerPage,
    DiscussionPage,
    EventsPage,
    ParticipantsPage,
    CTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    CalendarPage,
    TabsPage,
    CoursesPage,
    ContainerPage,
    DiscussionPage,
    EventsPage,
    ParticipantsPage,
    CTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
