<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let loadedData = [];
	async function loadData() {
		const { data: result } = await data.supabase.from('category').select('*').limit(20);
		loadedData = result;
	}

	$: if (data.session) {
		loadData();
	}
</script>

<div class="p-1 lg:p-4 flex gap-16 lg:h-screen">
	<div class="overflow-auto">
		<div class="flex-[90%] flex gap-4 flex-col p-4">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>

	<div class="hidden lg:block lg:variant-ghost-primary h-[300px] rounded p-4 md:variant-ghost-secondary h-[300px] p-4">
		<dl class="list-dl">
			<div>
				<span class="">
					<dt class="text-base font-bold">Recent Posts</dt>
					<hr class="!border-t-4" />
					<dd class="text-sm">Description</dd>
				</span>
			</div>
			<!-- ... -->
		</dl>
	</div>
</div>
