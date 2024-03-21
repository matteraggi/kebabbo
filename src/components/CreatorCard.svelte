<script lang="ts">
    export let name: string;
    export let role: string;
    export let image: string;
    export let insta: string;
    export let linkedin: string;
    export let github: string;
</script>

<div class="group w-72 [perspective:1000px]">
    <div class="relative h-[450px] w-full rounded-3xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div class="absolute inset-0 top-0 left-0 w-full h-full bg-white rounded-3xl p-6 flex flex-col items-center">
            <img src={image} alt={name} class="w-[220px] rounded-xl " />
            <h2 class="text-2xl font-bold mt-4">{name}</h2>
            <p class="text-md text-gray-500 italic">{role}</p>
        </div>
        <div class="absolute inset-0 h-full w-full rounded-xl bg-white p-6 flex flex-col items-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <img src="./kebab.png" alt="kebab" class="w-[175px] rounded-xl" />
            <div class="flex mt-12 gap-4">
                <a href={insta} target="_blank">
                    <img src="./instagram.svg" alt="instagram" class="w-12 h-12" />
                </a>
                <a href={linkedin} target="_blank">
                    <img src="./linkedin.svg" alt="linkedin" class="w-12 h-12" />
                </a>
                <a href={github} target="_blank">
                    <img src="./github.svg" alt="github" class="w-12 h-12" />
                </a>
            </div>
        </div>
    </div>
</div>