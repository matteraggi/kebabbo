<script>
	import AboutBadges from "./AboutBadges.svelte";

</script>
<div class="flex-col lg:flex lg:flex-row">
    <div class="w-full lg:w-2/3 lg:mt-20">
       <p class="text-xl font-medium">In Italia il mondo del Kebab è ancora un mondo oscuro. I migliori locali sono sottovalutati, e i peggiori ricevono recensioni alte su Google.
        <br/><br/>
        Per questo ci siamo noi: studenti universitari, come voi, con anni di esperienza come mangiatori di Kebab.
        <br/><br/>
        Testiamo e recensiamo Kebabbari e Street Food per voi. Benvenuti su Kebabbo.
       </p>
       <br/><br/>
       <div class="flex gap-6">
       <AboutBadges logo="./cheap.svg" text="cheap" />
       <AboutBadges logo="./fast.svg" text="fast" />
       <AboutBadges logo="./tasty.svg" text="tasty" />
       </div>
    </div>
    <div class="hidden lg:flex w-full lg:w-1/3">
        <img src="./kebab.png" alt="kebab" class="w-full" />
    </div>
</div>