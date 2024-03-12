<script lang="ts">
    let showDetails1 = false; // Stato del primo box
    let showDetails2 = false; // Stato del secondo box

    function toggleDetails(boxNumber: number) {
        if (boxNumber === 1) {
            showDetails1 = !showDetails1; // Cambia lo stato del primo box
        } else if (boxNumber === 2) {
            showDetails2 = !showDetails2; // Cambia lo stato del secondo box
        }
    }
import { kebabboDb } from './../../kebabboDb.js';
import KebabCard from './../../components/KebabCard.svelte';
</script>
<div class="flex flex-col align-middle items-center bg-[#ffba1c] h-screen pt-24 w-full">
    <div class="w-[80%] lg:w-[60%] h-full">
        <h1 class="text-3xl mb-3">Kebabbo Charts</h1>
        <div class="h-[80%] overflow-y-scroll">
            {#each kebabboDb as kebab}
            <KebabCard kebabber={kebab} />
        {/each}
        </div>       
    </div>
</div>