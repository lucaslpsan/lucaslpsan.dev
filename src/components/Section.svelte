<script>
    export let section;
    import { textLanguage as t } from "../helper/store";
    import Certification from "./Certification.svelte";
    import Contact from "./Contact.svelte";
    import Experience from "./Experience.svelte";
    import Project from "./Project.svelte";
    import Training from "./Training.svelte";
</script>

<section id={section}>
    <h2 class="hover">
        <a
            href="#{section}"
            title={$t.aux.permalink + " " + $t.sections[section]}
            >#{$t.sections[section]}</a
        >
    </h2>
    <!-- <slot /> -->
    {#if section === "training"}
        <Training infos={$t.content[section]} />
    {:else if section === "certification"}
        <Certification
            infos={$t.content[section]}
            titleLink={$t.aux.linkCertificationTitle}
        />
    {:else if section === "experience"}
        <Experience infos={$t.content[section]} />
    {:else if section === "projects"}
        <Project infos={$t.content[section]} pagAbout={$t.aux.pagAbout} />
    {:else if section === "contacts"}
        <Contact infos={$t.content[section]} />
    {/if}
</section>

<style>
    h2 {
        font-size: 2em;
        font-weight: 600;
        margin-block-end: 0;
        display: inline-block;
        width: auto;
    }
    h2 a {
        color: unset;
        text-decoration: none;
    }
</style>
