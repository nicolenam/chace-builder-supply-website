# Chace Building Supply Website Optimization

This project aims to refactor and optimize the Chace Building Supply website to improve its performance, adhere to semantic HTML practices, and enhance search engine optimization (SEO). The goal is to achieve faster page load times, better usability, and improved visibility in search engine rankings.

## Analysis and Proposed Changes

![Screen Shot 2023-06-30 at 3 11 57 PM](https://github.com/nicolenam/chace-builder-supply-website/assets/58302337/ea234007-2c84-417b-8e95-346ca398a953)

For a full report, view [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-www-chacebuildingsupply-com/m95mk94djn?form_factor=desktop)

### Page Load Time Optimization
- Implement minification of HTML, CSS, and JavaScript files to reduce file sizes and improve loading speed.
- Enable compression using Webp format to further reduce the size of images.
- Utilize lazy loading, which means that a component or a part of code only gets loaded when it is required.

 <details>
            <summary>Opportunities</summary>

- Reduce unused CSS and JS files (2.53s)
![Screen Shot 2023-07-01 at 6 12 08 PM](https://github.com/nicolenam/chace-builder-supply-website/assets/58302337/e768b5d8-eae9-4eac-b39b-53b40af3c4b3)

</details>

### Semantic Structure Enhancement
- Review the existing markup and enhance it to adhere to semantic HTML practices.
- Replace div elements with appropriate HTML5 structural elements such as header, nav, main, and footer.
- Ensure proper usage of heading tags (h1, h2, etc.) for better document structure and accessibility.

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

### SEO Optimization
- Evaluate the current markup for SEO deficiencies and make the following improvements:
  - Implement relevant and descriptive page titles using the <title> tag.
  - Utilize appropriate heading tags (h1, h2, etc.) to structure content and highlight important keywords.
  - Add meta tags, including meta description and meta keywords, to provide concise information for search engines.
 
 <details>
    <summary>Meta tags for SEO</summary>

```html
<html>
    <head>
        <meta charset="UTF-8">

        <title>Chace Building Supply - Quality Construction Materials for Your Projects</title>

        <meta name="description" content="Chace Building Supply offers a wide range of high-quality construction materials for residential and commercial projects. 
        Browse our catalog and find everything you need for your next construction or remodeling job.">

        <meta name="keywords" content="construction materials

, building supplies, remodeling, residential construction">

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

## Updated Code
The optimized HTML, CSS, and JavaScript code can be found in the following files:

- [Header.js](https://github.com/nicolenam/chace-builder-supply-website/blob/main/src/components/Header.js)
- [Header.scss](https://github.com/nicolenam/chace-builder-supply-website/blob/main/src/styles/Header.scss)


Please note that these files represent a representative sample of the optimization changes made.

## Summary Report

| Before | After |
| --- | --- |
![Screen Shot 2023-07-01 at 5 58 53 PM](https://github.com/nicolenam/chace-builder-supply-website/assets/58302337/e40a3cda-62de-47d9-b9d8-fd4f2ad773b1)  |  ![Screen Shot 2023-07-01 at 5 57 32 PM](https://github.com/nicolenam/chace-builder-supply-website/assets/58302337/94a698e6-0129-40bf-ab96-44bcbac2791e)


Deployed [Chace Building Supply](https://chace-building-supply.netlify.app) and Full report, view [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-chace-building-supply-netlify-app/djjr4amv17?form_factor=desktop)

A summary report outlining the key optimizations made and their expected impact on performance, conversion rate, and SEO is available in the `summary-report.pdf` file.

## Sitemap
The recommended sitemap for the new and improved Chace Building Supply website is as follows:

![Screen Shot 2023-07-02 at 12 37 44 AM](https://github.com/nicolenam/chace-builder-supply-website/assets/58302337/784dbd96-b1ca-4246-9e79-bd0ea8039319)


## Acknowledgements
- The Chace Building Supply team for providing the opportunity to optimize their website.
- [Toolbx](https://toolbx.com) for the design standards and inspiration.

## Contact
For any inquiries or questions, please contact me at [eunjungnam@gmail.com](mailto:eunjungnam@gmail.com).
