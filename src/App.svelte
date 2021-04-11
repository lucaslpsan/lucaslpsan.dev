<script>
	import { textLanguage as t } from "./helper/store";
	import Section from "./components/Section.svelte";
	import Signature from "./components/Signature.svelte";
</script>

<main class="disable-select">
	<img src="logo.svg" alt="logo lucaslpsan" draggable="false" />
	<h1>Lucas Lopes - {$t.dev}</h1>
	<p>
		{$t.description}
	</p>
</main>

<Section section="training" />
<Section section="certification" />
<Section section="experience" />
<Section section="projects" />
<Section section="contacts" />

<Signature />

<footer class="disable-select">{$t.footer}</footer>

<div class="language-select disable-select">
	<button on:click={() => t.br()} disabled={$t.language === "Português"}
		>Português</button
	>
	/
	<button on:click={() => t.en()} disabled={$t.language === "English"}
		>English</button
	>
</div>

<style>
	main {
		padding: 15vh 0;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.5em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
			padding: 25vh 1em;
		}
	}

	@media (max-width: 440px) {
		img {
			width: 50vw;
		}
	}

	p {
		font-weight: 400;
	}

	.language-select {
		position: fixed;
		top: 10px;
		right: 10px;
	}

	.language-select button {
		border: none;
		background-color: unset;
		cursor: pointer;
	}

	.language-select button:disabled {
		cursor: unset;
	}
	footer {
		text-align: center;
		padding-bottom: 3vh;
	}
</style>
