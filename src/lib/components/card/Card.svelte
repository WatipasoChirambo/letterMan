<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	export let title = '';
	export let author = '';
	export let description = '';
	export let id = '';
	export let tags = [];
	export let image = ''
</script>

<div
	class="p-2 lg:p-8 flex items-center border-none justify-center"
>
	<div class="lg:flex flex-col flex-[80%] justify-end">
		<div class="p-2 grid gap-2">
			<div class="flex items-center gap-2">
				<Avatar
					src="https://source.unsplash.com/YOErFW8AfkI/128x128"
					width="w-12"
					rounded="rounded-full"
				/>
				<span class="text-sm font-semibold">{author}</span><span class="text-sm font-light"
					>May 4, 2023</span
				>
			</div>
			<a class="grid gap-2 cursor-pointer" href={id}>
				<h3 class="h3 font-bold">{title}</h3>
				<div class="lg:hidden md:hidden">
					<img
						src="https://source.unsplash.com/vjUokUWbFOs/400x175"
						class="bg-black/50 rounded"
						alt="Post"
					/>
				</div>
				<p class="hidden md:block lg:block font-light">
					{description}
				</p>
			</a>
		</div>
		<div class="p-2 flex justify-between">
			<button class="btn btn-sm variant-soft">
				Tools
			</button>
			<div>
				<button
				class="chip btn btn-sm variant-filled"
				on:click={() => {
					console.log(30);
				}}
			>
				Share
			</button>
			</div>
		</div>
	</div>
	<div class="hidden lg:block md:block w-[250px]">
		<img src="https://source.unsplash.com/vjUokUWbFOs/400x175" class="bg-black/50" alt="Post" />
	</div>
</div>
<hr class="!border-t-2" />

