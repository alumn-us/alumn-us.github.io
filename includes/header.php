<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Alumn-us</title>
  <meta name="description" content="">
  <meta name="keywords" content="">

  <!-- Favicons -->
  <link href="assets/img/logos/Logo3.jpg" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">

</head>

<body class="index-page">

  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container position-relative d-flex align-items-center">

      <a href="/" class="logo d-flex align-items-center me-auto">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <img src="assets/img/logos/mainlogo.png" alt="logo">
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
        <?php
$current = basename($_SERVER['REQUEST_URI']);
?>

<li><a href="/" class="<?= $current == '' ? 'active' : '' ?>">Home</a></li>
<li><a href="team" class="<?= $current == 'team' ? 'active' : '' ?>">Team</a></li>

<li class="dropdown">
  <a href="javascript:void(0)" class="<?= $current == 'more-what-we-do' ? 'active' : '' ?>">
    <span>Learn More</span> <i class="bi bi-chevron-down toggle-dropdown"></i>
  </a>
  <ul>
    <li><a href="more-what-we-do" class="<?= $current == 'more-what-we-do' ? 'active' : '' ?>">More About The Importance</a></li>
  </ul>
</li>

<li class="dropdown">
  <a href="javascript:void(0)" class="<?= in_array($current, ['alumni-portal', 'professional-services', 'our-clients', 'product-tour', 'get-plan']) ? 'active' : '' ?>">
    <span>Resources</span> <i class="bi bi-chevron-down toggle-dropdown"></i>
  </a>
  <ul>
    <li><a href="alumni-portal" class="<?= $current == 'alumni-portal' ? 'active' : '' ?>">Alumni Portal</a></li>
    <li><a href="professional-services" class="<?= $current == 'professional-services' ? 'active' : '' ?>">Professional Services</a></li>
    <li><a href="our-clients" class="<?= $current == 'our-clients' ? 'active' : '' ?>">Clients & Partners</a></li>
    <li><a href="product-tour" class="<?= $current == 'product-tour' ? 'active' : '' ?>">Product Tour</a></li>
    <li><a href="get-plan" class="<?= $current == 'get-plan' ? 'active' : '' ?>">Get Plan</a></li>
  </ul>
</li>

<li><a href="alumni-talks" class="<?= $current == 'alumni-talks' ? 'active' : '' ?>">Alumni Talks</a></li>
<li><a href="contact" class="<?= $current == 'contact' ? 'active' : '' ?>">Book Demo</a></li>

        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <!-- <div class="header-social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div> -->

    </div>
  </header>
