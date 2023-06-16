<script lang="ts">
	// Props
	let fisrtName = '';
	let lastName = '';
	let username = '';

	// Stores
	import { modalStore } from '@skeletonlabs/skeleton';
	function onFormSubmit(): void {
		console.log(fisrtName)
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>Edit User Profile</header>
		<form class="modal-form {cForm}">
			<label class="label">
				<span class="text-sm">Username</span>
				<input
					class="input"
					type="email"
					bind:value={username}
					placeholder="Enter Username..."
				/>
			</label>
			<label class="label">
				<span class="text-sm">First Name</span>
				<input
					class="input"
					type="text"
					bind:value={fisrtName}
					placeholder="Enter First name..."
				/>
			</label>
			<label class="label">
				<span class="text-sm">Last Name</span>
				<input
					class="input"
					type="tel"
					bind:value={lastName}
					placeholder="Enter Last Name..."
				/>
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer">
        <button class="btn" on:click={()=>{modalStore.close()}}>Close</button>
        <button class="btn variant-filled" on:click={onFormSubmit}>Submit Form</button>
    </footer>
	</div>
{/if}
