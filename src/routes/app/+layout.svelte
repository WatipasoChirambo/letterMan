<script lang="ts">
	// Your custom Skeleton theme:
	import '../../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { MyRoutes } from '../../utils/routes';
	import PageTransition from '../transition.svelte';

	export let data: LayoutData;
	let searchIconColor;

	$: ({ supabase, session, username } = data);
	const logOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			throw new Error('Something Went Wrong While Logging Out');
		}
		location.reload();
	};

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => subscription.unsubscribe();
	});

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!bg-primary-500 text-black text-sm' : 'text-sm';
</script>

<!-- App Shell -->
<AppShell>
	{#if '/app' === $page.url.pathname}
		<AppBar class="absolute z-[237354] p-0 right-0 w-[50px]">
			<Icon icon="bi:search" color={searchIconColor} />
		</AppBar>
	{/if}

	<svelte:fragment slot="sidebarLeft">
		<div class="hidden h-screen lg:flex flex-col justify-center sm:hidden lg:block">
			<nav class="list-nav p-8 flex flex-col items-center">
				<!-- (optionally you can provide a label here) -->
				<div class="flex justify-center p-6 flex-col items-center">
					<Avatar
						src="https://source.unsplash.com/YOErFW8AfkI/128x128"
						width="w-20"
						rounded="rounded-full"
					/>
					{#if username}
						<a href="/app/profile" class="p-0 m-1 text-xs">{username}</a>
					{/if}
					{#if !username}
						<a href="/app/profile" class="p-0 m-1 text-xs">____</a>
					{/if}
				</div>
				<ul>
					{#each MyRoutes as route}
						<li class="p-1">
							<a href={route.url} class={classesActive(route.url)}>
								<div>{@html route.svg}</div>
								<span>{route.name}</span>
							</a>
						</li>
					{/each}
					<!-- ... -->
				</ul>
				<div class="p-8 m-auto">
					<button class="btn variant-filled-surface w-full text-sm" on:click={logOut}>
						Log Out
					</button>
				</div>
			</nav>
		</div>
	</svelte:fragment>
	<div>
		<!-- Router Slot -->
		<PageTransition url={$page.url.pathname}>
			<slot />
		</PageTransition>
	</div>
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
