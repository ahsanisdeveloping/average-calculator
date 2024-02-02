function calculate()
{
    var english = Number(document.getElementById("english").value);
    var maths = Number(document.getElementById("maths").value);
    var computer = Number(document.getElementById("computer").value);
    var urdu = Number(document.getElementById("urdu").value);
    var average = (english+maths+computer+urdu)/4;
    document.getElementById("screen").innerHTML = average+"%";
}