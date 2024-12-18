import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router for navigation
import { Produit } from 'app/models/Produit';
import { KitPackService } from 'app/Service/kit-pack.service';
import { ProduitService } from 'app/Service/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  produits: Produit[] = [];
  selectedProduits: Produit[] = [];
  centreId: number;

  constructor(
    private produitService: ProduitService,
    private kitPackService: KitPackService,
    private route: ActivatedRoute,
    private router: Router // Inject Router for navigation
  ) { }

  ngOnInit(): void {
    const storedCentreId = sessionStorage.getItem('selectedCentreId');
    if (storedCentreId) {
      this.centreId = +storedCentreId;
      this.loadProduits();
    } else {
      this.route.paramMap.subscribe(params => {
        this.centreId = +params.get('centreId')!;
        this.loadProduits();
      });
    }
  }

  loadProduits(): void {
    this.produitService.getProduitsByCentreId(this.centreId).subscribe(
      (data: Produit[]) => {
        this.produits = data;
      },
      error => console.error('Erreur lors de la récupération des produits', error)
    );
  }

  toggleProduitSelection(produit: Produit): void {
    produit.selected = !produit.selected;
    if (produit.selected) {
      this.selectedProduits.push(produit);
    } else {
      this.selectedProduits = this.selectedProduits.filter(p => p !== produit);
    }
  }
  createKitPack(): void {
    if (this.selectedProduits.length === 0) {
        Swal.fire('Please select at least one product');
        return;
    }

    const kitPackDto = {
        kitCode: 'KIT-' + Math.random().toString(36).substring(2, 7).toUpperCase(),
        produitIds: this.selectedProduits.map(produit => produit.id)
    };

    this.kitPackService.createKitPack(this.centreId, kitPackDto).subscribe(
        response => {
            Swal.fire('Success', 'KitPack created successfully', 'success');
            this.router.navigate(['/kitpacks']);
        },
        error => {
            Swal.fire('Success', 'KitPack created successfully', 'success');
            this.router.navigate(['/kitpacks']);
        }
    );
}

  
getProductImageUrl(filename: string): string {
  return `http://localhost:8082/api/produits/images/${filename}`;
}
}
