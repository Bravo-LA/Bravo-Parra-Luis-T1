import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './information.component.html'
})
export class InformationComponent implements OnInit {

  cantidad: number = 0

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const length = this.route.snapshot.paramMap.get('value')
    if (length) {
      this.cantidad = parseInt(length)
    }
  }

}
