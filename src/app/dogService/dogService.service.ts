import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DogService {
    getListOfDogBreedsUrl = 'https://dog.ceo/api/breeds/list';
    getBreedImagesUrl = 'https://dog.ceo/api/breed/';

    constructor(private http: HttpClient) {

    }

    getListOfDogBreeds() {
        return this.http.get(this.getListOfDogBreedsUrl);
    }
    getBreedImages(breed) {
        return this.http.get(`${this.getBreedImagesUrl}${breed}/images`);
    }
}