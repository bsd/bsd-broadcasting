jQuery(document).ready(function($) {
  $('form').h5Validate();
  // handle social share buttons
  $('.button--share').on('click', function(e) {
    e.preventDefault();
    var $target = $(e.currentTarget),
      url;
    if ($target.data('tweet') && $target.data('tweet') !== '') {
      var tweet = $target.data('tweet');
      url = 'https://www.twitter.com/intent/tweet?text=' + encodeURIComponent(tweet);
    } else if ($target.data('share') && $target.data('share') !== '') {
      var shareLink = $target.data('share');
      url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareLink);
    }
    if (url) {
      window.open(url, '','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
    } else {
      return false;
    }
  });
});