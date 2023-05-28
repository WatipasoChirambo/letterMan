<!-- src/routes/profile/+page.svelte -->
<script lang="ts">
    import type { PageData } from './$types'
  
    export let data: PageData
    $: ({ user } = data)
  </script>
  
  <div>Protected content for {user.email}</div>