<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ user, posts, username } = data);
</script>

<div class="p-1 lg:flex gap-16 lg:h-screen">
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
