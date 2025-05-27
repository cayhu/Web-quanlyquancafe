<?php
include '../lib/session.php';
include '../config/config.php';
include '../lib/database.php';
include '../helpers/format.php';
include '../models/account-view-model.php';
include '../controllers/account.php';
?>

<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $account = new Account();
    $account->login($username, $password);
}
?>

<!DOCTYPE html>
<html lang="vi">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Đăng nhập | Quán Cafe</title>
    <link href="../assets/css/login.css" rel="stylesheet">

</head>

<body class="" style="margin: 100px 0;">
    <div class="container d-flex align-items-center justify-content-center ">
        <div class="row ">
            <div class=" col-xl-12 col-lg-12 col-md-12">
                <div class="row ">
                    <div class="col-lg-6  ">
                        <img src="https://accounts.haravan.com/img/login_banner.svg" width="500" alt="">
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="text-center">
                                <br><br>
                                <h1 class="h4 text-gray-900 mb-4">Admin - Đăng nhập</h1>
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 font-weight-bold mb-4">QUÁN CAFE</h1>
                                </div>
                                <p>Xin chào, vui lòng nhập thông tin đăng nhập</p>
                            </div>
                            <form class="user" action="" method="post">
                                <div class="form-group">
                                    <input type="text" class="form-control" 
                                        aria-describedby="emailHelp" name="username" placeholder="Tên Đăng Nhập" required
                                        autofocus>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="exampleInputPassword"
                                        placeholder="Password" name="password">
                                </div>

                                <button type="submit" name="login" class="btn  btn-primary  btn-block"> Đăng nhập
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script src="../assets/js/login.js"></script>

</body>

</html>