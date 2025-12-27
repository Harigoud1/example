function selectors() {
    
    const title = document.getElementById("title");
    if(title) title.style.color = "blue";
    
    const paras = document.getElementsByClassName("text");
    if(paras.length > 0) paras[0].style.color = "red";

    const headings = document.getElementsByTagName("h1");
    if(headings.length > 0) headings[0].style.fontSize = "30px";
    
    const firstPara = document.querySelector(".text");
    if(firstPara) firstPara.style.fontWeight = "bold";

    const allParas = document.querySelectorAll(".text");
    if(allParas.length > 1) allParas[1].style.color = "green";
}
