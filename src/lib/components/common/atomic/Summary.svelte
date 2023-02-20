<div class="summary">
    {#each paragraphs as paragraph}
    <p class={small ? "text small" : "text"}>{paragraph}</p>
    {/each}
</div>

<script lang="ts">
export let paragraphs: Array<string> = [];
export let small = false;
</script>

<style lang="scss">
.text {
    font-weight: 400;
    font-size: 15px;
    line-height: 1.55;
    color: #333;
    &+& {
        margin-top: 8px;
    }
    &.small {
        font-size: 14px;
        color: #555;
    }
}
</style>