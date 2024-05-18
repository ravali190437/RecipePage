function showContent() {
    let selectedOption = document.getElementById("floatingSelect").value;
    console.log(selectedOption);
    let p=document.getElementsByClassName("section");
    if(selectedOption=="All Three"){
        for(let i=0;i<p.length;i++)
            p[i].style.display='block';
    }
    else{
    for(let i=0;i<p.length;i++)
         p[i].style.display='none';
    let k=document.getElementById(selectedOption);
    console.log(k);
    if(k)
       k.style.display='block';
    }
}

function gotofunc() {
    const k = document.getElementById("input-txt").value;
    const ele=document.getElementById(k);
    console.log(ele);
    ele.scrollIntoView({behavior:'smooth'});
}


function selectfunc1(){
    document.getElementById("input-txt").value=document.getElementById("starters-sel").value;
}

function selectfunc2(){
    document.getElementById("input-txt").value=document.getElementById("maincourse-sel").value;
}

function selectfunc3(){
    document.getElementById("input-txt").value=document.getElementById("tiffins-sel").value;
}

