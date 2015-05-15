$(document).ready(function() {
    $('#eater')[0].addEventListener("dragenter", dragenterCallback);
    $('#eater')[0].addEventListener("dragleave", dragleaveCallback);
    $('#eater')[0].addEventListener("dragover", dragoverCallback);
    $('#eater')[0].addEventListener("drop", dropCallback);
})

var dragenterCallback = function(e) {}

var dragleaveCallback = function(e) {
    $('#messages').text("把蘋果拿回來！ 求你了！！ plz.......( TДT)");
}

var dragoverCallback = function(e) {

    $('#messages').text("什麼！你要給我吃蘋果嗎(〃∇〃)");


    e.preventDefault();
}

var dropCallback = function(e) {
    e.preventDefault();
    var files = e.dataTransfer.files;
    var fileReader = new FileReader();
	fileReader.onloadend = function() {
		var text = fileReader.result;
		if(hasApple(text))
			isPoisonous(text);
	}
	fileReader.readAsText(files[0]);
}


var hasApple = function(text) {
	if(text.match(/[aA][pP][pP][lL][eE]|蘋果/) == null)
	{
		$('#messages').text("你這個大騙子～我的蘋果呢ヽ(`Д´)ﾉ");
		return false;
	}
	return true;
}

var isPoisonous = function(text) {
	if(text.match(/毒|[P|p][o|O][i|I][s|S][o|O][n|N][o|O][u|U][s|S]/))
	{
		$('#messages').text("幹～你想毒死我....(`Д´)ﾉ");
		$('#eater').addClass('poisonous');
	} else {
		$('#messages').text("愛泥喔～（♥ω♥） ");
		$('#eater').addClass('smile');
	}
}