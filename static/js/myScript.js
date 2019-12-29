var btn = document.getElementById("submit").addEventListener("click", displayData);

function loading() {
    document.getElementById("time_elapsed").innerHTML = "Loading...";
}

function tempUp() {
    clearCache();
    var xmlHttp = new XMLHttpRequest();
    var url = "/temp" + "?ops=-1";

    // document.getElementById('whatis').scrollIntoView();
    // loading();
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var responseText = xmlHttp.responseText;

        } else if (xmlHttp.readyState == 4) {
            var error = "Wrong Input";
            // document.getElementById("result").innerHTML = error;
            document.getElementById("InputMessage").innerHTML = error;

        }
        console.log(xmlHttp.responseText);
    };
    xmlHttp.send(null);
}

function tempDown() {
    clearCache();
    var xmlHttp = new XMLHttpRequest();
    var url = "/temp" + "?ops=1";

    // document.getElementById('whatis').scrollIntoView();
    // loading();
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var responseText = xmlHttp.responseText;

        } else if (xmlHttp.readyState == 4) {
            var error = "Wrong Input";
            // document.getElementById("result").innerHTML = error;
            document.getElementById("InputMessage").innerHTML = error;

        }
        console.log(xmlHttp.responseText);
    };
    xmlHttp.send(null);
}

function HumDown() {
    var xmlHttp = new XMLHttpRequest();
    var url = "/temp" + "?ops=-2";

    // document.getElementById('whatis').scrollIntoView();
    // loading();
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var responseText = xmlHttp.responseText;

        } else if (xmlHttp.readyState == 4) {
            var error = "Wrong Input";
            // document.getElementById("result").innerHTML = error;
            document.getElementById("InputMessage").innerHTML = error;

        }
        console.log(xmlHttp.responseText);
    };
    xmlHttp.send(null);
}

function HumUp() {
    var xmlHttp = new XMLHttpRequest();
    var url = "/temp" + "?ops=2";

    // document.getElementById('whatis').scrollIntoView();
    // loading();
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var responseText = xmlHttp.responseText;

        } else if (xmlHttp.readyState == 4) {
            var error = "Wrong Input";
            // document.getElementById("result").innerHTML = error;
            document.getElementById("InputMessage").innerHTML = error;

        }
        console.log(xmlHttp.responseText);
    };
    xmlHttp.send(null);
}

function display3() {
    var xmlHttp = new XMLHttpRequest();
    var url = "/temp";

    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var responseText = xmlHttp.responseText;
            var obj = JSON.parse(responseText);
            // createDataTable(obj);
            // var data = "Res: " + "\n";
            // for (var o in obj['result']) {
            //     data += obj['result'][o] + "\n";
            // }
            var time = obj['res'];
            // document.getElementById("result").innerHTML = data;
            document.getElementById("time_elapsed").innerHTML = time;

        } else if (xmlHttp.readyState == 4) {
            var error = "Wrong Input";
            // document.getElementById("result").innerHTML = error;
            document.getElementById("time_elapsed").innerHTML = error;

        }
        console.log(xmlHttp.responseText);
    };
    xmlHttp.send(null);
}

// function test(){
//     display3();
//     setInterval("display3()", 1);
// }

function synchronous() {
            display3();
        }
function Polling(){
    synchronous();
    setInterval("synchronous()", 500);
}

function clearCache() {
    var table = document.getElementById("rounded-corner");
    var child1 = document.getElementById("tbhead");
    if (child1 != null) {
        var child2 = document.getElementById("tbmain");
        table.removeChild(child1);
        table.removeChild(child2);
        document.getElementById("time_elapsed").innerHTML = "";
    }
}