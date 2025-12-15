
(function () {
    if (document.getElementById('float-input')) return;

    const div = document.createElement('div');
    div.id = 'float-input';
    div.innerHTML =
        '<input id="textBox" type="text" placeholder="说点什么吧…">' +
        '<button id="okBtn">弹窗显示</button>';
    document.body.appendChild(div);

    // 事件处理
    function showAlert() {
        const val = document.getElementById('textBox').value.trim();
        if (!val) { alert('感谢您的指正'); return; }
        alert(val);
        document.getElementById('textBox').value = ''; 
    }
    document.getElementById('okBtn').addEventListener('click', showAlert);
    document.getElementById('textBox').addEventListener('keyup', e => {
        if (e.key === 'Enter') showAlert();
    });
})();