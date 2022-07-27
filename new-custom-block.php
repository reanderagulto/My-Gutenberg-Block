<?php
/**
 * Plugin Name: My Custom Block
 * Description: Basic Gutenberg Custom Block
 * */ 

 function new_custom_block_script_register(){

    wp_enqueue_script('new-custom-block', plugin_dir_url(__FILE__) . 'custom-block.js');

 }

 add_action('enqueue_block_editor_assets', 'new_custom_block_script_register');

 ?>