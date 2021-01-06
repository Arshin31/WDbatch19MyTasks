var getwordurl='https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7'
var gphyurl= function(param){
    return `https://api.giphy.com/v1/gifs/search?api_key=uNHviXiW3x0pISxmw7QpeZiioByO2JUN&q=${param}&limit=1&offset=0&rating=g&lang=en`;
};
fetch(getwordurl).then((wordresp)=>{
    return wordresp.json();
})
.then((data)=>{
    return fetch(gphyurl(data.word));
})
.then((giphy)=>{
    return giphy.json();
})
.then((giphyresp)=>{
    console.log(giphyresp.data[0].embed_url)
    let content = document.getElementById('content');
    if(giphyresp.data.length!==0){
        let img= document.createElement('iframe');
        img.src=giphyresp.data[0].embed_url;
        img.width=700;
        img.height=700;
        content.appendChild(img);
        document.body.appendChild(content);
    }
    else{
        content.style='color:red';
        content.innerText='Gif not found';
    }
})
.catch((error)=>{
    console.log(error);
})