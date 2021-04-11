<script>
    export let infos;
    export let titleLink;
</script>

<div class="wrapper-info-certification">
    {#each infos as { name, date, description, examiner, link, id }}
        <div class="info-certification">
            <h3>{name}</h3>
            <p>{date}</p>
            <em>{examiner}</em>
            <p>{description}</p>
            <a href={link} target="_black" rel="noopener" title={titleLink}
                >{id}</a
            >
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
