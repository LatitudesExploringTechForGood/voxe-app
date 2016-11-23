import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {VoxeApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {SwipePage} from "../pages/swipe/swipe";
import {StatsPage} from "../pages/stats/stats";
import {SwingStackComponent} from "angular2-swing";
import {SwingCardComponent} from "angular2-swing";

@NgModule({
  declarations: [
    VoxeApp,
    HomePage,
    SwipePage,
    StatsPage,
    SwingStackComponent,
    SwingCardComponent
  ],
  imports: [
    IonicModule.forRoot(VoxeApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    VoxeApp,
    HomePage,
    SwipePage,
    StatsPage
  ],
  providers: []
})
export class AppModule {}
