var page = new WebPage();
page.open("http://www.amazon.com/HP-TouchPad-9-7-Inch-Tablet-Computer/dp/B0055D67HW/ref=sr_1_1?ie=UTF8&qid=1313898257&sr=8-1", function (status) {
	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
		console.log(page.evaluate(function () {
			var text = 'Amazon:';
			text += $('.price:eq(1)').html();
			return text;
		}));
		phantom.exit();
	});
});

