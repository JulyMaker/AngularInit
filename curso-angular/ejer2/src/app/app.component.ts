import { Component } from '@angular/core';

interface Item {
	description: string;
	checked: boolean;
}

interface Item2 {
	description: string;
	completed: boolean;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
	//styleUrls: './app.component.css'
})
export class AppComponent {

	items : Item[]  = [];
	items2: Item2[] = [];
	fieldText: string;

	addItem2() {
		this.items2.push({description: this.fieldText, completed: false});
		this.fieldText = "";
	}

	addItem(description: string) {
		let item = { description, checked: false };
		this.items.push(item);
	}

	removeItem(item: Item) {
		let index = this.items.indexOf(item);
		if (index > -1) {
			this.items.splice(index, 1);
		}
	}

	removeItem2(item: Item2) {
		let index = this.items2.indexOf(item);
		if (index > -1) {
			this.items2.splice(index, 1);
		}
	}
}