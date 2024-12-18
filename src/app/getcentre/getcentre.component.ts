import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Centre } from 'app/models/Centre';
import { CentreService } from 'app/Service/centre.service';

@Component({
  selector: 'app-getcentre',
  templateUrl: './getcentre.component.html',
  styleUrls: ['./getcentre.component.css']
})
export class GetcentreComponent implements OnInit {

  centres: Centre[] = [];
  selectedCentre: number | null = null;
  focus: any;
  focus1: any;
  centreId:number;

  constructor(private centreService: CentreService, private router: Router) { }



  ngOnInit() {
    this.loadCentres();
  }

  loadCentres(): void {
    this.centreService.getAllCentres().subscribe(
      (data: Centre[]) => this.centres = data,
      error => console.error('Error fetching centres', error)
    );
  }

  showProduits(): void {
    if (this.selectedCentre !== null) {
      sessionStorage.setItem('selectedCentreId', this.selectedCentre.toString());
      this.router.navigate(['/produit', this.selectedCentre]);
    }
  }

}
