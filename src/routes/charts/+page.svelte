<script>
    let showDetails = false;
  
    function toggleDetails() {
      showDetails = !showDetails;
    }
</script>
  
<div class="flex flex-col align-middle items-center bg-[#ffba1c] h-screen pt-24 w-full">
    <div class="w-[80%] lg:w-[60%] h-full">
        <h1 class="text-3xl mb-3">Kebabbo Charts</h1>
        <div class="h-[80%] overflow-y-scroll">
            <div class="bg-white rounded-3xl p-5 my-5 flex flex-col items-center lg:items-stretch">
                <button on:click={toggleDetails} aria-expanded={showDetails} aria-haspopup="true">
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
            {#if showDetails}
            <div class="bg-white rounded-3xl p-3 flex">
                <!-- Contenuto del dropdown -->
                <div class="w-[50%]">maps</div>
                <div class="w-[50%]">stats</div>
            </div>
            {/if}
        </div>
          
        </div>       
    </div>
</div>
