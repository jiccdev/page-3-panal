(($) => {
  ('use strict');

  // Default btn grid view
  $('.btn-grid').addClass('active');
  $('.properties .row .col-property-item').addClass('col-lg-4');

  // List Propertiy items
  $('.btn-list').click(() => {
    $('.btn-grid').removeClass('active');
    $('.btn-list').addClass('active');
    $('.properties .row .col-property-item').addClass('col-lg-12');
    $('.outstanding-properties .property-item').removeClass('flex-column ');
    $('.card-body .more-info').addClass('mt-5');
    $('.outstanding-properties .property-item').addClass(
      'flex-row align-items-center'
    );
    $('.card-body').addClass('px-5');
  });

  // Grid Propertiy items
  $('.btn-grid').click(() => {
    $('.btn-list').removeClass('active');
    $('.btn-grid').addClass('active');
    $('.properties .row .col-property-item').removeClass('col-lg-12');
    $('.properties .row .col-property-item').addClass('col-lg-4');
    $('.outstanding-properties .property-item').addClass('flex-row');
    $('.card-body .more-info').removeClass('mt-5');
    $('.outstanding-properties .property-item').removeClass(
      'flex-row align-items-center'
    );
    $('.card-body').removeClass('px-5');
  });
})($);
