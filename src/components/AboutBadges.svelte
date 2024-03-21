<script lang="ts">

    export let logo: string; 
    export let text: string; 
</script>

<div class="flex flex-col w-fit justify-center items-center">
    <div class="bg-white rounded-full w-16 h-16 p-2">
        <img src={logo} alt="badge" class="w-full h-full" />
    </div>
    <p class="mt-1 text-black font-semibold">{text}</p>
</div>