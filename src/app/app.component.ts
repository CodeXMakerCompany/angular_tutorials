import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tips';

  ngOnInit() {
   
    //Clase en typescript
    class Usuario {
      //Función que se ejecuta cada vez que se instancia la clase
      constructor(
        public nombre           : string,
        public apellidos        : string,
        public nickname         : string,
        public edad             : string,
        public genero           : string,
        public email            : string,
        public password         : string
        ){}
    }

    const new_user = new Usuario('Sam','Apellidos', 'codexmaker',
                                 '24', 'M', 'codex@gmail.com', '123');

    console.log(new_user);


   }

}
