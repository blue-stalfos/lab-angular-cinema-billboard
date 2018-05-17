import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { MovieService } from './services/movies.service';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "movies/:id", component: MovieDetailsComponent },
]

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		MovieDetailsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(routes)
	],
	providers: [MovieService],
	bootstrap: [AppComponent]
})
export class AppModule { }
