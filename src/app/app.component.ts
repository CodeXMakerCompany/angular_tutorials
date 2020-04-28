import { Component, OnInit } from '@angular/core';


//Un decorador es una función que, dependiendo de que cosa queramos decorar, 
//sus argumentos serán diferentes. 
//Usan la forma @expression donde expression evaluará la función que será llamada.
//En este caso decora la clase de AppComponent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tips';

  ngOnInit() {

    //Tipado del retorno de una función
    //Nos sirve para garantizar el tipo de dato que retornara nuestra función
    const sumar = (a: number, b: number): number => a+b;

    const nombre = ():string => 'Hey! Developers!';

    console.log(nombre());
     

   }

}
