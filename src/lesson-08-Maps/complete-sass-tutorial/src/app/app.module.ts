import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardTitleComponent } from './card/card-title/card-title.component';
import { CardBodyComponent } from './card/card-body/card-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTitleComponent,
    CardBodyComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
