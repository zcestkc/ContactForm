<?php 
    error_reporting(E_ALL);
    ini_set('display_errors', 0);
    if(isset($_POST['submit'])){
        // if there is an attachment
        if(!empty($_FILES['attachment']['name'])) {
            // store variables
            $file_name = $_FILES['attachment']['name'];
            $temp_name = $_FILES['attachment']['tmp_name'];
            $file_type = $_FILES['attachment']['type'];
            // POST variables
            $first_name = test_input($_POST['fname']);
            $last_name = test_input($_POST['lname']);
            $email = test_input($_POST['email']);
            $phone = test_input($_POST['phone']);
            $address_one = test_input($_POST['address-one']);
            $address_two = test_input($_POST['address-two']);
            $town = test_input($_POST['town']);
            $county = test_input($_POST['county']);
            $postcode = test_input($_POST['postcode']);
            $country = test_input($_POST['country']);
            $body = test_input($_POST['message']);
            // get the extension of the file
            $base = basename($file_name);
            $extension = substr($base, strlen($base)-4, strlen($base));
            // only these file types will be allowed
            $allowed_extensions = array(".png", ".jpg", ".jpeg", ".docx", ".doc", ".pdf");
            // check that this file type is allowed
            if(in_array($extension, $allowed_extensions)) {
                // mail essentials
                $eol = PHP_EOL;
                $to = $email;
                $subject = "Form submission";
                $message = "Name: ".$first_name." ".$last_name.$eol;
                if ($phone) {$message.= "Phone number: ".$phone.$eol;}
                $address_array = array($address_one,$address_two,$town,$county,$postcode,$country);
                $message.= "Address: ".implode(", ",array_filter($address_array)).$eol;
                if ($body) {$message.= "Your Message: ".$body.$eol;}
                $message = wordwrap($message, 70, $eol);
                // files
                $file = $temp_name;
                $content = chunk_split(base64_encode(file_get_contents($file)));
                $uid = md5(uniqid(time()));
                // standard mail headers
                $header = "From: noreply@example.com".$eol;
                $header.= "MIME-Version: 1.0".$eol;
                // declaring we have multiple parts (plain text and attachment)
                $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"";
                // plain text part
                $emessage = "--".$uid.$eol;
                $emessage.= "Content-type:text/plain; charset=iso-8859-1".$eol;
                $emessage.= "Content-Transfer-Encoding: 8bit".$eol.$eol;
                $emessage.= $message.$eol; 
                // attachement part
                $emessage.= "--".$uid.$eol;
                $emessage.= "Content-Type: ".$file_type."; name=\"".$file_name."\"".$eol;
                $emessage.= "Content-Transfer-Encoding: base64".$eol;
                $emessage.= "Content-Disposition: attachment; filename=\"".$file_name."\"".$eol;
                $emessage.= $content.$eol;
                $emessage.= "--".$uid."--";
                // send email using mail()
                if(mail($to, $subject, $emessage, $header)){
                    echo '<p>Your mail has been sent!</p>';
                } else {
                    echo '<p>Something went wrong. Please try again!</p>';
                }
            } else {
                echo "<p>file type not allowed</p>";
            }
        } else {
            echo "<p>no file posted</p>";
        }
    } 
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>