import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CurrencyserviceService } from '../services/currencyservice.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-currencyselector',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule,CommonModule,MatTooltipModule,MatButtonModule],
  templateUrl: './currencyselector.component.html',
  styleUrl: './currencyselector.component.css'
})
export class CurrencyselectorComponent implements OnInit{
  currencyservice = inject(CurrencyserviceService);
  currencydata : any = [];
  convertedvalue: number = 0;
  ngOnInit(): void {
      for(let i in this.currencyservice.allCurrencyData()){
        this.currencydata.push([i,`${i} (${this.currencyservice.allCurrencyData()[i]})`]);
      }
      
  }
  show(firstvalue:string,secondvalue:string){
    console.log(firstvalue,secondvalue);
  }
  calculate(firstvalue:string,secondvalue:string,amount:string){
    this.convertedvalue = this.currencyservice.getData(firstvalue,secondvalue,amount);
  }
}
