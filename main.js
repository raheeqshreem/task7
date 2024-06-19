var data=['c++' , 'java' , 'html'];
var result="";
for(var i=0 ; i<3 ; i++){

    result+= "<option>" + data[i] + "</option>";
}


document.querySelector ("select").innerHTML = result;

