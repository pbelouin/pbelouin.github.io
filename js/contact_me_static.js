$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');


var $contactForm = $('#contactForm');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/pbelouin@icloud.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $contactForm.append('<div class="alert alert-info"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i>&nbsp;Sending message…</div>');
        },
        success: function(data) {
            $contactForm.find('.alert-info').hide();
            $contactForm.append('<div class="alert alert-success alert-dismissable">Message sent!<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>');
        },
        error: function(err) {
            $contactForm.find('.alert-info').hide();
            $contactForm.append('<div class="alert alert-error  alert-dismissable">Ops, there was an error.<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>');
        }
    });
});
});
