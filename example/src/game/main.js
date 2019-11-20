game.module(
    'game.main'
)
    .require(
        'plugin.systemtextplugin'
    )
    .body(function () {

        game.createScene('Main', {
            init: function () {

                //typewriter demo
                new game.SystemText('Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit.\nSed posuere interdum sem.', {
                    size: 50,
                    x: 0,
                    y: 0,
                    typing_effect: true,
                }).addTo(this.stage);


                //custom font with strokeColor
                new game.SystemText('Lorem ipsum dolor sit amet,', {
                    font: 'SoSweetHoney',
                    // align: 'left',
                    color: '#2d963b',
                    strokeColor: '#a2e65e',
                    lineWidth: 2,
                    size: 50,
                    x: 0,
                    y: 300,
                }).addTo(this.stage);


                //gradient font color
                const color = game.renderer.context.createLinearGradient(0, 0, game.width, 0);
                color.addColorStop(0, "#f47c35");
                color.addColorStop(1, "#e6e650");

                const strokeColor = game.renderer.context.createLinearGradient(0, 0, game.width, 0);
                strokeColor.addColorStop(0, "#a2e65e");
                strokeColor.addColorStop(1, "#3577ca");


                let test = new game.SystemText('Lorem ipsum dolor sit amet!', {
                    font: 'SoSweetHoney',
                    lineWidth: 2,
                    size: 50,
                    x: 0,
                    y: 500,
                }).addTo(this.stage);
                test.color = color;
                test.strokeColor = strokeColor;


            }
        });


    });
