<!-- src/routes/profile/+page.svelte -->
<script lang="ts">
	import { Avatar, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { modalStore } from '@skeletonlabs/skeleton';
	import EditProfile from '$lib/components/modals/EditProfile.svelte';
	import ProfileTabs from '$lib/components/Tabs/ProfileTabs.svelte';

	import Icon from '@iconify/svelte';
	import Following from '$lib/components/Following/Following.svelte';

	export let data: PageData;
	let usernameModal: Boolean;
	$: ({ user, username, posts } = data);

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
		component: modalComponent
	};
</script>

<div class="h-screen flex pr-8">
	<div class="flex-[75%] h-screen overflow-auto pt-8">
		<div class="p-2 h-[150px]">
			<img
				src="/laying_woman.jpg"
				alt="Laying Woman"
				class="max-h-full max-w-full object-cover w-full object-center rounded"
			/>
		</div>

		<div class="px-4">
			<div class="flex gap-2 items-center text-xl">
				{#if !username}
					<p class="font-bold">John Doe</p>
				{/if}
				{#if username}
					<p class="font-bold">{username}</p>
				{/if}
			</div>
			<div class="flex items-center text-xs">
				<p>{user.email}</p>
			</div>
		</div>
		<div class="p-4">
			<ProfileTabs {posts} />
		</div>
	</div>
	<aside class="flex-[25%] h-screen overflow-auto p-4">
		<div class="pt-4">
			<Avatar
				src="https://source.unsplash.com/YOErFW8AfkI/128x128"
				width="w-12"
				rounded="rounded-full"
			/>
		</div>

		<div class="py-2">
			{#if !username}
				<h4 class="font-bold">John Doe</h4>
			{/if}
			{#if username}
				<h4>{username}</h4>
			{/if}
			<p class="text-sm text-secondary-900">40 Followers</p>
		</div>

		<article class="text-xs">
			Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
			classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
			Latin professor at Hampden-Sydney College in Virginia.
		</article>
		<button
			class="text-sm text-primary-700 py-2"
			on:click={() => {
				modalStore.trigger(modal);
			}}>Edit Profile</button
		>
		<div class="py-4">
			<h4 class="font-bold">Following</h4>
			<Following/>
			<Following/>
			<Following/>
			<Following/>
			<Following/>
			<button class="pt-4 text-xs">
				See All (40)
			</button>
		</div>
	</aside>
</div>
