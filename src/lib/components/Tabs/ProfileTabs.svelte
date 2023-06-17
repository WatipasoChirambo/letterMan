<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import Card from '../card/Card.svelte';
	export let posts: any;
	let tabSet: number = 0;
</script>

<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>
		<span class="text-xs">Posts</span>
	</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>
		<span class="text-xs">About</span>
	</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>
		<span class="text-xs">Communities</span>
	</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<div class="h-screen">
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
		{:else if tabSet === 1}
			(tab panel 2 contents)
		{:else if tabSet === 2}
			(tab panel 3 contents)
		{/if}
	</svelte:fragment>
</TabGroup>
