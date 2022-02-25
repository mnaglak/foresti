//This is where you define the map start up options, here defined to center on Paris and to have a particular zoom.
	var mapOptions = {
		center: [-38, -71],
		zoom: 5,
		maxZoom : 20,
		minZoom: 4
	}

//This creates the map variable itself based on the options set above
	var map = new L.map('map', mapOptions);
  L.control.pan().addTo(map);

  var esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
		}).addTo(map);


var photos = L.geoJson(forestiPhotos, {
  onEachFeature: popUp,
});


function popUp(f,l) {
	var out = [];

	//adds spaces in between entries
	if (f.properties) {
		out.push("Site Name: " + f.properties.Name);
    out.push("Notes: "+ f.properties.NotesNumber);
//    out.push('<img src="https://i.postimg.cc/xC0sh031/60.png"> </img>');
    out.push("<a href='"+ f.properties.PostLink + "' target='_blank'><img src='" + f.properties.LocalLink + "' border='0' alt='60' width='100%'/></a>");
		l.bindPopup(out.join("<br />"));
	}
}

			var cluster_places= new L.MarkerClusterGroup({showCoverageOnHover: false});
				 cluster_places.addLayer(photos);
				 cluster_places.addTo(map);
