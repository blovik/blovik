// changes the header png depending on which button is selected in html. 'onclick="light(1)"'
function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "img/header.png"
    } else {
        pic = "img/header2.png"
    }
    document.getElementById('myImage').src = pic;
}
