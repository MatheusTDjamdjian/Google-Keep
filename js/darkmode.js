// Dark mode

function resizeNoteHeight(item){
    grid = document.getElementsByClassName("container-notes")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.notes-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllNotesHeight(){
    allItems = document.getElementsByClassName("notes");
    for(x=0;x<allItems.length;x++){
        resizeNoteHeight(allItems[x]);
    }
}

document.querySelector('.container-symbols-header').addEventListener('click', function(e){
    e.preventDefault();
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }
});

window.addEventListener("resize", resizeAllNotesHeight);
resizeAllNotesHeight();