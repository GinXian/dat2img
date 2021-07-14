var buttons = document.getElementsByClassName('copy');


for(let button of buttons) {
    button.addEventListener(
        "click",
        function listener(event) {
            var copyText = event.target.previousElementSibling.innerText;
            navigator.permissions.query({name:"clipboard-write"}).then(
                result => {
                    if(result.state == 'granted' || result.state == 'prompt') {
                        navigator.clipboard.writeText(copyText).then(
                            // Success
                            () => console.log('Copying to the clipboard succeeds'),
                            // Error
                            () => console.log('Fxxk!')
                        )
                    }
                }
            )
        },
        true, true
    );
}