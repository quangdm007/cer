<?php
/**
 * @author  RadiusTheme
 * @since   1.0
 * @version 1.0
 */

namespace radiustheme\HomListi;
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="profile" href="https://gmpg.org/xfn/11" />
    <?php wp_head(); ?>
	<meta name="facebook-domain-verification" content="9ww392egp4gqnhgk8svmjo8oerfiqi" />
	<meta name="google-site-verification" content="u2ot1GkFoFG6Qj3YxpqttuXp4spzwPQSjhCnLCvmlXc" />
<!-- 	<meta property="og:image" content="https://dhthainguyen.edu.vn/wp-content/uploads/2022/10/dai-hoc-tu-xa-la-gi-4.jpg"> -->
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-155249739-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-155249739-1');
	</script>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-WXW3K2P');</script>
	<!-- End Google Tag Manager -->
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXW3K2P"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
</head>
<body <?php body_class(); ?>>
	<?php do_action( 'wp_body_open' ); ?>
	<div id="wrapper" class="wrapper">
		<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'homlisti' ); ?></a>
		<?php get_template_part( 'template-parts/content', 'menu' ); ?>
		<div id="content" class="site-content">
		
		<?php 
		if(class_exists('Rtcl')){
			get_template_part('template-parts/content', 'banner'); 
		}