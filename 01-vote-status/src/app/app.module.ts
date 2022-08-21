import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { VoteStatusComponent } from './components/vote-status/vote-status.component';

@NgModule({
  imports: [BrowserModule, SuiModule],
  declarations: [AppComponent, VoteStatusComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
