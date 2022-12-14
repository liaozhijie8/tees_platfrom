<script>
// 接收tunan666的数据    
window.addEventListener('message', function (e) {
    alert('data from tunan666 ---> ' + e.data); var data = JSON.parse(e.data);
    if (data) {
        data.number = 16;
        // 处理后再发回tunan666
        window.parent.postMessage(JSON.stringify(data), 'http://www.tunan666.com');
    }
}, false);
</script>