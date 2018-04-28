const app = getApp();

Page({
    data: {
        text: 'Hello world!',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        str: [
            {
                img: 'http://www.dota2.com.cn/images/heroes/earthshaker_hphover.png',
                hero: '撼地者',
            },
            {
                img: 'http://www.dota2.com.cn/images/heroes/sven_hphover.png',
                hero: '斯文',
            },
            {
                img: 'http://www.dota2.com.cn/images/heroes/tiny_hphover.png',
                hero: '小小',
            },
            {
                img: 'http://www.dota2.com.cn/images/heroes/kunkka_hphover.png',
                hero: '昆卡',
            }
        ],
        agi: [
            {
                img: 'http://www.dota2.com.cn/images/heroes/antimage_hphover.png',
                hero: '敌法师  ',
            },
            {
                img: 'http://www.dota2.com.cn/images/heroes/drow_ranger_hphover.png',
                hero: '卓尔游侠',
            },
            {
                img: 'http://www.dota2.com.cn/images/heroes/juggernaut_hphover.png',
                hero: '主宰',
            },
            {
                img: 'http://www.dota2.com.cn/images/heroes/mirana_hphover.png',
                hero: '米拉娜',
            }
        ],
        int: [
            {
                img: 'http://www.dota2.com.cn/images/heroes/crystal_maiden_hphover.png',
                hero: '水晶室女',
            },
            {
                img: 'http://www.dota2.com.cn/images/heroes/puck_hphover.png',
                hero: '帕克',
            },
            {
                img: 'http://www.dota2.com.cn/images/heroes/storm_spirit_hphover.png',
                hero: '风暴之灵',
            },
            {
                img: 'http://www.dota2.com.cn/images/heroes/windrunner_hphover.png',
                hero: '风行者',
            }
        ],
    },
     onLoad: function(){
        if(app.globalData.userInfo){
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if(this.data.canIUse){
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        }else {
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
     },

    getUserInfo: function(e){
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo
        console.log(e.detail.userInfo);
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})