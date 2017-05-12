<?php
switch ($_GET['request']) {
  case 'retouch':
    $pageName = "ретушь";
    break;
  case 'photomontage':
    $pageName = "фотомонтаж";
    break;
  case 'low-poly':
    $pageName = "Low-poly";
    break;
  default:
    header("Location: ./");
    break;
}
?>
<!DOCTYPE html>
<html>
<head lang="ru">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="css/portfolio.css">
  <title>Портфолио - <?php echo $pageName?></title>
</head>
<body>
  <div id="portfolio">
    <div id="preloader"></div>
    <style>
      #preloader {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        overflow: visible;
        background: #333 url('img/loading.gif') no-repeat center center;
      }
    </style>
    <div class="portfolio-bg"></div>
    <p class="header-text">примеры работ</p>
    <p class="work-type"><?php echo $pageName?></p>
    <div id="works">
      Кажется, тут пусто...<br>Попробуйте зайти позже
    </div>
  </div>
</body>
<script>
  var request = "<?php echo $_GET['request']?>";
</script>
<script id="work-template" type="text/x-handlebars-template">
  <div class="work">
    <div class="work-img-container">
      <img src="{{image}}" class="work-img">
      <p class="work-price">{{price}}</p>
    </div>
    <p class="work-name">{{name}}</p>
    <p class="work-desc">{{description}}</p>
  </div>
</script>
<script src="js/portfolio.js"></script>
</html> 