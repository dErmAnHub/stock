$(function(){
  function buildListProperty(id) {
    var html = `<div class= "list-property">
                  <div>
                  </div>
                  <div>
                    <span>
                      <i class="fas fa-truck-loading link-ship"></i>
                    </span>
                    <span>
                      <i class="fas fa-edit link-edit" data-link="/products/${id}/edit"></i>
                    </span>
                    <span>
                      <i class="fas fa-trash-alt link-trash"></i>
                    </span>
                  </div>
                </div>`;
    return html;
  }

  // リストにカーソルを合わせた時の動作
  $(".index__main__list__content").hover(
    function() {
      var id = $(this).data('id');
      $(this).append(buildListProperty(id));
    },
    function() {
      $('.list-property').remove();
    }
  );
  
  // 編集アイコンをクリックした時の動作
  $(".index__main__list__content").on('click', '.link-edit', function(){
    window.location = $(this).data("link")
  });
});