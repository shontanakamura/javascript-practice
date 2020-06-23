'use strict';

{
  function update(){
    // document.querySelector('h1').textContent = 'changed!';
    // document.querySelector('#target').textContent = "changed!";
    // document.getElementById('target').textContent = "changed!";
    document.getElementById('target').textContent = "changed!";
    document.querySelectorAll('p').forEach((p, index) =>{

      p.textContent = `${index}番目のpです！`;
    });
    
  }

  setTimeout(update, 1000);
}