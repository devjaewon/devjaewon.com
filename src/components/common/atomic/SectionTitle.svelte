<div class="section-title">
    <div class="title">
        <div class="text-block bar">
            <span class="text">{text}</span>
        </div>
        <div class="bar1 bar"></div>
        <div class="bar2 bar"></div>
        <div class="bar3 bar"></div>
        <div class="empty"></div>
    </div>
</div>

<script lang="ts">
export let text = '';
</script>

<style lang="scss">
.section-title {
    margin: 0 -16px;
}
.title {
    display: flex;
    height: 44px;
    border-radius: 2px 2px 0 0s;
    .bar {
        flex-grow: 0;
        border-radius: 0 2px 2px 0;
        background-color: #ededed;
    }
    .text {
        font-family: 'Gowun Dodum', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 44px;
        color: #333;
    }
    .text-block {
        flex-grow: 1;
        height: 100%;
        padding: 0 16px;
        border-radius: 2px;
        vertical-align: middle;
    }
    .bar1 {
        width: 28px;
        margin-left: 2px;
    }
    .bar2 {
        width: 12px;
        margin-left: 3px;
    }
    .bar3 {
        width: 4px;
        margin-left: 4px;
    }
    .empty {
        width: 5px;
    }
}
</style>
