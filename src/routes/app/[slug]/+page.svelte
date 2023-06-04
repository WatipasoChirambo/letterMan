<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { supabase } from '../../../supabase/supabase';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { formatedDate } from '../../../utils/formatedDate';

	export let queryResult = null;
	export let date = '';

	const blog_id = $page?.params.slug;

	onMount(async () => {
		try {
			const { data, error } = await supabase
				.from('Blogs')
				.select('*')
				.eq('id', Number(blog_id))
				.single();
			if (error) {
				throw error;
			}

			queryResult = data;
			date = queryResult.created_at;
		} catch (error) {
			console.error('Error running Supabase query:', error.message);
		}
	});

	$: {
		date;
	}

	const { month, day } = formatedDate(date);

	console.log(month);
</script>

{#if queryResult}
	<div class="grid gap-4 h-screen p-4 container">
		<div class="flex">
			<div class="grid gap-2">
				<div>
					<h1 class="text-2xl font-bold">{queryResult.Title}</h1>
					<div class="flex items-center gap-2 p-2">
						<Avatar
							src="https://unsplash.com/photos/L64iwsbPefU"
							width="w-8"
							rounded="rounded-full"
						/>
						<p class="font-thin">Roladex</p>
						<button class="text-primary-600"> Follow </button>
					</div>
				</div>
			</div>
		</div>
		<div>
			<div class="h-[300px] w-full flex items-center justify-center">
				<img
					src="/laying_woman.jpg"
					alt="Laying Woman"
					class="max-h-full w-full object-cover object-center"
				/>
			</div>
			<div class="container">
				{queryResult.Description}
			</div>
		</div>
	</div>
{:else}
	<div class="flex justify-center items-center">
		<p>Loading...</p>
	</div>
{/if}
