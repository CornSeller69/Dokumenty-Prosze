This folder is where you should put your extension's files.

HOW TO USE:
1. Open the main HTML File (the one you open the game with) in some text editor/code editor (Notepad will work aswell).
2. Scroll down to the bottom.
3. You should see an area highlighted with comments.
4. In there if you want your extension JavaScript files to work, you should link them like the provided test.js link shows: <script src="Extensions/FILENAME.js"></script>
5. If any other files are necessary for your modification, put them in Extensions/Materials/, and in files refer to them the same way (It is not just Materials/ because
JavaScript sortof reads from location of the HTML file. CSS files however load from their own position, if that is important to you, ofcourse. To go back to previous folder,
you can use "/../". For example if 10.png is in folder before the one where style1.css is, in style1.css you will want to do "../10.png".
6. Some modifications might require you to also change the original files, but beware to not make something broken :P