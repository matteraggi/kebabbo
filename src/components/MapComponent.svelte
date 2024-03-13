<script lang="ts">
	
    export let mapLink: string; 
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    function getEmbedSrc() {
        if(!mapLink) return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Kebabbo`;
        const encodedQuery = encodeURIComponent(mapLink);
        return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedQuery}`;
    }
</script>

<div class="map-container">
    <iframe title="kebab map" src={getEmbedSrc()} class="w-[300px] lg:w-[500px] h-[400px]" style="border:0;" allow="fullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<style>
    .map-container {
        overflow: hidden;
    }
</style>
