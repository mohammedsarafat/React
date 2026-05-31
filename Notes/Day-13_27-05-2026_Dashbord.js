React Vite Bundler 
Sudhakar Sharma (Sudhakar Sharma Naresh IT)
•
Yesterday
Creating React environment using bundlers: 

   - Bundler is a software tool used by developers to build, debug, test and deploy 

     various types of applications. 

   - It can configure the application for development, quality and production. 

   - It can setup libraries required for project. 

   - It uses a scaffolding technique to generate required content for developer. 

   - The popular bundlers

       a) Web Pack

       b) Vite 

       c) Parcel etc. 



   Building React application using Vite Bundler:



   1. Open any location on your PC from command prompt or terminal.



               windows => run => command =>  c:\> D:



               D:\> npm  create   vite@latest    app_name 



               Mac => terminal => run the command 

   

    2. Provide input for following queries 

           

               Select Framework      : React 

               Select Variant              : Javascript 

               Install Library[NPM]     : Yes

           

               If you selected “no” then it creates a folder by your project name.

               Change into the folder and run the command:

                   

                   D:\> cd  app_name



                   D:\app_name> npm  install 



             Note: Latest version of “vite” will install and start project implicitly.

                      Terminate using “ctrl + c” 



   3. Open project folder in VS Code 



   Project File System

   

   1. node_modules        : It comprises of all library files installed using NPM.



   2. public                    : It comprises of all static resources: images, docs, videos,

                                     json files etc.



   3. src                        : It comprises of all dynamic resources: js, jsx, css, ts, tsx, scss..



   4. .gitignore                : It configures the files to ignore while publishing onto GIT.



   5. eslint.config.js        : It is Javascript language configuration file. [Rules] 



   6. index.html            : It is startup page.



   7. package.json            ] project meta data - editable [development] 



   8. package.lock.json    ] project meta data - locked [production]



   9. README.md        : It is a help document by developer for developer. 



   10. Vite.config.js        : It is used to configure our application with various plugins 

                                     like server side frameworks, testing frameworks. 



   Note: To run your react application



               > npm run dev 



              It starts on local server with default port “5173”.



              Request from any browser:

   

                       http://127.0.0.1:5173       

                                     (or)

                       http://localhost:5173
