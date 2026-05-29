JavaScript Functions
 React Components 
 JSX Rules
 Bootstrap 
   https://colorlib.com/
 Ex:
 Netflix-clone.html 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix | Movies & TV Shows</title>
    <!-- Custom Styles -->

    <style>
        body {
            background-image: url("netflix-banner.jpg");
            background-size: cover;
        }
        .shade {
            background-color: rgba(0,0,0,0.7);
            height: 100vh;
        }
        .brand-title {
            font-size: 40px;
            font-weight: bold;
            color:red;
        }
        article {
            padding-top: 60px;
        }
        .article-title {
            font-size: 60px;
            font-weight: bold;
        }
        .article-text {
            font-size: 25px;
        }
    </style>

    <!-- Bootstrap Library -->
     <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
     <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
     <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>

     <!-- React Library -->
      <script src="../node_modules/react/umd/react.development.js"></script>
      <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
      <script src="../node_modules/@babel/standalone/babel.js"></script>

      <!-- Virtual DOM -->
       <script type="text/babel">

        function NetflixIndex(){
            return(
                <div className="shade">
                    <NetflixHeader />
                    <NetflixHeroBanner />
                </div>
            )
        }

        function NetflixHeader(){
            return(
                <header className="d-flex justify-content-between align-items-center p-5">
                    <div>
                        <span className="brand-title">NETFLIX</span>
                    </div>
                    <div>
                        <div className="d-flex">
                            <div className="input-group">
                                <span className="bi bi-translate input-group-text"></span>
                                <select className="form-select">
                                    <option>Language</option>
                                    <option>English</option>
                                </select>
                            </div>
                            <button className="btn mx-2 btn-danger">Signin</button>
                        </div>
                    </div>
                </header>
            )
        }

        function NetflixHeroBanner(){
            return(
                <article className="text-center text-white">
                    <div className="article-title">Unlimited movies, <br/> shows, and more</div>
                    <div className="article-text">Starts at ₹149. Cancel at any time.</div>
                    <NetflixMain />
                </article>
            )
        }

        function NetflixMain(){
           return(
             <form className="mt-4">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="d-flex justify-content-center">
                    <div>
                        <div className="input-group input-group-lg">
                        <input type="email" className="form-control" placeholder="Your email address" />
                        <button className="btn btn-danger ms-2"> Get Started <span className="bi bi-chevron-right"></span> </button>
                        </div>
                    </div>
                </div>
            </form>
           )
        }

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<NetflixIndex />);

       </script>
</head>
<body>
    <noscript>Please enable Javascript on your browser</noscript>
    <div id="root"></div>
</body>
</html>

   Stitch Google
       https://stitch.withgoogle.com

   - Go to Web Category
    - Enter Prompts
           * Create food delivery application home page
           * It is a React JS component based design 
           * Header with brand , search bar and shortcuts.
           * Hero Banner with Get started 
           * Section with featured products as cards 
           * Footer with services and social links
