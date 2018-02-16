import { Component } from '@angular/core';
import { DogService } from './dogService/dogService.service';
import { Observable } from 'rxjs/Observable';

interface DogsResponseType {
  status: String,
  message: String[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Dogs Database';
  dogs: String[];
  images: String[];
  selected: String;

  constructor(private dogSvc: DogService) {
    this.dogSvc.getListOfDogBreeds()
      .subscribe((data: DogsResponseType) => {
        this.dogs = data.message;
        this.selected = this.dogs[0];
        this.dogSvc.getBreedImages(this.dogs[0])
          .subscribe((data: DogsResponseType) => {
            this.images = data.message;
          });
      });
  }

  dogSelected(breed) {
    this.selected = breed;
    this.dogSvc.getBreedImages(breed)
      .subscribe((data: DogsResponseType) => {
        this.images = data.message;
      });
  }

}
