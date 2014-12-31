<script>
(function($){
	var lightbox = {
		create: function(){
			$('.lightbox')
				.wrap('<div class="lightbox_container"></div>')
				.prepend('<span class="close_button">close</span>')
				.each(function(){
					var $this = $(this),
						dataShow = "show." + $this.data('link'),
						hide = "hide." + $this.data('link');
					$this.on(dataShow, function(){
						$(this).closest('.lightbox_container').fadeIn(600);
					})
					$this.on(hide, function() {
						$(this).closest('.lightbox_container').fadeOut(600);
					});				
				})
			$('.lightbox_container').hide();
			this.init();
			},
		init: function() {
			$('.lightbox_activator').on('click', function(e){			
				e.preventDefault();
				var show = "show." + $(this).data('link');
				$('.lightbox').trigger(show);
			});
			$('.close_button').on('click', function(){
				var hide = "hide." + $(this).closest('.lightbox').data('link');
				$('.lightbox').trigger(hide);
			});
		}
	}

	lightbox.create();
})(jQuery)
</script>
