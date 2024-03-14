<script lang="ts">
    export let kebabberStats: KebabberProps; 
    
    interface KebabberProps {        
        id: number;
        name: string;
        description: string;
        mapLink: string;
        map: string;
        quality: number;
        price: number;
        dimension: number;
        fun: number;
        menu: number;
        rating: number;
    }

    function calculateStars(stats: number) {
        const fullStars = Math.floor(stats);
        const hasHalfStar = stats - fullStars >= 0.5;
        return { fullStars, hasHalfStar };
    }
    function createStarArray(fullStars: number, hasHalfStar: boolean) {
        const stars = Array(fullStars).fill('full');
        if (hasHalfStar) stars.push('half');
        while (stars.length < 5) stars.push('empty');
        return stars;
    }

    let fullStars, hasHalfStar;

    ({ fullStars, hasHalfStar } = calculateStars(kebabberStats.quality));
    const qualityStarArray = createStarArray(fullStars, hasHalfStar);

    ({ fullStars, hasHalfStar } = calculateStars(kebabberStats.price));
    const priceStarArray = createStarArray(fullStars, hasHalfStar);

    ({ fullStars, hasHalfStar } = calculateStars(kebabberStats.dimension));
    const dimensionStarArray = createStarArray(fullStars, hasHalfStar);

    ({ fullStars, hasHalfStar } = calculateStars(kebabberStats.fun));
    const funStarArray = createStarArray(fullStars, hasHalfStar);

    ({ fullStars, hasHalfStar } = calculateStars(kebabberStats.menu));
    const menuStarArray = createStarArray(fullStars, hasHalfStar);
</script>

<div class="flex-col">
    <div class="flex gap-5 mb-3">
        <p class="w-[25%] font-bold">Quality: </p>
        <div class="flex">
        {#each qualityStarArray as starType}
                <img 
                    src={`./${starType}-star.svg`} 
                    alt={`${starType}-star`} 
                    class="w-8 h-8" 
                />
        {/each}
        </div>
    </div>
    <div class="flex gap-5 mb-3">
        <p class="w-[25%] font-bold">Price: </p>
        <div class="flex">
        {#each priceStarArray as starType}
                <img 
                    src={`./${starType}-star.svg`} 
                    alt={`${starType}-star`} 
                    class="w-8 h-8" 
                />
        {/each}
        </div>
    </div>
    <div class="flex gap-5 mb-3">
        <p class="w-[25%] font-bold">Dimension: </p>
        <div class="flex">
        {#each dimensionStarArray as starType}
                <img 
                    src={`./${starType}-star.svg`} 
                    alt={`${starType}-star`} 
                    class="w-8 h-8" 
                />
        {/each}</div>
    </div>
    <div class="flex gap-5 mb-3">
        <p class="w-[25%] font-bold">Fun: </p>
        <div class="flex">
        {#each funStarArray as starType}
                <img 
                    src={`./${starType}-star.svg`} 
                    alt={`${starType}-star`} 
                    class="w-8 h-8" 
                />
        {/each}
    </div>
    </div>
    <div class="flex gap-5 mb-3">
        <p class="w-[25%] font-bold">Menu: </p>
        <div class="flex">
        {#each menuStarArray as starType}
                <img 
                    src={`./${starType}-star.svg`} 
                    alt={`${starType}-star`} 
                    class="w-8 h-8" 
                />
        {/each}
    </div>
    </div>
</div>