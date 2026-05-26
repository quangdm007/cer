<?php defined( 'ABSPATH' ) or die(); ?>
<div class="wrap license-container">
	<div class="panel panel-primary panel-default content-panel ">
        <div class="panel-body">
			<img src=" <?php echo esc_url(WEBLIZAR_NALF_PLUGIN_URL. "/images/aclp.jpg") ?>" class="img-responsive"> 
        </div>
    </div>
	<div class="clearfix"></div>
	<div class="column-6-right">
		<div class="Configuration_btn">	
			<a class="conf_btn" href="<?php echo esc_url( get_admin_url() ); ?>admin.php?page=admin_custom_login"><?php esc_html_e( "Plugin Configuration Click Here", 'admin-custom-login' ); ?></a>
			<a class="conf_btn" href="<?php echo esc_url('https://weblizar.com/plugins/admin-custom-login-pro/'); ?>" target="_blank"><?php esc_html_e( "Buy Pro", 'admin-custom-login' ); echo esc_html("$25"); ?></a>
			<a class="conf_btn" href="<?php echo esc_url('http://demo.weblizar.com/admin-custom-login-pro/wp-login.php'); ?>" target="_blank"><?php esc_html_e( "Admin Demo", 'admin-custom-login' ); ?></a>
		</div>
	</div>
</div>
