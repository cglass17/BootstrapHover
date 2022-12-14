// Import stylesheets
import './style.css';
// Import Jquery
import $ from 'jquery';
//Import Bootstrap
import 'bootstrap';

$(document).ready(function () {
  $("[data-bs-toggle='dropdown']").each(function (index) {
    $(this).mouseenter(function (event) {
      event.stopPropagation();
      $(this).parent().children().addClass('show');
    });
  });
});