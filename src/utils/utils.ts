// utils.ts

import type { LocationData } from './../utils/types';
// Utility function 1

// Utility function 2
export function calculateDistance(userLocation: LocationData, kebabLocation:LocationData): string {
    if(userLocation.lat === null || userLocation.lng === null || kebabLocation.lat === null || kebabLocation.lng === null) {
        return 'Location data not available';
    }
    console.log(userLocation, kebabLocation);
    const R = 6371e3; // metres
    const φ1 = userLocation.lat * Math.PI/180; // φ, λ in radians
    const φ2 = kebabLocation.lat * Math.PI/180;
    const Δφ = (kebabLocation.lat-userLocation.lat) * Math.PI/180;
    const Δλ = (kebabLocation.lng-userLocation.lng) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = R * c; // in metres
    return distanceToString(d);
}

function distanceToString(distanceMeters: number): string {
    /**
     * Converts a distance in meters to a user-friendly string.
  
     * @param distanceMeters - The distance in meters.
     * @returns A string representing the distance in a user-friendly format (e.g., "2 km away" or "450 meters away").
     */
  
    if (distanceMeters < 1000) {
      return `${distanceMeters.toFixed(0)} metri da te`; // Round to whole meters
    } else {
      const distanceKm = (distanceMeters / 1000).toFixed(1);
      return `${distanceKm} km da te`;
    }
  }