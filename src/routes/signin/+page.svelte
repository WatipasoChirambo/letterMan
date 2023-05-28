<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ supabase, session } = data);

	let loading = false;
	let email = '';
	let password = '';

	const handleSignIn = async () => {
		try {
			loading = true;

			const { data, error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password
			});

			if (error) throw error;
			if(data){
                location.reload();
            }
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
    if(session?.user){
        location.reload();
    }
</script>

<div class="flex justify-center items-center h-full">
	<div class="card p-8" aria-live="polite">
		<h1 class="h1 mb-4 text-center">Welcome Back</h1>
		<form class="form flex flex-col gap-2" on:submit|preventDefault={handleSignIn}>
			<div>
				<label class="label" for="email">
					<span>Email</span>
					<input
						id="email"
						class="input p-2"
						type="email"
						placeholder="Your email"
						bind:value={email}
					/>
				</label>
			</div>
			<div>
				<label class="label" for="email">
					<span>Password</span>
					<input class="input p-2" type="password" placeholder="Password" bind:value={password} />
				</label>
			</div>
			<div class="mt-4">
				<button
					type="submit"
					class="btn variant-filled-tertiary w-full"
					aria-live="polite"
					disabled={loading}
				>
					<span>{loading ? 'Loading' : 'Login'}</span>
				</button>
				<div class="flex gap-1 mt-1 items-center justify-center">
					<p>Don't have an account?</p>
					<a href="/signup" class="btn btn-sm p-0 underline" aria-live="polite"> Sign Up </a>
				</div>
			</div>
		</form>
	</div>
</div>
