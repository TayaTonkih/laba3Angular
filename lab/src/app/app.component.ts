import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'lab';
  greeting = "";

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Изменения:', changes);
  }

  ngOnInit(): void {
    console.log('Я проинициализировался!');
  }

  ngDoCheck(): void {
    console.log('Проверка изменений');
  }

  ngAfterContentInit(): void {
    console.log('Содержимое было инициализировано!');
  }

  ngAfterContentChecked(): void {
    console.log('Содержимое проверено на изменения!');
  }

  ngAfterViewInit(): void {
    console.log('Представление было инициализировано!');
  }

  ngAfterViewChecked(): void {
    console.log('Представление проверено на изменения!');
  }

  ngOnDestroy(): void {
    console.log('Компонент будет уничтожен!');
  }

  onSayHi(): void {
    alert("Привет, " + this.greeting);
  }
}
