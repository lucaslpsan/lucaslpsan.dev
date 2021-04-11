<script>
    export let infos;
</script>

<div class="wrapper-info-training">
    {#each infos as { name, date, school, local }}
        <div class="info-training">
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{school}</p>
            <p>{local}</p>
        </div>
    {/each}
</div>

<style>
    @media (min-width: 1300px) {
        .wrapper-info-training {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    .wrapper-info-training {
        padding-left: 5vw;
    }

    .info-training h3 {
        font-style: italic;
        margin-bottom: 8px;
        padding-right: 2vw;
    }
    .info-training p {
        margin: auto;
    }
</style>
