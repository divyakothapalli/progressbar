import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'progressbardemo';
  progress: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
buttons: string[]
value1:number;
value2:number;
value3:number;

   constructor(private httpClient: HttpClient){

    this.get_bars();
   }

    get_bars(){
        this.httpClient.get("http://pb-api.herokuapp.com/bars").subscribe((res)=>{
            console.log(res);
            this.buttons=res.buttons;
            console.log(this.buttons[0]);
            this.value1=this.buttons[0]
this.value1=this.buttons[1];
this.value1=this.buttons[2]


        });
}

button1(){
	
}
}