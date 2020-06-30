const disableCopy = (e) => {
    return false 
}

const reEnable = () => {
   return true
}

const onSelectStart = () => {
    if (window.sidebar){
        document.onmousedown=disableCopy
        document.onclick=reEnable
    }
}

document.onselectstart = onSelectStart()
// oncontextmenu
// onkeydown