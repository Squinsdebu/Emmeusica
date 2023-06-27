$("document").ready(() => {
// visualizzazione dei prodotti per categoria
    $('#btnPianoforti').on('click', function () {
        $('.Pianoforti').toggle();
        let currentText = $(this).text();
        let newText = currentText === "Pianoforti" ? "Nascosto" : "Pianoforti";
        $(this).text(newText);
    });
    $('#btnChitarre').on('click', function () {
        $('.Chitarre').toggle();
        let currentText1 = $(this).text();
        let newText1 = currentText1 === "Chitarre" ? "Nascosto" : "Chitarre";
        $(this).text(newText1);
    });
    $('#btnAccessori').on('click', function () {
        $('.Accessori').toggle();
        let currentText1 = $(this).text();
        let newText1 = currentText1 === "Accessori" ? "Nascosto" : "Accessori";
        $(this).text(newText1);
    });
    $('#btnTutti').on('click', function () {
        $('.Accessori').toggle();
        $('.Chitarre').toggle();
        $('.Pianoforti').toggle();
        let currentText1 = $(this).text();
        let newText1 = currentText1 === "Tutti" ? "Nascosto" : "Tutti";
        $(this).text(newText1);
    });


});
