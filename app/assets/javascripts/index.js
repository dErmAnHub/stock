$(function(){
  function buildListProperty(id) {
    var html = `<div class= "list-property">
                  <div>
                    <span>
                      <i class="fas fa-truck-loading link-ship"></i>
                    </span>
                    <span>
                      <a href="/products/${id}/edit">
                        <i class="fas fa-edit link-edit"></i>
                      </a>
                    </span>
                    <span>
                      <i class="fas fa-trash-alt link-trash" id="modal-open-btn"></i>
                      <div id= "overlay">
                        <div id="modalWindow">
                          <div class="modal-message-box">
                            <div>確認</div>
                            <div>本当に削除しますか？</div>
                          </div>
                          <button id="modal-close-btn">キャンセル</button>
                          <button id="delete-comformation-btn">削除する</button>
                          <a data-method="delete" href="/products/${id}" id="delete-comformation-link"></a>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>`;
    return html;
  }

  // // リストにカーソルを合わせた時の動作
  $(".index__main__list__content").hover(
    function() {
      var id = $(this).data('id');
      $(this).append(buildListProperty(id));
    },
    function() {
      $('.list-property').remove();
    }
  );

// 削除確認モーダルの表示・動作
  $(document).on('click', '#modal-open-btn', function(e){
    $('#overlay').fadeIn();
    $(document).on('click','#modal-close-btn', function(){
      $('#overlay').fadeOut();
    });
  
    $(document).on('click','#delete-comformation-btn', function(){
      $('#delete-comformation-link').click();
      $('#overlay').fadeOut();
    });
  });
});