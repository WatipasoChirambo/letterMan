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
	<div class="h-screen p-4 container">
		<div class="mt-8">
			<h1 class="text-2xl font-bold">{queryResult.Title}</h1>
			<div class="flex items-center gap-2 my-2">
				<Avatar src="/laying_woman.jpg" width="w-8" rounded="rounded-full" />
				<div class="flex gap-2">
					<p class="font-thin">Roladex</p>
					<button class="text-primary-600"> Follow </button>
				</div>
			</div>
		</div>
		<div class="my-4">
			<div class="h-[300px] w-[100%] flex items-center justify-center">
				<img
					src="/laying_woman.jpg"
					alt="Laying Woman"
					class="max-h-full max-w-full object-contain object-center"
				/>
			</div>
			<div class="container p-2">
				{queryResult.Description}
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla ex, porttitor a metus at,
				condimentum bibendum enim. Etiam ac ligula porttitor, dignissim tellus a, vestibulum risus. Donec
				eu convallis turpis. Nunc efficitur nec purus non aliquet. Sed risus orci, congue a est eget,
				scelerisque elementum ipsum. Praesent commodo molestie mi, eget fermentum nulla imperdiet in.
				Nullam malesuada leo felis, vel rutrum quam pellentesque non. Maecenas nec neque eget elit rhoncus
				malesuada. Nulla a aliquet velit. Sed eget velit eu eros dignissim tincidunt id vitae nibh. 
				<br/><br/>
				eget fringilla turpis. In hac habitasse platea dictumst. Aenean luctus euismod mi, vitae aliquam
				nibh tempus sed. Maecenas vel tristique ligula. Integer interdum, elit malesuada lacinia viverra,
				nulla enim pellentesque libero, vitae venenatis neque elit non odio. Sed mi leo, vestibulum laoreet
				quam luctus, auctor sodales justo. Suspendisse gravida volutpat fringilla. 
				<br/><br/>
				Donec nisl lectus,
				lobortis in facilisis vel, tincidunt sed massa. Cras ut maximus felis, eu tincidunt eros. Suspendisse
				elementum sodales dolor eu semper. Nulla sollicitudin tortor vel laoreet feugiat. Donec ullamcorper
				molestie justo eget pharetra. Maecenas fermentum quis ligula in dictum. Nulla malesuada, arcu
				nec fringilla fermentum, enim quam consequat elit, et aliquam quam nunc ac est. Vivamus non interdum
				est. Morbi tristique rutrum lectus scelerisque hendrerit. Morbi sit amet nunc vitae metus placerat
				gravida. Vivamus nec urna ut enim tempor laoreet. Nullam vestibulum malesuada magna, ac tristique
				purus maximus nec. Nam a nisi nec lectus cursus scelerisque. Vestibulum ante ipsum primis in
				faucibus orci luctus et ultrices posuere cubilia curae; Nunc in risus sed orci malesuada gravida
				id eget augue. Curabitur dignissim viverra tellus. Duis quis tellus quis dui eleifend tristique
				a a lacus. Nam porta quis purus eget venenatis. Maecenas eu eros nec justo rutrum ullamcorper
				ut nec metus. Nunc hendrerit, ipsum ac dignissim cursus, lorem lectus eleifend ante, at maximus
				mi ligula non lacus. Aliquam tincidunt nibh at erat maximus, quis congue turpis lobortis. Sed
				et neque feugiat, vestibulum augue eu, rhoncus magna. Vivamus eu tincidunt urna. Ut ut urna sed
				risus ornare elementum eu ut sapien. Nam sit amet tincidunt elit. Maecenas faucibus lacinia arcu
				ut finibus. Cras sed nibh nec lorem scelerisque pulvinar at at arcu. Integer id diam at nunc
				imperdiet interdum. Nullam lobortis lectus a est gravida porta sit amet sed dui. Sed gravida
				tortor nulla, sed interdum nisi cursus a. Vivamus in laoreet nunc, vitae gravida libero. Ut in
				molestie est, vitae iaculis massa. Etiam lacinia pharetra libero. Curabitur lacus sapien, tincidunt
				eu tellus vel, placerat faucibus purus. Nulla faucibus auctor lacinia. Quisque eget ex cursus,
				fermentum risus et, tempus nibh. Aenean imperdiet velit lacus. Sed porta, ex vel tincidunt aliquet,
				metus elit malesuada orci, quis tempus enim massa quis nibh. Sed efficitur ante metus, a mattis
				nisl lobortis id. Nunc ac leo ultrices, lacinia lectus sit amet, blandit nisi. Maecenas ornare
				tincidunt nulla id aliquam. Duis iaculis est id velit accumsan, vitae pretium urna vestibulum.
				Nunc bibendum dolor vitae volutpat cursus. Nam quis tincidunt libero. Nullam hendrerit, turpis
				at bibendum tempus, risus magna luctus libero, ut tempus sapien velit sed est. Cras luctus massa
				non leo faucibus, ut molestie lorem sodales. Donec sollicitudin odio nisi. Donec in diam augue.
				Phasellus sit amet dolor non odio molestie viverra eu et nibh. Nam sollicitudin augue sit amet
				lectus maximus ultrices vehicula quis nulla. Cras iaculis, diam vel venenatis bibendum, odio
				lorem luctus sem, ut aliquam sapien sem molestie lacus. Suspendisse molestie, nibh quis eleifend
				consectetur, ex lorem fringilla erat, eu dictum justo mi nec massa. Pellentesque sapien leo,
				sagittis pulvinar vehicula quis, maximus quis purus. Nulla vel ligula velit. Donec et felis finibus,
				facilisis libero eu, pulvinar erat.
			</div>
		</div>
	</div>
{:else}
	<div class="flex justify-center items-center">
		<p>Loading...</p>
	</div>
{/if}
