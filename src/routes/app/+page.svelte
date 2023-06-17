<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	let inputUsername = '';

	export let data: PageData;
	$: ({ user, posts, username } = data);

	const modal: ModalSettings = {
		type: 'prompt',
		// Data
		body: 'Enter Display Name.',
		// Populates the input value and attributes
		value: inputUsername,
		valueAttr: { type: 'text', minlength: 3, maxlength: 10, required: true },
		// Returns the updated response value
		response: (r: string) => console.log(r)
	};
	if(!username){
		modalStore.trigger(modal);
	}
	
</script>

<div class="p-2 lg:flex gap-16 lg:h-screen rounded-full">
	<div class="overflow-auto flex-[90%] flex gap-4 flex-col px-2">
		{#each posts as post}
			<Card
				title={post.Title}
				description={post.Description}
				id={post.id}
				categories={post.category}
				createdAt={post.created_at}
			/>
		{/each}
	</div>

	<div class="hidden lg:block px-4">
		<div>
			<h6 class="font-bold text-sm underline">Communities</h6>
		</div>
		<p class="font-semibold text-xs p-1">Coming Soon</p>
	</div>
</div>
