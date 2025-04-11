import { Component } from '@angular/core';
import { ItalicDirective } from '../../core/guards/directive/italic.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page2',
  standalone: true,
  templateUrl: './page2.component.html',
  imports:[ItalicDirective, CommonModule],
  styleUrl: './page2.component.css'
})
export class Page2Component {

}
