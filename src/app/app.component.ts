import { Component } from '@angular/core';
import { Person } from './Person';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Acá se conecta este componente al html
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Matias';
  age: number = 21;
  img: string = 'https://source.unsplash.com/random';
  btnDisabled: boolean = true;
  inputDisabled: boolean = true;

  personMatias: Person = new Person('Matias', 21, 'https://w3schools.com/howto/img_avatar.png');

  cat = {
    name: 'Taby',
    color: 'MultiColor',
    age: 9
  };

  widthImg: number = 100;

  names: string[] = ['Matias', 'Rocio', 'Lucas', 'Elmer', 'Emma', 'Jona'];
  newName: string = '';

  register = {
    name: '',
    email: '',
    password: '',
  }

  public mathTest(base: number, exponent: number): number{
    return Math.pow(base, exponent);
  }

  public onRegister(){
    console.log(this.register);
  }

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'Toy'
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

  public toggleButton(){
    this.inputDisabled = !this.inputDisabled;
  }

  public increaseAge(){
    let edad: number = this.personMatias.getAge() + 1;
    this.personMatias.setAge(edad);
  }

  public onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  public changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.personMatias.setName(element.value);
  }

  public addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  public deleteName(index: number){
    // splice recibe el index de la posición que vamos a eliminar y cuantos elementos, a partir de esa posicion, vamos a eliminar.
    this.names.splice(index, 1);
  }
}
