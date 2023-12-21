<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comments = $_POST['comments'];
$mobile = $_POST['mobile'];
  
$email_from = 'noreply@msldental.com';
$email_subject = "New Contact from Website";
$email_body = "There is a new contact us message from the site.\n\n Name: $name\n Email: $email\n Phone: $phone\n Comments: $comments\n\n (As this email is auto generated, please do not respond to it).";

$to = "mleonard@msldental.com, sfrederick@msldental.com, mcornish@msldental.com";  
$headers = "From: $email_from \r\n"; 
$headers .= "Reply-To: noreply@msldental.com"; 
if($mobile == "")
{ 
	// mail($to,$email_subject,$email_body,$headers);
}

?> 

<!-- Bootstrap core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">

<div class="container" style="text-align: center; padding-top: 60px;">

<img src="img/msl_logo.png" alt="msl_logo" style="width: 40%;" />
<div style=" font-size: 20px; padding-top: 20px;">
	<p>Thank you for contacting us.  We will reply as soon as we are able.</p><br />
	<p><a href="http://www.msldental.com" class="btn btn-lg btn-success">Return to homepage</a></p>
</div>