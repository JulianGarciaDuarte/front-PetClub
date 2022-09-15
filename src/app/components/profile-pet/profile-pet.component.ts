import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-pet',
  templateUrl: './profile-pet.component.html',
  styleUrls: ['./profile-pet.component.scss']
})
export class ProfilePetComponent implements OnInit {
  petName="Benji";
  agePet="2 años";
  petBreed="Criollo";
  petType="Perro";
  
  constructor() { }

  ngOnInit(): void {
  }

}
