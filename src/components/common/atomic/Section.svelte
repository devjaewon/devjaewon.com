<div class="section">
    <SectionTitle text={title} />
    <slot name="content"></slot>
</div>

<script lang="ts">
import SectionTitle from "./SectionTitle.svelte";

export let title = '';
</script>

<style lang="scss">
.section {
    padding: 0 16px;
    @media screen and (min-width: 375px) {
        padding: 0 20px;
    }
    @media screen and (min-width: 700px) {
        padding: 0 24px;
    }
}
</style>