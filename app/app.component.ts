import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-app',
	styles: [`

	`],
	templateUrl: '../app/app.component.html'
})
export class AppComponent implements OnInit {
	message: string;
	constructor() {}

	ngOnInit() {
		this.message = "Welcome to Angular 2!"
	}
}