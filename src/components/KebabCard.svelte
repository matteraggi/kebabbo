<script lang="ts">
    import MapComponent from './MapComponent.svelte';
    import StatsComponent from './StatsComponent.svelte';
    interface KebabberProps {        
        id: number;
        name: string;
        description: string;
        map: string;
        quality: number;
        price: number;
        dimension: number;
        fun: number;
        menu: number;
    }
    let showDetails = false; 
    export let kebabber: KebabberProps; 
    const rating=(kebabber.quality+kebabber.price+kebabber.dimension+kebabber.fun+kebabber.menu)/5;

    function calculateStars() {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        return { fullStars, hasHalfStar };
    }
    function createStarArray(fullStars: number, hasHalfStar: boolean) {
        const stars = Array(fullStars).fill('full');
        if (hasHalfStar) stars.push('half');
        while (stars.length < 5) stars.push('empty');
        return stars;
    }
    function toggleDetails() {
        showDetails = !showDetails;
    }

    const { fullStars, hasHalfStar } = calculateStars();
    const starArray = createStarArray(fullStars, hasHalfStar);
        
</script>


<div class="bg-white rounded-3xl p-5 my-5 flex flex-col items-center lg:items-stretch">
    <button on:click={toggleDetails} aria-expanded={showDetails} aria-haspopup="true">
    <div class="flex flex-col lg:flex-row justify-between">
        <h2 class="text-2xl">{kebabber.name}</h2>
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
    <div class="hidden lg:flex mt-3 text-stone-400 italic"><p>Address: Via A. Volta, 1, 35031 Abano Terme PD, Italy</p></div>
</button>
{#if showDetails}
<div class="bg-white rounded-3xl p-3 gap-7 flex-col lg:flex lg:flex-row">
    <!-- Contenuto del dropdown -->
    <div class="w-full lg:w-[55%]">
        <MapComponent mapLink={kebabber.map} />
    </div>
    <div class="w-full lg:w-[45%]">
        <div class="h-[30%]">qualcosa</div>
        <StatsComponent kebabberStats={kebabber}/>
        <div class="flex justify-between">
            <div class="flex gap-5 mt-3">
                <button class="bg-[#c71010] rounded-3xl py-2 px-4 text-white z-10">
                    <a href="/">Vedi sulla Mappa</a>
                </button>
                <button class="bg-[#c71010] rounded-3xl py-2 px-4 text-white z-10">
                    Portami lì
                </button>
            </div>
         </div>
    </div>
</div>
{/if}
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
    