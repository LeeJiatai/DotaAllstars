Page({

    /* 页面的初始数据*/
    data: {
        teams: [
            {
                rank: 1,
                guidon: '../../img/vp.png',
                teamName: 'vp',
                income: '1,535,000',
                integral: 7872
            },
            {
                rank: 2,
                guidon: '../../img/liquid.png',
                teamName: 'Liquid',
                income: '999,000',
                integral: 4734
            }
        ]
    },
    /*用户点击右上角分享*/
    onShareAppMessage: function () {

    }
})