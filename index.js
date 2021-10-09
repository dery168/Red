(function () {
    'use strict';
    document.addEventListener("DOMContentLoaded", function() {
        let list = document.getElementsByClassName('total_count_selector')
        for (let i = 0; i < list.length; i++) {
            let rate = +list[i].innerText
            if (rate > 10) {
                list[i].style.color = 'red'
                list[i].style.fontSize = (rate + 100) + '%'
            }
        }    
    });
})();
