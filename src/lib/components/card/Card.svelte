<script>
	import { Avatar } from '@skeletonlabs/skeleton';
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
				<span class="text-sm font-semibold">Rokka Man Roar</span><span class="text-sm font-light"
					>May 4, 2023</span
				>
			</div>
			<a class="grid gap-2 cursor-pointer" href="/#">
				<h3 class="h3 font-bold">Skeleton H4</h3>
				<div class="lg:hidden md:hidden">
					<img
						src="https://source.unsplash.com/vjUokUWbFOs/400x175"
						class="bg-black/50 rounded"
						alt="Post"
					/>
				</div>
				<p class="hidden md:block lg:block font-light">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum molestiae
					blanditiis! Facere, nostrum modi.
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

