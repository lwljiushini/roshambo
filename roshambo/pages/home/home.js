Page({
    data:{
        date: '',
        years: '',
        month: '',
        day: '',
    },
    getDateTime: function(){
        var obj_pageData = {};
        obj_pageData['getDateTime'] = function(params){
            this.setData({
                date:  params.detail.value,
                years: params.detail.value.spilt('-')[0] + '年',
                month: params.detail.value.spilt('-')[1] + '月',
                day:   params.detail.value.spilt('-')[2] + '日',
            })
        }
        Page(obj_pageData)
    }
});