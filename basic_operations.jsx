
// SAVE PROJECT
function save_project(nome){
    app.project.save(File(base_url + "/" + escape(nome) + ".aep"));
}

// CONSOLE PRINT
function print(string){
    $.write(String(string) + "\n")
    }

// GET COMP OBJECT BY NAME
function getCompByName(name){
    var comp;    
    for (var i = 1; i <= app.project.numItems; i ++) {
        if ((app.project.item(i) instanceof CompItem) && (app.project.item(i).name === name)) {
            comp = app.project.item(i);
            break;
        }
    }
    return comp
}

// GET LAYER OBJECT IN A COMP
function getLayerByName(comp_object,layer_name){
    for (i = 1;i<=comp_object.numLayers;i++){
        var layer = comp_object.layer(i)
        if (layer.name === layer_name){
            return layer
        }
    }
}

// CHANGE DURATION OF ALL LAYERS IN A COMP
function changeDurationOfAllLayersComp(comp_object,new_duration){
    for (i = 1;i<=comp_object.numLayers;i++){
        var layer = comp_object.layer(i)
        layer.outPoint = new_duration
    }
}

// IMPORT A PROJECT
function importProject(path_to_file){
    project = app.project.importFile(new ImportOptions(new File(path_to_file)))
    return project
}

// ADD OBJECT TO A COMP
function addCompAsLayer(object,to_comp){
    to_comp.layers.add(object)
}