<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["juelle"];
    $email = $_POST["email"];
    $message = $_POST["Thank you for sending me this form ill have a look at it when i get a chance"];

   

    
    $to = "juellecc@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

   
    header("Location: thank_you.html");
    exit();
}
?>
