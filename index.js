
let main_div = document.getElementById("images");

let api_key = `26032279-0622dd6cc2e8edb0e260fdd2e`;




async function imgur1() {
  

  try {


   
      let response = await fetch(`https://pixabay.com/api/?key=26032279-0622dd6cc2e8edb0e260fdd2e&q=yellow+flowers&image_type=photo`)
      let data = await response.json();
      console.log(data.hits);
      var ndata=data.hits
      appenddata(ndata);
      
  } catch (err) {
       console.log(err);

  }
}

const appenddata = (ndata)=>{
  main_div.innerHTML="";
  ndata.forEach(function (img) {
    let  div=document.createElement("div");
    div.id="search_div";
      let p = document.createElement("h5");
      p.innerText = img.tags;
      let img4=document.createElement("img");
      img4.id="img1321";
      img4.src=img.largeImageURL;
      div.append(img4,p);
      main_div.append(div);
  });

}
async function Searchimg() {
  
  try {
    
    var input = document.getElementById("imgur-input1");
   
      let response = await fetch(`https://pixabay.com/api/videos/?key=26032279-0622dd6cc2e8edb0e260fdd2e&q=${input.value}`)
      let data = await response.json();
      console.log(data);
      var ndata=data.hits;
      appendsearch(ndata)
    
  } catch (err) {
       console.log(err);

  }
}

const appendsearch =(ndata)=>{
main_div.innerHTML="";
ndata.forEach(function (img) {
  let  div=document.createElement("div");
  div.id="search_div";
    let p = document.createElement("h5");
    p.innerText = img.tags;
    let img4=document.createElement("img");
    img4.id="img1321";
    img4.src=img.userImageURL;
    div.append(img4,p);
    main_div.append(div);
});

};

