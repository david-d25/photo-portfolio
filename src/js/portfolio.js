//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/handlebars/handlebars.min.js

String.prototype.replaceAll = function(search, replace){
  return this.split(search).join(replace);
}

var data = {
  "retouch": [
    {
      image: "./img/portfolio/retouch/1.png",
      name: "Ретушь лица",
      description: "Ретушь, удаление дефектовв, контрастность",
      price: "50[rub]"
    },
    {
      image: "img/portfolio/retouch/2.png",
      name: "Ретушь мема",
      description: "Демонстрация ретуши и исправления дефектов. Для смешных мемов скидка 75%",
      price: "50[rub]"
    }
  ],
  "photomontage": [
    {
      image: "img/portfolio/photomontage/1.png",
      name: "Изменение этикетки на бутылке",
      description: "Sprite со вкусом помидора",
      price: "100[rub]"
    },
    {
      image: "img/portfolio/photomontage/2.png",
      name: "Эффекты с огнем",
      description: "Огненная птица в руках",
      price: "120[rub]"
    },
    {
      image: "img/portfolio/photomontage/3.png",
      name: "Изменение надписи",
      description: "Linux Mint",
      price: "120[rub]"
    }
  ],
  "low-poly": [
    {
      image: "img/portfolio/low-poly/1.png",
      name: "low-poly портрет",
      description: "Low-poly портрет, часть лица отрисована полигонами, гладкий градиентный фон",
      price: "100[rub]"
    },
    {
      image: "img/portfolio/low-poly/2.png",
      name: "low-poly портрет",
      description: "Low-poly портрет с low-poly фоном",
      price: "100[rub]"
    },
    {
      image: "img/portfolio/low-poly/3.png",
      name: "low-poly портрет",
      description: "Low-poly портрет, часть лица отрисована полигонами + ретушь, гладкий синий фон",
      price: "100[rub]"
    }
  ]
}

$(function ()
{
  $(window).load(function()
  {
    $("#preloader").fadeOut('slow', function() {
      $(this).remove();
    });
    fillWorks(request);
  });
});

function fillWorks(req)
{
  if (data[req] != undefined && data[req].length != 0)
  {
    $("#works").empty();
    for (var i = 0; i < data[req].length; i++) {
      var source = $("#work-template").html();
      var template = Handlebars.compile(source);
      var work = template(prepareData(data[req][i]));
      $("#works").append(work);
    }
  }
}

function prepareData(data)
{
  var prepared = data;
  if (data["price"] != undefined)
  {
    data["price"] = data["price"].replaceAll("[rub]", "₽");
  }
  return prepared;
}