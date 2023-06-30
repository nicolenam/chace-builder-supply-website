# Chace Building Supply Website Optimization

This project aims to refactor and optimize the Chace Building Supply website to improve its performance, adhere to semantic HTML practices, and enhance search engine optimization (SEO). The goal is to achieve faster page load times, better usability, and improved visibility in search engine rankings.

## Analysis and Proposed Changes

![Screen Shot 2023-06-30 at 10 21 26 AM](https://github.com/nicolenam/chace-builder-supply-website/assets/58302337/8c8a0db7-33fe-4840-b17a-38fa857fb6dd)

[View Full Report](https://pagespeed.web.dev/analysis/https-www-chacebuildingsupply-com/m95mk94djn?form_factor=desktop)

### Page Load Time Optimization
- Implemented minification of HTML, CSS, and JavaScript files to reduce file sizes and improve loading speed.
- Enabled compression using gzip or deflate to further reduce the size of transferred files.
- Utilized browser caching by configuring appropriate cache headers for static assets like images, CSS, and JavaScript files.

### Semantic Structure Enhancement
- Reviewed the existing markup and enhanced it to adhere to semantic HTML practices.
- Replaced div elements with appropriate HTML5 structural elements such as header, nav, main, and footer.
- Ensured proper usage of heading tags (h1, h2, etc.) for better document structure and accessibility.

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
- Evaluated the current markup for SEO deficiencies and made the following improvements:
  - Implemented relevant and descriptive page titles using the <title> tag.
  - Utilized appropriate heading tags (h1, h2, etc.) to structure content and highlight important keywords.
  - Added meta tags, including meta description and meta keywords, to provide concise information for search engines.
  - Implemented structured data markup, such as Schema.org, to enhance search engine understanding of the content.
 
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

## Updated Code
The optimized HTML, CSS, and JavaScript code can be found in the following files:


Please note that these files represent a representative sample of the optimization changes made.

## Sitemap
The recommended sitemap for the new and improved Chace Building Supply website is as follows:

- Home
- About Us
- Products
  - Category 1
    - Product 1
    - Product 2
    - ...
  - Category 2
    - Product 1
    - Product 2
    - ...
  - ...
- Services
- Contact Us

## Summary Report
A summary report outlining the key optimizations made and their expected impact on performance, conversion rate, and SEO is available in the `summary-report.pdf` file.

## Acknowledgements
- The Chace Building Supply team for providing the opportunity to optimize their website.
- [Toolbx](https://toolbx.com) for the design standards and inspiration.

## Contact
For any inquiries or questions, please contact me at [eunjungnam@gmail.com](mailto:eunjungnam@gmail.com).
