// To show more and less in experience details

$(".show-more").on('click', function() {
  $(this).parent().children(".cible").toggleClass("showContent");

  var replaceText = $(this).parent().children(".cible")
                      .hasClass("showContent") 
                      ?
                      "...see less"
                      :
                      "see more...";
  $(this).text(replaceText);

});
