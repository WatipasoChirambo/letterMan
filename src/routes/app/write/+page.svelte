<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '../../../supabase/supabase';
    import type { PageData } from './$types'
  
    export let data: PageData
    $: ({ user } = data)

	let title = '';
	let description = '';
	let loading = false;
	let userId = '';

	async function submitForm() {
		loading = true;
        console.log(user)
		const { data, error } = await supabase
			.from('Blogs')
			.insert([{ Title: title, Description: description, owner: user.id }]);

		if (error) {
			console.log(error);
		}
		console.log(data);
		loading = false;
		title = '';
		description = '';
	}

	function handleTitleChange(event) {
		title = event.target.value;
	}

	function handleDescriptionChange(event) {
		description = event.target.value;
	}

	onMount(() => {
		title = '';
		description = '';
	});
</script>

<form class="p-4 h-screen flex flex-col" on:submit|preventDefault={submitForm}>
	<div class="flex-[10%] flex gap-4 justify-between items-center mt-2 mb-4">
		<input
			class="input w-full pl-4"
			title="Title"
			type="text"
			placeholder="Title"
			on:input={handleTitleChange}
			bind:value={title}
		/>
		<div>
			<button class="btn btn-sm variant-filled" disabled={loading}> Publish </button>
		</div>
	</div>
	<div class="flex-[90%]">
		<textarea
			class="textarea focus:cursor-auto h-full p-4"
			placeholder="Enter some long form content."
			on:input={handleDescriptionChange}
			title="description"
			bind:value={description}
		/>
	</div>
</form>
