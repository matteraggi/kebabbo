<script lang="ts">
    import { kebabboDbAbroad } from './../kebabboDb';
    import KebabCard from './KebabCard.svelte';
    import type {KebabberProps} from './../utils/types';

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
        
    let dbArray: KebabberProps[] = Object.values(kebabboDbAbroad).sort((a, b) => order ? a.rating - b.rating : b.rating - a.rating);
    
    
    function changeOrder() {
        order = !order;
        setOrder(currentOrder);
    }
    
</script>

        <div class="flex-col lg:flex lg:flex-row justify-between mb-3 align-middle">
            <div class="flex-col lg:flex lg:flex-row gap-3 items-center h-full">
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
        <div class="lg:h-[700px] overflow-y-auto lg:overflow-y-scroll scrollbar-hide pb-12 mt-4">
            {#each dbArray as kebab}
                <KebabCard kebabber={kebab} />
            {/each}
        </div>     
        <div class="scroll-gradient"/>  