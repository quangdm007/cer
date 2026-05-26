<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/2a56f4323d.js" crossorigin="anonymous"></script>
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php bloginfo("template_directory"); ?>/asset/icofont/icofont.min.css">
    <link rel="stylesheet" href="<?php bloginfo("template_directory"); ?>/css/tnustyle.css">
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
	<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-155249739-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-155249739-1');
		</script>

    <div class="wrapper">
        <div class="tnu">
            <header class="header">
                <div class="top-bar">
                    <div class="container">
                        <div class="top-bar__content">
                            <ul>
                                <li><a href=""></a></li>
                                <li><a href=""></a></li>
                                <li><a href=""></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="menu-main">
                    <div class="container">
                        <div class="menu-content">
                            <div class="logos">
                                <a href="<?php bloginfo('url') ?>">
                                    <img src="<?php bloginfo("template_directory"); ?>/images/logo-tnu.png" alt="">
                                    <span>
                                        Đại Học Thái Nguyên
                                        <p>Trung Tâm Đào Tạo Từ Xa</p>
                                    </span>
                                </a>
                            </div>
                            <?php wp_nav_menu( 
                                array( 
                                    'theme_location' => 'header-menu', 
                                    'container' => 'false', 
                                    'menu_id' => 'header-menu', 
                                    'menu_class' => 'header-menu'
                                ) 
                                ); ?>
                            <!-- <ul>
                                <li><a href=""><i class="fa-solid fa-house"></i></a></li>
                                <li><a href="">Giới thiệu</a></li>
                                <li>
                                    <a href="">Ngành tuyển sinh</a>
                                    <ul class="sub-menu">
                                        <li><a href="">Công Nghệ Thông Tin</a></li>
                                        <li><a href="">Ngôn Ngữ Anh</a></li>
                                        <li><a href="">Luật Kinh Tế</a></li>
                                    </ul>
                                </li>
                                <li><a href="">Lịch khai giảng</a></li>
                                <li><a href="">Tin tức</a></li>
                                <li><a href="">Đăng ký học thử</a></li>
                                <li><a href="">Hotline: 0914.709.118</a></li>
                            </ul> -->
                        </div>
                    </div>
                </div>
            </header>