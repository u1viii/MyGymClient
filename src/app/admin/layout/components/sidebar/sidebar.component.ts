import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  template: `...`
})
export class SidebarComponent {
  constructor(private router : Router) { }
  changeClass(event: Event){
    const el = event.target as HTMLElement;
    document.querySelectorAll('.menu-link').forEach(el=>{
      el.classList.remove('active');
    })
    el.parentElement?.classList.add('active')
    
  }
  ngOnInit(){
    document.querySelectorAll('.menu-link').forEach(el=>{
      el.classList.remove('active');
      
    })
    document.querySelector(`.menu-link a[href="${this.router.url}"]`)?.parentElement?.classList.add('active');
    
    
  }
}
