$(document).ready(function(){
$('#name_id').click(function(){
alert ('you are changing');
});
$('#status_id').click(function(){
if ($('#status_id').attr('checked'))
{ $('.description').show();
}
else
{
$('.description').hide();
}
});
});
