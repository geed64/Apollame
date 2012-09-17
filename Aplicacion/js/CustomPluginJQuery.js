jQuery.fn.cssNumber = function(prop){
    var v = parseInt(this.css(prop),10);
    return isNaN(v) ? 0 : v;
};

jQuery.cssObjectsNumbers = function(objectsNames, properties){
	if(!($.isArray(objectsNames) && $.isArray(properties)))
		throw "Debe enviarse dos arreglos a la funcion";
		
	var objectColector = {};
	$.each(objectsNames,function(indexObjectNames,vObjectNames){
		objectColector[vObjectNames] = {};
		$.each(properties,function(indexProperties,vProperties){
			objectColector[vObjectNames][vProperties] = $("#" + vObjectNames).cssNumber(vProperties);
		});
	});
	
    return objectColector;
};
