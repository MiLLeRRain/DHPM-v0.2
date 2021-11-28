<?php
header("content-type:text/html; charset=UTF-8");
$uName = $_POST["uName"];
echo $uName."<br/>";
$uImg = $_FILES["uImg"];
echo $uImg."<hr>";
print_r($uImg);
// MEMI type check
$ext = explode(".", $uImg["name"]);
$extName = end($ext);
if ($extName != "jpg" && $extName != "gif" && $extName != "png") {
    echo "Wrong image type. <a href='index.php'>Return</a>";
    exit;
}
// Size check
if ($uImg["size"] > 4000000) {
    echo "Image too large. <a href='index.php'>Return</a>";
    exit;
}
// Rename, use time().mt_rand
$dir = "./upload/";
$fileName = time().mt_rand(10000,99999).".".$extName;
$uploadUrl = $dir.$fileName;
// Upload file
move_uploaded_file($uImg["tmp_name"], $uploadUrl);
echo "Upload complete. <a href='index.php'>Return</a>";


// Write into File
$fileUrl = "test.txt";
$str = "things to write";
$arr = array(123, "abc", $str);
echo serialize($arr);

// Can serialize($everything)

$handle = fopen($fileUrl, "w+");
fwrite($handle, serialize($arr));
echo fread($handle, filesize($handle));

fclose($handle);

// Read from File and unserialize it
$handle2 = fopen("test.txt", "r");
$readout = fread($handle2, filesize($handle2));
$arr = unserialize($readout);
print_r($arr);


