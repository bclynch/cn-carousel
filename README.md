# CN Carousel
I decided to utilize React for this project. I have a boilerplate setup for Heroku deployment which I used as a base here to get up and rolling quickly.

###Finished Application
Check out the finished application here: https://cn-carousel.herokuapp.com/

###Installing Locally

Install required dependencies and run the app. Run the following commands in your terminal and head to localhost:8080 in your browser for developing:

  > $ git clone https://github.com/bclynch/cn-carousel.git
	> $ npm install
	> $ npm start

###Code Commentary
- Had a few issues with the API I was given for the application.
  - First off I couldn't figure out what the base URL was for the linked images returned in the API call. As an alternative I took the images you folks sent in the zipped file with this exercise and used those instead by including them locally in the project.
  - Second the API is served via http and did not have any kind of CORS headers set up. This doesn't matter much when hitting the endpoint with Postman or the browser, but as noted this is running on a Heorku deployment via HTTPS. As such I had a lot of problems with 'mixed content' and the browser blocking my request. Tried a few tricks with headers to get around it, but had no luck. Normally would ask whoever was dealing with the API on the team to serve from HTTPS or allow for some CORS magic, but in the interest of time just manually entered in the JSON response so I could be productive again. It is setup and utilized exactly as an API response would be in my App.js component. I subsequently pass the data down to my Slider.js component via props. Hope that alternative was alright!
- I utilized two popular React component repos (though I hadn't used them). Again in the interest of time its typically better not to recreate the wheel and instead build off 500+ star libraries. Both had enough custom properties to make them useful for this basic project.
  - https://github.com/reactjs/react-modal
  - https://github.com/FormidableLabs/nuka-carousel
- For the purpose of dynamic styling based on the type of device being used I went with a JS solution instead of CSS. As mentioned in my index.js where I executed the logic I typically use more modular or inline styling with React instead of typical CSS. I only used one breakpoint (800px) which should work well enough in a pinch, though it would be trivial to create more breaks to better cover a wide breadth of devices.
