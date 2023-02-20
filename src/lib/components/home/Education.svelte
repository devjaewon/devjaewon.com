<div class="education">
    <div class="main">
        <div class="heading">
            <div class="logo-wrap">
                <div class={data.logo.useBorder ? "logo use-border" : "logo"}>
                    <img
                        class="img"
                        src={data.logo.imageUrl}
                        alt=""
                        width=62
                        height=62
                    >
                </div>
            </div>
            <div class="info">
                <em class="period">{data.period}</em>
                <strong class="title">
                    <span class="organizer txt">{data.organizer}</span>
                </strong>
            </div>
        </div>
        <div class="course">
            <span class="txt">{data.course}</span>
        </div>
        <div class="summary">
            <Summary paragraphs={[data.summary]} />
        </div>
    </div>
</div>

<script lang="ts">
import Summary from "@components/common/atomic/Summary.svelte";
import type { Education } from "@constants";

export let data: Education = {
    period: '',
    logo: {
        imageUrl: '',
        useBorder: false,
    },
    organizer: '',
    course: '',
    summary: '',
}
</script>

<style lang="scss">
.heading {
    .logo-wrap {
        float: left;
        padding-right: 12px;
    }
    .logo {
        overflow: hidden;
        position: relative;
        width: 62px;
        height: 62px;
        border-radius: 50%;
        .img {
            display: block;
            width: 100%;
            height: 100%;
        }
        &.use-border::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border: 1px solid rgba(0, 0, 0, 0.4);
            border-radius: 50%;
        }
    }
    .info {
        overflow: hidden;
        padding-top: 2px;
    }
    &::after {
        content: '';
        display: block;
        clear: both;
    }
}
.period {
    display: block;
    font-weight: 300;
    font-size: 17px;
    letter-spacing: 2px;
    color: #000;
}
.title {
    display: block;
    overflow: hidden;
    margin-top: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: 'GmarketSans', sans-serif;
    .txt {
        display: inline-block;
        height: 36px;
        font-weight: 700;
        vertical-align: top;
        color: #000;
    }
    .organizer {
        font-size: 26px;
        line-height: 36px;
    }
}
.course {
    margin-top: 18px;
    .txt {
        display: inline-block;
        height: 26px;
        padding: 4px 8px;
        border-radius: 2px;
        background-color: #343434;
        font-family: 'GmarketSans', sans-serif;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        vertical-align: top;
        color: #fffefd;
    }
}
.summary {
    margin-top: 8px;
}
</style>