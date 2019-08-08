//index.js
//获取应用实例
let app = getApp();
Page({

  data: {
    array: [ '电路1', '电路2'],
    index: 0,
    score: 0, 
    voltage: 0,
    r1: 0,
    r2: 0,
    r3: 0,
    r4: 0,
    
    charLt: '<'
  },
  onLoad: function () {

  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindKeyvoltageInput: function (e) {
    this.setData({
      voltage: e.detail.value
    })
  },
  bindKeyr1Input: function (e) {
    this.setData({
      r1: e.detail.value
    })
  },
  bindKeyr2Input: function (e) {
    this.setData({
      r2: e.detail.value
    })
  },
  bindKeyr3Input: function (e) {
    this.setData({
      r3: e.detail.value
    })
  },
  bindKeyr4Input: function (e) {
    this.setData({
      r4: e.detail.value
    })
  },
  calculateBtn: function (e) {
    if (!this.data.voltage) {
      wx.showToast({
        title: '请输入电压'
      })
      return false;
    }

    if (!this.data.r1) {
      wx.showToast({
        title: '请输入电阻R1'
      })
      return false;
    }
    if (!this.data.r2) {
      wx.showToast({
        title: '请输入电阻R2'
      })
      return false;
    }
    if (!this.data.r3) {
      wx.showToast({
        title: '请输入电阻R3'
      })
      return false;
    }
    if (!this.data.r4) {
      wx.showToast({
        title: '请输入电阻R4'
      })
      return false;
    }

    this.calculate();

  },
  //计算电流
  calculate: function () {
    let score = 0;
    let rd = 0;
    let r12 = 0;
    let r23 = 0;
    let r13 = 0;
    let r14 = 0;
    let r24 = 0;
    let r34 = 0;
    let rp = 0;

  if (!this.data.index){
     
     rd = parseFloat(this.data.r2) + parseFloat(this.data.r3) + parseFloat(this.data.r4);
     r23 = parseFloat(this.data.r2) * parseFloat(this.data.r3) / rd;
     r34 = parseFloat(this.data.r3) * parseFloat(this.data.r4) / rd;
     r24 = parseFloat(this.data.r2) * parseFloat(this.data.r4) / rd;
     rp = ((parseFloat(this.data.r1) + r23) * r34) / (parseFloat(this.data.r1) + r23 + r34);
    score = parseFloat(this.data.voltage) / (rp + r24)
  }
  else {
     
     rd = parseFloat(this.data.r1) + parseFloat(this.data.r2) + parseFloat(this.data.r3);
     r13 = parseFloat(this.data.r1) * parseFloat(this.data.r3) / rd;
     r12 = parseFloat(this.data.r1) * parseFloat(this.data.r2) / rd;
     r23 = parseFloat(this.data.r2) * parseFloat(this.data.r3) / rd;
     rp = ((parseFloat(this.data.r4) + r12) * r23) / (parseFloat(this.data.r4) + r12 + r23);
    score = parseFloat(this.data.voltage)/ (rp + r13)
  }
    this.setData({
      score: score.toFixed(3)
    })
  }
})
