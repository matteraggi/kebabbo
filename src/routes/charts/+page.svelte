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
</script>
  
<div class="flex flex-col align-middle items-center bg-[#ffba1c] h-screen pt-24 w-full">
    <div class="w-[80%] lg:w-[60%] h-full">
        <h1 class="text-3xl mb-3">Kebabbo Charts</h1>
        <div class="h-[80%] overflow-y-scroll">
            <div class="relative bg-white rounded-3xl p-5 my-5 flex flex-col items-center lg:items-stretch z-10">
                <button on:click={() => toggleDetails(1)} aria-expanded={showDetails1} aria-haspopup="true">
                <div class="flex flex-col lg:flex-row justify-between">
                    <h2 class="text-2xl">Abano Kebab Indiano</h2>
                    <div class="flex gap-2 mt-2 lg:mt-0 justify-center">
                        <img src="./main-star.svg" alt="star" class="w-8 h-8"/>
                        <img src="./main-star.svg" alt="star" class="w-8 h-8"/>
                        <img src="./main-star.svg" alt="star" class="w-8 h-8"/>
                        <img src="./main-star.svg" alt="star" class="w-8 h-8"/>
                    </div>
                </div>
                <div class="mt-3 hidden lg:flex lg:justify-start"><p class="text-left">A small town in the province of Padua, in the Veneto region, Italy. It is located on the eastern slope of the Euganean Hills, at the foot of Monte Rosso (349 m). The town is part of the Parco Regionale dei Colli Euganei.</p></div>
                <div class="hidden lg:flex mt-3 text-stone-400 italic"><p>Address: Via A. Volta, 1, 35031 Abano Terme PD, Italy</p></div>
                <div class="flex justify-between">
                    <div class="flex gap-5 mt-3">
                        <button class="bg-[#c71010] rounded-3xl py-2 px-4 text-white hidden lg:flex z-10"><a href="/">Visualizza sulla Mappa</a></button>
                        <button class="bg-[#c71010] rounded-3xl py-2 px-4 text-white z-10">Portami lì</button>
                    </div>
                </div>
            </button>
        </div>
        {#if showDetails1}
        <div class="relative bg-[#E7E7E7] rounded-b-3xl p-3 flex -mt-[38px] z-0 py-8 gap-5">
            <!-- Contenuto del dropdown -->
            <div class="w-[45%]"><img src="./square.png" alt="pos" class="rounded-3xl"/></div>
            <div class="w-[45%]"><p class="mt-6">frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio frigo frocio</p>                        <img src="./empty-star.svg" alt="star" class="w-8 h-8"/>
                <img src="./half-star.svg" alt="star" class="w-8 h-8"/>
            </div>
        </div>
        {/if}
        
        </div>    
    </div>
</div>