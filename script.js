var res1 = document.querySelectorAll('div>p>a');

for(var i = 0;i<res1.length;i++){
    res1[i].onclick = function(){
        var num = Math.floor(Math.random()*3 + 1);
        window.open(`pg${num}/pg${num}.html`,'_self')
    }
}
