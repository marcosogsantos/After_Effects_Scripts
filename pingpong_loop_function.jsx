// By Dan Ebberts - Apr 11, 2012
if (numKeys >1 && time > key(numKeys).time){
    t1 = key(1).time;
    t2 = key(numKeys).time;
    span = t2 - t1;
    delta = time - t2;
    seg = Math.floor(delta/span);
    t = delta%span;
    valueAtTime((seg%2) ? (t1 + t) : (t2 - t));
  }else
    value