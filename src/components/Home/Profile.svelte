<section class="profile">
    <div class="area-img">
        <div class="figure">
            <img
                class="img"
                src="/images/profile.jpg"
                width=84
                height=84
                alt="프로필"
            >
        </div>
    </div>
    <div class="area-desc">
        <h2 class="name">김재원</h2>
        <em class="role"><span class="text">소프트웨어 개발자</span></em>
        <div class="role-subs">
            <em class="role role-sub"><span class="text">#</span><span class="text">front-end-focused,</span></em>
            <em class="role role-sub"><span class="text">#</span><span class="text">broad-knowledge-oriented</span></em>
        </div>
    </div>
</section>

<style lang="scss">
.profile {
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
        width: 84px;
        height: 84px;
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
        width: 100%;
        height: 100%;
    }
}
.area-desc {
    overflow: hidden;
    padding-left: 14px;
    font-size: 0;
    .name {
        display: block;
        margin-bottom: 4px;
        font-family: 'GowunDodum', sans-serif;
        font-size: 22px;
    }
}
.role {
    display: block;
    .text {
        display: inline-block;
        font-family: 'GowunDodum', sans-serif;
        font-size: 18px;
        line-height: 23px;
        color: #555;
        vertical-align: top;
    }
}
.role-subs {
    margin-top: 4px;
}
.role-sub {
    display: block;
    &:first-child {
        margin-top: 8px;
    }
    .text {
        display: inline-block;
        font-family: 'GowunDodum', sans-serif;
        font-size: 15px;
        line-height: 1.3;
        color: #999;
        vertical-align: top;
    }
    .text + .text {
        margin-left: 2px;
    }
}
</style>