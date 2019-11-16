<?php
    $name=$_POST['name'];
    $visitor_email=$_POST['email'];
    $message=$_POST['message'];

    $email_form='https://venus.cs.qc.cuny.edu/~mota7089/cs355/index.html';
    $email_subject='New submission';
    $email_body="User Name: $name\n".
                "User Email: $visitor_email.\n".
                "User Message: $message.\n";

    $to= "tmonsur000@gmail.com";
    $headers="From: $email_from\r\n";
    $headers="Reply-To: $visitor_email\r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("location: contact.html");

?>