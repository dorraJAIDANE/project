import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentreService } from 'app/Service/centre.service';
import { Centre } from 'app/models/Centre';

@Component({
  selector: 'app-centre-details',
  templateUrl: './centre-details.component.html',
  styleUrls: ['./centre-details.component.scss']
})
export class CentreDetailsComponent implements OnInit {
  centre: Centre | null = null;
  products: any[] = []; // Replace with the actual type

  constructor(
    private route: ActivatedRoute,
    private centreService: CentreService
  ) { }

  ngOnInit(): void {
    const centreId = +this.route.snapshot.paramMap.get('id')!;
    this.loadCentreDetails(centreId);
  }

  loadCentreDetails(id: number): void {
    this.centreService.getCentreById(id).subscribe(
      data => {
        this.centre = data;
        // Assume there's a method to fetch products for the centre
        this.loadCentreProducts(id);
      },
      error => console.error('Error fetching centre details', error)
    );
  }

  loadCentreProducts(id: number): void {
    this.centreService.getProductsByCentre(id).subscribe(
      data => this.products = data,
      error => console.error('Error fetching centre products', error)
    );
  }
}
