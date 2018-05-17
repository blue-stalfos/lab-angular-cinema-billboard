import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

	theMovie: any = {};

	  constructor(private route: ActivatedRoute, private myService: MovieService) { }

	ngOnInit() {
		this.route.params.subscribe((params) => {
			const theID = Number(params['id']);
			this.theMovie = this.myService.getMovie(theID);
		})
	}
}
