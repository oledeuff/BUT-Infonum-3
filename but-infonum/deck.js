const slides=[...document.querySelectorAll('.slide')];let i=0;
function show(n){i=Math.max(0,Math.min(slides.length-1,n));slides.forEach((s,k)=>s.classList.toggle('active',k===i));document.querySelector('#counter').textContent=`${i+1} / ${slides.length}`;document.querySelector('.progress').style.width=`${((i+1)/slides.length)*100}%`;location.hash=`s${i+1}`}
function next(){show(i+1)} function prev(){show(i-1)}
document.addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();next()}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();prev()}if(e.key==='Home')show(0);if(e.key==='End')show(slides.length-1)});
document.querySelector('#next').onclick=next;document.querySelector('#prev').onclick=prev;
let m=location.hash.match(/s(\d+)/);show(m?parseInt(m[1])-1:0);