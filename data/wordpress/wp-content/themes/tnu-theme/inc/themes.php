<?php
    add_theme_support( 'post-thumbnails' );
    
function wpdocs_custom_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );


function initTheme(){

    //menu
    register_nav_menu('header-menu',__( 'Menu chính' ));
    register_nav_menu('menu-top-blog',__( 'Menu Top' ));
    //sidebar
    if(function_exists('register_sidebar')){
        register_sidebar(array(
            'name'=>'Top Bar',
            'id' => 'topbar',
            'before_widget' => '<div class="eaof-topbar__content">',
            'after_widget'  => '</div>',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
        // home
        register_sidebar(array(
            'name'=>'Trang Chủ Khối 1',
            'id' => 'khoi1',
            'before_widget' => '<div class="eaof-enrollment-year__title">',
            'after_widget'  => '</div>',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
        
        register_sidebar(array(
            'name'=>'Form Đăng Ký',
            'id' => 'formeaof',
            'before_widget' => '<div class="formss">',
            'after_widget'  => '</div>',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
        // end home
        register_sidebar(array(
            'name'=>'Cột Bên Sidebar',
            'id' => 'sidebar',
            'before_widget' => '<div id="form-eaof" class="sidebar-left__forms">',
            'after_widget'  => '</div>',
            'before_title'  => '<h2><i class="fas fa-headset"></i>',
            'after_title'   => '</h2>',
        ));
        
        // Footer Cột 1
        register_sidebar(array(
            'name'=>'Footer Cột 1',
            'id' => 'footercol1',
            'before_widget' => '<ul>',
            'after_widget'  => '</ul',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
         // Footer Cột 2
        register_sidebar(array(
            'name'=>'Footer Cột 2',
            'id' => 'footercol2',
            'before_widget' => '<div class="vmc-blog-header-mb__logos">',
            'after_widget'  => '</div>',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
         // Footer Cột 3
        register_sidebar(array(
            'name'=>'Footer Cột 3',
            'id' => 'footercol3',
            'before_widget' => '<div class="vmc-blog-header-mb__logos">',
            'after_widget'  => '</div>',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
        
    }
}
add_action('init', 'initTheme');

// điều hướng search
function template_search_form($template)   
{    
    global $wp_query;   
    $post_type = get_query_var('post_type');   
    if( $wp_query->is_search && $post_type == 'post' )   
    {
        return locate_template('search-post.php');  //  redirect to 
    }   
    return $template;   
}
add_filter('template_include', 'template_search_form'); 