$("document").ready(() => {
    let immagine, nome, categoria, rimanenze, prezzo, descrizione;
    switch (data) {
        case "1":
            immagine = "../IMMAGINI_DB/ERG121U.jpg";
            nome = "YAMAHA CHITARRA ELETTRICA ERG121U BLACK";
            categoria = "Chitarre";
            rimanenze = "5";
            prezzo = "299,99";
            descrizione = "Così come per il modello EG112, la ERG121U ha lo stile e le linee delle Pacifica Yamaha con doppio cutaway ed è dotata di un sistema vibrato vintage molto efficiente oltre che di un manico full - scale affusolato che permette di accedere facilmente fino al 22° fret.I suoni sono più vicini all’heavy - rock grazie ai due humbucker posizionati sul ponte e sul manico e ai pickup single - coil in posizione centrale";
            break;
        case "2":
            immagine = "../IMMAGINI_DB/classica.PNG";
            nome = "Cort GA-My Bevel Natural";
            categoria = "Chitarre";
            rimanenze = "21";
            prezzo = "399,00";
            descrizione = "- Tavola: abete Sitka massiccio - Fondo e fasce: Myrtlewood - Schiena arcuata - Manico a giro: mogano - Tastiera e ponte: Ovangkol - 20 tasti - Larghezza dado: 43 mm - Scala: 643 mm (25,3″) - Intarsio della buca e filetto del corpo in abalone - Preamplificatore LR Baggs EAS-VTC - Meccaniche placcate oro con pulsanti neri - Incordatura di fabbrica: D’Addario EXP 16 (012-053) bronzo fosforoso - Finitura: sottile finitura lucida UV - Colore: Naturale";
            break;
        case "3":
            immagine = "../IMMAGINI_DB/elettrica.jpg";
            nome = "PRS SE McCarty 594 Singlecut Standard Tobacco Sunburst";
            categoria = "Chitarre";
            rimanenze = "20";
            prezzo = "899,00";
            descrizione = "- Raggio: 10″ - Scala: 24.594″  - Tasti: 22 - Intarsi: Birds - Logo paletta: Signature “SE”  - Ponte: PRS Two-Piece - Meccaniche: Vintage Style - Hardware: Nickel - Capotasto: PRS - Cover Truss Rod: McCarty 594 - Pickup al ponte: 58/15 “S” - Pickup al manico: 58/15 “S” - Controlli: Volume, Tono (push/pull), Switch 3-Vie - Finitura: Tobacco Sunburst - Custodia: Gig bag";
            break;
        case "4":
            immagine = "../IMMAGINI_DB/Casio.PNG";
            nome = "Casio CDP-S160 BK Set";
            categoria = "Pianoforti";
            rimanenze = "10";
            prezzo = "612,10";
            descrizione = "Pianoforte digitale compatto con tastiera a 88 tasti 'Scaled Hammer Action Keyboard II', 10 suoni,effetti e supporto CD-470. Funzioni per migliorare la riproduzione: compatibilità con l'unità a tre pedali. Il CDP-S160 è compatibile con il supporto fisso a tre pedali CS-470P, incluso nel prezzo. Il pedale del forte può essere premuto leggermente per produrre un suono semi-smorzato Metronomo: Esercitati ed esegui con un tempo preciso.Temperamenti per ogni occasione: Oltre al temperamento equabile standard, sono disponibili 16 temperamenti alternativi (accordature di scala)";
            break;
        case "5":
            immagine = "../IMMAGINI_DB/Coda.PNG";
            nome = "Yamaha GC1 TA2 PE Trans Acoustic";
            categoria = "Pianoforti";
            rimanenze = "4";
            prezzo = "30.746,12";
            descrizione = "-Produttore: Yamaha - Larghezza (cm): 149 - Altezza (cm): 101 - Profondità (cm): 161 - Weight (kg): 311 - Superficie: Lucido - Numero di pedali: 3 - Sistema silenzioso: Sì - Ruote: Si";
            break;
        case "6":
            immagine = "../IMMAGINI_DB/Pianola.PNG";
            nome = "Nektar Impact LX49+";
            categoria = "Pianoforti";
            rimanenze = "12";
            prezzo = "159,00";
            descrizione = "- 49 tasti sensibili al tocco e leggermente ponderati - Tutte le caratteristiche dei modelli precedenti di successo - 9 Fader 30 mm -  8 Manopole - 9 pulsanti a LED liberamente assegnabili -  6 pulsanti di trasporto - Pulsante pagina (solo per l'integrazione con Nektar DAW) -  Funzioni avanzate di trasporto incl. clic, impostazione del localizzatore, accesso ecc. -  5 posizioni di memoria per set di parametri personalizzati -  2 pulsanti LED Clip e Scene per DAW basate su clip -  8 drum pad sensibili alla velocità completamente riprogettati incl. grilletto e leva -  Retroilluminazione a LED dei pad nei colori verde, arancione, giallo e rosso -  4 posizioni di memoria per la mappatura dei pad -  Funzione Pad Learn -  4 curve di velocità regolabili più 3 curve fisse -  Profonda integrazione DAW con volume della traccia/selezione, panoramica, selezione patch e molto altro ancora";
            break;
        case "7":
            immagine = "../IMMAGINI_DB/eikon.png";
            nome = "Eikon WM101DM V2";
            categoria = "Accessori";
            rimanenze = "23";
            prezzo = "99,00";
            descrizione = "- Tipo di ricevitore: UHF - Gamma di frequenza: 863-865MHz - Stabilità di frequenza RF: ± 0,002% - Immagine RF / Re spurio: >70dB - Rifiuto delle interferenze RF: >70dB - Sensibilità RF: -105dBm - Risposta in frequenza: 50Hz -15kHz - Metodo di modulazione: PCM Digital 24 bit - Distorsione THD: 90dB - Rapporto S/N: >100dB - Requisiti di alimentazione: 12V / 500mA- Connettore di uscita: Jack 1/4″ sbilanciato- Dimensioni: 45 x 150 x 118mm";
            break;
        case "8":
            immagine = "../IMMAGINI_DB/cassa.png";
            nome = "Cassa QSC K12.2";
            categoria = "Accessori";
            rimanenze = "9";
            prezzo = "1.079,00";
            descrizione = "- Peso: 14,5kg - Dimensioni: 519 x 320 x 300mm - Griglia: Acciaio rivestito - Configurazione: Speaker multifunzione a 2 vie - Trasduttore LF: 10″ (254mm) - Risposta in frequenza (-6dB): 56Hz - 20kHz - Intervallo di frequenza (-10dB): 50Hz - 20kHz - Angolo di copertura nominale: 90° Axisymetric - SPL nominale max: 130dB @ 1m, picco 124 dB @ 1m, continua - Amplificatore: 1800W (LF), 225W (HF) in Classe D - Alimentazione: 100 - 240V, 50 - 60Hz - Punti di attacco: 2x M10 più Pull-Back - Colore: Nero (RAL 9011)";
            break;
        case "9":
            immagine = "../IMMAGINI_DB/Supporto.png";
            nome = "HERCULES 700B SUPPORTO PER SPEAKER";
            categoria = "Accessori";
            rimanenze = "12";
            prezzo = "209,00";
            descrizione = "HCSS-700B Supporto per Speaker - Manovella Quik-N-EZ Gear Up - Adatto a Flange 3,5 & 3,8 cm (1.38' & 1.5') - Altezza: 115 - 218 cm (45.3' - 85.9') - Peso: 6,2 kg (13.7 Ibs.) - Raggio alla Base: 66 cm (26') - Capacit di Carico: 45 kg (99.2 lbs.) - Dimensioni Piegato: 116,5 21 19 cm (46' 8.3' 7.5')";
            break;
        default:
            immagine = "1";
            nome = "Errore, prodotto inesistente!";
            categoria = "1";
            rimanenze = "1";
            prezzo = "1";
            descrizione = "Errore, prodotto inesistente!";
    }

    // dopo aver riconosciuto il prodotto, stampo le sue informazioni
    var img = document.getElementById("immagineProdotto");
    img.src = immagine;
    var p0 = document.getElementById("nomeProdotto");
    p0.innerText = nome;
    var p1 = document.getElementById("categoriaProdotto");
    p1.innerText = categoria;
    var p2 = document.getElementById("rimanenzeProdotto");
    p2.innerText = rimanenze;
    var p3 = document.getElementById("prezzoProdotto");
    p3.innerText = prezzo + " €";
    var p4 = document.getElementById("descrizioneProdotto");
    p4.innerText = descrizione;

    /*------------------------ */
    // Aggiorna l'anteprima dello strumento quando cambiano le opzioni
    $('select, input[type="checkbox"]').change(function () {
        updatePreview();
    });

    // Funzione per aggiornare l'anteprima dello strumento in base alle opzioni selezionate
    function updatePreview() {
        var bodyType = $('#bodyType').val();
        var color = $('#color').val();
        var meccaniche = $('#meccaniche').val();
        var battipenna = $('#battipenna').val();
        var ponte = $('#ponte').val();
        var features = [];

        $('input[type="checkbox"]:checked').each(function () {
            if ($(this).attr('id').includes('feature')) {
                features.push($(this).val());
            }
        });

        var previewText = 'Tipo di corpo: ' + bodyType + '<br>';
        previewText += 'Colore: ' + color + '<br>';
        previewText += 'Meccaniche: ' + meccaniche + '<br>';
        previewText += 'Battipenna: ' + battipenna + '<br>';
        previewText += 'Ponte: ' + ponte + '<br>';
        previewText += 'Features aggiuntive: ' + features.join(', ');

        $('#instrumentPreview').html(previewText);
    }

});

