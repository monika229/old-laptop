
//This method opens the connection and sends the request to server.


$(document).ready(function(){
    console.log("This is my index js file");

    // Initialize the news api parameters
    
    let apiKey = '0a1b6a79936f46bc90bb3836397a40df'
    
    // Grab the news container
    let newsAccordion = document.getElementById('newsAccordion');
    
    // Create a new XMLHttpRequest object 
    const xhr = new XMLHttpRequest();
    //xhr.open(method, URL, [async, user, password])
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=0a1b6a79936f46bc90bb3836397a40df`, true);
    
    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            drawTable(json);
            /*let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element, index) {
                // console.log(element, index)
                let news = `<div class="card">
                                <div class="card-header" id="heading${index}">
                                    <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="false" aria-controls="collapse${index}">
                                        ${index+1}: ${element["title"]}
                                    </button>
                                    </h2>
                                </div>
    
                                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                    <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                                </div>
                            </div>`;
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;*/
        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()



  });




  function drawTable(data){
    let newsAccordion = document.getElementById('newsAccordion');
    //let json = JSON.parse(data);
    let articles = data.articles;
    console.log(data);
    let newsHtml = "";
    articles.forEach(function(element, index) {
        // console.log(element, index)
        let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                aria-expanded="false" aria-controls="collapse${index}">
                                ${index+1}: ${element["title"]}
                            </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                        </div>
                    </div>`;
        newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  }

  document.querySelector("#myId").onclick = function(e) {
    console.log("hello");
    e.preventDefault();
    let searchfield = document.getElementById('searchfield').value;
    $.ajax({
      url: 'https://newsapi.org/v2/everything?q='+searchfield+'&from=2022-09-21&sortBy=popularity&apiKey=0a1b6a79936f46bc90bb3836397a40df',
      type: 'get',
      data: {key: 'value'},
    })
    .done(function(data) {
        drawTable(data);
           })
    .fail(function() {
      console.log("error");
    });
  }
  
