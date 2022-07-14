onLoad() {
    if (wx.getUserProfile) {
        this.setData({
            canIUseGetUserProfile: true
        })
    }
    wx.vibrateLong();
    // 设置剪贴板
    wx.setClipboardData({ data: '这是我复制的内容' })
    // 获得剪贴板的内容
    wx.getClipboardData({
        success: (res) => {
            console.log(res.data)
        }
    })
},