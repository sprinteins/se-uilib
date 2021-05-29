main();

function main(){
    initMenuToggler()
}


// #region Menu

let menuOpen = false;
function initMenuToggler(){
    
    const toggler = TogglerButton();
    toggler.addEventListener('click',()=>{
        menuOpen = !menuOpen;
        syncOpenClass();
    })
}

function TogglerButton(){
    return document.querySelector('.sidebar-toggler');
}

function Sidebar(){
    return document.querySelector('dpdhl-sidebar');
}

function syncOpenClass(){
    const attrOpen = 'open'
    const sidebar = Sidebar()
    if(menuOpen){
        sidebar.setAttribute(attrOpen,'');
        return;
    }

    sidebar.removeAttribute(attrOpen)
}

// #endregion Menu