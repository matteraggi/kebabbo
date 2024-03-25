<script lang="ts">
	import SpinnerSvelte from './../components/SpinnerSvelte.svelte';
    import { onMount } from 'svelte';
    import userLocation from '../locationStore';
    import { updateLocation } from '../locationStore';
    import mapboxgl from 'mapbox-gl';    
    import type {KebabberProps} from './../utils/types';
    import { kebabboDb } from './../kebabboDb.js';
    
    let dbArray: KebabberProps[] = Object.values(kebabboDb).sort((a, b) => false ? a.rating - b.rating : b.rating - a.rating);
    let map: mapboxgl.Map | null = null;
    let isLoading = true; // Loading state
    /*const markerIcon = document.createElement('div'); 
    markerIcon.className = 'marker'; // Add your custom CSS class for styling
    markerIcon.style.backgroundImage = `url(your-icon.svg)`;
    markerIcon.style.width = '30px'; // Adjust as needed
    markerIcon.style.height = '30px'; // Adjust as needed
    */

  onMount(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_KEY;
    updateLocation();
    map = new mapboxgl.Map({
      container: "map-container",
      style: 'mapbox://styles/fri3erg/clu1byups00oz01qw6ykfhmma', 
    });
    map.on('load', () => {
    console.log('Map loaded');
    isLoading = false;
    });
    
    userLocation?.subscribe((location) => {
    if (location.lat&&location.lng&&map) {
      // Create or update your user marker here
      new mapboxgl.Marker(/*{ element: markerIcon }*/)
          .setLngLat([location.lng, location.lat])
          .setPopup(new mapboxgl.Popup().setText('You'))
          .addTo(map);
    }
  });
if(map!==null){
  dbArray.forEach((kebab) => {
    new mapboxgl.Marker(/*{ element: markerIcon }*/)
      .setLngLat([kebab.lng, kebab.lat])
      .setPopup(new mapboxgl.Popup()
      .setText(kebab.name)//cut this
      )
      /*  .setHTML(`
       <div class="popup">
           <h3>${kebab.name}</h3>
           <p>Rating: ${kebab.rating}</p> 
       </div>
   `)*/
      .addTo(map as mapboxgl.Map);
  });
}
});

const centerOnUser = () => {
    userLocation?.subscribe((location) => {
      if (map && location.lng && location.lat) {
        map.flyTo({
          center: [location.lng, location.lat],
          zoom: 16, // Adjust zoom if needed
          essential: true // For smooth transition
        });
      }
    });
  };
  </script>
  <div class="flex flex-col align-middle items-center bg-[#ffba1c] h-screen pt-24 w-full">
    <div class="w-[60%]"><h1 class="text-3xl">Kebabbo Maps</h1> <button on:click={centerOnUser}>Center on Me</button></div>
    <div id="map-container" class="my-7 align-middle items-center" style:opacity="{isLoading ? 0 : 1}"/>
    {#if isLoading}
    <div style="z-index: 1000; position:absolute; ">
    <SpinnerSvelte />
    </div>
    {/if}


</div>

<style>
    #map-container {
      height: 80%;
      width: 100%; 
      border-radius: 40px;
    }
    .marker { /* Style for your custom marker icon */
    background-size: cover; 
    border-radius: 50%;  
}

.popup {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 
}

  </style>
