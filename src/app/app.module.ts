import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './main-card/card.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { SectionHomeComponent } from './main-card/section-home/section-home.component';
import { SectionFooterComponent } from './main-card/section-footer/section-footer.component';
import { SectionBioComponent } from './main-card/section-bio/section-bio.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SectionHomeComponent,
    SectionFooterComponent,
    SectionBioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
