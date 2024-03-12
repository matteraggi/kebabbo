<script lang="ts">
import { kebabboDb } from './../../kebabboDb.js';
import KebabCard from './../../components/KebabCard.svelte';
</script>
<div class="flex flex-col align-middle items-center bg-[#ffba1c] h-screen pt-24 w-full">
    <div class="w-[80%] lg:w-[60%] h-full">
        <h1 class="text-3xl mb-3">Kebabbo Charts</h1>
        <div class="h-[85%] overflow-y-scroll scrollbar-hide">
            {#each kebabboDb as kebab}
                <KebabCard kebabber={kebab} />
            {/each}
        </div>     
        <div class="scroll-gradient"/>  
    </div>
</div>