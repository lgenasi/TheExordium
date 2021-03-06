<?php
define('IN_PHPBB', true);
$phpbb_root_path = './phpBB3/';
$phpEx = substr(strrchr(__FILE__, '.'), 1);
include($phpbb_root_path . 'common.' . $phpEx);

// Start session management
$user->session_begin();
$auth->acl($user->data);
$user->setup();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Home - The Exordium</title>
	<link rel="stylesheet" href="./lib/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/navbar.css" type="text/css">
	<link rel="stylesheet" href="css/style.css" type="text/css">

	<script type="text/javascript" src="./lib/jquery-2.1.4.js"></script>
	<script type="text/javascript" src="./lib/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="./index.js"></script>
</head>
<nav class="navbar navbar-inverse navbar-fixed-top customNav">
	<div id="container">
		<div class="collapse navbar-collapse" id="navImg">
			<a class="nav navbar-nav">
				<img id="navbarLogo" alt="Brand" src="images/logo.png">
			</a>
		</div>
		<div class="collapse navbar-collapse" id="navButtons">
			<div class="nav navbar-nav">
				<a role="button" class="btn-lg btn-default navbar-btn active" href="index.html">Home</a>
				<a role="button" class="btn-lg btn-default navbar-btn" href="games.html">Games</a>
				<a role="button" class="btn-lg btn-default navbar-btn" href="http://www.theexordium.org/phpBB3/portal.php">Forum</a>
				<a role="button" class="btn-lg btn-default navbar-btn" href="streams.html">Streams</a>
				<a role="button" class="btn-lg btn-default navbar-btn" href="about.html">About</a>
			</div>
		</div>
	</div>
</nav>
<body>
	<div id="background">
		<div id="body">
			<div>
				<div>
					<div class="featured">
						<div class="container fill">
							<div id="myCarousel" class="carousel slide">
								<ol class="carousel-indicators">
									<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
									<li data-target="#myCarousel" data-slide-to="1"></li>
									<li data-target="#myCarousel" data-slide-to="2"></li>
									<li data-target="#myCarousel" data-slide-to="3"></li>
									<li data-target="#myCarousel" data-slide-to="4"></li>
								</ol>
								<div class="carousel-inner">
									<div class="active item">
										<img src="./images/featured-game.png">
										<div class="carousel-caption">
											<h1></h1>
										</div>
										<div class="container">

										</div>
									</div>
									<div class="item">
										<img src="./images/swtorbanner.png">
										<div class="carousel-caption">
											<h1></h1>
										</div>
										<div class="container">

										</div>
									</div>
									<div class="item">
										<img src="./images/heroes.png">
										<div class="carousel-caption">
											<h1></h1>
										</div>
										<div class="container">

										</div>
									</div>
									<div class="item">
										<img src="./images/warcraft.png">
										<div class="carousel-caption">
											<h1></h1>
										</div>
										<div class="container">

										</div>
									</div>
									<div class="item">
										<img src="./images/minecraft.png">
										<div class="carousel-caption">
											<h1></h1>
										</div>
										<div class="container">

										</div>
									</div>
								</div>
								<div class="pull-center">
									<a class="carousel-control left" href="#myCarousel" data-slide="prev">
										<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
										<span class="sr-only">Previous</span>
									</a>
									<a class="carousel-control right" href="#myCarousel" data-slide="next">
										<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
										<span class="sr-only">Next</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="section">
						<div>
							<h3>About Us</h3>
							<div>
								<p>
									The Exordium is a Gaming Community in which we play a wide variety of games like World of Warcraft, Star Wars The Old Republic, Heroes of the Storm and many more.  Some games like Minecraft are hosted on our own personal server.  This gives us maximum control and maximum perfomance 
									as we have complete control over all resources rather than renting off another company. We even have our own Streaming Server !
								</p>
							</div>
						</div>
						<div>
							<h3>Games</h3>
							<div>
								<a href="games.html" class="figure" class="figure"><img src="images/games.png" alt=""></a>
								<span><a href="games.html">See The Games We Play</a></span>
							</div>
						</div>
						<div>
							<h3>Streaming</h3>
							<div>
								<a href="streams.html" class="figure"><img src="images/media.jpg" alt=""></a>
								<span><a href="streams.html">Watch us Play!</a></span>
							</div>
						</div>
						<div>
							<h3>Forum</h3>
							<div id="loginDiv">
							</div>
							<script type="text/javascript">
								var userId = <?php echo json_encode($user->data['user_id']); ?>;
								if (userId != 1){ // they aren't logged in
									$('#loginDiv').empty();
									$('#loginDiv').prepend(
										'<a href="http://www.theexordium.org/phpBB3/dkp.php?page=planner" class="figure" class="figure"><img src="images/calendar.jpg" alt=""></a>'+
										'<span><a href="http://www.theexordium.org/phpBB3/dkp.php?page=planner">Check the Calendar</a></span>');	
								} else { // they are logged in
									$('#loginDiv').empty();
									$('#loginDiv').prepend(
										'<form id="loginForm" method="post" action="http://www.theexordium.org/phpBB3/ucp.php?mode=login">'+
										'	<label for="username" title="Username" style="max-width: 67px;">Username</label>'+
										'	<input type="text" name="username" id="username" size="10" class="inputbox" title="Username">'+
										'	<label for="password" title="Password">Password</label>'+
										'	<input type="password" name="password" id="password" size="10" class="inputbox" title="Password">'+
										'	<input id="loginBtn" type="submit" name="login" value="Login" class="btn btn-default navbar-btn">'+
										'	<a id="registerLink" href="http://www.theexordium.org/phpBB3/ucp.php?mode=register">Register</a>'+
										'</form>');
								}
							</script>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>