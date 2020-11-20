<script>
  import { tweened } from "svelte/motion";
  import { interpolateLab } from "d3-interpolate";
  import Logo from "./Logo.svelte";
  import { textLanguage, colorUI } from "../helpers/store";

  const initialColor = "#4299e1";

  const color = tweened(initialColor, {
    duration: 200,
    interpolate: interpolateLab,
  });

  /**
      origin: CSS transform-origin position
      borderRadius: trickery to keep border-radius unchanged after transform
      targetColor: transition interpolate target
     */
  const cells = [
    {
      origin: "top left",
      borderRadius: "15px 15px 0 15px",
      targetColor: "#fd5c63",
    },
    {
      origin: "top right",
      borderRadius: "15px 15px 15px 0",
      targetColor: "#945DC3",
    },
    {
      origin: "top left",
      borderRadius: "15px 15px 0 15px",
      targetColor: "#1CAC78",
    },
    {
      origin: "top right",
      borderRadius: "15px 15px 15px 0",
      targetColor: "#007FFF",
    },
    {
      origin: "bottom left",
      borderRadius: "15px 0 15px 15px",
      targetColor: "#8693AB",
    },
    {
      origin: "bottom right",
      borderRadius: "0 15px 15px 15px",
      targetColor: "#FF7F50",
    },
    {
      origin: "bottom left",
      borderRadius: "15px 0 15px 15px",
      targetColor: "#FFC30B",
    },
    {
      origin: "bottom right",
      borderRadius: "0 15px 15px 15px",
      targetColor: "#FF6A88",
    },
  ];
  let modalIdx;

  function toggle(event, idx, content) {
    event.preventDefault();

    if (modalIdx === idx) {
      modalIdx = undefined;
      color.set(initialColor);
      colorUI.change(initialColor);
      event.target.innerHTML = idx + 1;
    } else {
      modalIdx = idx;
      color.set(cells[idx].targetColor);
      colorUI.change(cells[idx].targetColor);
      event.target.innerHTML = $textLanguage.curiosidade[idx]; //content;
    }
  }
</script>

<style>
  .background {
    display: grid;
    place-content: center;
    justify-items: center;
    height: 100vh;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .container {
    position: relative;
    /* width: 255px; */
    height: 255px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 15px;
    border-radius: 15px;
    overflow: hidden;
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      justify-items: center;
    }
    .background {
      height: auto;
    }
    .container {
      height: auto;
      padding-bottom: 1em;
    }
  }

  .cell {
    display: grid;
    align-content: center;
    text-align: center;
    font-size: 2.2rem;
    font-weight: 600;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    background-color: #fff;
    width: 120px;
    height: 120px;
    transition: transform 0.15s ease-in-out;
    transform-style: preserve-3D;
  }

  .scale {
    z-index: 2;
    transform: scale(2.125); /* 255/120 */
    font-size: initial;
  }
</style>

<div class="background" style="background: {$color};">
  <Logo />
  <h2>{$textLanguage.coisasSobreMim}</h2>
  <div class="container">
    <div class="grid">
      {#each cells as cell, i}
        <div
          class="cell"
          class:scale={i === modalIdx}
          style="transform-origin:{cell.origin}; border-radius:{cell.borderRadius}; color: {$color};"
          on:click={(e) => toggle(e, i, cell.content)}
          on:transitionend={(e) => {
            if (i !== modalIdx) e.target.innerHTML = i + 1;
          }}>
          {i + 1}
        </div>
      {/each}
    </div>
  </div>
</div>
