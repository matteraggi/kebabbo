<script>
	import CreatorCard from "./CreatorCard.svelte";

</script>
<div class="flex-col lg:flex lg:flex-row lg:gap-12 mt-16 mb-16 lg:h-[450px]">
    <div class="flex-col lg:flex lg:flex-row h-[450px] mb-12 lg:mb-0">
        <CreatorCard name="Matteo" role="Developer & Eater" image="./matteo.jpg" insta="https://www.instagram.com/matteraggiii" linkedin="https://www.linkedin.com/in/matteo-raggi" github="https://www.github.com/matteraggi"/>
    </div>
    <div class="flex-col lg:flex lg:flex-row h-[450px] mb-12 lg:mb-0">
        <CreatorCard name="Elia" role="Developer & Eater" image="./kebab.png" insta="https://www.instagram.com/eliafriberg" linkedin="https://www.linkedin.com/in/elia-friberg-021a90295" github="https://www.github.com/fri3erg"/>
    </div>
    <div class="flex-col lg:flex lg:flex-row h-[450px] mb-12 lg:mb-0">
        <CreatorCard name="Francesco" role="Social Media Manager" image="./kebab.png" insta="https://www.instagram.com/fra___espo" linkedin="https://www.linkedin.com/in/" github="https://www.github.com/Francesco0905"/>
    </div>
</div>