import { Component}from '@angular/core';
@Component({
    selector:'app-body', ///no es obligatorio que lleve el app- pero eso dice que es un componente personalizado
    templateUrl: './body.component.html'
})


export class BodyComponent{  
    mostrar=true;//ngIf
    personajes:string[]=['Spiderman','Venom', 'Octopus']


    frase: any={
        mensaje:'Un gran poder requiere una gran responsabilidad',
        autor:'Ben Parker'
    };
    
}