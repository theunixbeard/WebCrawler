<?php
 $to = "bapna.jai@gmail.com";
 $subject = "Hi!";
 $body = '';
 $matches = array(); 
for ($i=1;$i<sizeof($argv);$i++){
	array_push($matches,explode(":",$argv[$i]));
 }

 for ($i=0;$i<sizeof($matches);$i++){
	echo $matches[$i].'\n';
	if(intval($matches[$i])<175){ 
		 /*if (mail($to, $subject, $body)) {
		   echo("<p>Message successfully sent!</p>");
		  } else {
		   echo("<p>Message delivery failed...</p>");
		  }*/
	}
  }
?>
