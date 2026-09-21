let stayTab = 'all';
let actvie =["btn-primary"]
let INactvie =['bg-transparent','text-slate-700','border-state-70']
let tabs = ['all','interview','rejected'];

const allContainer = document.getElementById('all-container');
const interviewcontainer = document.getElementById('interview-container');
const rejectedcontainer = document.getElementById("rejected-container")

const stateTotal = document.getElementById('state-total')
    const stateinterview = document.getElementById('state-interview')
    const staterejected = document.getElementById('state-rejected')

    const empty = document.getElementById("empty-job");

function showClick(tab){
    
    
    for(let t of tabs){
        const tabName = document.getElementById('tab-' + t)
        stayTab
        if(t === tab){
            tabName.classList.add(...actvie)
            tabName.classList.remove(...INactvie);
       
        }
        else{
            tabName.classList.remove(...actvie)
            tabName.classList.add(...INactvie)
        }
     
    }
    const pages = [allContainer,interviewcontainer,rejectedcontainer];
    for(let section of pages){
        section.classList.add("hidden")
    }
    empty.classList.add("hidden")

    if(tab === 'all'){
        allContainer.classList.remove('hidden')
         if(empty.classList.length <1){
            empty.classList.remove("hidden")
        }
    }
    else if(tab === 'interview'){
        interviewcontainer.classList.remove('hidden')

    }
    else{
        rejectedcontainer.classList.remove('hidden')
    }

    
    

}

showClick(stayTab);

document.getElementById("job-container").addEventListener('click',function(event){
    const clickEl = event.target;
    // console.log(clickEl)
    const card = clickEl.closest(".job-card")
    const status = card.querySelector(".job-status")
    const parent = card.parentNode;
    console.log(card)
    if(clickEl.classList.contains("interview")){
        status.innerText = "interviewed"
      interviewcontainer.appendChild(card)
      updateState()
        
    }
     if(clickEl.classList.contains("rejected")){
        status.innerText = "rejected"
        rejectedcontainer.appendChild(card)
        updateState()
        
    }
    if(clickEl.classList.contains("delete")){
        parent.removeChild(card)
        updateState()
    }

})

function updateState(){
    stateTotal.innerText = allContainer.children.length;
    stateinterview.innerText = interviewcontainer.children.length;
    staterejected.innerText = rejectedcontainer.children.length;

}
updateState()
