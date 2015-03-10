function description() {
    var str1 = document.getElementById("disc1").innerHTML; 
    var res = str.replace(/blue/g, "red");
    document.getElementById("disc1").innerHTML = res;
}

var newHTML = <img class="imgExpand" src="img/product/003/1.jpg" alt="Image described below">
		<h2 class="title">Item Three</h2>
		<p class="price">$</p>
		<p class="disc">No, description This picture speaks for itself! blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
		<p>Want to purchase:</p> 
		<a href="mailto:darin@bridgestreetbrg.comsubject=Internet%20Purchase%20Request$body=I%20would%20like%20to%20purchase%20...target=_top">Email Darin (darin@bridgestreet.com) </a><br><br>
		<button onclick="alert('Call Bridge Street Bargains at: 559 xxx-xxxx')">Call us at (555) 732-xxxx</button>
		<img class="line" src="img/line.png" alt="Line separating items">;
$('section#section4').replaceWith(newHTML);