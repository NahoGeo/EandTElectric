import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  /* sum(num1: string, num2: string) {
    let num1N = Number(num1)
    let num2N = Number(num2)
    let result = ''
    result = Number(num1N + num2N).toString()

    return result
  } */

  equal(num1:string, num2:string, operator: string) {
    let num1N = Number(num1)
    let num2N = Number(num2)
    let result = ''

    switch(operator) {
      case '+':
        result = Number(num1N + num2N).toString()
        return result
      
      case '-':
        result = Number(num1N - num2N).toString()
        return result
      
      case 'x':
        result = Number(num1N * num2N).toString()
        return result
      
      case '/':
        result = Number(num1N / num2N).toString()
        return result
    }

  }
}
