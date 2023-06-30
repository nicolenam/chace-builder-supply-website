# Chace Building Supply Website Optimization

This repository contains the analysis, proposed optimizations, and updated code for the Chace Building Supply website optimization project. The goal of this project is to improve the website's performance, semantic structure, and search engine optimization (SEO) while adhering to the TOOLBX design standards.

## Analysis

The existing Chace Building Supply website has been neglected for years, resulting in slow page load times and a lack of proper semantic structure. To address these issues, the following optimizations have been identified:

1. **Page Load Time Optimization**: The website's HTML, CSS, and JavaScript code will be optimized to reduce page load time. Techniques such as minification, compression, and efficient use of browser caching will be employed.

2. **Semantic Structure Enhancement**: The website's markup will be enhanced to adhere to semantic HTML practices. Proper usage of HTML5 structural elements like header, nav, main, and footer will be implemented to improve readability and accessibility.

3. **SEO Optimization**: The current markup will be evaluated for SEO deficiencies and improvements will be made. This includes using appropriate heading tags, meta tags, and structured data markup to enhance the website's visibility in search engine rankings.

## Proposed Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

Based on the analysis, the following optimizations will be implemented:

1. **Minification and Compression**: The HTML, CSS, and JavaScript code will be minified to reduce file size and improve load times. 	
npm run build

2. **Browser Caching**: The website's static assets, such as images, CSS, and JavaScript files, will be configured with appropriate cache headers to allow browsers to cache them and reduce the need for repeated downloads.

3. **Semantic HTML Structure**: The existing markup will be updated to utilize semantic HTML5 elements, improving the website's structure and making it more accessible to users and search engines.

    <details>
        <summary>Meta tags for SEO</summary>

    ```html
    <html>
        <head>
            <meta charset="UTF-8">

            <title>Chace Building Supply - Quality Construction Materials for Your Projects</title>

            <meta name="description" content="Chace Building Supply offers a wide range of high-quality construction materials for residential and commercial projects. 
            Browse our catalog and find everything you need for your next construction or remodeling job.">

            <meta name="keywords" content="construction materials, building supplies, remodeling, residential construction">

            <meta name="robots" content="index, follow">

            <link rel="canonical" href="https://www.chacebuildingsupply.com/">

            <meta property="og:title" content="Chace Building Supply - Quality Construction Materials">
            <meta property="og:image" content="https://www.chacebuildingsupply.com/image.jpg">
            
        </head>
    <body>
    <!-- webpage content goes here -->
    </body>
    </html>

    ```
    </details>

4. SEO Enhancements: Relevant heading tags (h1, h2, etc.) will be utilized to provide a clear hierarchy of content. Meta tags, including title, description, and keywords, will be optimized to accurately represent each page's content. Structured data markup will be added where appropriate to provide search engines with additional context.

    <details>
            <summary>HTML structure</summary>

        <body>
            <header>
                <nav></nav>
            </header>

            <main>
                <section className="welcome">
                <div className="content-container">
                    <h1>Welcome to Chace Building Supply!</h1>
                    <p>
                    Over five generations ago in 1885, Peleg Durfree Humphrey first opened the doors of his lumber company on the riverfront wharf in Tiverton, Rhode Island. As the main suppliers for local business and residential construction, the company grew with the area and became the largest employer in Tiverton. Several generations later, P.D. Humphrey was instrumental in rebuilding the coastline areas of Southern Rhode Island and Eastern Connecticut after the devastating hurricane of 1938. A subsequent hurricane in 1954 finally resulted in a move to higher ground after company employees watched most of their inventory float away down the Sakonnet River.
                    </p>
                    <img src="/ezgif.com-webp-to-png.png" alt="deck">
                </div>
                </section>

                <!-- Add more sections or content here -->
            </main>

            <footer>
                <!-- Footer content here -->
            </footer>
        </body>

    </details>
