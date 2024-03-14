<script lang="ts">
import { kebabboDb } from './../../kebabboDb.js';
import KebabCard from './../../components/KebabCard.svelte';
	import { beforeUpdate } from 'svelte';

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
    
    function setOrder(type: string){
        console.log(type);
        switch (type) {
            case "rating":
                currentOrder = "rating";
                dbArray = dbArray.sort((a, b) => order ? a.rating - b.rating : b.rating - a.rating);
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
    
let dbArray: KebabberProps[] = Object.values(kebabboDb).sort((a, b) => order ? a.rating - b.rating : b.rating - a.rating);


function changeOrder() {
    order = !order;
    setOrder(currentOrder);
}

    // Aggiorna le stelle prima di ogni aggiornamento del componente
    beforeUpdate(() => {
        setOrder("rating");
    });

</script>

<div class="flex flex-col align-middle items-center bg-[#ffba1c] min-h-screen lg:h-screen pt-24 w-full">
    <div class="w-[80%] lg:w-[60%] h-full">
        <div class="flex-col lg:flex lg:flex-row justify-between mb-3 align-middle">
            <div class="flex-col lg:flex lg:flex-row gap-3 items-center">
                <p class="text-xl text-black font-bold h-fit mb-3">Sort by:</p>
                <div class="flex gap-3 mb-3">
                    <div>
                        <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl" on:click={() => setOrder("rating")} aria-expanded={order}>Rating</button>
                    </div>
                    <div>
                        <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl" on:click={() => setOrder("distance")} aria-expanded={order}>Distance</button>
                    </div>
                    <div>
                        <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl" on:click={() => setOrder("name")} aria-expanded={order}>Name</button>
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
        <div class="h-[75%] lg:h-[85%] overflow-y-scroll scrollbar-hide pb-12">
            {#each dbArray as kebab}
                <KebabCard kebabber={kebab} />
            {/each}
        </div>     
        <div class="scroll-gradient"/>  
    </div>
</div>