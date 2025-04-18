// strength-weakness.service.ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StrengthWeaknessService {
  getStrengthWeaknessData() {
    return of({
      labels: ['Domain 1', 'Domain 2', 'Domain 3', 'Domain 4'],
      strength: [3, 4, 2, 5],
      weakness: [2, 1, 3, 0]
    });
  }

  getCompleteTendencyData() {
    return of({
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        { label: 'Group A', data: [1.2, 2.3, 1.8, 2.1], borderColor: 'red', fill: false },
        { label: 'Group B', data: [0.9, 1.8, 1.2, 1.6], borderColor: 'blue', fill: false }
      ]
    });
  }
}
