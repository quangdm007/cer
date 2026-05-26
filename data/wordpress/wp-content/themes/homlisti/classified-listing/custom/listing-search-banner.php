<?php
/**
 * @author  RadiusTheme
 * @since   1.0
 * @version 1.0
 */

namespace radiustheme\HomListi;

use Rtcl\Helpers\Functions;
use RtclPro\Helpers\Fns;

$currency = Functions::get_currency_symbol();
extract( $data );
$loc_text = esc_attr__( 'Select Location', 'homlisti' );
$typ_text = esc_attr__( 'Select Type', 'homlisti' );
$cat_text = esc_attr__( 'Select Category', 'homlisti' );

$is_form_visible = ( $can_search_by_category || $can_search_by_keyword || $can_search_by_listing_types || $can_search_by_location || $can_search_by_radius_search );
if ( $is_form_visible === false ) {
	printf( '<div class="alert alert-danger text-center" role="alert"><i class="fas fa-info-circle mr-2"></i>%s</div>',
		esc_html__( 'Please choose at least one or more fields for showing the widget', 'homlisti' ) );
	return;
}

?>

<div class="banner-box banner-layout-<?php echo esc_attr( $layout ); ?>">
    <form action="<?php echo esc_url( Functions::get_filter_form_url() ); ?>"
          class="advance-search-form rtcl-widget-search-form">
		<?php $permalink_structure = get_option( 'permalink_structure' ); ?>
		<?php if ( ! $permalink_structure ) : ?>
            <input type="hidden" name="post_type" value="rtcl_listing">
		<?php endif; ?>

		<?php if ( $can_search_by_category && ( 'home1' == $layout || '' == $layout ) ): ?>
            <div class="listing-category-list">

                <div class="search-item rtin-category search-radio search-radio-check">
                    <ul class="list-inline">
						<?php
						$terms = get_terms( [
							'taxonomy'   => rtcl()->category,
							'hide_empty' => true,
						] );
						foreach ( $terms as $term ) {
							$term_icon     = get_term_meta( $term->term_id, '_rtcl_icon', true );
							$term_img      = get_term_meta( $term->term_id, '_rtcl_image', true );
							$term_img_html = wp_get_attachment_image( $term_img, 'full' );
							?>
                            <li class="<?php echo esc_attr( $term->slug ) ?>">
                                <label for="<?php echo esc_attr( $term->slug ) ?>"
                                       class="<?php //echo esc_attr( $is_active ); ?>">
									<?php
									if ( 'image' == $icon && $term_img_html ) {
										printf( "<div class='category-image'>%s</div>", $term_img_html );
									} elseif ( $term_icon ) {
										printf( "<i class='rtcl-icon rtcl-icon-%s'></i>", esc_attr( $term_icon ) );
									} elseif ( $term_img ) {
										printf( "<div class='category-image'>%s</div>", $term_img_html );
									}
									?>
                                    <span><?php echo esc_html( $term->name ) ?></span>
                                    <input
										<?php //echo esc_attr( $is_checked ); ?>
                                            type="radio"
                                            name="<?php echo esc_attr( 'rtcl_category' ) ?>"
                                            id="<?php echo esc_attr( $term->slug ) ?>"
                                            value="<?php echo esc_attr( $term->slug ) ?>"
                                    >
                                </label>
                            </li>
							<?php
						}
						?>
                    </ul>
                </div>

            </div>
		<?php endif; ?>

		<?php if ( $can_search_by_listing_types && ( $layout && 'home4' == $layout ) ): ?>
            <div class="ad-type-wrapper search-radio-check">
                <ul class="list-inline">
					<?php
					$listing_types = Functions::get_listing_types();
					$listing_types = empty( $listing_types ) ? [] : $listing_types;
					?>
					<?php foreach ( $listing_types as $key => $listing_type ): ?>
                        <li>
                            <label for="<?php echo esc_attr( $key ); ?>"
                                   class="<?php //echo esc_attr( $is_active ); ?>">

                                <span><?php echo esc_html( $listing_type ); ?></span>
                                <input
									<?php //echo esc_attr( $is_checked ); ?>
                                        class="sr-only"
                                        type="radio"
                                        name="<?php echo esc_attr( 'filters[ad_type]' ) ?>"
                                        id="<?php echo esc_attr( $key ); ?>"
                                        value="<?php echo esc_attr( $key ); ?>"
                                >
                            </label>
                        </li>
					<?php endforeach; ?>
                </ul>
            </div>
		<?php endif; ?>


        <div class="search-box">

			<?php if ( $can_search_by_keyword ): ?>
                <div class="search-item search-keyword search-select">
                    <div class="input-group">
                        <input type="text" data-type="listing" name="s" class="rtcl-autocomplete form-control"
                               placeholder="<?php esc_attr_e( 'Enter Keyword here ...', 'homlisti' ); ?>"
                               value="<?php if ( isset( $_GET['s'] ) ) {
							       echo sanitize_text_field( wp_unslash( $_GET['s'] ) );
						       } ?>"/>
                    </div>
                </div>
			<?php endif; ?>

			<?php if ( $can_search_by_category && ( $layout && 'home1' != $layout ) ): ?>
                <div class="search-item search-select rtin-category">
					<?php
					wp_dropdown_categories( [
						'show_option_none'  => $cat_text,
						'option_none_value' => '',
						'taxonomy'          => rtcl()->category,
						'name'              => 'rtcl_category',
						'id'                => 'rtcl-category-search-' . wp_rand(),
						'class'             => 'select2 rtcl-category-search',
						'selected'          => get_query_var( 'rtcl_category' ),
						'hierarchical'      => true,
						'value_field'       => 'slug',
						'depth'             => Functions::get_category_depth_limit(),
						'show_count'        => false,
						'hide_empty'        => false,
					] );
					?>
                </div>
			<?php endif; ?>

			<?php if ( $can_search_by_listing_types && ( $layout && 'home4' != $layout ) ): ?>
                <div class="search-item search-select">
                    <select class="select2" name="filters[ad_type]"
                            data-placeholder="<?php echo esc_attr( $typ_text ); ?>">
                        <option value=""><?php echo esc_html( $typ_text ); ?></option>
						<?php
						$listing_types = Functions::get_listing_types();
						$listing_types = empty( $listing_types ) ? [] : $listing_types;
						?>
						<?php foreach ( $listing_types as $key => $listing_type ): ?>
                            <option value="<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $listing_type ); ?></option>
						<?php endforeach; ?>
                    </select>
                </div>
			<?php endif; ?>



			<?php if ( method_exists( 'Rtcl\Helpers\Functions', 'location_type' ) && $can_search_by_location && 'local' === Functions::location_type() ): ?>
                <div class="search-item search-select rtin-location">
					<?php
					wp_dropdown_categories( [
						'show_option_none'  => $loc_text,
						'option_none_value' => '',
						'taxonomy'          => rtcl()->location,
						'name'              => 'rtcl_location',
						'id'                => 'rtcl-location-search-' . wp_rand(),
						'class'             => 'select2 rtcl-location-search',
						'selected'          => get_query_var( 'rtcl_location' ),
						'hierarchical'      => true,
						'value_field'       => 'slug',
						'depth'             => Functions::get_location_depth_limit(),
						'show_count'        => false,
						'hide_empty'        => true,
					] );
					?>
                </div>
			<?php endif; ?>

			<?php if ( $can_search_by_radius_search ): ?>
                <div class="search-item search-keyword rtcl-radius-group">
                    <div class="input-group rtcl-geo-address-field">
                        <input id="rtcl-geo-address-search" type="text" name="geo_address" autocomplete="off"
                               value="<?php echo ! empty( $_GET['geo_address'] ) ? esc_attr( $_GET['geo_address'] ) : '' ?>"
                               placeholder="<?php esc_attr_e( "Enter location", "homlisti" ) ?>"
                               class="form-control rtcl-geo-address-input"/>
                        <i class="rtcl-get-location rtcl-icon rtcl-icon-target"></i>
                        <input type="hidden" class="latitude" name="center_lat"
                               value="<?php echo ! empty( $_GET['center_lat'] ) ? esc_attr( $_GET['center_lat'] ) : '' ?>">
                        <input type="hidden" class="longitude" name="center_lng"
                               value="<?php echo ! empty( $_GET['center_lng'] ) ? esc_attr( $_GET['center_lng'] ) : '' ?>">
                    </div>
                </div>
				<?php if ( $can_search_by_radius_distance ) :
					$default_radius = apply_filters( 'homlisti_widget_default_radius', '' );
					?>
                    <div class="search-item search-radius">
                        <div class="input-group">
                            <div class="rtcl-search-input-button">
                                <input type="number" class="form-control" name="distance"
                                       value="<?php echo ! empty( $_GET['distance'] ) ? absint( $_GET['distance'] ) : $default_radius ?>"
                                       placeholder="<?php esc_attr_e( "Radius", "homlisti" ); ?>">
                            </div>
                        </div>
                    </div>
				<?php endif; ?>
			<?php endif ?>

            <div class="search-item search-btn">
				<?php if ( $can_search_by_custom_field ): ?>
                    <button class="advanced-btn collapsed" type="button"><i class="fas fa-sliders-h"></i></button>
				<?php endif; ?>
                <button type="submit" class="submit-btn">
					<?php esc_html_e( 'Search', 'homlisti' ); ?>
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
		<?php if ( $can_search_by_custom_field ): ?>
            <div class="advanced-search-box" id="advanced-search">
                <div class="advanced-box advanced-banner-box">

					<?php
					$args      = [
						'is_searchable' => true,
					];
					$fields_id = Functions::get_cf_ids( $args );

					$html = '';
					foreach ( $fields_id as $field ) {
						$html .= Listing_Functions::get_advanced_search_field_html( $field );
					}
					printf( "%s", $html );
					?>
					<?php if ( $can_search_by_price ): ?>
                        <div class="search-item">
                            <div class="price-range">
                                <label><?php esc_html_e( 'Price', 'homlisti' ); ?></label>
								<?php
								$data_form = '';
								$data_to   = '';
								if ( isset( $_GET['filters']['price']['min'] ) ) {
									$data_form .= sprintf( "data-from=%s", absint( $_GET['filters']['price']['min'] ) );
								}
								if ( isset( $_GET['filters']['price']['max'] ) && ! empty( $_GET['filters']['price']['max'] ) ) {
									$data_to .= sprintf( "data-to=%s", absint( $_GET['filters']['price']['max'] ) );
								}

								$_min_price = ( isset( $min_price ) && ! empty( $min_price ) ) ? $min_price : 0;
								$_max_price = ( isset( $max_price ) && ! empty( $max_price ) ) ? $max_price : 5000;

								$_min_price = apply_filters( 'rtcl_raw_price', $_min_price );
								$_max_price = apply_filters( 'rtcl_raw_price', $_max_price );

								global $rtclmcData;
								if ( ! is_array( $rtclmcData ) && class_exists( 'RtclMc_Frontend_Price_Filters' ) ) {
									$RtclMc_Frontend_Price_Filters = new \RtclMc_Frontend_Price_Filters();
									$rtclmcData                    = $RtclMc_Frontend_Price_Filters->getCurrencyData();
								}

								$currency_symbol = Functions::get_currency_symbol();
								if ( isset( $rtclmcData['currency'] ) && ! empty( $rtclmcData['currency'] ) ) {
									$currency_symbol = Functions::get_currency_symbol( $rtclmcData['currency'] );
								}

								?>

                                <input type="number" class="ion-rangeslider"
									<?php echo esc_attr( $data_form ); ?>
									<?php echo esc_attr( $data_to ); ?>
                                       data-min="<?php echo esc_attr( $_min_price ) ?>"
                                       data-max="<?php echo esc_attr( $_max_price ) ?>"
                                       data-prefix="<?php echo esc_attr( $currency_symbol ) ?>"/>
                                <input type="hidden" class="min-volumn" name="filters[price][min]"
                                       value="<?php if ( isset( $_GET['filters']['price']['min'] ) ) {
									       echo absint( $_GET['filters']['price']['min'] );
								       } ?>">
                                <input type="hidden" class="max-volumn" name="filters[price][max]"
                                       value="<?php if ( isset( $_GET['filters']['price']['max'] ) ) {
									       echo absint( $_GET['filters']['price']['max'] );
								       } ?>">
                            </div>
                        </div>
					<?php endif; ?>
                </div>
            </div>
		<?php endif; ?>
    </form>
</div>
