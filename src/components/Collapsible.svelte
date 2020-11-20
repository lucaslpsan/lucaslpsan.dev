<script>
    import { slide } from "svelte/transition";
    import { tweened } from "svelte/motion";

    export let title;

    const duration = 200;

    const angle = tweened(180, { duration });

    let isOpen = false;

    function toggle() {
        if (isOpen) {
            isOpen = false;
            angle.set(180);
        } else {
            isOpen = true;
            angle.set(0);
        }
    }
</script>

<style>
    h2 {
        cursor: pointer;
    }
    h2:hover {
        filter: brightness(85%);
    }
</style>

<h2 on:click={toggle}>
    {title}
    <span
        style="display:inline-block; transform: rotate({$angle}deg);">👆</span>
</h2>
{#if isOpen}
    <div transition:slide={{ duration }}>
        <slot />
    </div>
{/if}
