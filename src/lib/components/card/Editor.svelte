<script lang="ts">
	import { PUBLIC_TINYMCE } from '$env/static/public';
	import Editor from '@tinymce/tinymce-svelte';
	import { onMount } from 'svelte';

    const handleEditorChange = (e) => {
    // Handle editor content changes
    console.log(e.detail.content);
  };
</script>

<main>
	<Editor
		apiKey=${PUBLIC_TINYMCE}
        plugins="image"
		toolbar="undo redo | bold italic underline | formatselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat"
		onEditorChange={handleEditorChange}
	/>
</main>
