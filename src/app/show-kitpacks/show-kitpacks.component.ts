import { Component, OnInit } from '@angular/core';
import { KitPackService } from 'app/Service/kit-pack.service';
import { KitPack } from 'app/models/KitPack';

@Component({
  selector: 'app-show-kitpacks',
  templateUrl: './show-kitpacks.component.html',
  styleUrls: ['./show-kitpacks.component.css']
})
export class ShowKitPacksComponent implements OnInit {
  kitPacks: KitPack[] = [];

  constructor(private kitPackService: KitPackService) { }

  ngOnInit(): void {
    this.loadKitPacks();
  }

  loadKitPacks(): void {
    this.kitPackService.getAllKitPacks().subscribe(
      (data: KitPack[]) => {
        console.log(data);  // Vérifiez ici la structure des données
        this.kitPacks = data;
      },
      error => console.error('Erreur lors de la récupération des KitPacks', error)
    );
  }
  
}
