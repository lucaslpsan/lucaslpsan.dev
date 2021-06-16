<script>
	import { textLanguage as t } from "./helper/store";
	import Section from "./components/Section.svelte";
	// import Signature from "./components/Signature.svelte";
	import VisitCard from "./components/VisitCard.svelte";

	let iconSwithTheme = true;

	function toggle() {
		window.document.body.classList.toggle("dark");
		iconSwithTheme = !iconSwithTheme;
	}
</script>

<main class="disable-select logo">
	<img src="logo.svg" alt="logo lucaslpsan" draggable="false" />
	<h1>Lucas Lopes - {$t.dev}</h1>
	<p>
		{$t.description}
	</p>
</main>

<Section section="lastProjects" />
<Section section="training" />
<Section section="certification" />
<Section section="experience" />
<Section section="projects" />
<Section section="contacts" />

<section class="visit-card">
	<VisitCard pronouns={$t.visitCard} />
</section>

<!-- <Signature /> -->

<footer class="disable-select">{$t.footer}</footer>

<div class="language-select disable-select hover">
	<button on:click={() => t.br()} disabled={$t.language === "Português"}
		>Português</button
	>
	/
	<button on:click={() => t.en()} disabled={$t.language === "English"}
		>English</button
	>
	<button on:click={toggle}
		>{@html iconSwithTheme ? "&#127770;" : "&#127774;"}</button
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

	.language-select button:last-child {
		font-size: 1.2em;
	}

	.visit-card {
		margin-top: 20px;
		text-align: center;
	}

	footer {
		text-align: center;
		padding-bottom: 3vh;
	}
</style>
