<?php get_header(); ?>
    <div class="banner-post-detail">
        <div class="content">
            <div class="title">
                <h2>Tin Tức</h2>
                <i class="icofont-news"></i>
                <div class="breadcrumbs">
                   <?php
                    if ( function_exists('yoast_breadcrumb') ) {
                    yoast_breadcrumb('
                    <p id="breadcrumb">','</p>');
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
    <main class="post-detail">
        <div class="container">
            <div class="row">
                <div class="col-12 col-s-12 col-m-8 col-l-8 col-xl-8">
                    <div class="content">
                        <div class="title">
                            <h1><?php the_title(); ?>
                        </div>
                        <div class="content-post">
                            <div class="share-date">
                                <span><i class="icofont-clock-time"></i> 20/09/2022</span>
                                <ul>
                                    <li><a href=""><i class="fa-solid fa-thumbs-up"></i> Thích</a></li>
                                    <li><a href=""><i class="fa-solid fa-share"></i> Chia sẻ</a></li>
                                </ul>
                            </div>
                           <?php the_content(); ?>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-s-12 col-m-4 col-l-4 col-xl-4">
                    <div class="sidebar-post-detail">
                        <div class="post-new">
                            <div class="title">
                                <h2>Bài viết mới nhất</h2>
                            </div>
                            <div class="list">
								<?php 
								$args = array(
									'post_status' => 'publish', // Chỉ lấy những bài viết được publish
									'showposts' => 5, // số lượng bài viết
								);
								?>
								<?php $getposts = new WP_query($args); ?>
								<?php global $wp_query; $wp_query->in_the_loop = true; ?>
								<?php while ($getposts->have_posts()) : $getposts->the_post(); ?>
								<div class="item">
                                    <a href="<?php the_permalink();?>"><?php the_post_thumbnail('full'); ?></a>
                                    <h2><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
                                </div>
								<?php endwhile; wp_reset_postdata(); ?>
                                
                            </div>
                        </div>
                        <div class="tnu-tags">
                            <div class="title">
                                <h2>Tags</h2>
                            </div>
                            <ul>
                                <li><a href="">Tuyển sinh</a></li>
                                <li><a href="">Công nghệ thông tin</a></li>
                                <li><a href="">Ngôn ngữ anh</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
<?php get_footer() ?>