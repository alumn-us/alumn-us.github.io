<?php
include("includes/header.php");

// Process form submission
if(isset($_POST['send'])) {
    // Sanitize input
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Load PHPMailer files
    require 'phpMailer/PHPMailer.php';
    require 'phpMailer/SMTP.php';
    require 'phpMailer/Exception.php';

    // Create PHPMailer instance
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Username = '39d5a114981b3a'; // Your Mailtrap username
        $mail->Password = '0e7896b201f6e1'; // Your Mailtrap password
        $mail->Port = 2525;
        
        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('hello@alumn-us.com', 'Alumn-Us');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    line-height: 1.6;
                    color: #333333;
                    margin: 0;
                    padding: 0;
                }
                .email-container {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }
                .email-header {
                    color: #2c3e50;
                    border-bottom: 1px solid #eeeeee;
                    padding-bottom: 15px;
                    margin-bottom: 20px;
                }
                .email-header h2 {
                    margin: 0;
                    font-size: 22px;
                }
                .detail-row {
                    margin-bottom: 12px;
                    padding-bottom: 12px;
                    border-bottom: 1px dashed #f0f0f0;
                }
                .detail-label {
                    font-weight: 600;
                    color: #555555;
                    display: inline-block;
                    width: 80px;
                }
                .message-container {
                    background-color: #f8f9fa;
                    padding: 15px;
                    border-radius: 5px;
                    margin-top: 15px;
                    border-left: 3px solid #3498db;
                }
                .email-footer {
                    margin-top: 25px;
                    padding-top: 15px;
                    font-size: 12px;
                    color: #777777;
                    text-align: center;
                    border-top: 1px solid #eeeeee;
                }
            </style>
        </head>
        <body>
            <div class='email-container'>
                <div class='email-header'>
                    <h2>New Contact Form Submission</h2>
                </div>
                
                <div class='detail-row'>
                    <span class='detail-label'>Name:</span> $name
                </div>
                <div class='detail-row'>
                    <span class='detail-label'>Email:</span> <a href='mailto:$email'>$email</a>
                </div>
                <div class='detail-row'>
                    <span class='detail-label'>Subject:</span> $subject
                </div>
                
                <div class='message-container'>
                    <p><strong>Message:</strong></p>
                    <p>$message</p>
                </div>
                
                <div class='email-footer'>
                    <p>This message was sent via the contact form on " . date('F j, Y') . "</p>
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
        <h1 class="mb-2 mb-lg-0">Contact</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="current">Contact</li>
          </ol>
        </nav>
      </div>
    </div><!-- End Page Title -->

    <!-- Contact Section -->
    <section id="contact" class="contact section">

      <div class="mb-5">
        <iframe style="width: 100%; height: 400px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen=""></iframe>
      </div><!-- End Google Maps -->

      <div class="container" data-aos="fade">

        <div class="row gy-5 gx-lg-5">

          <div class="col-lg-4">

            <div class="info">
              <h3>Book Demo</h3>
              <p>Reasons, Relating to You & Your Alumni for Whom You Took Responsibility or Made Promises Years Back</p>

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
            <form action="" method="post" class="contact-form php-email-form">
                <?php if(isset($success_message)): ?>
                    <div class="alert alert-success"><?php echo $success_message; ?></div>
                <?php endif; ?>
                
                <?php if(isset($error_message)): ?>
                    <div class="alert alert-danger"><?php echo $error_message; ?></div>
                <?php endif; ?>

                <div class="row">
                    <div class="col-md-6 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                    </div>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
                </div>
                <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="text-center mt-3">
                    <button type="submit" name="send" class="btn btn-primary">Send Message</button>
                </div>
            </form>
          </div>

      </div>

    </section><!-- /Contact Section -->

  </main>

  <?php
include('includes/footer.php');
?>