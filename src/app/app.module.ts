import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ListactorsComponent } from "./listactors/listactors.component";
import { AddactorComponent } from "./addactor/addactor.component";
import { DeleteactorComponent } from "./deleteactor/deleteactor.component";
import { UpdateactorComponent } from "./updateactor/updateactor.component";
import { RouterModule, Routes } from "@angular/router";
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { Addactor2movieComponent } from './addactor2movie/addactor2movie.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';
const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "listmovies", component: ListmoviesComponent },
  { path: "deletemovie", component: DeletemovieComponent},
  { path: "addactor2movie", component: Addactor2movieComponent},
  { path: "viewnotfound", component: ViewnotfoundComponent},
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: '**', redirectTo: "/viewnotfound"}
];
@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    ListmoviesComponent,
    DeletemovieComponent,
    Addactor2movieComponent,
    ViewnotfoundComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}