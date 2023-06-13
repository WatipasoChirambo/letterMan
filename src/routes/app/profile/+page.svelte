<!-- src/routes/profile/+page.svelte -->
<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ user, username } = data);
</script>

<div class="h-screen w-full flex justify-center items-center gap-4">
	<div class="flex flex-col items-center mt-8">
		<Avatar
			src="https://source.unsplash.com/YOErFW8AfkI/128x128"
			width="w-50"
			rounded="rounded-full"
		/>
		<div>
			<div class="flex items-center">
				<p class="btn btn-sm text-primary-600">First Name:</p>
				{#if !username}
					<p class="text-red-600">Enter First Name</p>
				{/if}
				{#if username}
					<p>{username}</p>
				{/if}
			</div>
			<div class="flex items-center">
				<p class="btn btn-sm text-primary-600">Last Name:</p>
				{#if !username}
					<p class="text-red-600">Enter Last Name</p>
				{/if}
				{#if username}
					<p>{username}</p>
				{/if}
			</div>
			<div class="flex items-center">
				<p class="btn btn-sm text-primary-600">User Name:</p>
				{#if !username}
					<p class="text-red-600">Enter User Name</p>
				{/if}
				{#if username}
					<p>{username}</p>
				{/if}
			</div>
			<div class="flex items-center">
				<p class="btn btn-sm text-primary-600">Email:</p>
				<p>{user.email}</p>
			</div>
      <div class="p-2 flex justify-center">
        <button class="btn text-sm bg-primary-600">Edit</button>
      </div>
		</div>
	</div>
	<div class="flex flex-col items-center mt-8 card p-4 w-[300px]">
		<p class="underline text-xl">Skills</p>
		<div>

		</div>
	</div>
</div>
