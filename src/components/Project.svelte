<script>
    export let infos;
    export let pagAbout;
</script>

<div class="wrapper-info-projects">
    {#each infos as { name, link, description }}
        <div class="info-projects">
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={link} target="_black" rel="noopener">{pagAbout}</a>
        </div>
    {/each}
</div>

<style>
    .wrapper-info-projects {
        padding-left: 5vw;
    }

    .info-projects h3 {
        font-style: italic;
        margin-bottom: 8px;
    }
    .info-projects p {
        margin: auto;
    }
</style>
