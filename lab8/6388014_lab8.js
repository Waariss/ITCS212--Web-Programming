var request = new XMLHttpRequest();
request.open('GET', 'https://api.spoonacular.com/recipes/complexSearch', true);
function getConferenceResponses() {
    let query = document.getElementById("search").value;
    console.log(query);
    var API_Key = "4979c4496fcc410c88d8488fbf3ddf15";
    let rooturl ="https://api.spoonacular.com/recipes/complexSearch?apiKey=" +API_Key +"&query=" +query; //Request URL
    fetch(rooturl)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        var list = "<ul>";
        for (const i of data.results) {
        list += "<li>" + "<h3>" + i.title + "</h3>" + '<img src="' + i.image + '"width="600px" height="400px" style="margin:2px 2px">' + "</li>";
        }
        list += "</ul>";
        document.getElementById("output").innerHTML = list;
    })
    .catch((err) => console.log(err));
}
request.send();
