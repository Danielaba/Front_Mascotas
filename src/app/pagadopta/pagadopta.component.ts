import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagadopta',
  templateUrl: './pagadopta.component.html',
  styleUrls: ['./pagadopta.component.css']
})
export class PagadoptaComponent implements OnInit {

  constructor(private routes:Router, private route:ActivatedRoute) { }

  id = "";

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id')
  }

}
