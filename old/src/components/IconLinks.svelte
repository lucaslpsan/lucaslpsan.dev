<script>
    import { textLanguage, colorUI } from "../helpers/store";
    import {
        githubIcon,
        linkedinIcon,
        steamIcon,
        soundCloudIcon,
        vscodeMarketplaceIcon,
        bloggerIcon,
    } from "../svgs/svg";
</script>

<style>
    .links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 15px;
        margin: 1em;
    }
    .links a {
        height: 25px;
        width: 25px;
    }
</style>

<div class="links">
    <a
        href="https://github.com/lucaslpsan"
        target="_blank"
        rel="noopener"
        alt="Github"
        title={`${$textLanguage.possivoMasc} Github`}
        style={`fill:${$colorUI};`}>{@html githubIcon}</a>
    <a
        href="https://www.linkedin.com/in/lucaslpsan/"
        target="_blank"
        rel="noopener"
        alt="Linkedin"
        title={`${$textLanguage.possivoMasc} Linkedin`}
        style={`fill:${$colorUI};`}>{@html linkedinIcon}</a>
    <a
        href="https://steamcommunity.com/id/lucaslpsan"
        target="_blank"
        rel="noopener"
        alt="Steam"
        title={`${$textLanguage.possivoMasc} Steam`}
        style={`fill:${$colorUI};`}>{@html steamIcon}</a>
    <a
        href="https://soundcloud.com/lucaslpsan"
        target="_blank"
        rel="noopener"
        alt="SoundCloud"
        title={`${$textLanguage.possivoMasc} SoundCloud`}
        style={`fill:${$colorUI};`}>{@html soundCloudIcon}</a>
    <a
        href="https://marketplace.visualstudio.com/publishers/lucaslpsan"
        target="_blank"
        rel="noopener"
        alt="VsCode Marketplace"
        title={`${$textLanguage.possivoMasc} VsCode Marketplace`}
        style={`fill:${$colorUI};`}>{@html vscodeMarketplaceIcon}</a>
    <a
        href="https://blog.lucaslpsan.dev/"
        target="_blank"
        rel="noopener"
        alt="Blogger"
        title={`${$textLanguage.possivoMasc} Blogger`}
        style={`fill:${$colorUI};`}>{@html bloggerIcon}</a>
</div>
