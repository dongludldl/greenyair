<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "greenyair_db";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$q = "select * from electricity where score_id = 18";
$result = mysqli_query($conn, $q);
$row = mysqli_fetch_array($result);
$_SESSION['app_type'] = $row[1];
$_SESSION['power_consumption']=$row[2];
$_SESSION['using_time'] = $row[3];
$_SESSION['solution']=$row[4];
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <title>GreenyAir</title>
  <link rel="shortcut icon" type="image/x-icon" href="../image/favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Yellowtail&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../style.css">
  <section id= "banner">
    <h1>GreenyAir</h1>
    <p>Got one minute? You can help save the world</p>
  </section>
</head>
<body>
  <div class="result">
		<div class="summary">
			 <h1>Here is your summary</h1>
			 <p>You are using <?php echo $_SESSION['app_type']?></p>
			 <p>with the rate of <?php echo $_SESSION['power_consumption'] ?> kWh/year</p>
			 <p>around the time of <?php echo $_SESSION['using_time'] ?></p>
			 <p>So, <?php echo $_SESSION['solution'] ?></p>
			 <p>Have a nice one!</p>
		 </div>
	 <button type="submit" onclick="location.href='../index.html';" class="restart">Restart Challenge</button>
    <script src="script.js"></script>
  </div>
  <footer id="footer">All rights reserved. Powered by Its Code Outside</footer>
</body>
</html>
