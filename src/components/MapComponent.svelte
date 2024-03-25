<script lang="ts">
	import { onMount } from "svelte";
	import SpinnerSvelte from "./SpinnerSvelte.svelte";

	
    export let mapLink: string; 
    
  let isLoading = true; // Loading state
  onMount(() => {
    setTimeout(() => {
      isLoading = false;
    }, 1000); // 1000 milliseconds = 1 second timeout
  });
</script>

<div class="map-container">
    {#if isLoading}
    <div style=" position:relative">
    <SpinnerSvelte type="small"/>
    </div>
    {/if}
    <iframe title="kebab map" src="{mapLink}" 
    class="w-[300px] lg:w-[500px] h-[300px] lg:h-[400px]" 
    style="border:0; opacity:{isLoading ? 0 : 1}" 
    allow="fullscreen" 
    loading="eager" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    
</div>

<style>
    .map-container {
        overflow: hidden;
    }
</style>
