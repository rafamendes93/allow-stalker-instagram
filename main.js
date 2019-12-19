action();

async function action() {
    let divPopUpLogin = document.getElementsByClassName("RnEpo")[0];

    while(divPopUpLogin === undefined) {
        divPopUpLogin = document.getElementsByClassName("RnEpo")[0];
        if(divPopUpLogin === undefined) {
            await timeout(1500);
        }
    }

    divPopUpLogin.parentNode.removeChild(divPopUpLogin);
    await timeout(10);
    showScroll();
}

function showScroll() {
    const elBody = document.getElementsByTagName('body')[0];
    elBody.style.overflow = 'auto';
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
