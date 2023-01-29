<div class="summary">
    {#each paragraphs as paragraph}
    <p class="text">{paragraph}</p>
    {/each}
</div>

<script lang="ts">
export let paragraphs: Array<string> = [];
</script>

<style lang="scss">
.text {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.55;
    color: #555;
    &+& {
        margin-top: 8px;
    }
}
</style>