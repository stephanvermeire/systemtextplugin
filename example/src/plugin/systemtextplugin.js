game.module(
    'plugin.systemtextplugin'
)
    .require(
        'engine.renderer.text'
    )
    .body(function() {

        game.SystemText.inject({

            /**
             Enable typewriter-effect
             @default false
             **/
            typing_effect: false,
            i: 1,

            /**
             StrokeColor of the text.
             @property {String} color
             @default #000
             **/
            strokeColor: '#000',

            /**
             Width of the text stroke.
             @property {Number} color
             @default 0
             **/
            lineWidth: 0,



            _renderCanvas: function(context) {
                var wt = this._worldTransform;

                context.globalAlpha = this._worldAlpha;
                context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.tx * game.scale, (wt.ty + this.size) * game.scale);
                context.fillStyle = this.color;
                context.font = this.size * game.scale + 'px ' + this.font;
                context.textAlign = this.align;
                context.strokeStyle = this.strokeColor;
                context.lineWidth = this.lineWidth;


                if(this.text === undefined) return;

                var lines;
                if(this.typing_effect){
                    lines = String(this.text.substr(0, this.i)).split('\n');
                    if(this.i <= this.text.length){
                        this.i++;
                    }
                }else{
                    lines = this.text.split('\n');
                }

                for (var i = 0; i<lines.length; i++){
                    context.fillText(lines[i], 0,  (i*this.size) );
                    if(this.lineWidth){
                        context.strokeText(lines[i], 0, (i*this.size));
                    }
                }
            }
        });







    });
