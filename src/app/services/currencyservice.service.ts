import { inject, Injectable } from '@angular/core';
import currencydata from './currencydata';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CurrencyserviceService {
  http = inject(HttpClient)
  constructor() { }
  firstvalue: string = "";

  secondvalue: string = "";

  firstamount: number = 0;

  secondprice: number = 0;

  allCurrencyData(): any {
    return currencydata;
  }

  getData(firstvalue: string, secondvalue: string, amount: string) {
    if (firstvalue == this.firstvalue && secondvalue == this.secondvalue) {
      this.firstamount = Number.parseFloat(amount);
      return this.firstamount * this.secondprice;
    } else {
      this.http.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${firstvalue}.json`).subscribe((data: any) => {
        this.secondprice = Number.parseFloat(data[firstvalue][secondvalue]);
        this.firstvalue = firstvalue;
        this.secondvalue = secondvalue;
        this.firstamount = Number.parseFloat(amount);
      })
      return this.firstamount * this.secondprice;
    }
  }
}
