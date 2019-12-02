// For simple animations with 2 keys
text.animator("Animador 2").selector("Seletor de intervalo 1").start
if (numKeys == 2){
    duration = thisLayer.outPoint //  End time of layer
    t1 = duration-2.0; // New time to first key
    t2 = duration-1.0; // New time to second key
    v1 = key(1).value; // Value of first key
    v2 = key(2).value; // Value of second key
    linear(time,t1,t2,v1,v2); // Apply changes
  }else{
    value
  }
/* For animations with 4 keys 
Where first 2 are manually defined 
and the last 2 are automatically defined by the end time of layer
*/
effect("Desfoque de canal")(1)
if (numKeys == 4){
    t1 = key(1).time; // Hold time of first In key
    t2 = key(2).time; // Hold time of last In key
    duration = thisLayer.outPoint //  End time of layer
    t3 = duration-2; // New time for first Out key animation
    t4 = duration; // New time for last Out key animation
    if (time < t3){ // time = Current time of video
        v1 = key(1).value; // Value of first In key
        v2 = key(2).value; // Value of last In key
        linear(time,t1,t2,v1,v2); // Apply changes
    } else {
        v3 = key(3).value; // Value of first Out key
        v4 = key(4).value; // Value of last Out key
        linear(time,t3,t4,v3,v4); // Apply changes
    }
} else {
    value
}

// For animations with 6 keys
effect("Animation")(1)
if (numKeys == 6){
    let real_duration_of_out_animation = 2 // In seconds
    let layer = thisLayer; // Layer
    let first_key_of_in = 1; // First key of IN animation
    let last_key_of_in = 3; // Last key of IN animation
    let first_key_of_out = 4; // First key of OUT animation
    let last_key_of_out = 6; // Last key of OUT animation
    let sIn = key(last_key_of_in).time - key(first_key_of_in).time; // Time between first and last key of In 
    let sOut = key(first_key_of_out).time - key(last_key_of_out).time; // Time between first and last key of Out 
    let eIn = layer.startPoint; // Start point of layer
    let eOut = layer.outPoint - real_duration_of_out_animation; // End point of layer
    let start = layer.startTime + sIn; // Start time of animation
    if (time < start ){ // time = Current time of apresentation
        linear(time,eIn-sIn,eIn,key(first_key_of_in).value,key(last_key_of_in).value)
    }    
    else {
        linear(time,eOut,eOut+sOut,key(first_key_of_out).value,key(last_key_of_out).value);
    }
} else {
    value
}