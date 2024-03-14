<script lang="ts">
	import KebabboAbroad from './../../components/KebabboAbroad.svelte';
	import KebabboLegends from './../../components/KebabboLegends.svelte';
    let activeTab = 0;

    function setActiveTab(index: number) {
    activeTab = index;
    }

    const tabs = [
    { label: 'Legendary'},
    { label: 'KebabWorld'},
  ];

</script>
<div class="flex flex-col align-middle items-center bg-[#ffba1c] min-h-screen lg:h-screen pt-24 w-full">
    <div class="w-[80%] lg:w-[60%]">
        {#each tabs as tab, index}
        <button
            class="px-4 pb-2 mr-2 text-black text-xl focus:outline-none"
            class:selected="{ activeTab === index }"
            on:click={() => setActiveTab(index)}
        >
            {tab.label}
        </button>
        {/each}
            {#each tabs as tab, index}
            <div
            class="mt-4"
                class:hidden="{ activeTab !== index }"
            >
                {#if index === 0}
                    <KebabboLegends />
                {/if}
                {#if index === 1}
                    <KebabboAbroad />
                {/if}
    </div>
            {/each}
            </div>
            </div>
<style>
    .selected {
    @apply font-bold border-b-2 border-[#c71010];
    }
</style>