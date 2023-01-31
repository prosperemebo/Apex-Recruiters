<?php
ini_set('display_errors', 1);

header('Allow-Control-Access-Origin: *');

include_once './db.php';

$sql = 'INSERT INTO `talents-submissions`
            SET
        `first_name` = :fname,
        `last_name` = :lname,
        `name_of_organisation` = :nameororg,
        `email` = :eml,
        `phone` = :pnum,
        `job_title` = :jobtit,
        `job_location` = :jobloc,
        `job_type` = :jobtyp,
        `work_place_type` = :worktpy,
        `job_description` = :jobdesc,
';

$stmt = $conn->prepare($sql);

$first_name = $_POST['firstName'];
$last_name = $_POST['lastName'];
$name_of_organisation = $_POST['nameOfOrganisation'];
$email = $_POST['email'];
$phone  = $_POST['phone'];
$job_title = $_POST['jobTitle'];
$job_location = $_POST['jobLocation'];
$job_type = $_POST['jobType'];
$work_type = $_POST['workType'];
$cv_file = $_FILES["jobDescription"];

if (!$first_name || !$last_name || !$email || !$phone || !$name_of_organisation || !$job_title || !$job_location || !$job_type || !$work_type || !$cv_file) {
    header("Location: /find-talent?message=Hey! Sorry you need to fill all fields :(");
    exit();
}

$cv_file_name = $_POST['first_name'] . $_POST['last_name'] . ' job-description';
$cv_file_name = str_replace(" ", "", str_replace(".", "", $cv_file_name));
$temp_file_name = $cv_file['tmp_name'];
$file_error = $cv_file['error'];
$file_size = $cv_file['size'];

$file_ext = explode(".", $_FILES['jobDescription']['name']);
$file_ext = strtolower(end($file_ext));

$allowed = array("jpg", "jpeg", "png", "pdf");

if (!in_array($file_ext, $allowed)) {
    header("Location: /find-talent?message=Hey! Sorry you need to upload a proper file type (jpg, jpeg, png, pdf) :(");
    exit();
}

if ($file_error != 0) {
    header("Location: /find-talent?message=Hey! Sorry there was an error :(");
    exit();
}

if ($file_size > 20971520) {
    header("Location: /find-talent?message=Hey, file size is too big (max-size: 20MB) :(");
    exit();
}

$cv = $cv_file_name . "." . uniqid("", true) . "." . $file_ext;
$cv_dest = $thumbnail = $_SERVER['DOCUMENT_ROOT'] . '/uploads/jobs/' . $cv;

$stmt->bindParam(':fname', $first_name);
$stmt->bindParam(':lname', $last_name);
$stmt->bindParam(':nameororg', $name_of_organisation);
$stmt->bindParam(':eml', $email);
$stmt->bindParam(':pnum', $phone);
$stmt->bindParam(':jobtit', $job_title);
$stmt->bindParam(':jobloc', $job_location);
$stmt->bindParam(':jobtyp', $job_type);
$stmt->bindParam(':worktpy', $work_type);
$stmt->bindParam(':jobdesc', $cv);

if ($stmt->execute()) {
    move_uploaded_file($temp_file_name, $cv_dest);

    $from = 'talents@apexrecruiterltd.com';
    $to = 'talents@apexrecruiterltd.com';

    $subject = 'New Talent Submission for ' . strip_tags($job_title);

    $message = '<html><body>';
    $message .= '<h1>Hi, There\'s Been a New Talent Submission for a Role!</h1>';
    $message .= '<p>Here are the details below</p>';
    $message .= '<ul>';
    $message .= '<li><strong>First Name<strong>:&nbsp;' . strip_tags($first_name) . '</li>';
    $message .= '<li><strong>Last Name<strong>:&nbsp;' . strip_tags($last_name) . '</li>';
    $message .= '<li><strong>Email<strong>:&nbsp;' . strip_tags($email) . '</li>';
    $message .= '<li><strong>Phone<strong>:&nbsp;' . strip_tags($phone) . '</li>';
    $message .= '<li><strong>Job Title<strong>:&nbsp;' . strip_tags($job_title) . '</li>';
    $message .= '<li><strong>Job Location<strong>:&nbsp;' . strip_tags($job_location) . '</li>';
    $message .= '<li><strong>Job Type<strong>:&nbsp;' . strip_tags($job_type) . '</li>';
    $message .= '<li><strong>Work Place Type<strong>:&nbsp;' . strip_tags($work_type) . '</li>';
    $message .= '<li><strong>Job Description<strong>:&nbsp; <a href="https://apexrecruiterltd.com/uploads/jobs/' . $cv  . '" download>Download Job Description</a></li>';
    $message .= '</ul>';
    $message .= "</body></html>";

    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: /find-talent?message=Submitted! Our Team Will Reach Out Soon");
    }
}
