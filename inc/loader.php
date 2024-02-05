<?php 
/**
 * Plugin Main Loader File
 * 
 * @boilerplate
 */

 if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

 if( ! class_exists( 'Abr_Blocks_Loader' ) ) {

    class Abr_Blocks_Loader {

        /**
         * Constructor
         * @return void
         */
        public function __construct() {
            $this->includes();
        }

        /**
         * Include all the required files
         * @return void
         */
        public function includes() {
            require_once ABR_PATH . 'inc/classes/blocks-category.php';
            require_once ABR_PATH . 'inc/classes/blocks-register.php';
            require_once ABR_PATH . 'inc/classes/blocks-style.php';
        }

    }

 }

 new Abr_Blocks_Loader(); // Initialize the class instance