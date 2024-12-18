import { Centre } from "./Centre";
import { Produit } from "./Produit";


export class KitPack {
  id?: number;  
  KIT_CODE?: string;
  CODE_Prod?: string;
  Date_Creation?: Date;
  produits?: Produit[];
  centre?: Centre;  // Use the complete Centre type
}
