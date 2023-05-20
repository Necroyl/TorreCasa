import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhcmxpZS1icm93bjg2IiwiYSI6ImNsZ2VzZ3Q1YjBuMnUzZ21mODk4azRtOWIifQ.4xlNwdfMSTLMNyM-djP6NA';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
