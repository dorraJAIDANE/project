import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Centre } from 'app/models/Centre';
import { CentreService } from 'app/Service/centre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
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
      error => {
        console.error('Sign in failed', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error fetching centres.',
        });
      }
    );
  }




















  showProduits(): void {
    if (this.selectedCentre !== null) {
      sessionStorage.setItem('selectedCentreId', this.selectedCentre.toString());
      this.router.navigate(['/detail', this.selectedCentre]);
    }
  }
}