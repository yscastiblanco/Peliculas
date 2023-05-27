import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';


import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',

  styles: [
  ]
})
export class FooterComponent {
  @Input() currentPage: number=1;
  @Output() siguientePagina: EventEmitter<void> = new EventEmitter<void>();
  @Output() anteriorPagina: EventEmitter<void> = new EventEmitter<void>();
}