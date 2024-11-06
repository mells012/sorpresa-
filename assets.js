(function(lib, cjs) {

    var p;

    (lib.stars = function() {
        var g = new cjs.Graphics().f().s("#FFFFFF").ss(0.3, 1, 1).p("AADADIgFAAIAAgFIAFAAg");
        this.addChild(new cjs.Shape(g)).setTransform(52.9, 98.3);
        this.addChild(new cjs.Shape(g)).setTransform(320.4, 31.7);
        this.addChild(new cjs.Shape(g)).setTransform(525, -0.3);
        this.addChild(new cjs.Shape(g)).setTransform(27.3, 79.4);
        this.addChild(new cjs.Shape(g)).setTransform(413, 13.7);
        this.addChild(new cjs.Shape(g)).setTransform(365.7, 125);
        this.addChild(new cjs.Shape(g)).setTransform(500.6, 98.9);
        this.addChild(new cjs.Shape(g)).setTransform(57, 0.3);
        this.addChild(new cjs.Shape(g)).setTransform(227, 75);
        this.addChild(new cjs.Shape(g)).setTransform(368.5, 87.7);
        this.addChild(new cjs.Shape(g)).setTransform(244.8, 8.5);
        this.addChild(new cjs.Shape(g)).setTransform(428.3, 47);
        this.addChild(new cjs.Shape(g)).setTransform(535.3, 91.3);
        this.addChild(new cjs.Shape(g)).setTransform(78, 63.8);
        this.addChild(new cjs.Shape(g)).setTransform(83.3, 24.3);
        this.addChild(new cjs.Shape(g)).setTransform(270, 34.9);
        this.addChild(new cjs.Shape(g)).setTransform(125.3, 74.4);
        this.addChild(new cjs.Shape(g)).setTransform(239.7, 125);
        this.addChild(new cjs.Shape(g)).setTransform(21.4, 114.4);
        this.addChild(new cjs.Shape(g)).setTransform(494.8, 24.9);
        this.addChild(new cjs.Shape(g)).setTransform(330.3, 75);
        this.addChild(new cjs.Shape(g)).setTransform(147.4, 101.9);
        this.addChild(new cjs.Shape(g)).setTransform(456, 103.8);
    }
    ).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(26,-1.6,500.3,127.9);

    (lib.road = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(31));

        // stars
        this.stars1 = new lib.stars();
        this.stars1.parent = this;
        this.stars1.setTransform(1, -80.3, 1, 1, 0, 0, 0, 278.7, 68);

        this.stars0 = new lib.stars();
        this.stars0.parent = this;
        this.stars0.setTransform(1, -80.3, 1, 1, 0, 0, 0, 278.7, 68);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.stars0
            }, {
                t: this.stars1
            }]
        }).wait(31));

        // horizon
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EhTIAAAMCmRAAA");
        this.shape.setTransform(-26.9, 33.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

        // road
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EAo0gNIQgGABgHAAQhWAAhEAAQhDAAg2ABQg3AAgxAAQgxABgzAAQgyAAg7ABQjpABijAIQikAJhnAOQhnAOgzATQgyATgHAXQgIAWAcAaQAcAZA3AbQA2AbBJAbQBIAcBSAbQBRAbBTAZQBSAaBKAWQBLAXA6ATQAzARBqAhQBpAgCVAuQCWAuC5A4QC5A3DTA+QDTA+DkBBQDjBCDsBCQDrBDDqA/QDqBADfA6QDfA6DLAxEAv0gNIQiTAAhxAAIi8AAQiwAAiiAAQi2ABieAAQidAAh8AAQh9AAhTAAQmgAAlQAVQlPAVkLAiQkJAjjPAqQjPAqieArQieAqh4AkQh4AjhcAXQhUAUiHAmQiGAmiwA1QiwA1jQBBQjPBBjoBKQjnBIj1BPQj1BPj6BRQj6BRj3BQQj2BQjpBMQjoBMjTBFQjUBEizA7");
        this.shape_1.setTransform(-35.4, 117.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EAt1gNDQgwABgrAAQhXAAhDABQhDAAg3AAQg2ABgxAAQgxAAgzABQgyAAg7AAQjfAAidAFQidAGhjAJQhkAKg0ANQgzAOgNAPQgMAQARARQARARAmASQAmASAxARQAxASA0AQQAzAQAtAOQBxAkCiAuQCiAvDKA2QDLA3DpA9QDqA9EBBBQEABBEPBDQEPBCEUBDQEUBDERBBQERBAEFA9QEFA8DxA2EAzngNDQiTAAhyAAIhtAAEhdSANEQCZguDIg6QDIg6DshDQDshCEHhKQEHhJEYhNQEZhNEghOQEghOEdhNQEehMEShJQEThJD8hDQD9hCDeg5QDeg6C1gtQC1guCDgfQCDgfBHgOQBDgOB7gZQB8gYC3gdQC3gcD5gaQD4gaE/gQQE+gQGIAAQBTAAB9AAQB8AACeAAQCdAAC2gBQC2AADGAAQASAAASAA");
        this.shape_2.setTransform(-59.8, 116.8);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EBd+AG3Qw4jys+jHQs/jIpFieQhmgch2geQh2gfh6ghQh7ggh2ghQh2gghnggQhngfhOgdQhNgdgrgaQgrgZADgUQAFgcCcgQQCcgQEtgHQDjgFEygBIDRgBQBGAABIAAQDHAADPAAEAoUgNMQgPgBgOAAQi2AAidAAQidAAh9AAQh8ABhUAAQkYACjjAGQjiAHi3AKQi2ALiUAOQiTAOh6ASQh6ARhoAUQhqAUhiAWQhiAWhkAYQhkAXhvAZQhXATiSAjQiSAjjGAyQjGAxjxA+QjxA+kUBIQkVBIkvBQQkvBPlDBWQlCBXlOBbQlNBblRBdQlQBdlLBdQlLBek+Bc");
        this.shape_3.setTransform(-63.2, 117.8);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EAoOgNNQiVABiKABQjmABi8AEQi7ADiIAHQiHAHhKAMQhKALgDARQgDASAtAZQAtAZBTAeQBUAfByAjQByAjCIAmQCIAmCXAoQCWApCdAoQCcApCaAoQEpBOFVBYQFWBYGNBiQGNBjHOBuQHPBuIbB5EA0DgNNQjPAAjHAAQhIAAhGAAIjRAAEheDANOQFhhnFvhoQFwhoFyhoQFzhoFrhlQFrhkFaheQFZheE9hVQE9hVEWhKQEVhJDkg7QDkg7CogqQCogpBggVQBwgZBlgXQBlgYBkgVQBkgWBtgTQBrgTB+gRQB9gQCZgOQCYgNC7gJQC8gKDogFQDpgGEeAAQBUAAB8AAQB9gBCdAAQCdAAC2AAQAOAAAPAA");
        this.shape_4.setTransform(-56.6, 117.8);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EAnygNkQjQACiyACQkKADi9AHQi+AHhmAOQhnANgEAVQgDASArAZQArAZBQAeQBQAfBuAjQBvAiCEAmQCFAmCTAnQCUAnCaAoQCbAnCbAmQErBKFbBXQFbBXGTBiQGTBjHSBuQHTBvIbB5EAzIgNkQjQAAjIAAQg3AAg1AAIjSAAEhewANmQFhhmFohnQFohnFlhlQFmhlFahhQFbhiFHhaQFHhaEshSQErhSEGhHQEHhHDZg5QDZg6CjgqQCkgpBkgYQB/geB+gfQB9ggCGggQCHggCYgdQCXgeCzgZQCzgZDYgTQDYgTEFgLQEGgKE9AAQBUgBB+ABQB/AACgAAQCgAAC5AAQAiAAAiAA");
        this.shape_5.setTransform(-60, 120);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EAnygNfQiTACiFABQjiACi0AEQi1AEiBAIQiAAIhGAMQhFAMgDAQQgDASAtAZQAtAZBUAeQBTAfBzAjQByAjCIAlQCJAmCXAnQCXAoCdAnQCcAnCbAmQEsBKFZBXQFZBXGQBiQGRBjHRBuQHQBvIbB5EAzIgNfQjQAAjIAAQg3AAg0AAIjTAAEhewANhQFhhmFohnQFnhmFmhlQFmhkFahhQFbhgFHhaQFHhZEshRQEqhREHhHQEHhGDZg5QDZg4CjgqQCkgpBkgYQB/geB+gfQB9ggCGggQCHggCYgdQCXgeCzgZQCzgZDYgTQDYgTEFgLQEGgKE9AAQBUgBB+ABQB/AACgAAQCgAAC5AAQAiAAAiAA");
        this.shape_6.setTransform(-59.9, 119.5);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EApVgN8QkIAAjiACQjhACi0AEQi0AEiAAIQiAAIhFAMQhEAMgEARQgCASAzAZQAyAZBdAeQBdAeB+AjQB9AjCUAlQCUAmChAmQCgAoCjAnQCiAoCbAmQErBJFaBYQFZBWGQBjQGRBiHQBuQHRBvIbB5AXtt9QkBABjZAHQjZAIi6AOQi6ANikAUQilAUiWAaQiYAaiVAhQiUAhibAoQiaAoiqAvQiqAvjCA1QhyAgiwAyQixAxjoBCQjnBCkXBQQkXBPk+BaQk+BbleBlQleBll2BrQl1BsmFBwQmGBxmNBy");
        this.shape_7.setTransform(-59.9, 122.6);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EAmBgNDQjMACi+ADQi9ABinABQinADiJADQiKADhjAGQhkAFg3AKQg3AJgDAOQgCASA0AaQA1AaBhAgQBhAgCCAkQCCAlCYAoQCZAnCkApQCkApCkAoQClApCbAmQJYCUNCDCQNDDDQ2DyAUYtEQkoABj9AMQj9AMjaAWQjZAVi/AeQjAAfivAlQiuAlinArQimArinAvQinAvixAxQixAyjDA0QnFB1v3EaQv3Eb4xHK");
        this.shape_8.setTransform(-38.8, 117);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EAmkgM0QjMACi+ADQi9ABinABQinADiJADQiKADhjAGQhkAFg3AKQg3AJgDAOQgCASA0AcQA0AcBfAjQBgAjCBApQCAApCXArQCXAsCjAsQCjAsCkAqQCkAqCbAmQEsBLFoBgQFpBfGjBvQGlBvHgB4QHgB4IbB5AU7s1QmBAAk+AXQk/AZkEAmQkEAnjUAtQjTAuisAsQhlAaimAqQimAqjeA5QjdA4kMBFQkLBFkwBPQkxBPlMBWQlNBYlfBeQlfBelqBjQlpBjlpBlQlqBmlhBm");
        this.shape_9.setTransform(-42.3, 115.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AbytNQjLACiTACQiTAChjABQhjABg9ADQg9ADghAFQggAFgMAIQgMAKgCAOQgCAPAqAXQAqAWBOAbQBOAcBqAfQBrAhB/AiQCAAjCMAkQCNAkCTAlQCSAkCRAjQCRAkCHAhQDxA8EpBLQEoBKFYBVQFXBWF+BeQF+BeGbBhQGcBhGwBhAOOtOQkXAFjkAUQjkAUi2AcQi3AciPAfQiPAfhsAbQhsAchPATQhnAYirArQirAqjmA7QjlA6kXBJQkWBJk9BUQk8BUlZBcQlZBelrBkQlrBklyBpQlzBplwBrQlxBrljBr");
        this.shape_10.setTransform(-36.3, 118);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AXntdQhuABhlADQhlADhWAFQhWAEhBAHQhAAGglAIQgkAHgBAJQgBALAtAUQAtAUBSAbQBSAbBvAgQBwAhCEAkQCEAkCSAmQCRAmCXAmQCWAmCTAlQCTAkCHAhQBnAZCPAkQCOAkCuAsQCtAsDCAxQDDAyDOAzQDPA1DRA2QDSA1DLA0QDLA0C7AwQC8AwCiApQCjAqCBAgQCAAhBWAVQBVAVAhAIAOYtfQkXAGjkAVQjkAWi4AfQi1AfiPAiQiPAihsAeQhtAehPATQhmAYirAqQirArjmA8QjmA7kXBKQkWBJk9BVQk9BWlZBdQlZBelrBmQlrBllzBpQlzBqlwBrQlxBsljBr");
        this.shape_11.setTransform(-37.2, 119.6);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AWNtTQhVAAhDABQhDABg4ABQg4ABgyAEQgzADg0AGQgqAFgiAGQgjAGgUAJQgVAJAAANQABAKAWALQAWALAhAMQAhALAiALQBKAaBuAjQBtAiCHApQCIApCXAtQCYAsCgAtQCfAsCeAqQCeAqCTAkQBnAZCOAkQCPAkCtAtQCuAsDCAzQDCAxDPA2QDOA2DSA2QDRA3DLA1QDLA1C7AxQC8AxCiAqQCjArCBAhQCAAhBWAWQBVAVAhAIAOetVQiYAEikARQikARilAaQilAaibAfQibAfiJAfQiIAehrAaQhrAZhDAQQhmAYisAqQirApjmA5QjnA5kXBGQkXBHk9BRQk+BSlZBaQlaBblrBiQlsBilzBnQlzBnlxBqQlxBqljBr");
        this.shape_12.setTransform(-37.9, 118.6);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AJQtVQgXAEADAHQADAIAXAKQAXALAkAMQAkAMApAMQApAMAnALQAoAMAeAIQAfAJAOAFQBLAZB0AiQB1AiCUAoQCTApCpAtQCpAtC0AvQC0AwC0AwQC0AwCrAvQBmAcCLAlQCKAmClAsQClAsC5AxQC4AxDDA0QDDA0DFA0QDFA0C/AzQC/AyCwAuQCwAuCZAoQCZAoB5AgQB6AfBRAUQBSAVAhAHAJbtVQgFAAgGAAEhfVANWQGQh4GKhyQGKhyF7hpQF7hqFkhgQFjhgFFhWQFEhUEdhJQEdhJDsg7QDsg7C0grQC0gsBzgbQAsgKBOgUQBOgTBngaQBngaB5geQB4geCCgfQCCggCEgeQCDgfB9gbQB9gbBvgVQBwgVBZgNQBSgLA4gD");
        this.shape_13.setTransform(-37.9, 118.6);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("ALVt5QgHAIAUAMQAUALAmAOQAmAOAuAPQAvAOAvANQAvAMAlAKQAlAKATAFQBMATB2AfQB2AfCVAoQCVAnCrAuQCqAuC1AxQC1AxC1AxQC1AxCrAvQBmAcCKAlQCKAmCmAsQClAtC5AxQC4AwDDA0QDDA0DFA0QDFA1C/AyQC/AzCwAtQCwAvCZAoQCZAnB5AgQB5AgBSAUQBRAVAhAHALIt5QgvAChVAOQhWAOhyAYQhxAXiFAfQiEAeiLAiQiMAiiKAiQiJAjh+AfQh9AghnAaQhnAahGARQhmAYimAqQinAqjeA5QjeA4kNBGQkMBFkyBQQkyBOlPBYQlOBZliBdQliBelsBhQlsBhltBkQltBjllBh");
        this.shape_14.setTransform(-61.8, 122.2);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AG0t8QAAAGAcALQAcALAuAOQAvAOA3APQA3APA1AOQA1ANApALQApAKAUAFQAeAIBeAYQBdAYCTAmQCTAmC+AxQC/AyDiA6QDiA7D7BBQD8BBELBGQEMBFETBHQEUBHERBHQERBHEGBDQEGBEDxBAQDxA+DUA3QDUA3CtAtQCtAtB8AgQB9AhBDAQQBEASABABAGht+QgdABgxAKQgxAJg7AOQg7AOg7APQg8APgxAOQgxANgeAJQgeAJgBAAMhkkAaB");
        this.shape_15.setTransform(-41.5, 122.7);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EBuxAOvMhxkgddMhr9Ab8");
        this.shape_16.setTransform(15.2, 127.5);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("Amgt+QAdABAxAKQAxAJA7AOQA7AOA7APQA8APAxAOQAxANAeAJQAeAJABAAMBkkAaBAmzt8QAAAGgcALQgcALguAOQgvAOg3APQg3APg1AOQg1ANgpALQgpAKgUAFQgeAIheAYQhdAYiTAmQiTAmi+AxQi/AyjiA6QjiA7j7BBQj8BBkLBGQkMBFkTBHQkUBHkRBHQkRBHkGBDQkGBEjxBAQjxA+jUA3QjUA3itAtQitAth8AgQh9AhhDAQQhEASgBAB");
        this.shape_17.setTransform(34.4, 122.7);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("ArHt5QAvACBVAOQBWAOByAYQBxAXCFAfQCEAeCLAiQCMAiCKAiQCJAjB+AfQB9AgBnAaQBnAaBGARQBmAYCmAqQCnAqDeA5QDeA4ENBGQEMBFEyBQQEyBOFPBYQFOBZFiBdQFiBeFsBhQFsBhFtBkQFtBjFlBhArUt5QAHAIgUAMQgUALgmAOQgmAOguAPQgvAOgvANQgvAMglAKQglAKgTAFQhMATh2AfQh2AfiVAoQiVAnirAuQiqAui1AxQi1Axi1AxQi1AxirAvQhmAciKAlQiKAmimAsQilAti5AxQi4AwjDA0QjDA0jFA0QjFA1i/AyQi/AziwAtQiwAviZAoQiZAnh5AgQh5AghSAUQhRAVghAH");
        this.shape_18.setTransform(54.6, 122.2);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("ApQtVQA5ADBSALQBZANBvAVQBwAVB9AbQB8AbCEAfQCDAeCCAgQCCAfB5AeQB4AeBnAaQBnAaBOATQBPAUAsAKQBzAbCzAsQC0ArDtA7QDsA7EdBJQEcBJFFBUQFFBWFjBgQFkBgF7BqQF7BpGKByQGKByGQB4ApatVQAFAAAFAAEhfVAKXQAhgHBSgVQBRgUB6gfQB5ggCZgoQCZgoCwguQCwguC/gyQC/gzDFg0QDFg0DDg0QDDg0C4gxQC4gxCmgsQClgsCKgmQCKglBngcQCqgvC1gwQC0gwC0gwQC0gvCpgtQCpgtCTgpQCUgoB0giQB1giBKgZQAPgFAegJQAfgIAngMQAogLApgMQApgMAkgMQAjgMAXgLQAXgKAEgIQADgHgYgE");
        this.shape_19.setTransform(31.9, 118.6);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AudtVQCYAECkARQCkARClAaQClAaCbAfQCbAfCJAfQCIAeBrAaQBrAZBDAQQBmAYCsAqQCrApDmA5QDnA5EXBGQEXBHE9BRQE+BSFZBaQFaBbFrBiQFsBiFzBnQFzBnFxBqQFxBqFjBrA2MtTQBVAABDABQBDABA4ABQA4ABAyAEQAzADA0AGQAqAFAiAGQAjAGAUAJQAVAJAAANQgBAKgWALQgWALghAMQghALgiALQhKAahuAjQhtAiiHApQiIApiXAtQiYAsigAtQifAsieAqQieAqiTAkQhnAZiOAkQiPAkitAtQiuAsjCAzQjCAxjPA2QjOA2jSA2QjRA3jLA1QjLA1i7AxQi8AxiiAqQijAriBAhQiAAhhWAWQhVAVghAI");
        this.shape_20.setTransform(31.9, 118.6);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AuWtfQEXAGDkAVQDkAWC3AfQC1AfCPAiQCPAiBsAeQBtAeBPATQBmAYCrAqQCrArDmA8QDmA7EXBKQEWBJE9BVQE9BWFZBdQFZBeFrBmQFrBlFzBpQFzBqFwBrQFxBsFjBrA3mtdQBuABBlADQBlADBXAFQBVAEBBAHQBBAGAkAIQAkAHABAJQACALgtAUQgtAUhSAbQhTAbhvAgQhwAhiEAkQiEAkiSAmQiRAmiWAmQiXAmiTAlQiTAkiHAhQhnAZiOAkQiPAkiuAsQitAsjCAxQjCAyjPAzQjPA1jRA2QjSA1jLA0QjLA0i7AwQi8AwiiApQijAqiBAgQiAAhhWAVQhVAVghAI");
        this.shape_21.setTransform(31.2, 119.6);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AuNtOQEXAFDkAUQDkAUC2AcQC3AcCPAfQCPAfBsAbQBsAcBPATQBnAYCrArQCrAqDmA7QDlA6EXBJQEWBJE9BUQE8BUFZBcQFZBeFrBkQFrBkFyBpQFzBpFwBrQFxBrFjBrA7xtNQDLACCTACQCTACBjABQBjABA9ADQA9ADAhAFQAgAFAMAIQAMAKACAOQACAPgqAXQgqAWhOAbQhOAchqAfQhrAhh/AiQiAAjiMAkQiNAkiTAlQiSAkiRAjQiRAkiHAhQjxA8kpBLQkoBKlYBVQlXBWl+BeQl+BembBhQmcBhmwBh");
        this.shape_22.setTransform(30.2, 118);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("A07s1QGBAAE/AXQE+AZEFAmQEEAnDUAtQDTAuCsAsQBlAaCmAqQCmAqDeA5QDdA4EMBFQELBFEwBPQExBPFMBWQFNBYFfBeQFfBeFqBjQFpBjFpBlQFqBmFhBmEgmkgM0QDNACC9ADQC+ABCnABQCnADCJADQCJADBkAGQBkAFA3AKQA3AJADAOQACASg0AcQg0AchgAjQhfAjiBApQiBApiXArQiXAsiiAsQijAsikAqQilAqiaAmQktBLloBgQloBfmkBvQmkBvngB4QngB4obB5");
        this.shape_23.setTransform(36.3, 115.5);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("A0YtEQEpABD9AMQD8AMDaAWQDaAVC/AeQDAAfCvAlQCuAlCnArQCmArCnAvQCnAvCxAxQCxAyDDA0QHFB1P3EaQP3EbYxHKEgmBgNDQDNACC9ADQC+ABCnABQCnADCJADQCJADBkAGQBkAFA3AKQA3AJADAOQACASg1AaQg1AahgAgQhhAgiCAkQiCAliZAoQiYAnikApQikApilAoQilApibAmQpYCUtCDCQtCDDw2Dy");
        this.shape_24.setTransform(32.8, 117);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("A3rt9QEBABDZAHQDZAIC6AOQC6ANCkAUQCkAUCXAaQCYAaCUAhQCVAhCaAoQCbAoCqAvQCpAvDDA1QBxAgCxAyQCwAxDoBCQDoBCEXBQQEWBPE/BaQE+BbFeBlQFeBlF1BrQF2BsGFBwQGFBxGNByEgpUgN8QEIAADiACQDhACC0AEQC0AECAAIQCAAIBFAMQBFAMADARQACASgyAZQgzAZhdAeQhdAeh9AjQh+AjiUAlQiUAmihAmQigAoiiAnQijAoiaAmQksBJlZBYQlZBWmRBjQmRBinQBuQnRBvobB5");
        this.shape_25.setTransform(53.9, 122.6);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EgnxgNfQAiAAAiAAQC5AACgAAQCgAAB/AAQB+gBBUABQE9AAEGAKQEGALDYATQDXATC0AZQCzAZCXAeQCYAdCGAgQCGAgB+AgQB+AfB+AeQBlAYCjApQCkAqDZA4QDZA5EGBGQEHBHErBRQErBRFHBZQFIBaFaBgQFbBhFlBkQFmBlFnBmQFoBnFhBmEhewAHOQIbh5HQhvQHRhuGRhjQGQhiFahXQFZhXErhKQCbgmCcgnQCegnCWgoQCXgnCJgmQCJglBygjQBygjBUgfQBTgeAtgZQAtgZgCgSQgEgQhFgMQhFgMiBgIQiAgIi2gEQi0gEjigCQiFgBiTgCEgzHgNfQDQAADJAAQA2AAA0AAIDTAA");
        this.shape_26.setTransform(53.9, 119.5);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EgnxgNkQAiAAAiAAQC5AACgAAQCgAAB/AAQB+gBBUABQE9AAEGAKQEFALDYATQDYATCzAZQCzAZCXAeQCYAdCHAgQCGAgB9AgQB+AfB/AeQBkAYCkApQCjAqDZA6QDZA5EHBHQEGBHErBSQEsBSFHBaQFHBaFbBiQFaBhFmBlQFlBlFoBnQFoBnFhBmEhewAHJQIbh5HThvQHShuGThjQGThiFbhXQFbhXErhKQCbgmCbgnQCagoCUgnQCTgnCFgmQCEgmBvgiQBugjBQgfQBQgeArgZQArgZgDgSQgEgVhngNQhmgOi+gHQi9gHkKgDQiygCjQgCEgzHgNkQDQAADIAAQA3AAA1AAIDSAA");
        this.shape_27.setTransform(53.9, 120);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EgoNgNNQAPAAAOAAQC2AACdAAQCdAAB9ABQB8AABUAAQEeAADpAGQDoAFC8AKQC7AJCYANQCZAOB9AQQB+ARBrATQBtATBkAWQBkAVBlAYQBlAXBwAZQBgAVCoApQCoAqDkA7QDkA7EVBJQEWBKE9BVQE9BVFZBeQFaBeFrBkQFrBlFzBoQFyBoFwBoQFvBoFhBnEheDAHoQIbh5HPhuQHOhuGNhjQGNhiFWhYQFVhYEphOQCagoCcgpQCdgoCWgpQCXgoCIgmQCIgmBygjQBygjBUgfQBTgeAtgZQAtgZgDgSQgDgRhKgLQhKgMiHgHQiIgHi7gDQi8gEjmgBQiKgBiVgBEg0CgNNQDPAADHAAQBIAABGAAIDRAA");
        this.shape_28.setTransform(50.5, 117.8);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EgoTgNMQAPgBAOAAQC2AACdAAQCdAAB9AAQB8ABBUAAQEYACDjAGQDiAHC3AKQC2ALCUAOQCTAOB6ASQB6ARBoAUQBqAUBiAWQBiAWBkAYQBkAXBvAZQBXATCSAjQCSAjDGAyQDGAxDxA+QDxA+EUBIQEVBIEvBQQEvBPFDBWQFCBXFOBbQFNBbFRBdQFQBdFLBdQFLBeE+BcEhd9AG3QQ4jyM+jHQM/jIJFieQBmgcB2geQB2gfB6ghQB7ggB2ghQB2ggBnggQBngfBOgdQBNgdArgaQArgZgDgUQgFgcicgQQicgQktgHQjjgFkygBEg0IgNNQDPAADHAAQBIAABGAAIDRAB");
        this.shape_29.setTransform(57.1, 117.8);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("Egt0gNDQASAAASAAQDGAAC2AAQC2ABCdAAQCeAAB8AAQB9AABTAAQGIAAE+AQQE/AQD4AaQD5AaC3AcQC3AdB8AYQB7AZBDAOQBHAOCDAfQCDAfC1AuQC1AtDeA6QDeA5D9BCQD8BDETBJQESBJEeBMQEdBNEgBOQEgBOEZBNQEYBNEHBJQEHBKDsBCQDsBDDIA6QDIA6CZAuEhdSAHVQDxg2EFg8QEFg9ERhAQERhBEUhDQEUhDEPhCQEPhDEAhBQEBhBDqg9QDpg9DLg3QDKg2CigvQCiguBxgkQAtgOAzgQQA0gQAxgSQAxgRAmgSQAmgSARgRQARgRgMgQQgNgPgzgOQg0gNhkgKQhjgJidgGQidgFjfAAQg7AAgyAAQgzgBgxAAQgxAAg2gBQg3AAhDAAQhDgBhXAAQgrAAgwgBEgzmgNDQCTAAByAAIBtAA");
        this.shape_30.setTransform(53.7, 116.8);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("EgozgNIQCwAACjAAQC1ABCeAAQCdAAB9AAQB8AABTAAQGgAAFQAVQFQAVEKAiQEJAjDPAqQDQAqCeArQCeAqB4AkQB3AjBcAXQBVAUCGAmQCHAmCvA1QCwA1DQBBQDQBBDnBKQDnBID1BPQD1BPD6BRQD6BRD3BQQD2BQDpBMQDpBMDTBFQDTBECzA7EhT5AJLQDLgxDfg6QDfg6DqhAQDqg/DrhDQDshCDjhCQDkhBDUg+QDSg+C5g3QC5g4CWguQCVguBpggQBqghAzgRQA7gTBKgXQBLgWBRgaQBTgZBSgbQBSgbBIgcQBIgbA3gbQA2gbAcgZQAcgagHgWQgHgXgzgTQgzgThmgOQhngOilgJQijgIjpgBQg7gBgyAAQgzAAgxgBQgwAAg3AAQg3gBhDAAQhDAAhXAAQgHAAgGgBEgvzgNIQCTAABxAAIC8AA");
        this.shape_31.setTransform(29.4, 117.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }]
        }).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_8
            }]
        }, 1).to({
            state: [{
                t: this.shape_9
            }]
        }, 1).to({
            state: [{
                t: this.shape_10
            }]
        }, 1).to({
            state: [{
                t: this.shape_11
            }]
        }, 1).to({
            state: [{
                t: this.shape_12
            }]
        }, 1).to({
            state: [{
                t: this.shape_13
            }]
        }, 1).to({
            state: [{
                t: this.shape_14
            }]
        }, 1).to({
            state: [{
                t: this.shape_15
            }]
        }, 1).to({
            state: [{
                t: this.shape_16
            }]
        }, 1).to({
            state: [{
                t: this.shape_17
            }]
        }, 1).to({
            state: [{
                t: this.shape_18
            }]
        }, 1).to({
            state: [{
                t: this.shape_19
            }]
        }, 1).to({
            state: [{
                t: this.shape_20
            }]
        }, 1).to({
            state: [{
                t: this.shape_21
            }]
        }, 1).to({
            state: [{
                t: this.shape_22
            }]
        }, 1).to({
            state: [{
                t: this.shape_23
            }]
        }, 1).to({
            state: [{
                t: this.shape_24
            }]
        }, 1).to({
            state: [{
                t: this.shape_25
            }]
        }, 1).to({
            state: [{
                t: this.shape_26
            }]
        }, 1).to({
            state: [{
                t: this.shape_27
            }]
        }, 1).to({
            state: [{
                t: this.shape_28
            }]
        }, 1).to({
            state: [{
                t: this.shape_29
            }]
        }, 1).to({
            state: [{
                t: this.shape_30
            }]
        }, 1).to({
            state: [{
                t: this.shape_31
            }]
        }, 1).wait(1));

        // strepen zwart
        this.ovalsMc = new cjs.Container();
        this.ovalsMc.parent = this;
        this.ovalsMc.setTransform(373.7, 419.7, 1, 1, 0, 0, 0, 373.7, 419.7);

        this.timeline.addTween(cjs.Tween.get(this.ovalsMc).wait(31));

        // middle line
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AP/7gQgLAAgoAAQgnABg8AAQg9ABhJABQhJABhQABQhPABhPAAQhOABhGAAQj3ABi7APQi9APiJAcQiKAbhfAoQhfAog7A0Qg8AzghA/QggA+gOBJQgNBIgCBTQgCBSACBbQABBHAOB9QAPB9AbCqQAaCqAkDKQAkDLArDiQArDjAvDwQAwDwAyDzQAyDyAyDr");
        this.shape_32.setTransform(87.8, 209.3);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("APw7gQgMAAgxAAQgwABhLABQhKAAhaABQhZABheABQheABhXABQhYABhGAAQj2ABi1ANQi1ANh+AYQh+AZhPAlQhQAkgsAwQgsAxgSA8QgSA9gBBIQgCBIAEBVQAFBUABBgQAABHASB/QASB+AgCrQAfCrArDNQAqDMAyDlQAyDkA1DyQA1DxA2D0QA1DzAzDr");
        this.shape_33.setTransform(89.4, 209.3);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("APk7PQj8ACjjABQjiACjCADQjBAEiaAHQiaAIhrAOQiGASheAcQheAdg6AzQg5AzgZBVQgZBUADCAQADCBAbC4QAbC3AwD6QAYCEAqDNQArDMBBEWQBBEXBcFgQBdFfB8Gp");
        this.shape_34.setTransform(90.5, 207.6);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AQS88QjKACjAABQjAABiwACQivABiYADQiYADh7AGQh7AFhWAIQiUAOhkAeQhkAdg7A3Qg6A2gYBaQgYBaADCIQAECIAZDAQAZC/AnECQAVCOArDkQAqDjBAEyQBAEyBVF4QBVF3BpG2");
        this.shape_35.setTransform(91.9, 218.4);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AQD9cQkNAAjcACQjbABiwAEQiuADiMAFQiLAFhsAHQhtAHhVAJQiUAPhaAxQhaAwgpBXQgqBWgDB+QgDB+AaCpQAZCpAsDYQAsDXA1EIQAXB2AiCTQAhCSAvC4QAvC4A/DmQA/DmBREdQBQEcBmFc");
        this.shape_36.setTransform(94, 221.6);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AQJ9YQlQAAkHADQkGADjGAGQjHAGiUAJQiTAJhqAKQiUAPhZArQhaAqgnBOQgoBOABB3QAAB2AgCnQAgCmA2DdQA3DdBDEZQAbB2AnCTQAmCTAyC6QAzC6BCDoQBBDnBTEeQBSEeBmFb");
        this.shape_37.setTransform(93.4, 221.2);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AL91yQhfAAhvACQhvACh1ADQh1ADhxADQhxADhlAEQhlAFhOAEQhPAEgvAEQh7ANhKAeQhKAegjAuQgjAvgEA+QgFA+AQBLQARBMAcBXQAcBXAfBiQAlB5AwCOQAwCOBACuQA/CtBUDXQBUDXBtEJQBtEKCKFG");
        this.shape_38.setTransform(67.1, 172.7);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AKO2TQhyAChyABQhyADhtADQhtAEhhAFQhhAFhQAFQhPAFg4AFQh7ALhJAlQhJAkghA7QghA8gCBTQgCBTAUBoQATBpAhB+QAgB/AjCSQAZBrAkCFQAjCFAsCXQAsCZAyClQAxClA1CpQA1CqA2CoQA2CnA0Cf");
        this.shape_39.setTransform(56.8, 176);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AKt24QiTAAiUACQiUADiMAGQiKAIh5AMQh5AOhcAVQhcAWg2AgQg9AkgjA7QgiA6gQBQQgQBQgEBnQgEBmACB9QABB8gBCUQgBCDABClQABCjADC+QACC+AEDOQAEDPAFDWQAFDWAGDW");
        this.shape_40.setTransform(53.7, 179.7);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AIo55Qi1AEiZACQiZACh7AGQh8AHhfATQhfAThCAnQgzAggaBHQgaBHgHBkQgGBlAHB5QAHB6APCFQAPCGASCIQASCKAQCCQAPCDAYCmQAYCoAeDDQAdDCAiDUQAiDUAiDaQAjDaAhDW");
        this.shape_41.setTransform(44.9, 199);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AH555QgwAChIABQhIABhWADQhWAChaAEQhaAFhVAHQhWAHhHAKQgyAHgnANQgnAMgcAYQgcAZgQAqQgQArgEBFQgFBNAEBlQAEBlAKB0QAKB1AOB8QAOB8APB8QAPB8ANB1QAPCCAYCmQAXCmAdDBQAdDAAhDSQAhDRAiDYQAiDZAhDW");
        this.shape_42.setTransform(46.3, 199);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AHb6PQg6ABg0ABQg1ACg2ADQg2ADhBAIQhBAIhSAOQgsAIgsANQgsANgoAYQgnAZgfAqQgfArgRBBQgUBPgSBmQgSBlgQB1QgQB0gOB8QgNB8gLB9QgKB8gHB1QgICGgGCnQgGCngDDCQgEDCgCDVQgCDUgBDgQgBDgABDk");
        this.shape_43.setTransform(24.9, 201.4);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("ADO6QQgdADgjAKQgiAKgiAbQgiAagbA2QgbA2gQBcQgNBRgMBmQgMBmgLB1QgLB0gKB7QgKB7gJB8QgIB8gHB1QgICGgKCmQgKCogKDCQgJDBgIDVQgIDVgFDgQgEDgAADk");
        this.shape_44.setTransform(-1.9, 201.3);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AB26OQglAOggAeQghAegWAuQgYAugLBAQgMBSgHBoQgHBogEB3QgDB3gCB/QgBB/gBCAQgCCAgCB4QgECGgECoQgFCpgFDDQgEDEgEDWQgEDXgDDhQgCDhAADk");
        this.shape_45.setTransform(-2.5, 201.1);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AAi6hQgbAMgNAeQgPAegFArQgGArgBAxQgBAyABAxMAAAAwR");
        this.shape_46.setTransform(-2.1, 203);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AAA7IMAAAA2R");
        this.shape_47.setTransform(-2.8, 207);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("Agh6hQAbAMANAeQAPAeAFArQAGArABAxQABAygBAxMAAAAwR");
        this.shape_48.setTransform(-5, 203);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("Ah16OQAlAOAgAeQAhAeAWAuQAYAuALBAQAMBSAHBoQAHBoAEB3QADB3ACB/QABB/ABCAQACCAACB4QAECGAECoQAFCpAFDDQAEDEAEDWQAEDXADDhQACDhAADk");
        this.shape_49.setTransform(-4.7, 201.1);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AjN6QQAdADAjAKQAiAKAiAbQAiAaAbA2QAbA2AQBcQANBRAMBmQAMBmALB1QALB0AKB7QAKB7AJB8QAIB8AHB1QAJCGAJCmQAKCoAKDCQAJDBAIDVQAIDVAFDgQAEDgAADk");
        this.shape_50.setTransform(-4.1, 201.3);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("Ana6PQA6ABA0ABQA1ACA2ADQA2ADBBAIQBBAIBSAOQAsAIAsANQAsANAoAYQAnAZAfAqQAfArARBBQAUBPASBmQASBlAQB1QAQB0AOB8QANB8ALB9QAKB8AHB1QAICGAGCnQAGCnADDCQAEDCACDVQACDUABDgQABDggBDk");
        this.shape_51.setTransform(-31, 201.4);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("An455QAwACBIABQBIABBWADQBWACBaAEQBaAFBVAHQBWAHBHAKQAyAHAnANQAnAMAcAYQAcAZAQAqQAQArAEBFQAFBNgEBlQgEBlgKB0QgKB1gOB8QgOB8gPB8QgPB8gNB1QgPCCgYCmQgXCmgdDBQgdDAghDSQghDRgiDYQgiDZghDW");
        this.shape_52.setTransform(-52.4, 199);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("Aon55QC1AECZACQCZACB7AGQB8AHBfATQBfATBCAnQAzAgAaBHQAaBHAHBkQAGBlgHB5QgHB6gPCFQgPCGgSCIQgSCKgQCCQgPCDgYCmQgYCogeDDQgdDCgiDUQgiDUgiDaQgjDaghDW");
        this.shape_53.setTransform(-50.9, 199);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("Aqs24QCTAACUACQCUADCMAGQCKAIB5AMQB5AOBcAVQBcAWA2AgQA9AkAjA7QAiA6AQBQQAQBQAEBnQAEBmgCB9QgBB8ABCUQABCDgBClQgBCjgDC+QgCC+gEDOQgEDPgFDWQgFDWgGDW");
        this.shape_54.setTransform(-59.7, 179.7);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AqN2TQByACByABQByADBtADQBtAEBhAFQBhAFBQAFQBPAFA4AFQB7ALBJAlQBJAkAhA7QAhA8ACBTQACBTgUBoQgTBpghB+QggB/gjCSQgZBrgkCFQgjCFgsCXQgsCZgyClQgxClg1CpQg1Cqg2CoQg2Cng0Cf");
        this.shape_55.setTransform(-62.9, 176);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("Ar81yQBfAABvACQBvACB1ADQB1ADBxADQBxADBlAEQBlAFBOAEQBPAEAvAEQB7ANBKAeQBKAeAjAuQAjAvAEA+QAFA+gQBLQgRBMgcBXQgcBXgfBiQglB5gwCOQgwCOhACuQg/CthUDXQhUDXhtEJQhtEKiKFG");
        this.shape_56.setTransform(-73.1, 172.7);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AwI9YQFQAAEHADQEGADDGAGQDHAGCUAJQCTAJBqAKQCUAPBZArQBaAqAnBOQAoBOgBB3QAAB2ggCnQggCmg2DdQg3DdhDEZQgbB2gnCTQgmCTgyC6QgzC6hCDoQhBDnhTEeQhSEehmFb");
        this.shape_57.setTransform(-99.5, 221.2);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AwC9cQENAADcACQDbABCwAEQCuADCMAFQCLAFBsAHQBtAHBVAJQCUAPBaAxQBaAwApBXQAqBWADB+QADB+gaCpQgZCpgsDYQgsDXg1EIQgXB2giCTQghCSgvC4QgvC4g/DmQg/DmhREdQhQEchmFc");
        this.shape_58.setTransform(-100.1, 221.6);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("AwR88QDKACDAABQDAABCwACQCvABCYADQCYADB7AGQB7AFBWAIQCUAOBkAeQBkAdA7A3QA6A2AYBaQAYBagDCIQgECIgZDAQgZC/gnECQgVCOgrDkQgqDjhAEyQhAEyhVF4QhVF3hpG2");
        this.shape_59.setTransform(-97.9, 218.4);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("Avj7PQD8ACDjABQDiACDCADQDBAECaAHQCaAIBrAOQCGASBeAcQBeAdA6AzQA5AzAZBVQAZBUgDCAQgDCBgbC4QgbC3gwD6QgYCEgqDNQgrDMhBEWQhBEXhcFgQhdFfh8Gp");
        this.shape_60.setTransform(-96.5, 207.6);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("Avv7gQAMAAAxAAQAwABBLABQBKAABaABQBZABBeABQBeABBXABQBYABBGAAQD2ABC1ANQC1ANB+AYQB+AZBPAlQBQAkAsAwQAsAxASA8QASA9ABBIQACBIgEBVQgFBUgBBgQAABHgSB/QgSB+ggCrQgfCrgrDNQgqDMgyDlQgyDkg1DyQg1Dxg2D0Qg1DzgzDr");
        this.shape_61.setTransform(-95.4, 209.3);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f().s("#FFFFFF").ss(1, 1, 1, 3, true).p("Av+7gQALAAAoAAQAnABA8AAQA9ABBJABQBJABBQABQBPABBPAAQBOABBGAAQD3ABC7APQC9APCJAcQCKAbBfAoQBfAoA7A0QA8AzAhA/QAgA+AOBJQANBIACBTQACBSgCBbQgBBHgOB9QgPB9gbCqQgaCqgkDKQgkDLgrDiQgrDjgvDwQgwDwgyDzQgyDygyDr");
        this.shape_62.setTransform(-93.8, 209.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_32
            }]
        }).to({
            state: [{
                t: this.shape_33
            }]
        }, 1).to({
            state: [{
                t: this.shape_34
            }]
        }, 1).to({
            state: [{
                t: this.shape_35
            }]
        }, 1).to({
            state: [{
                t: this.shape_36
            }]
        }, 1).to({
            state: [{
                t: this.shape_37
            }]
        }, 1).to({
            state: [{
                t: this.shape_38
            }]
        }, 1).to({
            state: [{
                t: this.shape_39
            }]
        }, 1).to({
            state: [{
                t: this.shape_40
            }]
        }, 1).to({
            state: [{
                t: this.shape_41
            }]
        }, 1).to({
            state: [{
                t: this.shape_42
            }]
        }, 1).to({
            state: [{
                t: this.shape_43
            }]
        }, 1).to({
            state: [{
                t: this.shape_44
            }]
        }, 1).to({
            state: [{
                t: this.shape_45
            }]
        }, 1).to({
            state: [{
                t: this.shape_46
            }]
        }, 1).to({
            state: [{
                t: this.shape_47
            }]
        }, 1).to({
            state: [{
                t: this.shape_48
            }]
        }, 1).to({
            state: [{
                t: this.shape_49
            }]
        }, 1).to({
            state: [{
                t: this.shape_50
            }]
        }, 1).to({
            state: [{
                t: this.shape_51
            }]
        }, 1).to({
            state: [{
                t: this.shape_52
            }]
        }, 1).to({
            state: [{
                t: this.shape_53
            }]
        }, 1).to({
            state: [{
                t: this.shape_54
            }]
        }, 1).to({
            state: [{
                t: this.shape_55
            }]
        }, 1).to({
            state: [{
                t: this.shape_56
            }]
        }, 1).to({
            state: [{
                t: this.shape_57
            }]
        }, 1).to({
            state: [{
                t: this.shape_58
            }]
        }, 1).to({
            state: [{
                t: this.shape_59
            }]
        }, 1).to({
            state: [{
                t: this.shape_60
            }]
        }, 1).to({
            state: [{
                t: this.shape_61
            }]
        }, 1).to({
            state: [{
                t: this.shape_62
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-573.4,-149,1079.7,535.4);

    // stage content:
    (lib.assets = function() {
        // Layer 1
        this.road = new lib.road();
        this.road.parent = this;
        this.road.setTransform(290, 382.1, 1, 1, 0, 0, 0, 15.2, 206.8);
        this.addChild(this.road);

    }
    ).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-22.7,201.2,1077.7,534.4);

    // library properties:
    lib.properties = {
        width: 550,
        height: 350
    };

    // bootstrap callback support:
    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }
    ).prototype = p = new createjs.Stage();

}
)(lib = lib || {}, createjs = createjs || {});
var lib, createjs;
