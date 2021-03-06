import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MatSidenavModule, MatIconModule, MatButtonModule, MatChipsModule } from '@angular/material';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { OverlayModule }            from '@angular/cdk/overlay';
import { PortalModule }             from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import { Menu } from './components/menu.component';
import { MoodplayService } from './services/moodplay.service';
import { DeezerService } from './services/deezer.service';
import { PlayerService } from './services/player.service';
import { FeatureService } from './services/feature.service';
import { GraphicsComponent } from './components/graphics.component';

import { MoodsComponent } from './components/moods.component';

@NgModule({
  declarations: [
    AppComponent,
    Menu,
    GraphicsComponent,
    MoodsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    BrowserAnimationsModule,
    OverlayModule,
    PortalModule
  ],
  providers: [ MoodplayService, DeezerService, PlayerService, FeatureService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
