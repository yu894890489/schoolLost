Date.prototype.format = function(fmt) {
    if (!fmt) {
        fmt = "yyyy-MM-dd"
    }
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

/**
 * 日期格式化方法
 * @param {*} str 
 * @param {*} format 
 */
let formatTime = (date, format) => {
    if (typeof(date) === 'string') {
        let reg = /^[\d]*$/g
        if (reg.test(date)) {
            return new Date(date).format();
        }
    }
    if (typeof(date) === 'number') {
        return new Date(date).format();
    }
    if (date instanceof Date) {
        return date.format();
    }
}
export default {
    formatTime
}