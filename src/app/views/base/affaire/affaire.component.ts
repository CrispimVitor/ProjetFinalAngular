import { Component, OnInit } from '@angular/core';
import { Affaire } from '../../../models/affaire';
import { AffaireService } from '../../../services/affaire.service';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.scss']
})
export class AffaireComponent implements OnInit {

  //affaires:any[];
  //affaire: Affaire = new Affaire();
  constructor(/*private affaireService: AffaireService*/) { }
  
  ngOnInit() {
    //this.locadAffaire();
  }

  /*locadAffaire() {
    this.affaireService.getAllAffaire().subscribe(
      data => {this.affaires = data;},
      error => {console.log(error);}
    )
  }

  createAffaire() {
    this.affaireService.saveAffaire(this.affaire).subscribe(
      () => {this.locadAffaire(); this.affaire = new Affaire(); }
    )
  }

  eliminateAffaire(affaire) {
    this.affaireService.deleteAffaire(affaire.idAffaire).subscribe(
      () => {this.locadAffaire();},
      error => {console.log(error);}
    )
  }*/

}
