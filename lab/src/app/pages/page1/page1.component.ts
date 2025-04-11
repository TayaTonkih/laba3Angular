import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page1',
  imports:[FormsModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  JSONFile: File | null = null;
 constructor(){}
 parse(target: any) : void{
  if (target.files && target.files.length > 0){
    this.JSONFile = target.files[0];
    this.JSONFile?.text().then(fileContent => {alert(fileContent);
    })
  }
  else{
    this.JSONFile = null;
  }
 }
}
