var checkDone = false;
$("form").submit(function () {
  if (!checkDone)
  {
    event.preventDefault();
    if (validateName())
      return;
    if (isEmpty($("input[name='email']").val()))
      return $("input[name='email']").focus();
    if (!validateEmail(true))
      return;
    checkDone = true;
    $("form").submit();
  }
});

$("input[name='email']").on('input', function() {
  validateEmail(false);
});

function validateEmail(redOnWrong) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var result = re.test($("input[name='email']").val());

  function setStatus(status) {
    $('input[name="email"]').removeClass('correct');
    $('input[name="email"]').removeClass('wrong');
    if (status == 'correct' || status == 'wrong')
      $('input[name="email"]').addClass(status);
  }

  if (result)
    setStatus('correct')
  else if (!result && redOnWrong)
    setStatus('wrong')
  else
    setStatus('none');
  return result;
}

$("input[name='name']").on('change', function() {
  validateName();
});

function validateName()
{
  var result = isEmpty($("input[name='name']").val());
  if (!result) {
    $("input[name='name']").removeClass('correct');
    $("input[name='name']").addClass('correct');
  }
  else {
    $("input[name='name']").removeClass('correct');
    $("input[name='name']").focus();
  }
  return result;
}
function isEmpty(string)
{
  return string.split(' ').join('') == '';
}