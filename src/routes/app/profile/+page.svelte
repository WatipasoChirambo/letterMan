<!-- src/routes/profile/+page.svelte -->
<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ user } = data);
</script>

<div class="h-screen w-full flex">
	<div class="flex flex-col items-center mt-8">
		<Avatar
			src="https://source.unsplash.com/YOErFW8AfkI/128x128"
			width="w-50"
			rounded="rounded-full"
		/>
		<div>
			<div class="flex items-center">
				<p class="btn btn-sm text-primary-600">Username:</p>
				<p>Batman</p>
			</div>
			<div class="flex items-center">
				<p class="btn btn-sm text-primary-600">Email:</p>
				<p>Batman</p>
			</div>
      <div class="p-2">
        <button class="btn btn-sm bg-primary-600">Edit</button>
      </div>
		</div>
	</div>
</div>
