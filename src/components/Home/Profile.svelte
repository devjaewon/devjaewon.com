<section class="root">
    <div class="area-img">
        <div class="figure">
            <img
                class="img"
                src="/images/profile.jpg"
                width=68
                height=68
                alt="프로필"
            >
        </div>
    </div>
    <div class="area-desc">
        <h2 class="name">김재원</h2>
        <em class="role"><span class="text">소프트웨어 엔지니어</span></em>
        <em class="role role-sub"><span class="text">#</span><span class="text">front-end-focused,</span></em>
        <em class="role role-sub"><span class="text">#</span><span class="text">broad-knowledge-oriented</span></em>
    </div>
</section>

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
    padding-top: 1px;
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
    font-size: 0;
    .name {
        display: block;
        margin-bottom: 8px;
        font-family: 'GowunDodum', sans-serif;
        font-size: 18px;
    }
}
.role {
    display: block;
    .text {
        display: inline-block;
        font-family: 'GowunDodum', sans-serif;
        font-size: 14px;
        line-height: 20px;
        color: #7b7b7b;
        vertical-align: top;
    }
}
.role-sub {
    display: block;
    .text {
        display: inline-block;
        font-family: 'GowunDodum', sans-serif;
        font-size: 13px;
        line-height: 17px;
        color: #7b7b7b;
        vertical-align: top;
    }
    .text + .text {
        margin-left: 2px;
    }
}
</style>