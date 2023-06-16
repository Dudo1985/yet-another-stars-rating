<?php

/**
 * This class is a collection of methods to print settings description
 *
 * @author Dario Curvino <@dudo>
 * @since  3.4.1
 */
class YasrSettingsDescriptions {

    /**
     * Return the description of auto insert
     *
     * @author Dario Curvino <@dudo>
     * @since  2.6.6
     * @return string
     */
    public function descriptionAutoInsert() {
        $name = esc_html__('Auto Insert Options', 'yet-another-stars-rating');

        $description = sprintf(
            esc_html__(
                'Automatically adds YASR in your posts or pages. %s
            Disable this if you prefer to use shortcodes.', 'yet-another-stars-rating'
            ), '<br />'
        );

        return $this->settingsFieldDescription($name, $description);
    }

    /**
     * @author Dario Curvino <@dudo>
     * @since  2.6.6
     * @return string
     */
    public function descriptionStarsTitle() {
        $name = esc_html__('Enable stars next to the title?', 'yet-another-stars-rating');

        $description = esc_html__(
            'Enable this if you want to show stars next to the title.', 'yet-another-stars-rating'
        );
        $description .= '<br />';
        $description .= esc_html__('Please note that this may not work with all themes', 'yet-another-stars-rating');

        return $this->settingsFieldDescription($name, $description);
    }

    /**
     * @author Dario Curvino <@dudo>
     * @since  2.6.6
     * @return string
     */
    public function descriptionArchivePage() {
        $name = esc_html__('Archive Pages', 'yet-another-stars-rating');

        $description = esc_html__(
            'Here you can order your posts by ratings (please note that this may not work with all themes)
            and enable/disable ratings in your archive pages (homepage, categories, tags, etc.)',
            'yet-another-stars-rating'
        );

        return $this->settingsFieldDescription($name, $description);
    }

    /**
     * @author Dario Curvino <@dudo>
     * @since  2.6.6
     * @return string
     */
    public function descriptionAllowVote() {
        $name = esc_html__('Who is allowed to vote?', 'yet-another-stars-rating');

        $description = sprintf(
            esc_html__(
                'Select who can rate your posts for %syasr_visitor_votes%s and %syasr_visitor_multiset%s shortcodes',
                'yet-another-stars-rating'
            ), '<em>', '</em>', '<em>', '</em>'
        );

        return $this->settingsFieldDescription($name, $description);
    }

    /**
     * @author Dario Curvino <@dudo>
     * @since  2.6.6
     * @return string
     */
    public function descriptionVVStats() {
        $name = esc_html__('Show stats for visitors votes?', 'yet-another-stars-rating');

        $description = sprintf(
            esc_html__(
                'Enable or disable the chart bar icon (and tooltip hover it) next to the %syasr_visitor_votes%s shortcode',
                'yet-another-stars-rating'
            ), '<em>', '</em>'
        );

        return $this->settingsFieldDescription($name, $description);
    }

    /**
     * @author Dario Curvino <@dudo>
     * @since  2.6.6
     * @return string
     */
    public function descriptionCSTMTxt() {
        $name = esc_html__('Customize strings', 'yet-another-stars-rating');

        $description = '<p>' . esc_html__('Customize YASR strings.', 'yet-another-stars-rating') . '</p>';

        return $this->settingsFieldDescription($name, $description);
    }

    /**
     * @author Dario Curvino <@dudo>
     * @since  2.6.6
     * @return string
     */
    public function descriptionStructuredData() {
        $name = esc_html__('Structured data options', 'yet-another-stars-rating');

        $description = esc_html__(
            'If ratings in a post or page are found, YASR will create structured data to show them in search results
    (SERP)', 'yet-another-stars-rating'
        );
        $description .= '<br /><a href="https://yetanotherstarsrating.com/docs/rich-snippet/reviewrating-and-aggregaterating/?utm_source=wp-plugin&utm_medium=settings_resources&utm_campaign=yasr_settings&utm_content=yasr_rischnippets_desc"
                        target="_blank">';
        $description .= esc_html__('More info here', 'yet-another-stars-rating');
        $description .= '</a>';

        return $this->settingsFieldDescription($name, $description);
    }

    /**
     * Return the title and the setting description
     *
     * @author Dario Curvino <@dudo>
     *
     * @since 3.4.1
     *
     * @param $title
     * @param $description
     *
     * @return string
     */
    public function settingsFieldDescription($title, $description) {
        $div_desc    = '<div class="yasr-settings-description">';
        $end_div     = '.</div>';

        return $title . $div_desc . $description . $end_div;
    }
}