document.addEventListener("DOMContentLoaded", function () {
    console.log('main.js loaded!!!');
    console.log(document.activeElement);

    document.getElementById('test1').addEventListener('focus', function (e) {
        console.log(e);
        document.getElementById('test2').focus();
        // document.activeElement = document.getElementById('test2');
    });

    document.addEventListener('focus', function (e) {
        console.log(e);
    });
});
