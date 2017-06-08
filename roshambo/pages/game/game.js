Page({
  // 基本数据定义
  data:{
    // 电脑可选类
    roshambo: ['shitou','bu','jiandao'],
    // 电脑选择结果
    roshambo_result: '',
    // 玩家选择
    player_result: '',
    c_result: '...',
    p_result: '...',
    myRotate: null,
    // 重新开始按钮
    again: 'Again',
    result: '...',
    judge: '',
    // 电脑随机数
    computer_num: null,
    // 设置你的值
    player_num: null,
    // 延迟时间
    delay_time: 20,
    // 清除延迟器
    target: null,
    // 控制按钮状态
    disabled: false,
    // 背景随机色
    bgColor_num: 0,
    // page的背景颜色数组
    changeColor: [
      'radial-gradient(circle at 94% 19%, #e87d64, #2cae57)',
      'radial-gradient(circle at 8%  94%, #4bd280, #6c1fd1)',
      'radial-gradient(circle at 27% 27%, #355f53, #65187d)',
      'radial-gradient(circle at 26%  5%, #c32aee, #c85a8a)',
      'radial-gradient(circle at 78% 95%, #0fe031, #507323)',
      'radial-gradient(circle at 3%  92%, #f9ebb8, #a45544)',
      'radial-gradient(circle at 31% 97%, #291397, #cbd763)',
      'radial-gradient(circle at 67% 96%, #5eb278, #066c5c)',
      'radial-gradient(circle at 67% 49%, #85c642, #970977)',
      'radial-gradient(circle at 47% 19%, #23079c, #2b0f5b)',
      'radial-gradient(circle at 97% 56%, #e49458, #1b6e05)',
      'linear-gradient(116deg, #b291e8, #b73d2d)',
      'linear-gradient(167deg, #317d63, #f0cf0f)',
      'linear-gradient(146deg, #8961c1, #8bf361)',
      'linear-gradient(33deg,  #5d85da, #43c3d9)',
      'linear-gradient(201deg, #e8552d, #468fbb)',
      'linear-gradient(325deg, #eda356, #60b4d1)',
      'linear-gradient(256deg, #06c290, #ee860a)',
      'linear-gradient(217deg, #b340a5, #383bb7)',
      'linear-gradient(222deg, #73ac2d, #7e037f)',

    ],
    // 改变背景色
    bgColor: 'linear-gradient(222deg, #73ac2d, #7e037f)',
    // 三个按钮动画
    btAnimate: 'beaconOut 1s infinite linear',
    // 弹出结果动画
    myAnimate: null,
    // 设置一个产生随机色的数组
    randomArray:['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'],
    // 设置一个空的拼接字符串
    colorStr: '',
    // 弹出框的字体颜色
    judgeColor: '',
    // 弹出框背景色
    judgeBg: '',
    // 刷新按钮颜色
    againBg: 'transparent',
    // 刷新字体颜色
    againColor: 'transparent',
    // 重新开始动画
    againAnimate: null,
    // RGB颜色值
    r:'',
    g:'',
    b:''
  },
  // 石头按键
  stone_Btn: function(){
    this.setData({
      player_result: this.data.roshambo[0],
      player_num: 0,
      delay_time: 20,
      p_result: '',
      c_result: '',
    });
    this.data.target = setInterval(this.delay,50);
  },
  // 布按键
  rag_Btn: function(){
    this.setData({
      player_result: this.data.roshambo[1],
      player_num: 1,
      delay_time: 20,
      p_result: '',
      c_result: '',
    });
    this.data.target = setInterval(this.delay,50);
  },
  // 剪刀按键
  scissors_Btn: function(){
    this.setData({
      player_result: this.data.roshambo[2],
      player_num: 2,
      delay_time: 20,
      p_result: '',
      c_result: '',
    });
    this.data.target = setInterval(this.delay,50);
  },
  // 重新开始
  again_Btn: function(){
    this.data.bgColor_num = Math.floor(Math.random()*20);
    this.setData({
      roshambo_result: '',
      player_result: '',
      c_result: '...',
      p_result: '...',
      disabled: false,
      myAnimate: null,
      colorStr: '',
      judgeColor: 'transparent',
      judgeBg: 'transparent',
      againColor: 'transparent',
      againBg: 'transparent',
      againAnimate: null,
      btAnimate: 'beaconOut 1s infinite linear',
      bgColor: this.data.changeColor[this.data.bgColor_num]
    })
  },
  // rgb颜色
  randomRgbColor: function () { //随机生成RGB颜色
    this.data.r = Math.floor(Math.random() * 256); 
    this.data.g = Math.floor(Math.random() * 256); 
    this.data.b = Math.floor(Math.random() * 256); 
    return this.data.r + ',' + this.data.g +',' + this.data.b + ',' + 0.4;
  },
  // rgb颜色
  randomRgbAgainColor: function () { //随机生成RGB颜色
    this.data.r = Math.floor(Math.random() * 256); 
    this.data.g = Math.floor(Math.random() * 256); 
    this.data.b = Math.floor(Math.random() * 256); 
    return this.data.r + ',' + this.data.g +',' + this.data.b + ',' + 0.8;
  },
  // 产生一个六位的字符串(十六进制颜色)
  createRandomColorStr: function(){
    for(var i = 0;i < 6;i++){
      this.data.colorStr += this.data.randomArray[Math.floor(Math.random()*16)];  
    }
    return this.data.colorStr;
  },
  // 延迟效果
  delay: function(){
    if(this.data.delay_time > 0){
      this.setData({
        roshambo_result: this.data.roshambo[this.data.delay_time % 3]
      })
      this.data.delay_time--;
    }else{
      clearInterval(this.data.target);
      this.Compare();
    }
  },
  // 电脑出值，进行比较
  Compare: function(){
    // 电脑随机获取0-2的数字
    this.data.computer_num = Math.floor(Math.random()*3);
    this.data.resultColor = this.createRandomColorStr();
    this.data.resultBg = this.randomRgbColor();
    // console.log( 'rgba(' + this.data.resultBg + ')');
    this.setData({
      roshambo_result: this.data.roshambo[this.data.computer_num],
      disabled: !this.data.disabled,
      btAnimate: null,
      judgeBg: 'rgba(' + this.data.resultBg + ')',
      judgeColor: 'white',
      againColor: 'white'
    });
    // 当玩家和电脑获取的数字相同时，为平局
    if(this.data.computer_num == this.data.player_num){
      this.setData({
        judge: 'It’s Tie!',
        myAnimate: 'lightSpeedIn 1s linear backwards,beaconIn 1.5s infinite linear',
        againAnimate: 'beaconOut 1.5s infinite linear'
      })
    }else{
        // 比较电脑获取的数字和玩家出的数字的差值
        var b = this.data.computer_num - this.data.player_num;
        if(b > 0){
            if(b == 1){
              this.setData({
                judge: 'You Lost!',
                myAnimate: 'bounceInUp 1s linear backwards,beaconIn 1.5s infinite linear',
                againAnimate: 'beaconOut 1.5s infinite linear'
              })
            }else{
              this.setData({
                judge: 'You Win!',
                myAnimate: 'bounceInDown 1s linear backwards,beaconIn 1.5s infinite linear',
                againAnimate: 'beaconOut 1.5s infinite linear'
              })
            }
        }else{
            b = b*(-1);
            if(b == 1){
              this.setData({
                judge: 'You Win!',
                myAnimate: 'bounceInDown 1s linear backwards,beaconIn 1.5s infinite linear',
                againAnimate: 'beaconOut 1.5s infinite linear'
              })
            }else{
              this.setData({
                judge: 'You Lost!',
                myAnimate: 'bounceInUp 1s linear backwards,beaconIn 1.5s infinite linear',
                againAnimate: 'beaconOut 1.5s infinite linear'
              })
            }
        }
    }
  },
  onReady: function(e){
    // 页面渲染完成
  },
  onLoad: function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onShow: function(){
    // 页面显示
  },
  onHide: function(){
    // 页面隐藏
  },
  onUnload: function(){
    // 页面关闭
  }
})