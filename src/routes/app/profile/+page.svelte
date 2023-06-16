<!-- src/routes/profile/+page.svelte -->
<script lang="ts">
	import { Avatar, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { modalStore } from '@skeletonlabs/skeleton';
	import EditProfile from '$lib/components/modals/EditProfile.svelte';

	export let data: PageData;
	let usernameModal: Boolean;
	$: ({ user, username } = data);

	$: open = usernameModal + 'dty';

	
	
// import MyCustomComponent from '...';

const modalComponent: ModalComponent = {
	// Pass a reference to your custom component
	ref: EditProfile,
	// Add the component properties as key/value pairs
	props: { background: 'bg-red-500' },
	// Provide a template literal for the default component slot
	slot: '<p>Skeleton</p>'
};


const modal: ModalSettings = {
	type: 'component',
	// Pass the component directly:
	component: modalComponent,
};
									
									

</script>

<div class="h-screen relative w-full flex justify-center items-center gap-4">
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
				<p class="btn btn-sm text-primary-600">Username:</p>
				{#if !username}
					<p class="text-red-600">Enter Username</p>
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
				<button
					class="btn text-sm bg-primary-600"
					on:click={() => {
						modalStore.trigger(modal);
					}}>Edit</button
				>
			</div>
		</div>
	</div>
	<div class="flex flex-col items-center mt-8 card p-4 w-[300px]">
		<p class="underline text-xl">Skills</p>
		<div />
	</div>
</div>
