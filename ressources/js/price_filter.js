var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

(upperSlider) ? document.querySelector('#two').innerHTML= upperSlider.value : 0;
(lowerSlider) ? document.querySelector('#one').innerHTML=lowerSlider.value : 0;

var  lowerVal = (lowerSlider) ? parseInt(lowerSlider.value) : 0;
var upperVal = (upperSlider) ? parseInt(upperSlider.value) : 0;

(upperSlider) ? upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').innerHTML=this.value
} : 0;

(lowerSlider) ? lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = (upperSlider) ? parseInt(upperSlider.value) : 0;
    if (upperSlider)
        if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;
            if (upperVal == upperSlider.max) {
                lowerSlider.value = parseInt(upperSlider.max) - 4;
            }
        }
    document.querySelector('#one').innerHTML=this.value
} : 0;

/*------------------------------*/
var lowerSlider1 = document.querySelector('#lower1');
var  upperSlider1 = document.querySelector('#upper1');

(upperSlider1) ? document.querySelector('#two1').innerHTML=upperSlider1.value : 0;
(lowerSlider1) ? document.querySelector('#one1').innerHTML=lowerSlider1.value : 0;

var  lowerVal1 = (lowerSlider1) ? parseInt(lowerSlider1.value) : 0;
var upperVal1 = (upperSlider1) ? parseInt(upperSlider1.value) : 0;

(upperSlider1) ? upperSlider1.oninput = function () {
    lowerVal1 = parseInt(lowerSlider1.value);
    upperVal1 = parseInt(upperSlider1.value);

    if (upperVal1 < lowerVal1 + 4) {
        lowerSlider1.value = upperVal1 - 4;
        if (lowerVal1 == lowerSlider1.min) {
        upperSlider1.value = 4;
        }
    }
    document.querySelector('#two1').innerHTML=this.value
} : 0;

(lowerSlider1) ? lowerSlider1.oninput = function () {
    lowerVal1 = parseInt(lowerSlider1.value);
    upperVal1 = parseInt(upperSlider1.value);
    if (lowerVal1 > upperVal1 - 4) {
        upperSlider1.value = lowerVal1 + 4;
        if (upperVal1 == upperSlider1.max) {
            lowerSlider1.value = parseInt(upperSlider1.max) - 4;
        }
    }
    document.querySelector('#one1').innerHTML=this.value
} : 0; 
