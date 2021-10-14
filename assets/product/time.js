var now = new Date;
localtime = new Date();
document.write(" " + localtime);

function InNgayGio() {
    var now = new Date();
    hours = now.getHours();
    mins = now.getMinutes();
    secs = now.getSeconds();
    theDiv = document.getElementById("clock");
    theDiv.innerHTML = hours + ":" + mins + ":" + secs;
    window.setInterval(InNgayGio, 1000);
}
InNgayGio();