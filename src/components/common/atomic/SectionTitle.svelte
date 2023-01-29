<div class="section-title">
    <span class="arrow arrow-left"></span>
    <h2 class="text">{text}</h2>
    <span class="arrow arrow-right"></span>
    <span class="dashed-bar"><span class="bar"></span></span>
</div>

<script lang="ts">
export let text = '';
</script>

<style lang="scss">
.section-title {
    display: flex;
    position: relative;
    height: 24px;
    padding-left: 5px;
    font-size: 0;
}
.arrow {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: top;
}
.arrow-left {
    position: absolute;
    top: 8px;
    left: -5px;
    border-top: 5px solid transparent;
    border-right: 5px solid #658864;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
}
.arrow-right {
    flex-grow: 0;
    margin-top: 8px;
    border-top: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #658864;
}
.dashed-bar {
    flex-grow: 1;
    padding-left: 4px;
    .bar {
        display: block;
        width: 100%;
        height: 1px;
        margin-top: 13px;
        border-bottom: 0.5px solid #658864;
    }
}
.text {
    flex-grow: 0;
    height: 24px;
    padding: 0 10px;
    background-color: #fdfeff;
    font-family: 'GowunDodum', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    vertical-align: top;
    color: #4E6C50;
}
</style>
