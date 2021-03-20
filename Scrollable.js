function valRelativeToScroll(startpoint, endpoint, startval, endval, object, property) {
    
    // To calculate the percentage divide the difference between the start 
    // and end point by the current scroll position minus the start position

    // Difference = endpoint - startpoint
    let difference = endpoint - startpoint;
    console.log("Difference: " + difference);

    let percentage = (window.pageYOffset - startpoint) / difference;
    console.log("Percentage: " + percentage);

    let valDifference = endval - startval;
    console.log("Val Difference: " + valDifference);

    let newval = (valDifference * percentage) + startval;

    return newval;
}