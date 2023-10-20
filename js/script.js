$(function () {
    //drawerjs
    $('.drawer').drawer ()

    //smoothscroll
    //しょーみ全然わからへんここ
    //　#から始まるURLがクリックされた時
    $('a[href^="#"]').click(function() {
        //移動速度を指定（ミリ秒）
        let speed = 300;
        //hrefで指定されたidを取得
        let id = $(this).attr("href");
        //idの値が#のみだったらターゲットをhtmlタグにしてトップに戻るようにする
        let target = $("#" == id ? "html" : id);
        //ページのトップを基準にターゲットの位置を取得
        let position = $(target).offset().top;
        //ターゲットの位置までspeedの速度で移動
        $("html, body").animate (
            {
                scrollTop: position - $('#js-header').outerHeight()
            },
            speed
        );
        return false;
    }); 
    
    //wowjs
    new WOW().init()
    //こうすることでwowが正常に機能する

    //googleform
    let $form = $( '#js-form')
    $form.submit(function (e) {
        $.ajax({
            url: $form.attr('action'),
            data: $form.serialize(),
            type:"POST",
            dateType:"xml",
            statusCode: {
                0: function () {
                    //送信に成功した時の処理
                },
                200: function () {
                    //送信に失敗した時の処理
                }
            }
        });

        return false;
    });

   



})
