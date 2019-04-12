import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FeatureOneModule } from './features/feature-one/feature-one.module';
import { FeatureTwoModule } from './features/feature-two/feature-two.module';
import { SharedModule } from './shared/shared.module';
import { NoContextFeatureModule } from './features/no-context-feature/no-context-feature.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FeatureOneModule,
    FeatureTwoModule,
    NoContextFeatureModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
