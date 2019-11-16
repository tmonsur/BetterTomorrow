var searchButton = document.getElementById("searchbar");

searchButton.addEventListener("submit", function(e) {
    search();
});

/*api key*/
var baseurl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCCpqLVmhu9lUHWm6H01-HIZTktj1FB8c4&cx=016472378314453675630:xvk8n4zuhme&q=";


function search() {


    var x = document.getElementsByClassName("output");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
    };
    
    var y = document.getElementsByClassName("limit");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.display = 'block';
    }




/*implement search*/
    var limit="under"+document.getElementById("limit1").value;
    var searchTerm = document.getElementById("googlesearch").value;
    var url = baseurl + searchTerm + limit;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    console.log("searching...");
    request.onload = function() {
        console.log("loaded");
        /*parse search*/
        var data = JSON.parse(this.response);
        if (request.status == 200) {
            var results = document.getElementsByClassName("output")[0];
            for (var i = 0; i < data["items"].length; i++) {
                var container = document.createElement("div");
                container.className = "result";
                var checkb = document.createElement("input");
                checkb.type = "checkbox";
                var link = document.createElement("a");
                link.href = data["items"][i].formattedUrl;
                link.innerHTML = data["items"][i].title;
                var url = document.createElement("p");
                url.className = "url";
                url.innerHTML = data["items"][i].formattedUrl;
                var desc = document.createElement("p");
                desc.className = "desc";
                desc.innerHTML = data["items"][i].snippet;
                var br = document.createElement("br");
                container.appendChild(checkb);
                container.appendChild(link);
                container.appendChild(url);
                container.appendChild(desc);
                container.appendChild(br);
                results.appendChild(container);
            }
        }
    }
    request.send();
}