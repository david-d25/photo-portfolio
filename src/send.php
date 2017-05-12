<?php
  $message = '
  <h1 align="center">Новый заказ</h1>
  <p><strong>Имя:</strong> ' .  $_POST['name'] . '</p>
  <p><strong>Мыло:</strong> ' .  $_POST['email'] . '</p>
  <p><strong>Детали:</strong><br>' .  $_POST['long-desc'] . '</p>
  ';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf-8\r\n";
  mail('david-d25@ya.ru', 'Сообщение с сайта веб-портфолио', $message, $headers);
  header("Location: success.html");
?>
<!DOCTYPE html>
<html>
<head lang="en">
  <title>Перенаправление...</title>
  <link rel="stylesheet" type="text/css" href="css/main.css">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <div id="formsended">
    Перенаправление...
    <br>
    Redirecting...
  </div>
</body>
</html>