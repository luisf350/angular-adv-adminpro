import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrl: './grafica1.component.css',
})
export class Grafica1Component {

  dataChart1: ChartData<'doughnut'> = {
    labels : [
      'Nike',
      'Adidas',
      'Under Armor',
    ],
    datasets: [
      { data: [70, 50, 30] },
    ],
  };

  dataChart2: ChartData<'doughnut'> = {
    labels : [
      'Toyota',
      'Mazda',
      'Volkwagen',
    ],
    datasets: [
      { data: [200, 50, 1000] },
    ],
  };
  
}
