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
    const available =document.getElementById("available");

function showClick(tab){
    stayTab=tab
    
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
         if(allContainer.children.length <1){
            empty.classList.remove("hidden")

            
           
        }
    }
    else if(tab === 'interview'){
        interviewcontainer.classList.remove('hidden')
        if(interviewcontainer.children.length < 1){
            empty.classList.remove("hidden")
        }

    }
    else{
        rejectedcontainer.classList.remove('hidden')
        if(rejectedcontainer.children.length < 1){
            empty.classList.remove("hidden")
        }
    }

    updateState()
   

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
        status.innerText = "Interviewed";
        status.classList.add(
            "font-bold",
            "text-sm",
            "text-green-500");
        interviewcontainer.appendChild(card)
      updateState()
        
    }
     if(clickEl.classList.contains("rejected")){
        status.innerText = "Rejected";
        status.classList.add(
            "font-bold",
            "text-sm",
            "text-red-500");
        rejectedcontainer.appendChild(card)

        updateState()
        
    }
    if(clickEl.classList.contains("delete")){
        parent.removeChild(card)
        updateState()
    }

})

function updateState(){
    // stateTotal.innerText = allContainer.children.length;
    // stateinterview.innerText = interviewcontainer.children.length;
    // staterejected.innerText = rejectedcontainer.children.length;

    const counts = {
        all : allContainer.children.length,
        interview : interviewcontainer.children.length,
        rejected : rejectedcontainer.children.length,
    }

    const totaljobsAvailable = counts.all + counts.interview + counts.rejected;
  
    stateTotal.innerText =counts.all;
    stateinterview.innerText = counts.interview;
    staterejected.innerText =counts.rejected;

    // available.innerText = counts[stayTab];
    //  available.innerText = `${allContainer.children.length} of ${counts[stayTab]} jobs`;
     available.innerText = `${counts[stayTab]} of ${totaljobsAvailable} jobs`;


    // available.innerText = `${} of ${counts[stayTab]} jobs`

    if(counts[stayTab] <1){
        empty.classList.remove("hidden")
    }else{
        empty.classList.add("hidden")
    }
    

}
updateState()


document.getElementById("tab-all").addEventListener("click", function(){
    showClick("all");
});

document.getElementById("tab-interview").addEventListener("click", function(){
    showClick("interview");
});

document.getElementById("tab-rejected").addEventListener("click", function(){
    showClick("rejected");
});


showClick(stayTab);