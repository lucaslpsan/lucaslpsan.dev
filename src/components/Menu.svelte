<script>
    import { fly, scale, blur } from "svelte/transition";
    import { quadOut } from "svelte/easing";
    import Logo from "./Logo.svelte";
    import { textLanguage as t } from "../helper/store";

    export let open;
    export let sections;

    let goTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
</script>

{#if open}
    <div id="menu" transition:blur={{ duration: 800 }}>
        <div>
            <p on:click={goTop}>Home</p>

            {#each sections as section, i}
                <a
                    transition:fly={{ y: -15, delay: 50 * i }}
                    href={"#" + section}
                >
                    {$t.sections[section]}
                </a>
            {/each}
        </div>

        <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
        <div><Logo width="3em" /></div>
    </div>
{/if}

<style>
    /* :global(html) {
        background: #1d1d2f;
    } */

    #menu {
        position: absolute;
        padding: 0;
        left: 0;
        top: 63px;
        width: 100%;
        height: 100vh;
        background-color: var(--background-menu);
    }

    div {
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 0;
        color: #eef;
    }

    a,
    p {
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
        display: block;
        color: unset;
    }

    a:hover,
    p:hover {
        text-decoration: underline;
    }

    hr {
        width: 90vw;
    }
</style>
