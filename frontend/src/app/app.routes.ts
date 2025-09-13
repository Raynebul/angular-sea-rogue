import { Routes } from '@angular/router';
import { StartPageComponent } from "./components/StartPage.component";
import { HistoryPageComponent } from "./components/HistoryPage.component";

export const routes: Routes = [
    { path: "start", component: StartPageComponent},
    { path: "history", component: HistoryPageComponent},
];
