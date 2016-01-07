(function() {
    var i, option;
    var bitrate = document.getElementById("download_bitrate");
    if (bitrate === null) {
        return;
    }

    var optionLength = bitrate.options.length;
    var min = bitrate.options[0];
    for (i = 1; i < optionLength; ++i) {
        option = bitrate.options[i];
        if (parseInt(min.value) > parseInt(option.value)) {
            min = option;
        }
    }
    min.selected = true;
}());
