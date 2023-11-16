function initCanvas(c){
    const eContainer = select("#sketch-container")
    c.parent(eContainer)
}

function makeSlider(labelText,sliderId,minVal,maxVal,jumpVal=0.1){
    const myDiv = createDiv()
    const mySlider = createSlider(minVal, maxVal, (maxVal+minVal)/2, jumpVal)
    const myLabel = createElement("label", labelText)

    mySlider.id(sliderId)
    myLabel.attribute("for", sliderId)
    myLabel.parent(myDiv)
    mySlider.parent(myDiv)
    myDiv.parent(select("#control-container"))

    return mySlider
}
