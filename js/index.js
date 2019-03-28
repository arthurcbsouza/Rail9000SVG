var s = Snap("#snappy");
Snap.load("prototypes/mozambique.svg", 
          onSVGLoaded);

function onSVGLoaded(data) {
  geom = data.select("#Layer_1");
  s.append( data );
  geom.attr({ stroke: "cornflowerblue",
			fill: "khaki"});
}