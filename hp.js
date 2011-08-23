var page = new WebPage();
page.open("http://www.shopping.hp.com/webapp/shopping/can.do?storeName=storefronts&landing=rts_tablet&category=rts_tablet&a1=Storage&v1=32GB&catLevel=2#bcAnchor", function (status) {
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        console.log(page.evaluate(function () {
            var text = 'HP:';
			text += $('.error').text();
			return text;
        }));
		phantom.exit();
    });
});
