<script lang="ts">
import { kebabboDb } from './../../kebabboDb.js';
import KebabCard from './../../components/KebabCard.svelte';
</script>
<div class="flex flex-col align-middle items-center bg-[#ffba1c] h-screen pt-24 w-full">
    <div class="w-[80%] lg:w-[60%] h-full">
        <div class="flex justify-between mb-3">
            <div class="flex gap-3">
                <p class="text-xl text-black font-bold">Sort by:</p>
                <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl">Rating</button>
                <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl">Distance</button>
                <button class="bg-[#c71010] px-3 py-1 text-white rounded-3xl">Name</button>
            </div>
            <div>
                <button class="bg-[#c71010] p-2 text-white rounded-full">
                    <img src="./arrow-up.svg" alt="freccia su" class="h-6 w-6"/>
                </button>
            </div>
        </div>
        <div class="h-[85%] overflow-y-scroll scrollbar-hide pb-12">
            {#each kebabboDb as kebab}
                <KebabCard kebabber={kebab} />
            {/each}
        </div>     
        <div class="scroll-gradient"/>  
    </div>
</div>