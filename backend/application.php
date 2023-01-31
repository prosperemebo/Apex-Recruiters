<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/backend/db.php';

$database = new Database();
$conn = $database->connect();

$sql = 'INSERT INTO `applications`
            SET
        `first_name` = :fname,
        `last_name` = :lname,
        `email` = :eml,
        `phone` = :pnum,
        `gender` = :gdr,
        `nationality` = :naty,
        `preferred_job_title` = :prrjt,
        `qualification` = :qua,
        `referred_by` = :ref,
        `cv` = :cv,
';

$stmt = $conn->prepare($sql);

$first_name = $_POST['firstName'];
$last_name = $_POST['lastName'];
$email = $_POST['email'];
$phone  = $_POST['phone'];
$gender = $_POST['gender'];
$nationality = $_POST['nationality'];
$preferred_job_title = $_POST['preferred_job_title'];
$qualification = $_POST['qualification'];
$referred_by = $_POST['referred_by'];

$cv_file = $_FILES["cv"];
$cv_file_name = $_POST['first_name'] . $_POST['last_name'] . ' cv';
$cv_file_name = str_replace(" ", "", str_replace(".", "", $cv_file_name));
$temp_file_name = $cv_file['tmp_name'];
$file_error = $cv_file['error'];
$file_size = $cv_file['size'];

$file_ext = explode(".", $cv_file_name);
$file_ext = strtolower(end($file_ext));

$allowed = array("jpg", "jpeg", "png", "pdf");

if (!in_array($file_ext, $allowed)) {
    echo "Hey! Sorry you need to upload a proper file type (jpg, jpeg, png, pdf) :(";
    exit();
}

if ($file_error === 0) {
    echo "Hey! Sorry there was an error :(";
    exit();
}

if ($$file_size < 20971520) {
    echo "Hey, file size is too big (max-size: 20MB) :(";
    exit();
}

$cv = $cv_file_name . "." . uniqid("", true) . "." . $file_ext;
$cv_dest = $thumbnail = $_SERVER['DOCUMENT_ROOT'] . '/uploads/cv/' . $cv;

$stmt->bindParam(':fname', $first_name);
$stmt->bindParam(':lname', $last_name);
$stmt->bindParam(':eml', $email);
$stmt->bindParam(':pnum', $phone);
$stmt->bindParam(':gdr', $gender);
$stmt->bindParam(':naty', $nationality);
$stmt->bindParam(':prrjt', $preferred_job_title);
$stmt->bindParam(':qua', $qualification);
$stmt->bindParam(':ref', $referred_by);
$stmt->bindParam(':cv', $cv);

if ($stmt->execute()) {
    move_uploaded_file($temp_file_name, $cv_dest);

    $from = 'contact@apexrecruiterltd.com';
    $to = 'contact@apexrecruiterltd.com';

    $subject = 'NEW APPLICATION UP!!!';

    $message = '<html><body>';
    $message .= '<h1>Hi, There\'s Been a New Application for a Role!</h1>';
    $message .= '<p>Here are their details below</p>';
    $message .= '<ul>';
    $message .= '<li><strong>First Name<strong>:&nbsp;' . strip_tags($first_name) . '</li>';
    $message .= '<li><strong>Last Name<strong>:&nbsp;' . strip_tags($last_name) . '</li>';
    $message .= '<li><strong>Email<strong>:&nbsp;' . strip_tags($email) . '</li>';
    $message .= '<li><strong>Phone<strong>:&nbsp;' . strip_tags($phone) . '</li>';
    $message .= '<li><strong>Gender<strong>:&nbsp;' . strip_tags($gender) . '</li>';
    $message .= '<li><strong>Nationality<strong>:&nbsp;' . strip_tags($nationality) . '</li>';
    $message .= '<li><strong>Preferred Job Title<strong>:&nbsp;' . strip_tags($preferred_job_title) . '</li>';
    $message .= '<li><strong>Qualification<strong>:&nbsp;' . strip_tags($qualification) . '</li>';
    $message .= '<li><strong>Referred By<strong>:&nbsp;' . strip_tags($referred_by) . '</li>';
    $message .= '</ul>';
    $message .= "</body></html>";

    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: /Notfound.sk/");
    }
}
