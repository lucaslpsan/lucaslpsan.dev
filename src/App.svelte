<script>
	import Caroulse from "./components/Caroulse.svelte";
	import ContentModal from "./components/ContentModal.svelte";
	import Modal from "./components/Modal.svelte";
	import { textLanguage, colorUI } from "./helpers/store";
	import { slide } from "svelte/transition";
	import IconLinks from "./components/IconLinks.svelte";
	import { translateIcon, projectsIcon } from "./svgs/svg";

	let visibleTranslates = false;
	let visibleProjects = false;
</script>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.options {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 2em;
	}

	.buttonsOptions button {
		background-color: transparent;
		cursor: pointer;
		border: none;
	}
	.centerLinks {
		margin-bottom: 0.5em;
	}
	.centerLinks a {
		text-decoration: none;
		color: unset;
		padding: 0.4em;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.svgs {
		width: 20px;
	}
</style>

<main>
	<Caroulse />
	<Modal>
		<ContentModal />
	</Modal>
	<div
		class="options buttonsOptions"
		on:mouseover={(e) => (e.target.style.color = $colorUI)}
		on:mouseout={(e) => (e.target.style.color = 'unset')}>
		<div class="svgs" style={`fill:${$colorUI};`}>
			{@html translateIcon}
		</div>
		<button
			on:click={() => (visibleTranslates = !visibleTranslates)}>{$textLanguage.language}</button>
		<div on:click={() => (visibleTranslates = false)}>
			{#if visibleTranslates}
				<div transition:slide>
					<button
						on:click={() => textLanguage.br()}>Português</button>
					<button on:click={() => textLanguage.en()}>English</button>
				</div>
			{/if}
		</div>
	</div>
	<div
		class="options buttonsOptions"
		on:mouseover={(e) => (e.target.style.color = $colorUI)}
		on:mouseout={(e) => (e.target.style.color = 'unset')}>
		<div class="svgs" style={`fill:${$colorUI};`}>
			{@html projectsIcon}
		</div>
		<button
			on:click={() => (visibleProjects = !visibleProjects)}>{$textLanguage.projetos}</button>
		<div on:click={() => (visibleProjects = false)} class="centerLinks">
			{#if visibleProjects}
				<div transition:slide>
					<a href="/next" target="_blank">VsCode Page</a>
					<a href="/ets2" target="_blank">Mod Euro Truck Simulator 2</a>
				</div>
			{/if}
		</div>
	</div>
	<IconLinks />
	<small>{$textLanguage.rodape}
		<a
			href="https://github.com/lucaslpsan">{$textLanguage.rodapeLinkCod}</a>.
		😊</small>
</main>
