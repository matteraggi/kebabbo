<script lang="ts">
	import "../app.css";

	if (typeof document !== 'undefined') {
    const toggleMenu = document.getElementById('toggleMenu') as HTMLInputElement | null;

    if (toggleMenu) {
        document.querySelectorAll('#navbar-sticky a').forEach(anchor => {
            anchor.addEventListener('click', () => {
                toggleMenu.checked = false;
            });
        });
    }
}
</script>

<nav class="bg-[#c71010] rounded-b-xl fixed w-full z-20 top-0 start-0">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<div class="flex gap-12 w-[20%]">
			<a href="/">
				<img src="./kebabbo-scritta-navbar.png" class="h-10" alt="Kebbabo Scritta">
			</a>
		</div>
		<div class="hidden lg:flex md:order-2 md:space-x-0 rtl:space-x-reverse w-[20%] justify-end">
			<img src="./kebabbo-logo-navbar.png" class="h-10" alt="Kebbabo Logo">	
		</div>
		<input type="checkbox" id="toggleMenu" class="hidden">
		<label for="toggleMenu" class="md:hidden">
			<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
				<path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
			  </svg>
		</label> 
		<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
			<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
				<li>
					<a href="/" class="block py-2 px-3 text-white rounded md:p-0 text-xl" aria-current="page">Maps</a>
				</li>
				<li>
					<a href="/charts" class="block py-2 px-3 text-white rounded md:p-0 text-xl">Charts</a>
				</li>
				<li>
					<a href="/about" class="block py-2 px-3 text-white rounded md:p-0 text-xl">About</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<slot></slot>
