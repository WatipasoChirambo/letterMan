<script lang="ts">
	// Your custom Skeleton theme:
	import '../../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { MyRoutes } from '../../utils/routes';

	export let data: LayoutData;

	$: ({ supabase, session } = data);

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

	$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');
</script>

<!-- App Shell -->
<AppShell>
		<AppBar>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
		</AppBar>
	<!-- (header) -->
	<svelte:fragment slot="sidebarLeft">
		<div class="hidden lg:flex flex-col justify-center sm:hidden lg:block">
			<nav class="list-nav p-8 flex flex-col items-center">
				<!-- (optionally you can provide a label here) -->
				<div class="flex justify-center p-6 flex-col items-center">
					<Avatar
						src="https://source.unsplash.com/YOErFW8AfkI/128x128"
						width="w-20"
						rounded="rounded-full"
					/>
					<a href="/profile"  class="p-0 m-1">Rokka Man Roar</a>
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
			</nav>
			<div class="p-8 m-auto">
				<button class="btn variant-filled-surface w-full" on:click={logOut}> Log Out </button>
			</div>
		</div>
	</svelte:fragment>
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
