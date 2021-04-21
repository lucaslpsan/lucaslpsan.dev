<script>
    export let infos;
    // import {
    //     githubIcon,
    //     linkedinIcon,
    //     steamIcon,
    //     soundCloudIcon,
    //     vscodeMarketplaceIcon,
    //     bloggerIcon,
    // } from "../icons/icons";
    import * as icons from "../icons/icons";
</script>

<div class="links">
    <!-- <div class="wrapper-info-contacts"> -->
    {#each infos as { name, link, possessive }}
        <div class="info-contacts disable-select hover">
            <h3>{name}</h3>
            <a
                href={link}
                target="_black"
                rel="noopener"
                title={`${possessive} ${name}`}
                alt={name}
                >{@html icons[
                    `${name.toLowerCase().replace(/[\s\uFEFF\xA0]/gi, "")}Icon`
                ]}</a
            >
        </div>
    {/each}
    <!-- </div> -->
</div>

<style>
    .links {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-evenly;
        padding-left: 5vw;
    }
    @media (max-width: 1200px) {
        .links {
            text-align: center;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    .links a {
        width: 30px;
    }
    .info-contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .info-contacts h3 {
        margin-bottom: 8px;
    }
</style>
