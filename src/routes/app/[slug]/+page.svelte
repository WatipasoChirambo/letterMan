<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { supabase } from '../../../supabase/supabase';

	export let queryResult = null;

	const blog_id = $page?.params.slug;

	onMount(async () => {
		try {
			const { data, error } = await supabase
            .from('Blogs')
            .select('*')
            .eq('id', Number(blog_id))
            .single()
            ;

			if (error) {
				throw error;
			}

			queryResult = data;
		} catch (error) {
			console.error('Error running Supabase query:', error.message);
		}
	});

	$: {
		console.log(queryResult);
	}
</script>

{#if queryResult}
	<h2 class="text-3xl font-bold">{queryResult.Title}</h2>
    
{:else}
<div class="flex justify-center items-center">
    <p>Loading...</p>
</div>
	
{/if}
