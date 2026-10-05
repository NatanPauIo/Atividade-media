import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-caixanota',
  styleUrl: './caixanota.scss',
  templateUrl: './caixanota.html',
})

export class Caixanota {

  media : number = -1
  
  calcularMedia(n1:string,n2:string){


    const nota1 = parseFloat(n1)
    const nota2 = parseFloat(n2)
    if(nota1 <= 100 && nota1 >= 0 && nota2 <= 100 && nota2 >= 0){
      this.media = ((nota1*2)+(nota2*3))/5
    }else{
      this.media = -1
    }
  }
}
