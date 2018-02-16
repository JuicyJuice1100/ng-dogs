import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dogs-list',
    templateUrl: './dogsList.component.html',
    styleUrls: ['./dogsList.component.css']
})
export class DogsList {
    @Input() dogs: any;
    @Input() selected: String;
    @Output() dogClicked = new EventEmitter<String>();

    /**
     * Dog click handler
     * @param dog 
     */
    clicked(dog) {
        this.dogClicked.emit(dog);
    }
    isSelected(breed) {
        return breed === this.selected;
    }
}
