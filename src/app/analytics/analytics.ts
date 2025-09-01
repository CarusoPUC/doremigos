import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

interface EventItem {
  id: number;
  title: string;
  date: string; // 'YYYY-MM-DD'
  classYear: string; // e.g. '1º ANO'
  color?: string;
}

interface CalendarCell {
  date: Date;
  iso: string;
  display: number;
  isCurrentMonth: boolean;
  events: EventItem[];
}

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, FormsModule, BaseChartDirective],
  templateUrl: './analytics.html',
  styleUrls: ['./analytics.scss'],
  animations: [
    trigger('fadeZoom', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))
      ])
    ])
  ]
})
export class Analytics {
  selectedModule = 'MÓDULO 01';

  studentData = [
    { name: 'A1', score: 6.5 },
    { name: 'A2', score: 8.5 },
    { name: 'A3', score: 1 },
    { name: 'A4', score: 10 },
    { name: 'A5', score: 5.5 },
    { name: 'A6', score: 8.5 },
    { name: 'A7', score: 5.5 },
    { name: 'A8', score: 8.5 },
    { name: 'A9', score: 9 },
    { name: 'A10', score: 5 },
    { name: 'A11', score: 8.5 }
  ];

  pieData = [
    { name: 'ACERTOS', value: 65, color: '#ffd9e9' },
    { name: 'ERROS', value: 35, color: '#ff7fb3' }
  ];

  // Gráfico de barras
  barChartData: ChartData<'bar'> = {
    labels: this.studentData.map(s => s.name),
    datasets: [
      {
        label: '',
        data: this.studentData.map(s => s.score),
        backgroundColor: '#ffbc00',
        borderRadius: 4
      }
    ]
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
      plugins: {
    legend: {
      display: false // <-- remove totalmente a legenda
    }
  },
    scales: { y: { min: 0, max: 10, ticks: { stepSize: 1 } } }
    
  };

  barChartType: 'bar' = 'bar';

  // Gráfico de pizza
  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.pieData.map(p => p.name),
    datasets: [
      {
        data: this.pieData.map(p => p.value),
        backgroundColor: this.pieData.map(p => p.color)
      }
    ]
  };

  pieChartOptions: ChartOptions<'pie'> = { responsive: true };

  pieChartType: 'pie' = 'pie';

  handleModuleNavigation(direction: 'prev' | 'next') {
    console.log(`Navigate ${direction} from ${this.selectedModule}`);
  }
  
  showCalendar = false;
  showForm = false;

  viewYear: number;
  viewMonth: number; // 0..11
  weekDays = ['SEG','TER','QUA','QUI','SEX','SAB','DOM'];

  classes = ['Todas as turmas', '1º ANO', '2º ANO', '3º ANO'];
  filter = this.classes[0];

  calendarDays: CalendarCell[] = [];
  events: EventItem[] = [];

  // form fields
  editingEvent: EventItem | null = null;
  formData: Partial<EventItem> = { title: '', date: '', classYear: '1º ANO', color: '#0077ff' };

  constructor(private router: Router) {
    const now = new Date();
    
    this.viewYear = now.getFullYear();
    this.viewMonth = now.getMonth();

    // exemplo inicial
    this.events = [
      { id: 1, title: '1º ANO - Aula 01 - Mód. 01', date: this.toIso(new Date(this.viewYear, this.viewMonth, 1)), classYear: '1º ANO', color: '#0077ff' },
      { id: 2, title: '2º ANO - Aula 02 - Mód. 01', date: this.toIso(new Date(this.viewYear, this.viewMonth, 4)), classYear: '2º ANO', color: '#ffc107' },
      { id: 3, title: '3º ANO - Aula 01 - Mód. 01', date: this.toIso(new Date(this.viewYear, this.viewMonth, 7)), classYear: '3º ANO', color: '#ff4081' },
      { id: 4, title: 'Feira de Ciências', date: this.toIso(new Date(this.viewYear, this.viewMonth, 12)), classYear: 'Todas as turmas', color: '#28a745' },
      { id: 5, title: 'Simulado ENEM', date: this.toIso(new Date(this.viewYear, this.viewMonth, 18)), classYear: '3º ANO', color: '#d81b60' },
      { id: 6, title: 'Passeio Cultural', date: this.toIso(new Date(this.viewYear, this.viewMonth, 20)), classYear: '2º ANO', color: '#9c27b0' },
      { id: 7, title: 'Apresentação de Teatro', date: this.toIso(new Date(this.viewYear, this.viewMonth, 25)), classYear: '1º ANO', color: '#03a9f4' },
    ];
    
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
    if (this.showCalendar) this.buildCalendar();
  }

  prevMonth() {
    this.viewMonth--;
    if (this.viewMonth < 0) { this.viewMonth = 11; this.viewYear--; }
    this.buildCalendar();
  }

  nextMonth() {
    this.viewMonth++;
    if (this.viewMonth > 11) { this.viewMonth = 0; this.viewYear++; }
    this.buildCalendar();
  }

  onFilterChange() {
    this.buildCalendar();
  }

  buildCalendar() {
    const first = new Date(this.viewYear, this.viewMonth, 1);
    const leading = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();

    const totalCells = 42;
    const cells: CalendarCell[] = [];

    for (let i = 0; i < totalCells; i++) {
      const d = new Date(this.viewYear, this.viewMonth, i - leading + 1);
      const iso = this.toIso(d);
      const isCurrentMonth = d.getMonth() === this.viewMonth;
      const events = this.getEventsForDate(iso);
      cells.push({ date: d, iso, display: d.getDate(), isCurrentMonth, events });
    }
    this.calendarDays = cells;
  }

  getEventsForDate(isoDate: string): EventItem[] {
    return this.events.filter(e =>
      e.date === isoDate &&
      (this.filter === this.classes[0] || e.classYear === this.filter)
    );
  }

  toIso(d: Date) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  formatMonthYear() {
    const months = ['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO','JULHO','AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO'];
    return `${months[this.viewMonth]} ${this.viewYear}`;
  }

  // clique no dia → abre form de novo evento
  onClickDay(cell: CalendarCell) {
    this.editingEvent = null;
    this.formData = { title: '', date: cell.iso, classYear: '1º ANO', color: '#0077ff' };
    this.showForm = true;
  }

  editEvent(ev: EventItem, e: MouseEvent) {
    e.stopPropagation();
    this.editingEvent = ev;
    this.formData = { ...ev };
    this.showForm = true;
  }

  saveEvent() {
    if (this.editingEvent) {
      // editar
      Object.assign(this.editingEvent, this.formData);
    } else {
      // novo
      const newEvent: EventItem = {
        id: this.events.length + 1,
        title: this.formData.title!,
        date: this.formData.date!,
        classYear: this.formData.classYear!,
        color: this.formData.color
      };
      this.events.push(newEvent);
    }
    this.showForm = false;
    this.buildCalendar();
  }

  deleteEvent() {
    if (!this.editingEvent) return;
    this.events = this.events.filter(e => e.id !== this.editingEvent!.id);
    this.showForm = false;
    this.buildCalendar();
  }

  closeModal() {
    this.showCalendar = false;
    this.showForm = false;
  }

  gotToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  goToSchedule() {
    this.router.navigate(['/schedule']);
  }
}
