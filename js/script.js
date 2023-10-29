$(document).ready(function () {
    // Accordion
    $('.accordion .accordion-label').on('click', function (e) {
        e.preventDefault();
        let $this = $(this);

        // Check if the clicked panel is already showing
        if ($this.hasClass('showing')) {
            $this.removeClass('showing');
            $this.next('.accordion-content').slideUp();
        } else {
            // Hide other panels
            $('.accordion .accordion-label.showing').removeClass('showing');
            $('.accordion .accordion-content:visible').slideUp();

            // Show the panel that was clicked
            $this.addClass('showing');
            $this.next('.accordion-content').slideDown();
        }
    });

    // Tab panels
    $('.tabbed-section .tab').on('click', function (e) {
        e.preventDefault();

        // Remove the 'active' class from all tabs
        $('.tabbed-section-tabs .tab').removeClass('active');

        // Hide all tab contents
        $('.tabbed-section-content > div').hide();

        // Make the clicked tab active
        $(this).addClass('active');

        // Find the corresponding tab content and show it
        let contentID = $(this).index(); // Assuming the index corresponds to the content div
        $('.tabbed-section-content > div').eq(contentID).show();
    });

    // Hide the career accordion panel by default
    $('.accordion-label:contains("Career")').removeClass('showing');
    $('.accordion-label:contains("Career")').next('.accordion-content').slideUp();
});