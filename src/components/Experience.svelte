<script>
    export let infos;
</script>

<div class="wrapper-info-certification">
    {#each infos as { name, type, date, description, local }}
        <div class="info-certification">
            <h3>{name}</h3>
            <p>{type}</p>
            <p>{date}</p>
            <p>{description}</p>
            <p>{local}</p>
        </div>
    {/each}
</div>

<style>
    .wrapper-info-certification {
        padding-left: 5vw;
    }

    .info-certification h3 {
        font-style: italic;
        margin-bottom: 8px;
    }
    .info-certification p {
        margin: auto;
    }
</style>
