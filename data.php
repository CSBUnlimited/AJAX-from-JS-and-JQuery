<?php
    //Call whatever db want and get data

    //and get those data to an array (object)
    $users = array(
        array('firstName'=> 'Chathuranga', 'lastName'=> 'Basnayake'),
        array('firstName'=> 'Dean', 'lastName'=> 'Winchester')
    );

    //encode to json and echo it
	echo json_encode($users);
?>
