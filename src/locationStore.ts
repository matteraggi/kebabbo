// src/locationStore.ts
import { writable } from 'svelte/store';

import type { LocationData } from './utils/types';


const initialLocation: LocationData = {
    name: 'Your Location',
    lat: null,
    lng: null,
    accuracy: null,
    timestamp: null,
  };
  
  const userLocation = writable<LocationData>(initialLocation);
  
  function updateLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          userLocation.update((prev) => ({
            ...prev,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp,
          }));
        },
        (error) => {
            console.error('Error getting location', error);
        }
      );
    } else {
        console.error('Geolocation not available');
    }
  }
  
  export default userLocation;
  export { updateLocation };
