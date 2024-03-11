<script>
	import "../app.css";
</script>

<nav class="bg-[#c71010] absolute p-4 w-full text-white flex justify-between">
	<img src="./kebabbo_logo.png" alt="kebabbo-logo" class="w-6 h-6"/>
	<div class="flex">
		<a href="/" class="mr-6 text-xl">Maps</a>
		<a href="/charts" class="mr-6 text-xl">Charts</a>
		<a href="/about" class="mr-6 text-xl">What is kebabbo?</a>
		<button>
		<img src="./search.svg" alt="search-button" class="w-6 h-6"/></button>
	</div>
	<div class="w-6"></div>
</nav>


<slot>
</slot>
