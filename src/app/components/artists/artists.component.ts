import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styles: []
})
export class ArtistsComponent implements OnInit {

  artista:any;
  pistas:any[];

  constructor( private activatedRoute: ActivatedRoute,
                private _spotifyService: SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params
        .map(parametros => parametros['id'])
        .subscribe(id =>{
          
          this._spotifyService.getArtista(id)
            .subscribe(data => this.artista = data);

            this._spotifyService.getTop(id)
              .subscribe(data => this.pistas = data);
        })
  }

}
