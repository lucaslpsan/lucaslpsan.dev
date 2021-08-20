<script>
    import { onMount } from "svelte";
    export let infos;

    let elementWrapper, children, positionFocus;

    onMount(() => {
        elementWrapper = document.querySelector("#wrapper-badges");
        children = Array.from(elementWrapper.children);
        positionFocus = Math.floor(children.length * 0.5);

        children.forEach((el, index) => {
            el.style.order = index;
        });

        children[positionFocus].classList.add("focus");
    });

    function toggle(e) {
        let targetElement;
        let positionClicked;

        e.preventDefault();

        if (e.target.classList.contains("badge")) {
            targetElement = e.target;
        } else {
            targetElement = e.target.parentElement;
        }

        if (targetElement.classList.contains("focus")) return; // Fast-fail

        positionClicked = targetElement.style.order;
        targetElement.style.order = positionFocus;

        //Remove focus from others
        children.forEach((element) => {
            if (element.classList.contains("focus")) {
                console.log(element);
                element.style.order = positionClicked;
            }
            element.classList.remove("focus");
        });

        targetElement.classList.toggle("focus");
    }
</script>

<div class="wrapper" id="wrapper-badges">
    {#each infos as { title, description, link, ref, titleLink, altImg }}
        <div class="badge" on:click={toggle}>
            <img src={`${ref}.svg`} alt={altImg} loading="lazy" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    {/each}
</div>

<style>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        text-align: center;
        cursor: pointer;
        /* transform: scale(0.8); */
        animation: example 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }

    @keyframes example {
        /* from {
            transform: scale(1.5);
        } */
        to {
            transform: scale(0.8);
        }
    }

    /* .badge {
        transition: all 1s ease-in-out;
    } */

    h3 {
        margin: 0;
    }

    .badge img {
        width: 100px;
    }

    .badge p {
        visibility: hidden;
    }
</style>
