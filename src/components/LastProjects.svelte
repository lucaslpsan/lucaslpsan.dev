<script>
    export let infos;
</script>

<div class="wrapper">
    {#each infos as { title, description, link, ref, titleLink, altImg }}
        <div class="project hover">
            <a href={link} class={ref} title={titleLink}>
                <img src={`${ref}.svg`} alt={altImg} loading="lazy" />
                <h3>{title}</h3>
                <span>{description}</span>
            </a>
        </div>
    {/each}
</div>

<style>
    .wrapper {
        text-align: center;
        display: grid;
        justify-content: center;
    }

    .project a {
        text-decoration: none;
        color: unset;
    }

    .project img {
        width: 100px;
        fill: #4a3a9c;
    }

    .project h3 {
        margin: 0;
    }

    .project {
        width: 160px;
    }

    .cobol {
        cursor: url(../triceratops.cur), auto;
    }
</style>
