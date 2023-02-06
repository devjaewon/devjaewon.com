<div class={wide ? "root-wide" : "root"}>
    <slot name="content"></slot>
</div>

<script lang="ts">
export let wide = false;
</script>

<style lang="scss">
.root {
    max-width: 500px;
    margin: 0 auto;
    padding-bottom: 60px;
}
.root-wide {
    max-width: 768px;
    margin: 0 auto;
    padding-bottom: 60px;
}
</style>
