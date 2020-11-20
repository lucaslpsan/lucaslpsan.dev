<script>
    import { getContext } from "svelte";

    import Popup from "./Popup.svelte";
    import { textLanguage, colorUI } from "../helpers/store";

    const { open } = getContext("simple-modal");

    const showPopup = () => {
        open(Popup, { message: "Lucas Lopes" });
    };
</script>

<style>
    section {
        padding-top: 1em;
    }
    button {
        color: #1f2667;
        font-weight: 200;
        padding: 10px;
        border-radius: 0.15em;
        cursor: pointer;
        background-color: transparent;
        transition: all 0.8s;
        /* box-shadow: inset 0 -0.6em 0 -0.35em #3b8aca; */
    }
    button:hover {
        /* filter: brightness(50%); */
        /* background-color: #4299e1; */
        color: white;
        padding: 10px 15px 10px 10px;
    }
    button:hover::after {
        content: " 👀";
    }
    button:focus {
        border-color: #3399ff;
    }
    button:active {
        transform: scale(0.9);
    }
</style>

<section>
    <button
        on:click={showPopup}
        on:mouseover={(e) => (e.target.style.backgroundColor = $colorUI)}
        on:mouseout={(e) => (e.target.style.backgroundColor = 'unset')}>{$textLanguage.maisInfoBt}</button>
    <!-- <button
        on:click={showPopup}
        on:mouseover={(e) => (e.target.style.backgroundColor = $colorUI)}
        on:mouseout={(e) => (e.target.style.backgroundColor = 'unset')}>{$textLanguage.maisInfoBt}</button> -->
    <!-- <button
        on:click={showPopup}
        on:mouseover|once={() => {
            visibleHelpMaisInfo = !visibleHelpMaisInfo
        }}>{$textLanguage.maisInfo}</button>
        {#if visibleHelpMaisInfo}<span in:typewriter>{$textLanguage.maisInfo}</span>{/if} -->
</section>
