(function() {
    var i, option;
    var bitrate = document.getElementById("download_bitrate");
    if (bitrate === null) {
        return;
    }

    var optionLength = bitrate.options.length;
    for (i = 0; i < optionLength; ++i) {
        option = bitrate.options[i];
        if (option.value == 300 || option.value == 500) {
            option.selected = true;
            break;
        }
    }
}());
