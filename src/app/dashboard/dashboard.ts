import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Lesson {
  id: string;
  title: string;
  backgroundColor: string;        // cor da caixa
  iconBackgroundColor: string;    // cor do círculo do ícone
  iconFillColor: string;          // cor do "play" (fill do SVG)
}

interface Module {
  id: string;
  title: string;
  progress: string;
  backgroundColor: string;
  lessons: Lesson[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  imports: [CommonModule]
})
export class DashboardComponent {
  activeTab: 'cronograma' | 'aulas' | 'relatorio' = 'aulas';
  constructor( private router: Router) {}
  modules: Module[] = [
    {
      id: 'module1',
      title: 'MÓDULO 1 - CONHECENDO AS NOTAS',
      progress: '0%',
      backgroundColor: 'bg-rosa',
      lessons: [
        { id: 'lesson1', title: 'AULA 01 - DÓ', backgroundColor: 'bg-rosa-claro', iconBackgroundColor: 'bg-rosa', iconFillColor: '#FFD9E9' },
        { id: 'lesson2', title: 'AULA 02 - RÉ', backgroundColor: 'bg-rosa-claro', iconBackgroundColor: 'bg-rosa', iconFillColor: '#FFD9E9' },
        { id: 'lesson3', title: 'AULA 03 - MI', backgroundColor: 'bg-rosa-claro', iconBackgroundColor: 'bg-rosa', iconFillColor: '#FFD9E9' }
      ]
    },
    {
      id: 'module2',
      title: 'MÓDULO 2 - PAUTAS E NOTAS',
      progress: '0%',
      backgroundColor: 'bg-amarelo',
      lessons: [
        { id: 'lesson1', title: 'AULA 01 - DÓ', backgroundColor: 'bg-amarelo-claro', iconBackgroundColor: 'bg-amarelo', iconFillColor: '#FFEBB3' },
        { id: 'lesson2', title: 'AULA 02 - RÉ', backgroundColor: 'bg-amarelo-claro', iconBackgroundColor: 'bg-amarelo', iconFillColor: '#FFEBB3' },
        { id: 'lesson3', title: 'AULA 03 - MI', backgroundColor: 'bg-amarelo-claro', iconBackgroundColor: 'bg-amarelo', iconFillColor: '#FFEBB3' }
      ]
    },
    {
      id: 'module3',
      title: 'MÓDULO 3 - PLACEHOLDER',
      progress: '0%',
      backgroundColor: 'bg-verde',
      lessons: [
        { id: 'lesson1', title: 'AULA 01 - DÓ', backgroundColor: 'bg-verde-claro', iconBackgroundColor: 'bg-verde', iconFillColor: '#99DBC5' },
        { id: 'lesson2', title: 'AULA 02 - RÉ', backgroundColor: 'bg-verde-claro', iconBackgroundColor: 'bg-verde', iconFillColor: '#99DBC5' },
        { id: 'lesson3', title: 'AULA 03 - MI', backgroundColor: 'bg-verde-claro', iconBackgroundColor: 'bg-verde', iconFillColor: '#99DBC5' }
      ]
    }
  ];

  sidebarButtons = [
    { id: 'edit', label: 'EDITAR PERFIL' },
    { id: 'classes', label: 'TURMAS' },
    { id: 'help', label: 'AJUDA' },
    { id: 'settings', label: 'CONFIGURAÇÕES' },
    { id: 'logout', label: 'LOGOUT' }
  ];

  handleTabClick(tab: 'cronograma' | 'aulas' | 'relatorio') {
    this.activeTab = tab;
  }

  handleSidebarButtonClick(buttonId: string) {
    console.log(`Clicked ${buttonId}`);
  }

  handleLessonClick(lessonId: string) {
    console.log(`Clicked lesson ${lessonId}`);
  }

  goToSchedule() {
    this.router.navigate(['/schedule']);
  }
  
  goToAnalytics() {
    this.router.navigate(['/analytics']);
  }

    goToLessonOne() {
    this.router.navigate(['/lessonOne']);
  }

  onLessonClick(moduleId: string, lessonId: string) {
  if (moduleId === 'module1' && lessonId === 'lesson1') {
    this.goToLessonOne();
  } else {
    console.log(`Clicked ${moduleId} - ${lessonId}`);
    // aqui você pode depois colocar navegação para outras aulas
  }
}

}
