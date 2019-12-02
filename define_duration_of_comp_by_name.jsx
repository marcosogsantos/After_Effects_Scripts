function define_duration_by_comp_name(){
    if (thisComp.name.split('_t')[1] === undefined){
        duration = thisLayer.outPoint
    } else {
        duration = Number(thisComp.name.split('_t')[1].split('.')[0])
    }
    return duration
}