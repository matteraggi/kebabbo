<script lang="ts">
	
    export let mapLink: string; 
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    function getEmbedSrc() {
        const encodedQuery = encodeURIComponent(mapLink);
        return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedQuery}`;
    }
</script>

<div class="map-container">
    <iframe title="kebab map" src={getEmbedSrc()} width="600" height="450" style="border:0;" allow="fullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<style>
    .map-container {
        width: 100%; 
        max-width: 800px; 
        height: 400px; 
        overflow: hidden;
    }
</style>
