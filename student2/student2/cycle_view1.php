
<!doctype html>
<html lang="en">
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

<title>Student Information </title>

</head>

<body class="" background="bg1.png">
<nav class="navbar fixed-top navbar-expand-sm bg-primary navbar-dark " style="min-height:50px">
<a href="detselect.php" id="main" style="color:black;">&larr;Back</a>
    <!-- <ul class="nav-item">
		<img src="logo.png" alt="Logo" style="width:60px;">
	</ul> -->
    <ul class="nav-item" style="padding-left:460px;">
		<a class="navbar-brand justify-content-center display-1 mb-1 font-weight-bold" style="font-size:30px" href="#">STUDENT INFORMATION</a>
	</ul>
</nav>
<center>
<?php
session_start();

$regno=$_SESSION["regno"];

if($_SESSION['regno'])
{
	//echo "sess work";
}

if(isset($_POST['submit']))
{	//echo "inside submit";
	$sem=$_POST['sem'];
	$test=$_POST['test'];
	$con=mysqli_connect('localhost','root','');
	if($con)
	{
	//echo nl2br( "\n server connected");
	}
	else
	{
	 echo nl2br("\n server not connected");
	}
	if(mysqli_select_db($con,'marks'))
	{
	//echo nl2br("\n db connected ");
	}
	else
	{
	echo nl2br("\n db not connected");
	}
	
	//$reg_no=$_POST['reg_no'];

$sql="SELECT * FROM marks WHERE register_number='$regno' AND semester='$sem' AND test_name='$test' ";

if ($result=mysqli_query($con,$sql))
  {
   // echo"inside if";
  
   $copy=array();
  while ($row=mysqli_fetch_row($result))
    {
  for($i=0;$i<count($row);$i++)
  $copy[$i]=$row[$i];
    }
  
//echo count($copy);

  mysqli_free_result($result);
}
}

?>

 <?php 


 echo'<div class="row"><div class="col-8 font-weight-bold text-left">'; echo "SUBJECT";
 echo'</div><div class="col-4 font-weight-bold text-right">';echo "MARK"; ?><?php echo nl2br("\n");echo'</div>'; echo'</div></div><br><br><br>';


 echo'<div class="row"><div class="col-8 font-weight-bold text-left">';
 echo($copy[4]);echo'</div><div class="col-4 font-weight-bold text-right">';
 echo($copy[13]); echo nl2br("\n"); echo'</div></div><br>';

echo'<div class="row"><div class="col-8 font-weight-bold text-left">';
echo($copy[5]);echo'</div><div class="col-4 font-weight-bold text-right">';
echo($copy[14]); echo nl2br("\n"); echo'</div></div><br>';

 echo'<div class="row"><div class="col-8 font-weight-bold text-left">';
 echo($copy[6]);echo'</div><div class="col-4 font-weight-bold text-right">';
 echo($copy[15]); echo nl2br("\n"); echo'</div></div><br>';

echo'<div class="row"><div class="col-8 font-weight-bold text-left">';
echo($copy[7]);echo'</div><div class="col-4 font-weight-bold text-right">';
echo($copy[16]); echo nl2br("\n"); echo'</div></div><br>';
					 
echo'<div class="row"><div class="col-8 font-weight-bold text-left">';
echo($copy[8]);echo'</div><div class="col-4 font-weight-bold text-right">';
echo($copy[17]); echo nl2br("\n"); echo'</div></div><br>';
echo'<div class="row"><div class="col-8 font-weight-bold text-left">';
echo($copy[9]);echo'</div><div class="col-4 font-weight-bold text-right">';
echo($copy[18]); echo nl2br("\n"); echo'</div></div><br>';
echo'<div class="row"><div class="col-8 font-weight-bold text-left">';
echo($copy[10]);echo'</div><div class="col-4 font-weight-bold text-right">';
echo($copy[19]); echo nl2br("\n"); echo'</div></div><br>';
echo'<div class="row"><div class="col-8 font-weight-bold text-left">';
echo($copy[11]);echo'</div><div class="col-4 font-weight-bold text-right">';
echo($copy[20]); echo nl2br("\n"); echo'</div></div><br>';
echo'<div class="row"><div class="col-8 font-weight-bold text-left">';
echo($copy[12]);echo'</div><div class="col-4 font-weight-bold text-right">';
echo($copy[21]); echo nl2br("\n"); echo'</div></div><br>';





?>
</div>


</center>


</form>
</body>
</html>