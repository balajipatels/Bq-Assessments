import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { Plugin } from 'chart.js';
import { ChartOptions, ChartType, ChartData, Chart } from 'chart.js';
import { StrengthWeaknessService } from '../strength-weakness.service';
@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, CommonModule, MatCardModule, MatIconModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  functions: string[] = [
    'Nursing', 'Clinician', 'Housekeeping', 'Operation',
    'ICU Technician', 'Security', 'Transport', 'Paramedics',
    'Food and Beverages', 'Dietetics', 'Front Office'
  ];
  selectedFunction = 'Nursing';
  concurrentStaff = 8;
  enrolledStaff = 25;

  knowledgeScore = 10;
  knowledgeLevel = 'Basic';

  policyAwareness = 16;
  stressometerLevel = 'Medium';
  feedbackStatus = 'Positive';

  thermometerRating = 4.9;
  fullStars = 4;
  hasHalfStar = true;

  selectFunction(func: string) {
    this.selectedFunction = func;
  }

  stars = new Array(5); // to render 5 stars

  policyChartData = {
    labels: ['Awareness'],
    datasets: [{ data: [16, 84], borderWidth: 0 }]
  };

  stressChartData = {
    labels: ['Stress'],
    datasets: [{ data: [27, 73], borderWidth: 0 }]
  };

  gaugeOptions = {
    cutout: '70%',
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  };

  policyColors = [{ backgroundColor: ['#6A5ACD', '#E0E0E0'] }];
  stressColors = [{ backgroundColor: ['#F4A460', '#E0E0E0'] }];

  public doughnutChartLabels: string[] = ['Awarness', 'In-Patients', 'Out-Patients'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [350, 450, 100], label: 'Series A' },
    { data: [50, 150, 120], label: 'Series B' },
    { data: [250, 130, 70], label: 'Series C' }
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  chartData: ChartData<'doughnut'> = {
    labels: ['Awareness', 'Remaining'],
    datasets: [
      {
        data: [16, 84],
        backgroundColor: ['#4CAF50', '#9C27B0'],
        borderWidth: 0
      }
    ]
  };

  chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '70%',
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };

  chartPlugins: Plugin<'doughnut'>[] = [{
    id: 'center-text',
    beforeDraw(chart) {
      const { width } = chart;
      const { height } = chart;
      const ctx = chart.ctx!;
      ctx.restore();
      const fontSize = (height / 114).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#000';

      const text = '16%';
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 1.4;
      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  }];
  public lineChartType: ChartType = 'line';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['02:00', '02:30', '03:00', '03:30', '04:00', '04:30'],
    datasets: [
      {
        label: 'Visits month',
        data: [230, 280, 240, 290, 210, 280, 330, 320, 290, 320, 390, 340],
        borderColor: 'rgba(54,162,235,1)',
        backgroundColor: 'rgba(54,162,235,0.2)',
        fill: true,
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgba(54,162,235,1)',
        pointRadius: 5,
        tension: 0.4
      }
    ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#555' }
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#555' }
      }
    },
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2023-06-01', '2023-05-01', '2023-04-01', '2023-02-01'],
    datasets: [
      {
        label: 'Operation Success',
        data: [300, 267, 280, 240],
        backgroundColor: '#42A5F5'
      },
      {
        label: 'Operation Failure',
        data: [20, 32, 25, 30],
        backgroundColor: '#EF5350'
      }
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true
      },
      legend: {
        display: true,
        labels: {
          color: '#333'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#666' },
        grid: { display: false }
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#666' },
        grid: { color: '#eee' }
      }
    }
  };
  strengthWeaknessChartData!: ChartConfiguration<'bar'>['data'];
  strengthWeaknessChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: { beginAtZero: true }
    },
    plugins: {
      legend: { position: 'top' }
    }
  };

  completeTendencyChartData!: ChartConfiguration<'line'>['data'];
  completeTendencyChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    },
    plugins: {
      legend: { position: 'top' }
    }
  };
  constructor(private api: StrengthWeaknessService) { }

  ngOnInit(): void {
    this.api.getStrengthWeaknessData().subscribe((res) => {
      this.strengthWeaknessChartData = {
        labels: res.labels,
        datasets: [
          { label: 'Strength', data: res.strength, backgroundColor: 'green' },
          { label: 'Weakness', data: res.weakness, backgroundColor: 'red' }
        ]
      };
    });

    this.api.getCompleteTendencyData().subscribe((res) => {
      this.completeTendencyChartData = {
        labels: res.labels,
        datasets: res.datasets
      };
    });
  }
}
