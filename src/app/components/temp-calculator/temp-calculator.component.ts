import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-calculator',
  templateUrl: './temp-calculator.component.html',
  styleUrls: ['./temp-calculator.component.scss']
})
export class TempCalculatorComponent implements OnInit {
  fahrenheit = ""
  celsius = "";

  constructor() { }

  ngOnInit() {
  }



  tempConversionF(){
var res = +this.celsius * (9/5) + 32;
this.fahrenheit = res.toFixed(2);


  }

  tempConversionC(){
    var res2 = (+this.fahrenheit - 32) * (5/9);
this.celsius = res2.toFixed(2);
  }

}
