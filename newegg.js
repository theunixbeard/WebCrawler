var page = new WebPage();
page.open("http://www.newegg.com/Product/Product.aspx?Item=N82E16834158003", function (status) {
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        console.log(page.evaluate(function () {
            var text = 'Newegg:';
			text += $('#singleFinalPrice').text().replace('Now:  ','');
			return text;
        }));
		phantom.exit();
    });
});
