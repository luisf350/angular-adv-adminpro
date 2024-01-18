import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrl: './doughnut.component.css',
})
export class DoughnutComponent {
  @Input()
  title: string = 'No title';

  @Input('data')
  doughnutChartData: ChartData<'doughnut'> = {
    labels: [''],
    datasets: [{ data: [] }],
  };
}
