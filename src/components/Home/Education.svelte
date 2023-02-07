<div class="education">
    <div class="main">
        <div class="heading">
            <div class="logo-wrap">
                <div class={data.logo.useBorder ? "logo use-border" : "logo"}>
                    <img
                        class="img"
                        src={data.logo.imageUrl}
                        alt=""
                        width=48
                        height=48
                    >
                </div>
            </div>
            <div class="info">
                <em class="period">{data.period}</em>
                <strong class="title">
                    <span class="organizer txt">{data.organizer}</span>
                    <span class="div"></span>
                    <span class="course txt">{data.course}</span>
                </strong>
            </div>
        </div>
        <div class="summary">
            <Summary paragraphs={[data.summary]} />
        </div>
    </div>
</div>

<script lang="ts">
import Summary from "@/components/common/atomic/Summary.svelte";
import type { Education } from "@/types/struct";

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
        width: 48px;
        height: 48px;
        border-radius: 50%;
        .img {
            display: block;
            width: 48px;
            height: 48px;
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
    font-size: 15px;
    letter-spacing: 1px;
    color: #000;
}
.title {
    display: block;
    overflow: hidden;
    margin-top: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    .txt {
        display: inline-block;
        height: 28px;
        font-weight: 700;
        vertical-align: top;
        color: #000;
    }
    .organizer {
        font-size: 20px;
        line-height: 28px;
    }
    .div {
        display: inline-block;
        width: 3px;
        height: 16px;
        border-radius: 1.5px;
        margin: 7px 6px 0;
        background-color: #000;
        transform: rotate(20deg);
    }
    .course {
        font-size: 16px;
        line-height: 31px;
    }
}
.summary {
    margin-top: 12px;
}
</style>