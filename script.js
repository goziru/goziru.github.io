(function() {
    window.onload = function() {
        // 邮箱碎片（zirujiasu @ gmail . com）
        // 采用字符编码偏移，防止字符串扫描
        const part1 = [122, 105, 114, 117]; // ziru
        const part2 = [106, 105, 97, 115, 117]; // jiasu
        const part3 = [64]; // @
        const part4 = [103, 109, 97, 105, 108]; // gmail
        const part5 = [46, 99, 111, 109]; // .com

        // 合并并还原
        const fullArr = part1.concat(part2, part3, part4, part5);
        let em = "";
        fullArr.forEach(code => {
            em += String.fromCharCode(code);
        });

        // 延迟注入，进一步迷惑爬虫
        setTimeout(() => {
            const container = document.getElementById('secure-email-display');
            if (container) {
                container.innerHTML = '<a href="mailto:' + em + '">' + em + '</a>';
            }
        }, 800);
    };
})();