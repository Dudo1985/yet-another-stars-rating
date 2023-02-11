<?php

/*

Copyright 2014 Dario Curvino (email : d.curvino@gmail.com)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>
*/

if (!defined('ABSPATH')) {
    exit('You\'re not allowed to see this page');
} // Exit if accessed directly

if (!current_user_can('manage_options')) {
    /** @noinspection ForgottenDebugOutputInspection */
    wp_die(__('You do not have sufficient permissions to access this page.', 'yet-another-stars-rating'));
}

?>

<div class="wrap">
    <h2>Yet Another Stars Rating: <?php esc_html_e("Ratings Stats", 'yet-another-stars-rating'); ?></h2>

    <?php
        settings_errors();

        if (isset($_GET['tab'])) {
            $active_tab = $_GET['tab'];
        } else {
            $active_tab = 'logs';
        }

        YasrStats::printTabs($active_tab);
    ?>
    <div class="yasr-settingsdiv yasr-settings-table">
        <div class="yasr-settings-table">
            <?php

                if ($active_tab === 'logs' || $active_tab === '') {
                    ?>
                    <form action="#" id="" method="POST">
                        <?php
                            wp_nonce_field('yasr-delete-stats-logs', 'yasr-nonce-delete-stats-logs');
                            $yasr_stats_log_table = new YasrStatsListTable($active_tab);
                            $yasr_stats_log_table->prepare_items();
                            $yasr_stats_log_table->display();
                        ?>
                    </form>

                    <?php

                } //End if tab 'logs'

                if ($active_tab === 'logs_multi') {
                    ?>
                    <form action="#" id="" method="POST">
                        <?php
                            wp_nonce_field('yasr-delete-stats-logs', 'yasr-nonce-delete-stats-logs');
                            $yasr_stats_log_table = new YasrStatsListTable($active_tab);
                            $yasr_stats_log_table->prepare_items();
                            $yasr_stats_log_table->display();
                        ?>
                    </form>
                    <?php

                } //End if tab 'general_settings'

                if ($active_tab === 'overall') {
                    ?>
                    <form action="#" id="" method="POST">
                        <?php
                        wp_nonce_field('yasr-delete-stats-logs', 'yasr-nonce-delete-stats-logs');
                        $yasr_stats_log_table = new YasrStatsListTable($active_tab);
                        $yasr_stats_log_table->prepare_items();
                        $yasr_stats_log_table->display();
                        ?>
                    </form>
                    <?php

                } //End if tab 'overall'

                /**
                 * Hook here to add new settings tab content
                 */
                do_action('yasr_stats_tab_content', $active_tab);
            ?>
        </div>
    </div>

    <div class="yasr-clear-both-dynamic"></div>

    <?php YasrSettings::printRightColumn(); ?>

</div><!--End div wrap-->