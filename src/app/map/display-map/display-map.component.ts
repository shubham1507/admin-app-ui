import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { GoogleMapsLoaderService } from './google-maps-loader.service';
import { environment } from './../../../environments/environment'
import { isThisMinute } from 'date-fns';

/// <reference types="googlemaps" />

// Marker interface for type safety
interface Marker {
  position: google.maps.LatLngLiteral;
  label?: string;
  title: string;
  options: {};
}

@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.component.html',
  styleUrls: ['./display-map.component.scss'],
  providers: [GoogleMapsLoaderService]
})
export class DisplayMapComponent implements OnInit, OnDestroy {
  apiLoaded: Observable<boolean>;

  title: string = '';

  options: google.maps.MapOptions = {
    center: {
      lat: 44.352146,
      lng: -85.520063
    },
    zoom: 12
  };

  markerOptions: google.maps.MarkerOptions = { draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  markers: Marker[] = [
  ];

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  private activeInfoWindow: Marker;

  get infoWindowContent() {
    return this.activeInfoWindow;
  }

  set infoWindowContent(marker) {
    this.title = marker.title;
    this.activeInfoWindow = marker;
  }

  constructor(
    public gmLoader: GoogleMapsLoaderService,
    @Inject(DOCUMENT) private document: any,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.fetchData();
    this.setPositions();
  }

  fetchData() {
    let endpoint = `${environment.apiURL}/realtime-map`
    this
      .http
      .get(endpoint)
      .subscribe(data => {
        data['data'].forEach(bot => {
          let icon = null;
          switch(bot.type){
            case 'service_provider':
              icon = 'assets/img/Service provider.svg';
              break; 
            case 'charging_station':
              icon = 'assets/img/charging station.svg';
              break;
            case 'bot':
              icon = 'assets/img/bot_icon.svg'
          }

          this.markers.push({
            position: {
              lat: parseFloat(bot.position.lat),
              lng: parseFloat(bot.position.long),
            },
            label: bot.label,
            title: bot.title,
            options: {
              icon: icon
            }
          })
        })

      })
  }

  ngOnDestroy() {
    this.removeGoogleMapScript();
  }

  setPositions() {
    this.markers.forEach((marker) => {
      const { lat, lng } = { ...marker.position };
      this.markerPositions.push({ lat, lng });
    });
  }


  openInfoWindow(marker: MapMarker, item: Marker) {
    this.infoWindowContent = item;
    this.infoWindow.open(marker);
  }

  removeGoogleMapScript() {
    // todo: temp workaround for 'You have included the Google Maps API multiple times on this page'
    const keywords = ['maps.googleapis'];

    // Remove google from BOM (window object)
    window.google = undefined;

    // Remove google map scripts from DOM
    const scripts = this.document.head.getElementsByTagName('script');
    for (let i = scripts.length - 1; i >= 0; i--) {
      const scriptSource = scripts[i].getAttribute('src');
      if (scriptSource != null) {
        if (keywords.filter(item => scriptSource.includes(item)).length) {
          scripts[i].remove();
          // scripts[i].parentNode.removeChild(scripts[i]);
        }
      }
    }
  }

}
