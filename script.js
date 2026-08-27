document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // ELEMENTOS
    // ========================================

    const welcomeScreen = document.getElementById("welcome-screen");
    const partyScreen = document.getElementById("party-screen");
    const finalScreen = document.getElementById("final-screen");

    const startButton = document.getElementById("start-btn");
    const candleButton = document.getElementById("candle-btn");

    const surpriseButton = document.getElementById("surprise-btn");
    const surpriseBox = document.getElementById("surprise-box");

    const confettiContainer = document.getElementById("confetti");

    const music = document.getElementById("birthday-music");


    // ========================================
    // VERIFICAÇÃO
    // ========================================

    console.log("Birthday Magic carregado!");

    if (!welcomeScreen) console.error("welcome-screen não encontrado");
    if (!partyScreen) console.error("party-screen não encontrado");
    if (!finalScreen) console.error("final-screen não encontrado");
    if (!startButton) console.error("start-btn não encontrado");
    if (!candleButton) console.error("candle-btn não encontrado");
    if (!surpriseButton) console.error("surprise-btn não encontrado");


    // ========================================
    // ESTADO
    // ========================================

    let festaComecou = false;
    let velaApagada = false;


    // ========================================
    // TELA INICIAL
    // ========================================

    welcomeScreen.classList.add("active");

    partyScreen.classList.remove("active");

    finalScreen.classList.remove("active");


    // ========================================
    // COMEÇAR FESTA
    // ========================================

    startButton.addEventListener("click", function () {

        if (festaComecou) {
            return;
        }

        festaComecou = true;

        console.log("Festa começou!");


        // ------------------------------------
        // MÚSICA
        // ------------------------------------

        if (music) {

            music.volume = 0.45;

            music.currentTime = 0;

            const tocarMusica = music.play();

            if (tocarMusica !== undefined) {

                tocarMusica
                    .then(function () {

                        console.log("Música tocando!");

                    })
                    .catch(function (error) {

                        console.log(
                            "Não foi possível tocar a música:",
                            error
                        );

                    });

            }

        }


        // ------------------------------------
        // BOTÃO
        // ------------------------------------

        startButton.textContent =
            "🎉 FESTA COMEÇOU!";


        startButton.disabled = true;


        // ------------------------------------
        // TROCAR TELA
        // ------------------------------------

        welcomeScreen.classList.remove("active");

        setTimeout(function () {

            partyScreen.classList.add("active");

        }, 500);

    });


    // ========================================
    // APAGAR VELA
    // ========================================

    candleButton.addEventListener("click", function () {

        if (velaApagada) {
            return;
        }

        velaApagada = true;

        console.log("Vela apagada!");


        // ------------------------------------
        // BOTÃO
        // ------------------------------------

        candleButton.disabled = true;

        candleButton.textContent =
            "💨 VELA APAGADA!";


        // ------------------------------------
        // CHAMA
        // ------------------------------------

        const flame =
            partyScreen.querySelector(".flame");


        if (flame) {

            flame.classList.add("flame-off");

        }


        // ------------------------------------
        // BOLO
        // ------------------------------------

        const cake =
            partyScreen.querySelector(".cake");


        if (cake) {

            cake.style.transform =
                "scale(1.08)";

            setTimeout(function () {

                cake.style.transform =
                    "scale(1)";

            }, 250);

        }


        // ------------------------------------
        // CONFETES IMEDIATOS
        // ------------------------------------

        setTimeout(function () {

            partyScreen.classList.remove("active");

            setTimeout(function () {

                finalScreen.classList.add("active");

                criarConfetes();

            }, 500);

        }, 1000);

    });


    // ========================================
    // CONFETES
    // ========================================

    function criarConfetes() {

        if (!confettiContainer) {
            return;
        }


        confettiContainer.innerHTML = "";


        const cores = [
            "#f3a6b9",
            "#a9d8e8",
            "#f8d98b",
            "#c9b6df",
            "#b9dfc4",
            "#f7c6a3"
        ];


        for (let i = 0; i < 150; i++) {

            const confete =
                document.createElement("div");


            confete.classList.add(
                "confetti-piece"
            );


            // --------------------------------
            // COR
            // --------------------------------

            const cor =
                cores[
                    Math.floor(
                        Math.random() *
                        cores.length
                    )
                ];


            confete.style.backgroundColor =
                cor;


            // --------------------------------
            // POSIÇÃO
            // --------------------------------

            confete.style.left =
                Math.random() * 100 + "%";


            // --------------------------------
            // TAMANHO
            // --------------------------------

            confete.style.width =
                Math.random() * 7 + 5 + "px";


            confete.style.height =
                Math.random() * 12 + 7 + "px";


            // --------------------------------
            // FORMATO
            // --------------------------------

            if (Math.random() > 0.5) {

                confete.style.borderRadius =
                    "50%";

            } else {

                confete.style.borderRadius =
                    "3px";

            }


            // --------------------------------
            // VELOCIDADE
            // --------------------------------

            confete.style.animationDuration =
                Math.random() * 2 + 2.5 + "s";


            // --------------------------------
            // ATRASO
            // --------------------------------

            confete.style.animationDelay =
                Math.random() * 1.5 + "s";


            // --------------------------------
            // ADICIONAR
            // --------------------------------

            confettiContainer.appendChild(
                confete
            );


            // --------------------------------
            // REMOVER
            // --------------------------------

            setTimeout(function () {

                confete.remove();

            }, 6000);

        }

    }


    // ========================================
    // BOTÃO DA SURPRESA
    // ========================================

    if (surpriseButton && surpriseBox) {

        surpriseButton.addEventListener(
            "click",
            function () {

                console.log("Surpresa aberta!");


                // --------------------------------
                // MOSTRAR
                // --------------------------------

                surpriseBox.classList.add("show");


                // --------------------------------
                // BOTÃO
                // --------------------------------

                surpriseButton.textContent =
                    "💝 SURPRESA DESCOBERTA!";


                surpriseButton.disabled = true;


                // --------------------------------
                // CONFETES EXTRAS
                // --------------------------------

                criarExplosao();

            }
        );

    }


    // ========================================
    // EXPLOSÃO DE CONFETES
    // ========================================

    function criarExplosao() {

        if (!confettiContainer) {
            return;
        }


        const cores = [
            "#f3a6b9",
            "#a9d8e8",
            "#f8d98b",
            "#c9b6df",
            "#b9dfc4"
        ];


        for (let i = 0; i < 45; i++) {

            const confete =
                document.createElement("div");


            confete.classList.add(
                "confetti-piece"
            );


            confete.style.backgroundColor =
                cores[
                    Math.floor(
                        Math.random() *
                        cores.length
                    )
                ];


            confete.style.position =
                "absolute";


            confete.style.left =
                "50%";


            confete.style.top =
                "50%";


            confete.style.width =
                "8px";


            confete.style.height =
                "12px";


            confettiContainer.appendChild(
                confete
            );


            // Direção aleatória

            const angulo =
                Math.random() *
                Math.PI *
                2;


            const distancia =
                Math.random() *
                250 +
                100;


            const x =
                Math.cos(angulo) *
                distancia;


            const y =
                Math.sin(angulo) *
                distancia;


            // Animação

            confete.animate(

                [
                    {
                        transform:
                            "translate(-50%, -50%) scale(1)",

                        opacity: 1
                    },

                    {
                        transform:
                            "translate(" +
                            "calc(-50% + " + x + "px), " +
                            "calc(-50% + " + y + "px)" +
                            ") rotate(720deg) scale(0)",

                        opacity: 0
                    }
                ],

                {
                    duration:
                        Math.random() * 700 + 900,

                    easing:
                        "ease-out",

                    fill:
                        "forwards"
                }

            );


            setTimeout(function () {

                confete.remove();

            }, 2000);

        }

    }

});