<script lang="ts">
    let activeTab = 0;

    function setActiveTab(index: number) {
    activeTab = index;
    }

    const tabs = [
    { label: 'Legendary', content: ['Contenuto Tab 1'] },
    { label: 'KebabWorld', content: ['Contenuto Tab 2'] },
  ];

</script>

<div class="flex flex-col align-middle items-center bg-[#ffba1c] h-screen pt-24 w-full">
    <div class="w-[60%]">
        <div class="flex">
            {#each tabs as tab, index}
            <button
                class="px-4 pb-2 mr-2 text-black focus:outline-none text-xl"
                class:selected="{ activeTab === index }"
                on:click={() => setActiveTab(index)}
            >
                {tab.label}
            </button>
            {/each}
        </div>
        
        <div class="mt-4">
            {#each tabs as tab, index}
            <div
                class="p-4"
                class:hidden="{ activeTab !== index }"
            >
                {#if tab.content}
                {#each tab.content as item}
                    {item}
                {/each}
                {/if}
            </div>
            {/each}
        </div>
    </div>
    </div>

<style>
    .selected {
    @apply font-bold border-b-2 border-[#c71010];
    }
</style>