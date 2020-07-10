# Standard Template

[Website](https://michaelbarney.github.io/LinkFree/Templates/CasualBlue/)

<img src="Templates/SimpleBlue/preview.png" alt="alt text" width="250px">

## How to Use
### index.html
 1. **Title**
    This is the name that is given to the page.
	   ```
	   <title>Your Title Here</title>
	   ```
 2. **(Optional) Favicon** 
	To change the favicon, just replace the "favicon.ico" file. You can generate the .ico file in a website like [favicon.io](https://favicon.io/).
 3. **Image**
	 This is the user image that is shown. Make sure it is square and substitute the "src" property with its url. You can generate the url in a website like [imgur](https://imgur.com/).
	```
	<img  id="userPhoto"  src="https://i.imgur.com/t8ZX9um.jpg"  alt="User Photo">
	```
 4. **Links**
 To add your clickable links just substitute, delete or copy the "a" tags inside the "links" div with your desired hyperlinks.
	```
	<div  id="links">

		<a  href="https://pt.wikipedia.org/wiki/Homer_Simpson"  target="_blank">Wikipedia</a>

		<a  href="https://foxplay.com/br/forme"  target="_blank">IMDB</a>

	</div>
	```
### style.css
 5. **Colors**
	 Substitute the background and accent colors with your desired pallete.
	 ```
	 --bgColor: white;
	--accentColor: #39e09b;
	 ```
 6. **Fonts**
	 You can import the font from a website like [Google Fonts](https://fonts.google.com/) and substitute the "--font" variable with its implementation.
	 ```
	 @import  url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');
	 
	 --font: 'Karla', sans-serif;
	 ```
