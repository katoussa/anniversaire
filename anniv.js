$clic= $("#clic");
$phrase1 = $("#phrase1");
$phrase2 = $("#phrase2");
$phrase3 = $("#phrase3");
$clic1 = $("#clic1");
$clic2 = $("#clic2");
$clic3 = $("#clic3");
$annivOne = $(".annivOne");
$body = $("body");


$clic.on("click", function() {
	var $this = $(this);
    $this.remove();
    $phrase1.append("Aujourd'hui est un jour spécial...");
    $phrase1.addClass("newPhrase1");
    $clic1.append("Clique ici !");
    $clic1.addClass("newClic1");
});

$clic1.on("click", function() {
	var $this = $(this);
    $this.remove();
    $phrase2.append("Tu sais de quoi je veux parler?");
    $phrase2.addClass("newPhrase2");
    $clic2.append("Clique ici !");
    $clic2.addClass("newClic2");
});

$clic2.on("click", function() {
	var $this = $(this);
    $this.remove();
    $phrase3.append("C'est ton anniversaire! Tu as 9 ans!");
    $phrase3.addClass("newPhrase3");
    $clic3.append("Clique ici !");
    $clic3.addClass("newClic3");
});

$clic3.on("click", function() {
	var $this = $(this);
    $this.remove();
    $phrase1.addClass("lastPhrase1");
    $phrase2.addClass("lastPhrase2");
    $phrase3.addClass("lastPhrase3");
	$body.addClass("lastBody");
	$annivOne.addClass("lastannivOne"); 
	$phrase1.html("JOYEUX");
    $phrase2.html("ANNIVERSAIRE");
    $phrase3.html("HILEL!!!"); 
});