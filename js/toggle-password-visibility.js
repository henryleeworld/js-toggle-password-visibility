$(document).ready(function() {
    $("#toggle_visibility").on('click', function(event) {
        event.preventDefault();
        toggleVisibility();
    });
});

function toggleVisibility() {
    console.log('111');
    if ($('#show_hide_password input').attr("type") == "text") {
        $('#show_hide_password input').attr('type', 'password');
        $('#show_hide_password i').addClass("fa-eye-slash");
        $('#show_hide_password i').removeClass("fa-eye");

        $('#checkbox_toggle_visibility').prop('checked', false);

    } else if ($('#show_hide_password input').attr("type") == "password") {
        $('#show_hide_password input').attr('type', 'text');
        $('#show_hide_password i').removeClass("fa-eye-slash");
        $('#show_hide_password i').addClass("fa-eye");

        $('#checkbox_toggle_visibility').prop('checked', true);
    }
}