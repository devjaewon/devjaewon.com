<div class="header">
    <div class="logo">
        <img
            class="img"
            src="/images/logo/devjaewon.svg"
            width=24
            height=24
            alt="로고"
        >
        <img
            class="text-img"
            src="/images/text__devjaewon.svg"
            width=100
            height=15
            alt="devjaewon"
        >
    </div>
    <div class="link-wrap">
        <ul class="link-list">
            <li class="link-item">
                <a class="link" href={"javascript:void(0)"}>노트</a>
            </li>
        </ul>
    </div>
</div>

<style lang="scss">
.header {
    padding: 10px;
    @media screen and (min-width: 375px) {
        padding: 10px 18px;
    }
    @media screen and (min-width: 700px) {
        padding: 10px 22px;
    }
    &::after {
        content: '';
        display: block;
        clear: both;
    }
}
.logo {
    float: left;
    padding: 3px 0 4px;
    font-size: 0;
    .img {
        display: inline-block;
        width: 24px;
        height: 24px;
        vertical-align: top;
    }
    .text-img {
        display: inline-block;
        height: 15px;
        margin: 6px 0 0 6px;
        vertical-align: top;
    }
}
.link-wrap {
    float: right;
    .link-list {
        white-space: nowrap;
        font-size: 0;
    }
    .link-item {
        display: inline-block;
        vertical-align: top;
        &:nth-child(n+1) {
            margin-left: 8px;
        }
    }
    .link {
        display: block;
        padding: 0 14px;
        border-radius: 1px;
        border: 1px solid #dedede;
        box-shadow: 2px 2px 4px 1px #f3f3f3;
        background-color: #fffefd;
        font-family: 'Gowun Dodum';
        font-weight: 700;
        font-size: 15px;
        line-height: 32px;
    }
}
</style>