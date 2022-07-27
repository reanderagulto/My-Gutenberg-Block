<?php
/**
 * Plugin Name: AIOS Custom Block
 * Description: Basic Gutenberg Custom Block
 * */ 

 function aios_custom_block_script_register(){
    wp_enqueue_script(
        'aios-custom-block', 
        plugin_dir_url(__FILE__) . 'js/aios-custom-block.js', 
        array(
            'wp-blocks', 
            'wp-i18n', 
            'wp-editor'
        ), 
        true
    );
 }

 add_action('enqueue_block_editor_assets', 'aios_custom_block_script_register');

 ?>