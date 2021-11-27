import { Component } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent {
  public a!: number;
  public b!: number;
  public res!: number;
  public op!: number;

  add() {
    this.res = this.a + this.b;
    this.op = 1;
  }

  sub() {
    this.res = this.a - this.b;
    this.op = 1;
  }

  mul() {
    this.res = this.a * this.b;
    this.op = 1;
  }

  div() {
    if (this.b == 0) {
      this.op = 2;
    } else {
      this.op = 1;
      this.res = this.a / this.b;
    }
    
  }
 

}
