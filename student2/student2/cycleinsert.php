<?php

session_start();

$type=$_SESSION['type'];
$sem=$_SESSION['sem'];
if(($_SESSION['type']) and  ($_SESSION['sem']))
{
  //echo (" sess work");
  echo nl2br("\n");
}



  //$type="r13itsem1";
  $con=mysqli_connect('localhost','root','');
    if($con)
    {
   //echo nl2br( "\n server connected");
    }
    else
    {
     echo nl2br("\n server not connected");
    }
if(isset($_POST['update']))
{
//echo"inside update";

  $register_number=$_POST['register_number'];
  $register_number1=$_POST['register_number1'];
  $test=$_POST['test'];
  $sub1=$_POST['s1'];
  $sub2=$_POST['s2'];
  $sub3=$_POST['s3'];
  $sub4=$_POST['s4'];
  $sub5=$_POST['s5'];
  $sub6=$_POST['s6'];
  $sub7=$_POST['s7'];
  $sub8=$_POST['s8'];
  $sub9=$_POST['s9'];
  $mark1=$_POST['m1'];
  $mark2=$_POST['m2'];
  $mark3=$_POST['m3'];
  $mark4=$_POST['m4'];
  $mark5=$_POST['m5'];
  $mark6=$_POST['m6'];
  $mark7=$_POST['m7'];
  $mark8=$_POST['m8'];
  $mark9=$_POST['m9'];
    if(mysqli_select_db($con,'marks'))
    {
   //echo nl2br("\n db connected ");
    }
    else
    {
    echo nl2br("\n db not connected");
    }

   $query=( " SELECT  * FROM  marks ");
    $res=mysqli_query($con,$query);
    $row=mysqli_fetch_array($res);             
        $qname="UPDATE marks SET type='$type',register_number='$register_number',semester='$sem',test_name='$test',sub1='$sub1',sub2='$sub2',sub3='$sub3',sub4='$sub4',sub5='$sub5',sub6='$sub6',sub7='$sub7',sub8='$sub8',sub9='$sub9',mark1='$mark1',mark2='$mark2',mark3='$mark3',mark4='$mark4',mark5='$mark5',mark6='$mark6',mark7='$mark7',mark8='$mark8',mark9='$mark9' WHERE(register_number='register_number1') ";
           if($qname)
           {
            echo "correct";
           }
            $equ=mysqli_query($con,$qname);
           // echo "hiii";
            if($equ)
            {
              echo(" value updated ");
            }
            else
            {
              echo "value not update";
            }
 }     

if(isset($_POST['insert']))
{


  $register_number=$_POST['register_number'];
  $test=$_POST['test'];
  $sub1=$_POST['s1'];
  $sub2=$_POST['s2'];
  $sub3=$_POST['s3'];
  $sub4=$_POST['s4'];
  $sub5=$_POST['s5'];
  $sub6=$_POST['s6'];
  $sub7=$_POST['s7'];
  $sub8=$_POST['s8'];
  $sub9=$_POST['s9'];
  $mark1=$_POST['m1'];
  $mark2=$_POST['m2'];
  $mark3=$_POST['m3'];
  $mark4=$_POST['m4'];
  $mark5=$_POST['m5'];
  $mark6=$_POST['m6'];
  $mark7=$_POST['m7'];
  $mark8=$_POST['m8'];
  $mark9=$_POST['m9'];
    if(mysqli_select_db($con,'marks'))
    {
   //echo nl2br("\n db connected ");
    }
    else
    {
    echo nl2br("\n db not connected");
    }

   $query=( " SELECT  * FROM  marks ");
    $res=mysqli_query($con,$query);
    $row=mysqli_fetch_array($res);
    
        $qname="INSERT INTO marks(type,register_number,semester,test_name,sub1,sub2,sub3,sub4,sub5,sub6,sub7,sub8,sub9,mark1,mark2,mark3,mark4,mark5,mark6,mark7,mark8,mark9) VALUES('$type','$register_number','$sem','$test','$sub1','$sub2','$sub3','$sub4','$sub5','$sub6','$sub7','$sub8','$sub9','$mark1','$mark2','$mark3','$mark4','$mark5','$mark6','$mark7','$mark8','$mark9')";
            $equ=mysqli_query($con,$qname);
            if($equ)
            {
              echo(" value inserted ");
            }
 }     
         $conn= mysqli_select_db($con,'subject');
       $query1=( "SELECT * FROM subject WHERE type='$type' ");
    //echo "inside ifff";
    if($res1=mysqli_query($con,$query1))
    {
      //echo "inside if";
    $row1=mysqli_fetch_row($res1);
    //while ($row1)
     $i=0;
   $copy=array();
  for($i=0;$i<count($row1);$i++)
  $copy[$i]=$row1[$i];
    //}
  }
  $i=1;
  //mysqli_free_result($row1); 

  
?>


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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<title>Student Information </title>
</head>

<body class="" background="bg1.png">
<nav class="navbar fixed-top navbar-expand-sm bg-primary navbar-dark " style="min-height:50px">
<a href="cycle.php" id="main" style="color:black;">&larr;Back</a>
    <!-- <ul class="nav-item">
		<img src="logo.png" alt="Logo" style="width:60px;">
	</ul> -->
    <ul class="nav-item" style="padding-left:460px;">
		<a class="navbar-brand justify-content-center display-1 mb-1 font-weight-bold" style="font-size:30px" href="#">STUDENT INFORMATION</a>
	</ul>
</nav>
<form class="text-center" style="padding-top:100px" method="post">

<div class="row">
              <div class="col-lg-6 mb-3">
                <label for="newregno">REGISTER NUMBER:</label>
                <input type="text" class="form-control" name="register_number" placeholder="Enter Details" required>
              </div>
              <div class="col-lg-6 mb-3">
                <label for="oldregno">OLD REG NO.(For Update):</label>
                <input type="text" class="form-control" name="register_number1" placeholder="Enter Details">
              </div>
</div>
<br><br>

<div class="row">
              <div class="col-lg-6 mb-3">
                <label for="testtype">TEST TYPE:</label>
                <select name="test" class="form-control" required>
                   <option value="ct1">INTERNAL ASSEMENT-1</option>
                   <option value="ct2">INTERNAL ASSEMENT-2</option>
                   <option value="ct3">INTERNAL ASSEMENT-3</option>
                   <option value="sem">SEMESTER EXAM</option>
                </select>
               </div>
              <div class="col-lg-6 mb-3">
                <label for="dept">SELECT DEPARTMENT:</label>
                <select class="form-control" style="font-size:13px;" name="dept" required>
			            <option value="it">IT</option>
		            	<option value="cse">CSE</option>
		            	<option value="ece">ECE</option>
			            <option value="eee">EEE</option>
			            <option value="mech">MECH</option>
			            <option value="chem">CHEM</option>
			            <option value="mca">MCA</option>
	              </select>
              </div>
</div>
<br><br><br>

<div class="row">
             <div class="col-7">
              <input type="label" value= <?php echo $copy[$i];$i++; ?> name="s1">:
             </div>
             <div class="col-3">
                <input type="text" class="form-control" name="m1" placeholder="Mark" required><br>
             </div>
</div>
<div class="row">
             <div class="col-7">
               <input type="label" value= <?php echo $copy[$i];$i++; ?> name="s2">:
             </div>
             <div class="col-3">
                <input type="text" class="form-control" name="m2" placeholder="Mark" required><br>
             </div>
</div>
<div class="row">
             <div class="col-7">
              <input type="label" value=  <?php echo $copy[$i];$i++; ?> name="s3">:
             </div>
             <div class="col-3">
                <input type="text" class="form-control" name="m3" placeholder="Mark" required><br>
             </div>
</div>
<div class="row">
             <div class="col-7">
              <input type="label" value=  <?php echo $copy[$i];$i++; ?> name="s4">:
             </div>
             <div class="col-3">
                <input type="text" class="form-control" name="m4" placeholder="Mark" required><br>
             </div>
</div>
<div class="row">
             <div class="col-7">
             <input type="label" value=   <?php echo $copy[$i];$i++; ?> name="s5">:
             </div>
             <div class="col-3">
                <input type="text" class="form-control" name="m5" placeholder="Mark" required><br>
             </div>
</div>
<div class="row">
             <div class="col-7">
               <input type="label" value= <?php echo $copy[$i];$i++; ?> name="s6">:
             </div>
             <div class="col-3">
                <input type="text" class="form-control" name="m6" placeholder="Mark" required><br>
             </div>
</div>
<div class="row">
             <div class="col-7">
               <input type="label" value= <?php echo $copy[$i];$i++; ?> name="s7">:
             </div>
             <div class="col-3">
                <input type="text" class="form-control" name="m7" placeholder="Mark" required><br>
             </div>
</div>
<div class="row">
             <div class="col-7">
                <input type="label" value=<?php echo $copy[$i];$i++; ?> name="s8">:
             </div>
             <div class="col-3">
                <input type="text" class="form-control" name="m8" placeholder="Mark" required><br>
             </div>
</div>
<div class="row">
             <div class="col-7">
               <input type="label" value= <?php echo $copy[$i];$i++; ?> name="s9">:
             </div>
             <div class="col-3">
                <input type="text" class="form-control" name="m9" placeholder="Mark" required><br>
             </div>
</div>

<br><br>
<br><br>
<div class="row">
             <div class="col-6">
                  <input type="submit" class="btn btn-lg btn-primary btn-block" name="insert" value="Insert">
             </div>
             <div class="col-6">
                  <input type="submit" class="btn btn-lg btn-primary btn-block" name="update" value="Update">
             </div>
</div>
<p class="mt-2 mb-3 text-center" >&copy; AAMEC(IT Dept)-Abinesh,Aswin</p>
</form>
</body>
</head>
</html>	