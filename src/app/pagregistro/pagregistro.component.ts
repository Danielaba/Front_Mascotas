import { Component, OnInit } from '@angular/core';
import { registroUser } from '../model/registro';
import { PeticionService } from '../services/peticion.service';


@Component({
  selector: 'app-pagregistro',
  templateUrl: './pagregistro.component.html',
  styleUrls: ['./pagregistro.component.css']
})
export class PagregistroComponent implements OnInit {

    public regiterMod : registroUser;

    public nombre ="Daniela";

  constructor( private Peticion:PeticionService ) { 

    this.regiterMod = new registroUser();
   }
  

  ngOnInit(): void {
  }

  enviar(){
    console.log("Esatamos enviando")

         this.Peticion.registerUser( this.regiterMod ).subscribe(
           (res) => {
             console.log(res)
         }
         )
        console.log(this.regiterMod);
  }



}
