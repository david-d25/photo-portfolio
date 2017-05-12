var data = [
  {
    name: "Ретушь, цветокоррекция",
    image: "img/portfolio-preview/retouch.png",
    request: "retouch"
  },
  {
    name: "Фотомонтаж",
    image: "img/portfolio-preview/photomontage.png",
    request: "photomontage"
  },
  {
    name: "Low-Poly портрет",
    image: "img/portfolio-preview/low-poly.png",
    request: "low-poly"
  }
]

for (var i = 0; i < data.length; i++) {
  var source = $("#work-template").html();
  var template = Handlebars.compile(source);
  var work = template(data[i]);
  $("#works").append(work);
}