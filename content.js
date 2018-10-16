chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(start, sender, sendResponse) {    
    if(start) {
        console.log('%cmuffin-top 👏', 'font-size: 1.5em;font-weight:700;');
        var docWidth = document.documentElement.offsetWidth;
        console.log('Your document width:', docWidth);
        

        let overflowing = [];
        [].forEach.call(
            document.querySelectorAll('*'),
            function(el) {
                if (el.offsetWidth > docWidth) {
                    overflowing.push(el);
                }
            }
        );

        if(!overflowing.length) {
            console.log('There are no overflowing elements.');
        } else {
            console.log('The overflowing elements:');
            [].forEach.call(
                overflowing,
                function(el) {
                    if (el.offsetWidth > docWidth) {
                        console.log(el, el.offsetWidth);
                    }
                }
            );
        }
        
    }
}