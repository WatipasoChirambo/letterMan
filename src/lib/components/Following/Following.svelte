<script lang="ts">
	import Icon from "@iconify/svelte";


	import { Avatar } from "@skeletonlabs/skeleton";

</script>

<article class="pt-4 flex justify-between items-center">
    <div class="flex gap-1 items-center">
        <Avatar
            src="https://source.unsplash.com/YOErFW8AfkI/128x128"
            width="w-5"
            rounded="rounded-full"
        />
        <p class="text-xs">Juan Julio</p>
    </div>
    <button class="btn p-0">
        <Icon icon="gg:more" />
    </button>
</article>