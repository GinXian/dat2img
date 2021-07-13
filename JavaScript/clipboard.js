var buttons = document.getElementsByClassName('copy');


for(let button of buttons) {
    button.addEventListener(
        "click",
        (function (button) {
            var copyText = button.previousElementSibling.innerText;
            return function listener() {
                navigator.permissions.query({name: "clipboard-write"}).then(
                    result => {
                        if(result.state == 'granted' || result.state == 'prompt') {
                            navigator.clipboard.writeText(copyText.trim()).then(
                                // Success
                                () => console.log("Copying to the clipboard succeeds."),
                                // Error
                                () => console.log("Fxxk!")
                            )
                        }
                    }, 
                    () => console.log('Permission denied')
                )
            }
        })(button),
        true, true
    );
}