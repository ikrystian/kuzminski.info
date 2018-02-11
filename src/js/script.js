window.addEventListener('scroll', function(){
    let scroll = $(this).scrollTop();
    let windowHeight = window.innerHeight;
    let header = $('#header');
    let code = $('#code');
    let defaultWidth = 50;
    if(scroll < windowHeight) {
        let count = Math.round(((scroll * 100) / windowHeight) / 2);

        let headerWidth = defaultWidth - count;
        header.css('width', headerWidth + 'vw');

        let codeWidth = defaultWidth + count;
        code.css('width', codeWidth + 'vw');
    }
});