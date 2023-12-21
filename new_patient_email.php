<?php 
$name = $_POST['name'];
$address = $_POST['address']; 
$city = $_POST['city'];
$zip = $_POST['zip'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comments = $_POST['comments'];
  
$email_from = 'noreply@msldental.com';
$email_subject = "New Patient Info Request from Website";
$email_body = "There is a new patient information request.\n\n Name: $name\n Address: $address\n City: $city\n Zip: $zip\n Phone: $phone\n Email: $email\n Comments: $comments\n\n (As this email is auto generated, please do not respond to it).";

$to = "mleonard@msldental.com, sfrederick@msldental.com, mcornish@msldental.com"; 
$headers = "From: $email_from \r\n"; 
$headers .= "Reply-To: noreply@msldental.com"; 
mail($to,$email_subject,$email_body,$headers);

?> 

<div style="margin: 0 auto; width: 400px; height: 300px; padding: 20px; background: #ebebeb; border: 1px solid #cccccc;">Thank you for requesting a new patient information kit.  We will put it in the mail right away.  <a href="http://www.msldental.com">Return to homepage</a>