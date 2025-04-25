<?php

include("includes/header.php");
// Process form submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize input
    $fname = htmlspecialchars($_POST['f-name'] ?? '');
    $lname = htmlspecialchars($_POST['l-name'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone'] ?? '');
    $school = htmlspecialchars($_POST['school'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    require 'phpMailer/PHPMailer.php';
    require 'phpMailer/SMTP.php';
    require 'phpMailer/Exception.php';

    $mail = new PHPMailer\PHPMailer\PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Username = '39d5a114981b3a'; // Your Mailtrap username
        $mail->Password = '0e7896b201f6e1'; // Your Mailtrap password
        $mail->Port = 2525;

        $mail->setFrom($email, $fname . ' ' . $lname);
        $mail->addAddress('hello@alumn-us.com', 'Alumn-Us');
        $mail->addReplyTo($email, $fname . ' ' . $lname);

        $mail->isHTML(true);
        $mail->Subject = 'New Plan Request from ' . $fname . ' ' . $lname;
        $mail->Body = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            color: #2c3e50;
            border-bottom: 2px solid #eaeaea;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .details {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .detail-item {
            margin-bottom: 10px;
        }
        .label {
            font-weight: bold;
            color: #2c3e50;
            display: inline-block;
            width: 120px;
        }
        .message-content {
            padding: 15px;
            background-color: #f0f8ff;
            border-left: 4px solid #3498db;
            border-radius: 3px;
        }
        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #7f8c8d;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class='email-container'>
        <div class='header'>
            <h2>New Plan Request Submission</h2>
        </div>
        
        <div class='details'>
            <div class='detail-item'>
                <span class='label'>First Name:</span> $fname
            </div>
            <div class='detail-item'>
                <span class='label'>Last Name:</span> $lname
            </div>
            <div class='detail-item'>
                <span class='label'>Email:</span> <a href='mailto:$email'>$email</a>
            </div>
            <div class='detail-item'>
                <span class='label'>Phone:</span> $phone
            </div>
            <div class='detail-item'>
                <span class='label'>School Name:</span> $school
            </div>
        </div>
        
        <div class='detail-item'>
            <span class='label'>Message:</span>
        </div>
        <div class='message-content'>
            <p>$message</p>
        </div>
        
        <div class='footer'>
            <p>This is an automated message. Please do not reply directly to this email.</p>
            <p>&copy; " . date('Y') . " Alumn us. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
";

        $mail->send();
        $success_message = 'Your message has been sent successfully!';
    } catch (Exception $e) {
        $error_message = "Message could not be sent. Error: {$mail->ErrorInfo}";
    }
}
?>

  <main class="main">

    <!-- Page Title -->
    <div class="page-title accent-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Get Plan</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="current">Get Plan</li>
          </ol>
        </nav>
      </div>
    </div><!-- End Page Title -->

    <!-- Contact Section -->
    <section id="contact" class="contact section">

      <!-- <div class="mb-5">
        <iframe style="width: 100%; height: 400px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen=""></iframe>
      </div>End Google Maps -->
      <?php if(isset($success_message)): ?>
    <div class="alert alert-success"><?php echo $success_message; ?></div>
<?php endif; ?>

<?php if(isset($error_message)): ?>
    <div class="alert alert-danger"><?php echo $error_message; ?></div>
<?php endif; ?>

      <div class="container mt-5" data-aos="fade">

        <div class="row gy-5 gx-lg-5">

          <div class="col-lg-4">

            <div class="info">
              <h3>Register Free</h3>
              <p>Sign up for your free Alumnly site today.</p>

              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>India</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>hello@alumn-us.com</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+91 99209 33543</p>
                </div>
              </div><!-- End Info Item -->

            </div>

          </div>

          <div class="col-lg-8">
            <form action="" method="post" role="form" class="php-email-form">
              <div class="row">
                
                <div class="col-md-6 form-group">
                  <input type="text" name="f-name" class="form-control" id="f-name" placeholder="Enter First Name">
                </div>
                <div class="col-md-6 form-group">
                  <input type="text" name="l-name" class="form-control" id="l-name" placeholder="Enter Last Name">
                </div>
                
                <div class="col-md-6 form-group mt-3">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Enter Your Email" required="">
                </div>
                <div class="col-md-6 form-group mt-3">
                  <input type="text" class="form-control" name="phone" id="phone" placeholder="Enter Your Phone Number">
                </div>

              </div>

              <div class="form-group mt-3">
                <input type="text" class="form-control" name="school" id="school" placeholder="Enter Your School Name">
              </div>

              <div class="row mt-3">
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea class="form-control" name="message" placeholder="Feel free to send us a message if you're interested!" style="height: 200px;"></textarea>
                  </div>
                </div>

                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>

                <div class="text-center"><button type="submit">Submit</button></div>
              </div>
            </form>
          </div><!-- End Contact Form -->

        </div>

      </div>

    </section><!-- /Contact Section -->

  </main>

  <?php
include('includes/footer.php');
?>