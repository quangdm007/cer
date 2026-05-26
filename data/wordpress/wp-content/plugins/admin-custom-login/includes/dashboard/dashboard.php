<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<div class="row">
	<div class="post-social-wrapper clearfix">
		<div class="col-md-12 post-social-item">
			<div class="panel panel-default">
				<div class="panel-heading padding-none">
					<div class="post-social post-social-xs" id="post-social-5">
						<div class="text-center padding-all text-center">
							<div class="textbox text-white   margin-bottom settings-title">
								<?php esc_html_e('Admin Custom Login Dashboard', 'admin-custom-login'); ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="panel panel-primary panel-default content-panel">
		<div class="panel-body">
			<table class="form-table">
				<tr>
					<th scope="row" ><?php esc_html_e('Admin Custom Login', 'admin-custom-login'); ?></th>
					<td></td>
				</tr>
				<tr class="radio-span">
					<td>
						<span>
							<input type="radio" name="dashboard_status" value="disable" id="dashboard_status1" <?php if($dashboard_status == "disable") echo esc_attr("checked"); ?> />&nbsp;<label for="dashboard_status1"><?php esc_html_e('Disable', 'admin-custom-login')?></label><br>
						</span>
						<span>
							<input type="radio" name="dashboard_status" value="enable" id="dashboard_status2" <?php if($dashboard_status == "enable") echo esc_attr("checked");?> />&nbsp;<label for="dashboard_status2"><?php esc_html_e('Enable', 'admin-custom-login')?></label><br>
						</span>
					</td>
				</tr>
			</table>
		</div>
	</div>

	<div class="panel panel-primary panel-default content-panel">
		<div class="panel-body">
			<table class="form-table">
				<tr>
					<th scope="row" ><?php esc_html_e('View Login Page', 'admin-custom-login'); ?></th>
					<td></td>
				</tr>
				<tr class="radio-span">
					<td>
						<h4><?php esc_html_e('Copy below link and open in another browser where you are not logged in', 'admin-custom-login')?></h4>
						<br>
						<pre><span id="login_form_image" style="color:#ef4238"><?php echo esc_url( wp_login_url() ); ?></span></pre>

						<a style="color: #555;" href="javascript:void(0);" onclick="window.open('<?php echo esc_url( wp_login_url() ); ?>')">
                            <button type="button" class="preview_btn_custom btn btn-primary" id="preview_btn_custom"><?php esc_html_e('Preview', 'admin-custom-login')?></button>
                        </a>
                         <button type="button" class="preview_btn_custom_copy btn btn-success" id="preview_btn_custom_copy" value="<?php echo esc_url( wp_login_url() ); ?>"><?php esc_html_e('Copy', 'admin-custom-login')?></button>
                         <div id="snackbar"><?php esc_html_e('Copied', 'admin-custom-login')?></div>
					</td>
				</tr>
			</table>
		</div>
	</div>

	<button data-dialog="somedialog" class="dialog-button"><?php esc_html_e('Open Dialog', 'admin-custom-login')?></button>
	<div id="somedialog" class="dialog">
		<div class="dialog__overlay"></div>
		<div class="dialog__content">
			<div class="morph-shape" data-morph-open="M33,0h41c0,0,0,9.871,0,29.871C74,49.871,74,60,74,60H32.666h-0.125H6c0,0,0-10,0-30S6,0,6,0H33" data-morph-close="M33,0h41c0,0-5,9.871-5,29.871C69,49.871,74,60,74,60H32.666h-0.125H6c0,0-5-10-5-30S6,0,6,0H33">
				<svg xmlns="" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none">
					<path d="M33,0h41c0,0-5,9.871-5,29.871C69,49.871,74,60,74,60H32.666h-0.125H6c0,0-5-10-5-30S6,0,6,0H33"></path>
				</svg>
			</div>
			<div class="dialog-inner">
				<h2><strong><?php esc_html_e('Dashboard', 'admin-custom-login');?></strong> <?php esc_html_e('Setting Save Successfully', 'admin-custom-login');?></h2><div><button class="action dialog-button-close" data-dialog-close id="dialog-close-button" ><?php esc_html_e('Close', 'admin-custom-login');?></button></div>
			</div>
		</div>
	</div>

	<button data-dialog7="somedialog7" class="dialog-button7"><?php esc_html_e('Open Dialog', 'admin-custom-login')?></button>
	<div id="somedialog7" class="dialog">
		<div class="dialog__overlay"></div>
		<div class="dialog__content">
			<div class="morph-shape" data-morph-open="M33,0h41c0,0,0,9.871,0,29.871C74,49.871,74,60,74,60H32.666h-0.125H6c0,0,0-10,0-30S6,0,6,0H33" data-morph-close="M33,0h41c0,0-5,9.871-5,29.871C69,49.871,74,60,74,60H32.666h-0.125H6c0,0-5-10-5-30S6,0,6,0H33">
				<svg xmlns="" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none">
					<path d="M33,0h41c0,0-5,9.871-5,29.871C69,49.871,74,60,74,60H32.666h-0.125H6c0,0-5-10-5-30S6,0,6,0H33"></path>
				</svg>
			</div>
			<div class="dialog-inner">
				<h2><strong><?php esc_html_e('Dashboard', 'admin-custom-login')?></strong> <?php esc_html_e('Setting Reset Successfully', 'admin-custom-login')?></h2><div><button class="action dialog-button-close" data-dialog-close id="dialog-close-button7" ><?php esc_html_e('Close', 'admin-custom-login')?></button></div>
			</div>
		</div>
	</div>
	<div class="panel panel-primary save-button-block">
		<div class="panel-body">
				<button type="button" onclick="return Custom_login_dashboard('dashboardSave', '');" class="btn btn-info btn-lg"><?php esc_html_e('Save Changes', 'admin-custom-login');?></button>
				<button type="button" onclick="return Custom_login_dashboard('dashboardReset', '');" class="btn btn-primary btn-lg"><?php esc_html_e('Reset Default', 'admin-custom-login');?></button>
		</div>
	</div>
</div>
<!-- /row -->


<?php

add_action('admin_enqueue_scripts', 'dashboard_print_scripts');
function dashboard_print_scripts() {
	wp_enqueue_script('wl-acl-dashboard',WEBLIZAR_NALF_PLUGIN_URL.'js/dashboard.js');
	wp_add_inline_script('wl-acl-dashboard');
}

if(isset($_POST['Action'])) {
	$Action = sanitize_text_field($_POST['Action']);

	//Save
	if($Action == "dashboardSave") {
		if( ! wp_verify_nonce( $_POST['nonce_ajax'], 'weblizar_admin_nonce' ) ) {
			die('Not authorized');
		}
		else {
			$dashboard_status = sanitize_text_field($_POST['dashboard_status']);
			// save values in option table
			$dashboard_page= serialize(array(
				'dashboard_status' => $dashboard_status
			));
			update_option('Admin_custome_login_dashboard', $dashboard_page);
		}
	}
	if($Action == "dashboardReset") {
		if( ! wp_verify_nonce( $_POST['nonce_ajax'], 'weblizar_admin_nonce' ) ) {
			die('Not authorized');
		}
		else {
			$dashboard_page= serialize(array(
				'dashboard_status' => 'disable'
			));
			update_option('Admin_custome_login_dashboard', $dashboard_page);
		}
	}
}
?>
