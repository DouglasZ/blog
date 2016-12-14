(function(){
    $('.answer-comment').click(function( event ){
        var id = $(event.currentTarget).attr('id');
        $('.show-answer-comment.comment-'+id).toggle();
    });

})();