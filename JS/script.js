

window.onload =  function ()  {
  const body = document.querySelector("body");
  const h1 = document.createElement("h1");
  const ul = document.querySelector("ul");
  
  

  h1.append ("Ice cream flavors!!");
  const flavors = ["vanila", "chocolate", "berry", "coffee"];
  flavors.forEach (function (flavor){
    const li = document.createElement("li");
    li.prepend (flavor);
    ul.prepend (li);
  });
  body.prepend(h1);
  body.prepend(li);


};