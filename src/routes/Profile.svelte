<div class="root">
    <div class="area-img">
        <div class="figure">
            <img
                class="img"
                src="/images/profile.jpg"
                width=68
                height=68s
                alt="프로필"
            >
        </div>
    </div>
    <div class="area-desc">
        <strong class="name">김재원</strong>
        <em class="role"><span class="text">소프트웨어 엔지니어</span></em>
        <em class="role"><span class="text">Front-end focused</span></em>
    </div>
</div>

<style lang="scss">
.root {
    padding: 0 22px;
    &::after {
        content: '';
        display: block;
        clear: both;
    }
}
.area-img {
    float: left;
    .figure {
        overflow: hidden;
        position: relative;
        width: 68px;
        height: 68px;
        border-radius: 50%;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
        }
    }
    .img {
        display: block;
        width: 68px;
        height: 68px;
    }
}
.area-desc {
    overflow: hidden;
    padding-left: 14px;
    .name {
        display: block;
        margin-bottom: 8px;
        font-size: 18px;
    }
}
.role {
    display: block;
    .text {
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        color: #7b7b7b;
        vertical-align: top;
    }
    & + &::before {
        content: '';
        display: inline-block;
        width: 1px;
        height: 10px;
        margin: 6px 8px 0 4px;
        background-color: #9a9a9a;
        vertical-align: top;
        transform: rotate(20deg);
    }
}
</style>