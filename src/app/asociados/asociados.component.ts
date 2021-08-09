import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../services/peticion.service';
import { registroUser } from '../model/registro';

@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.component.html',
  styleUrls: ['./asociados.component.css']
})
export class AsociadosComponent implements OnInit {

  public allUser : registroUser[] = [];

  constructor( private Peticion:PeticionService
   
    ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    console.log("Esatamos enviando")

         this.Peticion.allUsers().subscribe(
           (res) => {
             this.allUser = res as registroUser[];
             console.log(res)
         }
         )
        
  }


}
