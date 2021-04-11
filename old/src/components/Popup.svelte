<script>
    export let message;
    import Collapsible from "./Collapsible.svelte";
    import { textLanguage, colorUI } from "../helpers/store";
</script>

<style>
    h1 {
        font-size: 2rem;
        text-align: center;
    }

    h2 {
        font-size: 1.25rem;
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 1.6rem;
        }
    }
</style>

<h1>🎉 {message} 🐱‍💻</h1>

<h2>{$textLanguage.topicos}</h2>

<div>
    <Collapsible title={$textLanguage.topicoFormacao}>
        {@html $textLanguage.formacao}
    </Collapsible>
    <Collapsible title={$textLanguage.topicoExp}>
        {@html $textLanguage.exp}
    </Collapsible>
    <Collapsible title={$textLanguage.topicoCerti}>
        {@html $textLanguage.certi}
    </Collapsible>
</div>
