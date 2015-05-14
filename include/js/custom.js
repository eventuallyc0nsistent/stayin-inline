$(document).ready(function(){

	$('.btn-convert-to-inline').click(function(){
		
		var txtArea = $('#input-html').val();
		var htmlNodes = $.parseHTML(txtArea);
		var re = /([.#]?\w*[-_]?\w+)\s*{([^}]+)}/g;
		var styles = {};
		$.each(htmlNodes, function(i, node){
			if (node.tagName == 'STYLE'){
				var strippedText = node.textContent.replace(/\s{2,}/g, '');
				console.log(strippedText);
				var match;
				while ((match = re.exec(strippedText)) !== null) {
					styles[match[1]] = match[2];
				}
			};
		});
		var inputHtml = $.parseHTML(txtArea);
		$('div.hidden').append(inputHtml)
		$.each(styles, function(elem, css){
			var found = $('div.hidden').find(elem);
			$(found).attr('style', css);
		});
		$('.output-html').val($('div.hidden')[0].outerHTML);
	})
})