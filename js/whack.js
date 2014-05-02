$('document').ready(function(){
	var game = {
		game_block: $('.game_block'), // Select all .game_block store jQuery as game_block
		clicks: 0,
		hits: 0,
		score: 0,
		level: 1,
		highscore: 0,
		image_count: 28,
		display_interval: 1000,
		display_timein: 400,
		display_timeout: 400,
		game_time: 30000,
		game_time_s: this.game_time / 1000,  
		block_width: $('.game_block').width(),
		update_score: function () {
			$("#score").html(this.score);
			$("#highscore").html(this.highscore);
			$("#clicks").html(this.clicks);
			$("#level").html(this.level);
		},
		display_new_img: function () {
			// Generate a random number between 1 and max
			var rand = Math.floor((Math.random()*this.game_block.length));
			// Generate a random grump image
			var img = Math.floor((Math.random()*this.image_count))+1;
			// Fade out all images
			$(this.game_block).children().fadeOut(this.display_timeout);
			// Change a selected to a random image
			$(this.game_block[rand]).children().attr('src','img/grumpy'+img+'.jpeg');
			// Fade in the random image
			$(this.game_block[rand]).children().fadeIn(this.display_timein);
		},
		end_game: function () {
			// Stop the images from cycling
			window.clearInterval(display);
			// Stop the countdown from progressing
			window.clearInterval(countdown);
			// Fade out all remaining images
			$(game.game_block).children().fadeOut();
			// Show start button
			$('.btn-success').removeAttr('disabled');
			// Reset all stats for next game
			game.score = 0;
			game.clicks = 0;
		},
		start_timer: function() {
			$('.btn-success').on('click', function (){
				countdown = setInterval(function() {
					var timer = $('#timer');
					current = parseInt(timer.html());
					timer.html(--current);
				}, 1000);
			});
		}
	};

	// Set height to equal width for game_block
	$(game.game_block).height(game.block_width);

	// Game_blocks are clicked, increase click count
	game.game_block.on("click", function(){
		game.clicks++;
		game.update_score();
	});

	// Incerment score and hits only on successful htis
	game.game_block.children().on("click", function(){
		$(this).hide();
		game.hits++
		game.score = game.score + game.level;
		if((game.hits % 10)==0) {
			game.level++;
		}
		// Update highscore if appropriate
		if (game.score > game.highscore) {
			game.highscore = game.score;
		}
		game.update_score();
	});

	// Start game timer on start button click
	$('.btn-success').on('click', game.start_timer());

	// Game start on button click
	$('.btn-success').on('click',function(){
		// Reset level
		game.level = 1;
		$('#level').html(game.level);
		// Reset timer
		game.game_time_s = 30;
		$('#timer').html(game.game_time_s);
		// Disable the start button
		$(this).attr('disabled','disabled');
		// Reset stats on game start:
		game.update_score();
		// Start to display new images on interval
		display = setInterval( function() {
			// Call display_new_img
			game.display_new_img();
		}, game.display_interval);

		setTimeout(function(){
			game.end_game();
			$('#timer').html(0);
		}, game.game_time);
	});
});