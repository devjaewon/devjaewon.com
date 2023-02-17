<div class="section-title">
    <div class="title">
        <div class="text-block">
            <span class="text">{text}</span>
        </div>
    </div>
</div>

<script lang="ts">
export let text = '';
</script>

<style lang="scss">
.section-title {
    margin: 0 -16px;
    @media screen and (min-width: 375px) {
        margin: 0 -20px;
    }
    @media screen and (min-width: 700px) {
        margin: 0 -24px;
    }
}
.title {
    display: block;
    height: 44px;
    border-radius: 2px 2px 0 0s;
    .text-block {
        height: 100%;
        padding: 0 14px;
        @media screen and (min-width: 375px) {
            padding: 0 20px;
        }
        @media screen and (min-width: 700px) {
            padding: 0 24px;
        }
    }
    .text {
        display: block;
        height: 100%;
        padding: 0 2px;
        border-bottom: 1px solid #cecece;
        font-family: 'Gowun Dodum', sans-serif;
        font-weight: 700;
        font-size: 22px;
        line-height: 44px;
        color: #333;
    }
}
</style>
