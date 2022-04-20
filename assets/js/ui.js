let inputTexts = document.querySelectorAll(".input--text");
for (const inputText of inputTexts) {
    inputText.addEventListener('change', function (event) {
        this.classList.add('valid');
        if (inputText.value.length == 0) {
            inputText.classList.remove('valid');
        }
    });
    inputText.addEventListener('keyup', function (event) {
        this.classList.add('valid');
        if (inputText.value.length == 0) {
            inputText.classList.remove('valid');
        }
    });
    inputText.addEventListener('paste', function (event) {
        this.classList.add('valid');
    });

    if(!inputText.value.length == 0 ) {
        inputText.classList.add('valid');
    }
}
function siblings(t) {
    var children = t.parentElement.children;
    var tempArr = [];

    for (var i = 0; i < children.length; i++) {
        tempArr.push(children[i]);
    }

    return tempArr.filter(function (e) {
        return e != t;
    });
}
function siblings(t, removeClass) { 
    const children = t.parentElement.children; 
    const tempArr = []; 
    for (var i = 0; i < children.length; i++) { 
        children[i].classList.remove(removeClass) 
    } 
}

let tabNavs = document.querySelectorAll(".tab-nav__item");
for (const tabNav of tabNavs) {
    tabNav.addEventListener('click', function () {
        siblings(this, "tab-nav--focused");
        this.classList.add('tab-nav--focused');
    });
}
