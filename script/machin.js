document.getElementById("interview-btn").addEventListener('click',function(){
let z = 0;
let s = document.getElementById('status')
const f = document.getElementById('interview-count')
s.innerText = "Interview"
 z+=1;
 f.innerText =z
})
document.getElementById("rejected-btn").addEventListener('click',function(){

let s = document.getElementById('status')
s.innerText = "Rejected"
})