const Support = () =>{
    return(
        <section className="support">
            <div className="delivery">
                <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" fill="#12856e"><path d="M1 9C0.449219 9 0 9.44922 0 10C0 10.5508 0.449219 11 1 11C1.55078 11 2 10.5508 2 10C2 9.44922 1.55078 9 1 9ZM5 9C4.64062 8.99609 4.30469 9.18359 4.12109 9.49609C3.94141 9.80859 3.94141 10.1914 4.12109 10.5039C4.30469 10.8164 4.64062 11.0039 5 11H45V50C44.4492 50 44 50.4492 44 51C44 51.5508 44.4492 52 45 52V63H25.9414C25.4414 58.5117 21.6211 55 17 55C12.3789 55 8.55859 58.5117 8.05859 63H5V52C5.55078 52 6 51.5508 6 51C6 50.4492 5.55078 50 5 50H2V44H0V52H3V65H8.05859C8.55859 69.4883 12.3789 73 17 73C21.6211 73 25.4414 69.4883 25.9414 65H50.0586C50.5586 69.4883 54.3789 73 59 73C63.6211 73 67.4414 69.4883 67.9414 65H78C79.0938 65 80 64.0938 80 63V59C80 58.293 79.5625 57.7734 79 57.418V43.5469L72.4141 26.4805C71.375 23.7852 68.7734 22 65.8867 22H47V9H5ZM4 16C3.44922 16 3 16.4492 3 17C3 17.5508 3.44922 18 4 18C4.55078 18 5 17.5508 5 17C5 16.4492 4.55078 16 4 16ZM8 16C7.44922 16 7 16.4492 7 17C7 17.5508 7.44922 18 8 18C8.55078 18 9 17.5508 9 17C9 16.4492 8.55078 16 8 16ZM12 16C11.4492 16 11 16.4492 11 17C11 17.5508 11.4492 18 12 18C12.5508 18 13 17.5508 13 17C13 16.4492 12.5508 16 12 16ZM16 16C15.4492 16 15 16.4492 15 17C15 17.5508 15.4492 18 16 18C16.5508 18 17 17.5508 17 17C17 16.4492 16.5508 16 16 16ZM20 16C19.4492 16 19 16.4492 19 17C19 17.5508 19.4492 18 20 18C20.5508 18 21 17.5508 21 17C21 16.4492 20.5508 16 20 16ZM24 16C23.4492 16 23 16.4492 23 17C23 17.5508 23.4492 18 24 18C24.5508 18 25 17.5508 25 17C25 16.4492 24.5508 16 24 16ZM28 16C27.4492 16 27 16.4492 27 17C27 17.5508 27.4492 18 28 18C28.5508 18 29 17.5508 29 17C29 16.4492 28.5508 16 28 16ZM32 16C31.4492 16 31 16.4492 31 17C31 17.5508 31.4492 18 32 18C32.5508 18 33 17.5508 33 17C33 16.4492 32.5508 16 32 16ZM36 16C35.4492 16 35 16.4492 35 17C35 17.5508 35.4492 18 36 18C36.5508 18 37 17.5508 37 17C37 16.4492 36.5508 16 36 16ZM40 16C39.4492 16 39 16.4492 39 17C39 17.5508 39.4492 18 40 18C40.5508 18 41 17.5508 41 17C41 16.4492 40.5508 16 40 16ZM1 23C0.449219 23 0 23.4492 0 24C0 24.5508 0.449219 25 1 25C1.55078 25 2 24.5508 2 24C2 23.4492 1.55078 23 1 23ZM5 23C4.44922 23 4 23.4492 4 24C4 24.5508 4.44922 25 5 25C5.55078 25 6 24.5508 6 24C6 23.4492 5.55078 23 5 23ZM9 23C8.44922 23 8 23.4492 8 24C8 24.5508 8.44922 25 9 25C9.55078 25 10 24.5508 10 24C10 23.4492 9.55078 23 9 23ZM13 23C12.4492 23 12 23.4492 12 24C12 24.5508 12.4492 25 13 25C13.5508 25 14 24.5508 14 24C14 23.4492 13.5508 23 13 23ZM17 23C16.4492 23 16 23.4492 16 24C16 24.5508 16.4492 25 17 25C17.5508 25 18 24.5508 18 24C18 23.4492 17.5508 23 17 23ZM21 23C20.4492 23 20 23.4492 20 24C20 24.5508 20.4492 25 21 25C21.5508 25 22 24.5508 22 24C22 23.4492 21.5508 23 21 23ZM25 23C24.4492 23 24 23.4492 24 24C24 24.5508 24.4492 25 25 25C25.5508 25 26 24.5508 26 24C26 23.4492 25.5508 23 25 23ZM29 23C28.4492 23 28 23.4492 28 24C28 24.5508 28.4492 25 29 25C29.5508 25 30 24.5508 30 24C30 23.4492 29.5508 23 29 23ZM33 23C32.4492 23 32 23.4492 32 24C32 24.5508 32.4492 25 33 25C33.5508 25 34 24.5508 34 24C34 23.4492 33.5508 23 33 23ZM47 24H61V38C61 40.1992 62.8008 42 65 42H66.3945C67.0664 42 67.6875 42.332 68.0586 42.8906L68.2773 43.2188C69.0195 44.332 70.2695 45 71.6055 45H77V47H75C72.8008 47 71 48.8008 71 51V52H71.2031C71.6602 53.707 73.1562 55 75 55H77V57C76.4492 57 76 57.4492 76 58C76 58.5508 76.4492 59 77 59H78V63H67.9414C67.4414 58.5117 63.6211 55 59 55C54.3789 55 50.5586 58.5117 50.0586 63H47V24ZM63 24H65.8867C67.9531 24 69.8047 25.2695 70.5469 27.1992L76.6445 43H71.6055C70.9336 43 70.3125 42.668 69.9414 42.1094L69.7188 41.7812C68.9805 40.668 67.7305 40 66.3945 40H65C63.8828 40 63 39.1172 63 38V24ZM53 27C51.3555 27 50 28.3555 50 30V39C50 40.6445 51.3555 42 53 42H55C56.6445 42 58 40.6445 58 39V30C58 28.3555 56.6445 27 55 27H53ZM53 29H55C55.5664 29 56 29.4336 56 30V39C56 39.5664 55.5664 40 55 40H53C52.4336 40 52 39.5664 52 39V30C52 29.4336 52.4336 29 53 29ZM4 30C3.44922 30 3 30.4492 3 31C3 31.5508 3.44922 32 4 32C4.55078 32 5 31.5508 5 31C5 30.4492 4.55078 30 4 30ZM8 30C7.44922 30 7 30.4492 7 31C7 31.5508 7.44922 32 8 32C8.55078 32 9 31.5508 9 31C9 30.4492 8.55078 30 8 30ZM12 30C11.4492 30 11 30.4492 11 31C11 31.5508 11.4492 32 12 32C12.5508 32 13 31.5508 13 31C13 30.4492 12.5508 30 12 30ZM16 30C15.4492 30 15 30.4492 15 31C15 31.5508 15.4492 32 16 32C16.5508 32 17 31.5508 17 31C17 30.4492 16.5508 30 16 30ZM20 30C19.4492 30 19 30.4492 19 31C19 31.5508 19.4492 32 20 32C20.5508 32 21 31.5508 21 31C21 30.4492 20.5508 30 20 30ZM24 30C23.4492 30 23 30.4492 23 31C23 31.5508 23.4492 32 24 32C24.5508 32 25 31.5508 25 31C25 30.4492 24.5508 30 24 30ZM1 37C0.449219 37 0 37.4492 0 38C0 38.5508 0.449219 39 1 39C1.55078 39 2 38.5508 2 38C2 37.4492 1.55078 37 1 37ZM5 37C4.44922 37 4 37.4492 4 38C4 38.5508 4.44922 39 5 39C5.55078 39 6 38.5508 6 38C6 37.4492 5.55078 37 5 37ZM9 37C8.44922 37 8 37.4492 8 38C8 38.5508 8.44922 39 9 39C9.55078 39 10 38.5508 10 38C10 37.4492 9.55078 37 9 37ZM13 37C12.4492 37 12 37.4492 12 38C12 38.5508 12.4492 39 13 39C13.5508 39 14 38.5508 14 38C14 37.4492 13.5508 37 13 37ZM17 37C16.4492 37 16 37.4492 16 38C16 38.5508 16.4492 39 17 39C17.5508 39 18 38.5508 18 38C18 37.4492 17.5508 37 17 37ZM75 49H77V53H75C73.8828 53 73 52.1172 73 51C73 49.8828 73.8828 49 75 49ZM9 50C8.44922 50 8 50.4492 8 51C8 51.5508 8.44922 52 9 52C9.55078 52 10 51.5508 10 51C10 50.4492 9.55078 50 9 50ZM13 50C12.4492 50 12 50.4492 12 51C12 51.5508 12.4492 52 13 52C13.5508 52 14 51.5508 14 51C14 50.4492 13.5508 50 13 50ZM17 50C16.4492 50 16 50.4492 16 51C16 51.5508 16.4492 52 17 52C17.5508 52 18 51.5508 18 51C18 50.4492 17.5508 50 17 50ZM21 50C20.4492 50 20 50.4492 20 51C20 51.5508 20.4492 52 21 52C21.5508 52 22 51.5508 22 51C22 50.4492 21.5508 50 21 50ZM25 50C24.4492 50 24 50.4492 24 51C24 51.5508 24.4492 52 25 52C25.5508 52 26 51.5508 26 51C26 50.4492 25.5508 50 25 50ZM29 50C28.4492 50 28 50.4492 28 51C28 51.5508 28.4492 52 29 52C29.5508 52 30 51.5508 30 51C30 50.4492 29.5508 50 29 50ZM33 50C32.4492 50 32 50.4492 32 51C32 51.5508 32.4492 52 33 52C33.5508 52 34 51.5508 34 51C34 50.4492 33.5508 50 33 50ZM37 50C36.4492 50 36 50.4492 36 51C36 51.5508 36.4492 52 37 52C37.5508 52 38 51.5508 38 51C38 50.4492 37.5508 50 37 50ZM41 50C40.4492 50 40 50.4492 40 51C40 51.5508 40.4492 52 41 52C41.5508 52 42 51.5508 42 51C42 50.4492 41.5508 50 41 50ZM17 57C20.8789 57 24 60.1211 24 64C24 67.8789 20.8789 71 17 71C13.1211 71 10 67.8789 10 64C10 60.1211 13.1211 57 17 57ZM59 57C62.8789 57 66 60.1211 66 64C66 67.8789 62.8789 71 59 71C55.1211 71 52 67.8789 52 64C52 60.1211 55.1211 57 59 57ZM69 57C68.4492 57 68 57.4492 68 58C68 58.5508 68.4492 59 69 59C69.5508 59 70 58.5508 70 58C70 57.4492 69.5508 57 69 57ZM73 57C72.4492 57 72 57.4492 72 58C72 58.5508 72.4492 59 73 59C73.5508 59 74 58.5508 74 58C74 57.4492 73.5508 57 73 57ZM17 61C15.3555 61 14 62.3555 14 64C14 65.6445 15.3555 67 17 67C18.6445 67 20 65.6445 20 64C20 62.3555 18.6445 61 17 61ZM59 61C57.3555 61 56 62.3555 56 64C56 65.6445 57.3555 67 59 67C60.6445 67 62 65.6445 62 64C62 62.3555 60.6445 61 59 61ZM17 63C17.5625 63 18 63.4375 18 64C18 64.5625 17.5625 65 17 65C16.4375 65 16 64.5625 16 64C16 63.4375 16.4375 63 17 63ZM59 63C59.5625 63 60 63.4375 60 64C60 64.5625 59.5625 65 59 65C58.4375 65 58 64.5625 58 64C58 63.4375 58.4375 63 59 63Z"></path></svg>
                <div height="35" class="sc-eCssSg koJCOS"></div>
                <h3 class="sc-hlTvYk fYnMkb">Fast Delivery</h3>
                <div height="20" class="sc-eCssSg oTMnK"></div>
                <p class="sc-hOqqkJ cWGOwt">Fast and reliable delivery to your home or job site, from specialists trained to handle materials.</p>
            </div>
        </section>
    )
}

export default Support;