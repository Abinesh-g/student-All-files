<html>

  <head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="css/bootstrap.css" rel="stylesheet" />
    <link href="signin.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <meta name="description" content="W3hubs.com">
  <meta name="keywords" content="HTML,CSS,boostrap3,boostrap4,Jquery Auto Manage Responsive Lightbox">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" type="text/css" href="css/gallery.css">
  <link rel="stylesheet" type="text/css" href="css/lightbox.min.css">
  <script type="text/javascript" src="js/lightbox-plus-jquery.min.js"></script>
    
<title>Student Information </title>

</head>

<body class="" background="bg1.png">
<nav class="navbar fixed-top navbar-expand-sm bg-primary navbar-dark justify-content-center" style="min-height:50px">
    <ul class="nav-item">
        <img src="logo.png" alt="Logo" style="width:60px;">
    </ul>
    <ul class="nav-item">
        <a class="navbar-brand justify-content-center display-1 mb-1 font-weight-normal" style="font-size:35px" href="#">ANJALAI AMMAL MAHALINGAM ENGINEERING COLLEGE</a>
    </ul>
</nav>
<body>
<form action="" method="post">
<input class="btn btn-lg btn-primary btn-block" type="submit" value="ENTER INTO STUDENT INFORMATION SYSTEM" name="b1"><br><br>

</form>
</body></html>
<?php
if(isset($_POST['b1']))
{
    header("location:login.php");
}
?>