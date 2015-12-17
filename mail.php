<?
# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;

$nickname=$_POST[nickname];
$email=$_POST[email];
$content=$_POST[content];

# Instantiate the client.
$mgClient = new Mailgun('key-6487c78c905dc041f7cb8e589d84de2d');
$domain = "sandbox18191d042786489d8483f6dbbe361c3c.mailgun.org";

# Make the call to the client.
$result = $mgClient->sendMessage($domain, array(
    'from'    => $email,
    'to'      => 'cch@unnamed.taipei,bird@gmail.com',
    'subject' => $nickname.'寄來的問題',
    'text'    => $content
));

echo "<script>window.location.href = 'http://unnamed.taipei/success.html';</script>";
?>