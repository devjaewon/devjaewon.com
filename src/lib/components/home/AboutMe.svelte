<div class="about-me">
    <div class="inner">
        <div class="profile">
            <div class="area-img">
                <div class="figure">
                    <img
                        class="img"
                        src="/images/profile.jpg"
                        width=150
                        height=150
                        alt="프로필"
                    >
                </div>
            </div>
            <div class="area-desc">
                <h2 class="name">김재원</h2>
                <em class="role"><span class="txt">소프트웨어 엔지니어</span></em>
                <div class="role-subs">
                    <em class="role-sub"><span class="txt"># front-end focused</span></em>
                    <em class="role-sub"><span class="txt"># broad knowledge oriented</span></em>
                </div>
            </div>
        </div>
        <div class="summary">
            <p class="txt">책과 기술을 좋아하며 매일 아침 운동 후 커피와 함께 하루를 시작합니다. 기술은 주로 시각적인 영역에 관심이 많습니다.</p>
        </div>
        <div class="contact">
            <h3 class="head">Contact</h3>
            <div class="links">
                <ul class="list">
                    <li class="item">
                        <a href="https://github.com/devjaewon" class="link github">
                            <img class="icon" src="/images/icon/github.svg" width="24" height="24" alt="">
                            <span class="txt">devjaewon</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="mailto:devjaewon21@gmail.com" class="link email">
                            <img class="icon" src="/images/icon/email.svg" width="22" height="22" alt="">
                            <span class="txt">devjaewon21@gmail.com</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
.about-me {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 500px;
    transform: translate(-50%, -50%);
    font-family: 'GmarketSans', sans-serif;
}
.inner {
    padding: 0 20px;
}
.profile {
    &::after {
        content: '';
        display: block;
        clear: both;
    }
    .area-img {
        float: left;
        .figure {
            overflow: hidden;
            position: relative;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            
        }
        .img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .area-desc {
        overflow: hidden;
        padding-left: 24px;
        font-size: 0;
        .name {
            display: block;
            font-weight: 700;
            font-size: 52px;
            color: #fffefd;
        }
    }
    .role {
        display: block;
        padding-left: 2px;
        .txt {
            font-weight: 700;
            font-size: 28px;
            color: #acabaa;
        }
    }
    .role-subs {
        margin-top: 6px;
        .role-sub {
            display: block;
            padding-left: 2px;
            .txt {
                font-size: 15px;
                line-height: 1.4;
                color: #acabaa;
            }
        }
        .role-sub + .role-sub {
            margin-top: 2px;
        }
    }
}
.summary {
    margin-top: 20px;
    .txt {
        word-break: keep-all;
        font-size: 16px;
        line-height: 1.5;
        color: #cccdce;
    }
}
@media screen and (max-width: 500px) {
    .profile {
        .area-img .figure {
            width: 110px;
            height: 110px;
        }
        .area-desc {
            padding-left: 12px;
            .name {
                font-size: 34px;
            }
        }
        .role .txt {
            font-size: 18px;
        }
        .role-subs .role-sub .txt {
            font-size: 14px;
        }
    }
    .summary .txt {
        font-size: 15px;
    }
}
.contact {
    margin-top: 24px;
    .head {
        font-size: 16px;
        color: #dddedf;
    }
}
.links {
    margin-top: 10px;
    .list {
        .item + .item {
            margin-top: 6px;
        }
        .link {
            display: block;
            font-size: 0;
            &.email {
                .icon {
                    width: 20px;
                    height: 20px;
                    margin: 2px 9px 0 1px;
                }
            }
        }
        .icon {
            display: inline-block;
            width: 22px;
            height: 22px;
            margin: 1px 8px 0 0;
            vertical-align: top;
        }
        .txt {
            display: inline-block;
            height: 22px;
            border-bottom: 1px solid #cccdce;
            font-size: 14px;
            line-height: 24px;
            vertical-align: top;
            color: #cccdce;
        }
    }
}
</style>
