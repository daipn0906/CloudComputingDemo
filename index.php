<!DOCTYPE html>
<html>
<head>
	<title>1st php auze</title>
</head>
<body>

	<form action="">
		Num a: <input type="text" name="a"> <br>
		operator: <select name="op" id="">
			<option value="1">+</option>
			<option value="2">-</option>
			<option value="3">*</option>
			<option value="4">/</option>

		</select><br>
		Num b: <input type="text=" name="b"><br>
		<input type="submit" value="calculate" name="cal">
	</form>

</body>
</html>
	
<?php 
require_once('./library.php');

if (isset($_GET['a']) &&isset($_GET['b']) &&isset($_GET['op'])) 
{
	$a= $_GET['a'];
	$b= $_GET['b'];
	$op=$_GET['op'];
	$m= new Operation($a,$b,$op);
	if ($a!="" && $b != "") {

		// echo "Result: 	".cal($a, $b, $op);
		echo "RESULT: ".$m->cal();
	}

	
}
?>