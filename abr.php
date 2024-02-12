<?php
/**
 * Plugin Name:       Abr
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       abr
 * Domain Path:       /languages
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [abr] && [ABR] ===> Prefix
  */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( ! class_exists( 'Abr_Blocks' ) ) {

	final class Abr_Blocks {

		protected static $instance = null;

		/**
		 * Constructor
		 * @return void
		 */
		public function __construct() {
			$this->define_constants();
			$this->includes();
		}

		/**
		 * Definte the plugin constants
		 * @return void
		 */
		public function define_constants() {
			define( 'ABR_VERSION', '1.0.0' );
			define( 'ABR_DIR', __DIR__ );
			define( 'ABR_URL', plugin_dir_url( __FILE__ ) );
			define( 'ABR_PATH', plugin_dir_path( __FILE__ ) );
		}

		/**
		 * Include all the required files
		 * @return void
		 */
		public function includes() {
			require_once __DIR__ . '/includes/loader.php';
		}

		/**
		 * Initialize the plugin
		 * @return \Abr_Blocks
		 */
		public static function init() {
			if( is_null( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}
	}
}

/**
 * Initialize the plugin
 * @return \Abr_Blocks
 */
function abr_blocks_init() {
	return Abr_Blocks::init();
}

// kick-off the plugin
abr_blocks_init();
