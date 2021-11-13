# cap2backend

## About
This is backend application, using iTunes free search API. Technologies used Node JS, Express JS, Morgan, Helmet, Cors, Dotenv, itunesApiSearch.

## Prerequisite 
You should have latest node installed in your computer.

``` bash 
 git clone https://github.com/group3cap2/cap2backend.git
````

Once you copy/clone repo locally you are good to go. just do ```npm install``` inside cloned project, it will take a while depend on your network speed.

open terminal inside project folder and cd to ```./``` folder then run ```npm dev``` your server will be up and running.

## Security
### Helmet
Helmet.js fills in the gap between Node.js and Express.js by securing HTTP headers that are returned by your Express apps. HTTP, by design, is open in nature and highly insecure. It can leak sensitive information about your app and leave your data open to anyone with some tech skills to see.
Helmet.js comes with a collection of Node modules that you can use to interface to Express to increase the HTTP header security. 

#### How does it work? 
It lets you configure the headers and prevent common vulnerabilities such as clickjacking, implementation of strict HTTP, and download options for vulnerable browsers such as IE8.

### CORS
CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.

### dotenv
dotenv is an NPM package for storing sensitive data in environment variables.
Environment variables are external to an application. Developers can think of them as configuration data that are stored either in a machine’s OS or application’s running container. These variables are configured dynamically at runtime and can change based on the environment that the application is run.
Environment variables are a great solution to the problem of securing sensitive data.

## API keys
The first router, media it's responsible for showing different types of media from iTunes API
``` javascript 
app.use("/media", mediaRouter);
````
It has 10 routes
```/``` to get all media
```/movie```  to get movies
```/podcast```  to get podcasts
```/music```  to get musics
```/musicVideo```  to get musicVideos
```/audiobook```  to get audiobooks
```/shortFilm```  to get shortFilms
```/tvShow```  to get tv shows
```/software```  to get softwares
```/ebook```  to get ebooks


The second router, auth it's responsible for signin and signup
``` javascript 
app.use("/auth", authRouter);
````
It has 2 routes
```/signup``` to post new username after check is unique, it takes username and password from body
```/signin``` to get signin successfully if username and password input from body is a match


The third router, favorite it's responsible for adding, remove and showing favorite media
``` javascript 
app.use("/favorite", favRouter);
````
It has 11 routes
```/movie```  to post favorite movies
```/podcast```  to post favorite podcasts
```/music```  to post favorite musics
```/musicVideo```  to post favorite musicVideos
```/audiobook```  to post favorite audiobooks
```/shortFilm```  to post favorite shortFilms
```/tvShow```  to post favorite tv shows
```/software```  to post favorite softwares
```/ebook```  to post favorite ebooks
They take id from query
```/``` to delete from favorite
```/``` to get all favorite media


The fourth router, search it's responsible for searching different types of media from iTunes API
``` javascript 
app.use("/search", searchRouter);
````
It has 1 route
```/:term``` to get the search result, term is any name input in params



