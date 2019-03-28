var s = Snap("#snappy");
Snap.load("mozambique.svg", 
          onSVGLoaded);

function onSVGLoaded(data) {
  geom = data.select("#Layer_1");
  s.append( data );
  geom.attr({ stroke: "cornflowerblue",
			fill: "khaki"});
}