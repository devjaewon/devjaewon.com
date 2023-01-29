<div class="summary">
    {#each paragraphs as paragraph}
    <p class="text">&nbsp;{paragraph}</p>
    {/each}
</div>

<script lang="ts">
export let paragraphs: Array<string> = [];
</script>

<style lang="scss">
.text {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    &+& {
        margin-top: 8px;
    }
}
</style>