<script lang="ts">
    import MapComponent from './MapComponent.svelte';
    import StatsComponent from './StatsComponent.svelte';
    import { beforeUpdate } from 'svelte';
    import type { LocationData } from './../utils/types';
    import { calculateDistance } from './../utils/utils'; // Assuming you have distance calculation logic 
    import userLocation, { updateLocation } from './../locationStore';
    import { onMount } from 'svelte';
    import type {KebabberProps} from './../utils/types';

  onMount(updateLocation);    

    export let kebabber: KebabberProps; 
    let showDetails = false; 
    let starArray: string[] = [];

    const locationData:LocationData={
        name: kebabber.name,
        lat: kebabber.lat,
        lng: kebabber.lng,
        accuracy:null,
        timestamp:null
    };

    let distance: string | null = null;

    $: if (userLocation && locationData) {
        userLocation.subscribe(loc=>distance = calculateDistance(loc, locationData));
    } 

    function calculateStars() {
        const fullStars = Math.floor(kebabber.rating);
        const hasHalfStar = kebabber.rating - fullStars >= 0.5;
        const stars = Array(fullStars).fill('full');
        if (hasHalfStar) stars.push('half');
        while (stars.length < 5) stars.push('empty');
        return stars;
    }

    function toggleDetails() {
        showDetails = !showDetails;
    }
    
    // Aggiorna le stelle prima di ogni aggiornamento del componente
    beforeUpdate(() => {
        starArray = calculateStars();
    });

    // Inizializza le stelle quando il componente viene creato
    $: starArray = calculateStars();
        
</script>
<div class="bg-white rounded-3xl p-5 my-5 flex flex-col items-center lg:items-stretch">
    <button on:click={toggleDetails} aria-expanded={showDetails} aria-haspopup="true">
    <div class="flex flex-col lg:flex-row justify-between">
        <h2 class="text-2xl font-bold">{kebabber.name}</h2>
        <div class="flex gap-2 mt-2 lg:mt-0 justify-center">
            {#each starArray as starType}
                <img 
                    src={`./${starType}-star.svg`} 
                    alt={`${starType}-star`} 
                    class="w-8 h-8" 
                />
            {/each}
        </div>
    </div>
    <div class="mt-3 hidden lg:flex lg:justify-start"><p class="text-left">{kebabber.description}</p></div>
    <div class="lg:flex mt-3 text-stone-400 italic"><p>{distance}</p></div>
</button>
<div class="bg-white rounded-3xl m-2 gap-7 flex-col lg:flex lg:flex-row {showDetails ? 'max-h-screen' : 'max-h-0'} overflow-hidden expand-animation">
    <!-- Contenuto del dropdown -->
    <div class="w-full lg:w-[55%]">
        <MapComponent mapLink={kebabber.mapLink} />
    </div>
    <div class="w-full lg:w-[45%] flex flex-col justify-center">
        <div class="flex lg:hidden mt-3 mb-3"><p class="text-left">{kebabber.description}</p></div>
        <StatsComponent kebabberStats={kebabber}/>
        <div class="flex justify-between">
            <div class="flex gap-5 mt-3">
                <button class="bg-[#c71010] rounded-3xl py-2 px-4 text-white z-10">
                    <a href="/">Vedi sulla Mappa</a>
                </button>
                <button class="bg-[#c71010] rounded-3xl py-2 px-4 text-white z-10">
                    <a href={kebabber.map} target="_blank">Portami lì</a>
                </button>
            </div>
         </div>
    </div>
</div>
</div>



<!-- cut stars
    <div class="star-container" style={`--cut-percentage: ${rating * 20}%`}> 
        <svg width="20" height="20" viewBox="0 0 20 20"> <defs>
                <mask id="star-mask">
                    <rect width="100%" height="100%" fill="white" />
                    <rect x="0" y="0" width="var(--cut-percentage)" height="100%" fill="black" />
                </mask>
            </defs> 
    
            <image href="./full-star.svg" width="20" height="20" mask="url(#star-mask)" />
        </svg>
    </div>
    
    <style>
    .star-container {
        width: 20px; 
        height: 20px; 
        overflow: hidden;
    }
    </style>
-->
    