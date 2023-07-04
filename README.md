# Chace Building Supply Website Optimization

This project aims to refactor and optimize the Chace Building Supply website to improve its performance, adhere to semantic HTML practices, and enhance search engine optimization (SEO). The goal is to achieve faster page load times, better usability, and improved visibility in search engine rankings.

## Analysis and Proposed Changes

<img width="953" alt="Screen Shot 2023-07-03 at 11 44 29 AM" src="https://github.com/nicolenam/chace-builder-supply-website/assets/58302337/b7aff2cb-9100-4722-b123-948e5e156c77">

For a full report, view [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-www-chacebuildingsupply-com/hbjy7uagdw?form_factor=desktop)

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
- Add Schema markup, found at Schema.org, is a form of microdata. Schema markup creates an enhanced description, which appears in search results.

<details>
            <summary>HTML structure</summary>
<body>
    <header>
        <nav></nav>
    </header>

    <main>
        <section className="about">
            <div className="aboutContainer">
                <h1>Chace Building Supply</h1>
            </div>
            <div className="location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2245495232055!2d-71.934847640827!3d41.93102598816592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e42773292aa979%3A0x5276ec279c3b0a1c!2s90%20Somers%20Turnpike%2C%20Putnam%2C%20CT%2006260%2C%20USA!5e0!3m2!1sen!2sca!4v1688266538456!5m2!1sen!2sca"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    title="chace map"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="locationDetails">
                    <h2>Location</h2>
                    <div className="sc-bdfBwQ sc-gbHxpA cIKpxU hjQVrM">
                        <div>
                            <p className="sc-hOqqkJ cWGOwq">Chace Building Supply</p>
                            <p className="sc-hOqqkJ cWGOwt">90 Somers Turnpike</p>
                            <p className="sc-hOqqkJ cWGOwt">Woodstock, CT 06281</p>
                        </div>
                        <div>
                            <p className="sc-hOqqkJ cWGOwt">Phone: 1 (437) 747-8473</p>
                            <a href="mailto:info@chacebuildingsupply.com">
                                <p color="#12856e" className="sc-hOqqkJ hsIUPC">info@chacebuildingsupply.com</p>
                            </a>
                        </div>
                        <div>
                            <p className="sc-hOqqkJ cWGOwq">Store Hours</p>
                            <p className="sc-hOqqkJ cWGOwt">Mon-Fri 8 AM - 4 PM</p>
                            <p className="sc-hOqqkJ cWGOwt">Sat 9 AM - 12 PM</p>
                            <p className="sc-hOqqkJ cWGOwt">Sun CLOSED</p>
                        </div>
                        <a href="/" className="sc-cjHJEj kQbLAY">
                            <p color="#12856e" className="sc-hOqqkJ hsIUPC">Change Location</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Add more sections or content here -->
    </main>

    <footer>
        <!-- Footer content here -->
    </footer>
</body>



</details>

<details>
            <summary>HTML structure with Schema</summary>
<!DOCTYPE html>
<html>

<head></head>

<body>
    <header>
        <nav></nav>
    </header>

    <main>
        <section itemscope itemtype="http://schema.org/LocalBusiness" className="about">
            <div className="aboutContainer">
                <h1 itemprop="name">Chace Building Supply</h1>
            </div>
            
                 <!--  Add more sections or content here  -->
                 
            <span itemprop="openingHoursSpecification" itemscope itemtype="http://schema.org/OpeningHoursSpecification">
                <span itemprop="dayOfWeek" itemscope itemtype="http://schema.org/DayOfWeek">
                    <div itemprop="name">
                        <p className="sc-hOqqkJ cWGOwq">Store Hours</p>
                        <p className="sc-hOqqkJ cWGOwt">Mon-Fri 8 AM - 4 PM</p>
                        <p className="sc-hOqqkJ cWGOwt">Sat 9 AM - 12 PM</p>
                        <p className="sc-hOqqkJ cWGOwt">Sun CLOSED</p>
                    </div>
                </span>
            </span>
                    
     <!--  Add more sections or content here  -->
       
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
![Screen Shot 2023-07-01 at 5 58 53 PM](https://github.com/nicolenam/chace-builder-supply-website/assets/58302337/e40a3cda-62de-47d9-b9d8-fd4f2ad773b1)  | ![Screen Shot 2023-07-02 at 9 55 01 PM](https://github.com/nicolenam/chace-builder-supply-website/assets/58302337/91a85aab-791f-4e20-8aff-8c934f8c0bb0)



Deployed [Chace Building Supply](https://chace-building-supply.netlify.app) and Full report, view [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-chace-building-supply-netlify-app/hb2skcjqk5?form_factor=desktop)

A summary report outlining the key optimizations made and their expected impact on performance is available in the [summary-report](https://docs.google.com/document/d/1E1Gf4Kck1xhBblbBlynD9R_bi4efCI8HYNNjalOO8N4/edit?usp=sharing) file.

## Sitemap
The recommended sitemap for the new and improved Chace Building Supply website is as follows:

![Screen Shot 2023-07-03 at 10 21 17 PM](https://github.com/nicolenam/chace-builder-supply-website/assets/58302337/7dded48c-8bb9-42f5-bb84-9d6b9321a29b)

## Acknowledgements
- The Chace Building Supply team for providing the opportunity to optimize their website.
- [Toolbx](https://toolbx.com) for the design standards and inspiration.

## Contact
For any inquiries or questions, please contact me at [eunjungnam@gmail.com](mailto:eunjungnam@gmail.com)
