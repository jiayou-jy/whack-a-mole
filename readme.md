# Whack-A-Mole

Because you shouldn't take yourself seriously all the time.  This is a clone of the classic Whack-A-Mole game, using Javascript, CSS3, HTML5.  External libraries include jQuery, Twitter Bootstrap and Google Fonts.  Initial progression of this game can be seen in [codeup.dev](https://github.com/bcbeidel/codeup.dev) repository.

### Planned functionality
+ Game difficulty selection
+ Game increase speed with progression
+ Saved top score functionality
+ Full explanation of clone development
+ Improved layout / images

---

### Build Process
Since I decided to break this game into it's own repository much further down in the development process, I wanted to give some quick snapshots and references to the working commits so there is some context on how the game was made.

#### Creating the board
To start, making whack-a-mole, I decided that inside the body of the base html to create our grid in which our 'moles' would be appearing and subsequently disappearing.  Leveraging the power of twitter bootstrap and a little custom CSS making the basic board. And adding some goofy meme's to use for the 'Whack-A-Grump' theme.  Important to note that at this stage I began experimenting with using JavaScript to set the height of the block spaces. [Check out the code at this point](https://github.com/bcbeidel/codeup.dev/commit/8dc63d7c1ac485849998fe4d4a5d32587c1f6385)

#### Making a random image appear and disappear when clicked

The next key component in my mind was to make certain that I could control the display of an image.  So, I embedded an image in each of the game-blocks with a display of none, and used JavaScript / jQuery to make a random image in one of the nine blocks appear on the page load and subseuquently fade out when clicked.[Check out the code at this point](https://github.com/bcbeidel/codeup.dev/commit/cf689e79a143ba56f2fbf55e7e6451d811efbb82)

