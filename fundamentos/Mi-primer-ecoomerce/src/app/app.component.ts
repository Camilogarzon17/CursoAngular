import { Component } from '@angular/core';

import {prodduct} from './product.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  widthImg = 10;
  name = 'Camilo';
  age = 21;
  img = 'https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png';
  btnDisabled = true;

  register = {
    name: '',
    email: '',
    password: '',
  }

  person = {
    name: 'Camilo',
    age: 21,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  }

  Names: string[] = ['Camilo', 'Felipe','David']
  NewName = '';

  Personas:  any[] = [['Camilo', 16], ['Felipe', 14], ['David',10 ]];
  NewNam = ''
  NewAge = '';
  box ={
    width: 100,
    height: 100,
    background: 'rgb(231, 74, 74)'
  };
  products: prodduct[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseage(){
    this.person.age += 1;
  }
  onscroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.Names.push(this.NewName);
    this.NewName = '';
  }

  addPerson(){
    this.Personas.push([this.NewNam, this.NewAge]);
    this.NewAge = '';
    this.NewNam = '';
  }

  DeletePerson(index: number){
    this.Personas.splice(index, 1);
  }
  DeleteName(index: number){
    this.Names.splice(index, 1);
  }
  onRegister(){
    console.log(this.register);
  }
}
