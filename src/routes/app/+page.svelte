<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ user, posts } = data);
</script>

<div class="p-1 lg:flex gap-16 lg:h-screen overflow-hidden overscroll-none">
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
	<div class="grid gap-2 p-2">
		<div
			class="hidden lg:block lg:variant-ghost-secondary h-[300px] rounded p-4 md:variant-ghost-secondary h-[300px] p-4"
		>
			<div>
				<h6 class="font-bold text-sm underline">Communities</h6>
			</div>
			<p class="font-semibold text-xs p-1">Coming Soon</p>
		</div>
	</div>
</div>
