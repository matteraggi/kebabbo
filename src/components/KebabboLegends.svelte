<script lang="ts">
    import { kebabboDbLegend } from './../kebabboDb';
    import KebabCard from './KebabCard.svelte';    
    import type {KebabberProps} from './../utils/types';

    

        
        function setOrder(type: string){
            console.log(type);
            switch (type) {
                case "rating":
                    currentOrder = "rating";
                    dbArray = dbArray.sort((a, b) => order ? a.rating - b.rating : b.rating - a.rating);
                    break;
                case "quality":
                    currentOrder = "name";
                    dbArray = dbArray.sort((a, b) => order ? a.quality - b.quality : b.quality - a.quality);
                    break;
                case "price":
                    currentOrder = "price";
                    dbArray = dbArray.sort((a, b) => order ? a.price - b.price : b.price - a.price);
                    break;
                case "dimension":
                    currentOrder = "dimension";
                    dbArray = dbArray.sort((a, b) => order ? a.dimension - b.dimension : b.dimension - a.dimension);
                    break;
                case "fun":
                    currentOrder = "fun";
                    dbArray = dbArray.sort((a, b) => order ? a.fun - b.fun : b.fun - a.fun);
                    break;
                case "menu":
                    currentOrder = "menu";
                    dbArray = dbArray.sort((a, b) => order ? a.menu - b.menu : b.menu - a.menu);
                    break;
                case "distance":
                    currentOrder = "distance";
                    break;
                case "name":
                    currentOrder = "name";
                    dbArray = dbArray.sort((a, b) => order ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));
                    break;
                default:
                    // In caso di un tipo non valido, mantieni l'ordine attuale
                    break;
            }
        }
    
    let order = false;
    let currentOrder = "rating";
        
    let dbArray: KebabberProps[] = Object.values(kebabboDbLegend).sort((a, b) => order ? a.rating - b.rating : b.rating - a.rating);
    
    
    function changeOrder() {
        order = !order;
        setOrder(currentOrder);
    }
    
</script>

<div class="flex-col lg:flex lg:flex-row justify-between mb-3 align-middle">
    <div class="flex-col lg:flex lg:flex-row gap-3 items-center">
        <p class="text-xl text-black font-bold h-fit mb-3">Sort by:</p>
        <div class="flex-col lg:flex lg:flex-row gap-3 mb-3">
            <div class="flex gap-3 mb-3 lg:mb-0">
                <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl" on:click={() => setOrder("rating")} aria-expanded={order}>Rating</button>
            
                <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl" on:click={() => setOrder("price")} aria-expanded={order}>Price</button>
                
                <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl" on:click={() => setOrder("dimension")} aria-expanded={order}>Dimension</button>
            </div>
            <div class="flex gap-3 mb-3 lg:mb-0">
                <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl" on:click={() => setOrder("fun")} aria-expanded={order}>Fun</button>
                <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl" on:click={() => setOrder("menu")} aria-expanded={order}>Menu</button>
                <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl" on:click={() => setOrder("name")} aria-expanded={order}>Name</button>
            </div>
            <div>
                <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl" on:click={() => setOrder("distance")} aria-expanded={order}>Distance</button>
            </div>
        </div>
    </div>
    <div>
        <button class="bg-[#c71010] p-2 text-white rounded-full" on:click={changeOrder} aria-expanded={order}>
            {#if order}
            <img src="./arrow-up.svg" alt="freccia su" class="h-6 w-6"/>
            {:else}
            <img src="./arrow-down.svg" alt="freccia giù" class="h-6 w-6"/>
            {/if}
        </button>
    </div>
</div>
<div class="h-[75%] lg:h-[500px] overflow-y-scroll scrollbar-hide pb-12">
    {#each dbArray as kebab}
        <KebabCard kebabber={kebab} />
    {/each}
</div>     
<div class="scroll-gradient"/>  