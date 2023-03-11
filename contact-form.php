<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['Message'];

$email_from = 'internationalfood@exotica-bv.nl';

$email_subject = 'New form Submission';

$email_body = "User name: $name. \n"
                "User email: $visitor_email. \n".;  
                "User Message: $message. \n".; 


$to = 'internationalfood@exotica-bv.nl';     
$headers = "From $email_from \r\n";  
$headers = "Reply to: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location: index.html");     

?>