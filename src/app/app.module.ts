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
import {MatExpansionModule} from '@angular/material/expansion';
import { SectionHomeComponent } from './main-card/section-home/section-home.component';
import { SectionFooterComponent } from './main-card/section-footer/section-footer.component';
import { SectionReachComponent } from './main-card/section-reach/section-reach.component';
import { SectionExperienceComponent } from './main-card/section-experience/section-experience.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SectionHomeComponent,
    SectionFooterComponent,
    SectionReachComponent,
    SectionExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
