function showDescription(descript) {
    $('#description').html("Description" + descript);
}

function hideDescription() {
    $('#description').html("");
}

function checkValid() {
    var zip = $("#zip").val();
    if (isNaN(zip)) {
        alert("You didn't put in a a number");
        return false;
    }
    if (zip.length !=0 && zip.length != 5) {
        alert("Put in 5 digits");
        return false;
    }
    return true;
}

