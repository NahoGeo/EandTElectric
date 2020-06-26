import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  display1 = ''
  display2 = ''
  num1 = ''
  num2 = ''
  lastOperator = ''

  constructor(private calService: CalculatorService) { }

  ngOnInit() {
  }

  enterNumber(number: string) {
    let last = this.display2.slice(this.display2.length - 1)
    if(last === '=') {
      this.clear()
    }
    if(number === '.' && this.num2 === '') {
      number = '0.'
    }
    this.num2 += number
    this.display2 += number
  }

  enterOperator(operator: string) {
    let display2IsOperator = this.lastDisplay2IsOperator()
    if(!display2IsOperator || this.display1 && !this.display2){
      if(this.num1 && this.num2 && operator !== '=') {
        let result = this.calService.equal(this.num1, this.num2, this.lastOperator)
        this.num1 = result
        this.num2 = ''
        this.display2 += operator
        this.lastOperator = operator
      }else{
        if(operator === '=' && this.num1 && !this.num2) {
          this.display1 = this.num1
          this.display2 = ''
        }
        if(operator === '=' && !this.num1 && this.num2) {
          this.num1 = this.num2
          this.display1 = this.num1
          this.num2 = ''
          this.display2 = ''
        }
        if(operator === '=' && this.num1 && this.num2){
          let result = this.calService.equal(this.num1, this.num2, this.lastOperator)
          this.num1 = result
          this.num2 = ''
          this.display1 = this.num1
          this.display2 += operator
          this.lastOperator = operator
        }else{
          if(this.display1 && this.lastOperator === '=') {
            this.display2 = `Ans${operator}`
            this.lastOperator = operator
          }else{
            this.num1 = this.num2
            this.num2 = ''
            this.display2 += operator
            this.lastOperator = operator
          }
        }
      }
    }
  }

  clear() {
    this.display1 = ''
    this.display2 = ''
    this.num1 = ''
    this.num2 = ''
    this.lastOperator = ''
  }

  lastDisplay2IsOperator() {
    let isOperator: boolean = false
    let last = this.display2.slice(this.display2.length - 1)
    if(last === '+' || last === '-' || last === 'x' || last === '/' || last === '') {
      isOperator = true
    }
    
    return isOperator
  }

}
