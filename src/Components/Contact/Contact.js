import React from 'react';
import Header from '../Header/Header';
import './Contact.css';

const contact = () => {
return (<>
<Header/>
<div className="content" >
    {/* {to avoid grid effect, added width explicity} */}
<div className="content-contact">
<h2>Contact Details:</h2>
&#9993; E-mail:      ashish.karn@outlook.com<br/>
<div className="social">
<a href="https://www.linkedin.com/in/ashish-karn-2626b034/">
    <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAAAD///9GRkYuLi5ra2vw8PD4+PiUlJRKSkrX19f8/Pzi4uKXl5fv7+91dXXAwMDIyMg2NjZlZWXPz8+pqamCgoI+Pj4eHh6Ojo4wMDANDQ2ysrJVVVUYGBi8vLyHh4deXl5xcXEkJCQRERFcLXXsAAAEPklEQVR4nO2d21bqMBRFCbXYGwWhCHKT4/n/fzwo6hFom5WLuXSs+eJTYc9BmyZ778TRiBBCCCGEEEIIIYQQ4pBk0czyM8tZtT/4DsY+h9dc/CCdL3xHZJdtMxG3lLXvqCyyKu78Phwz34FZYr1s9Xun8h2bFZ6nnYJCzHxHZ4Fxj9+Z3Hd8xjz3C8avuO67RS8cfcdoxlwqKETUb40aEBSTN99hGnD/nh/YfVpBgkI8+w5UmxQ03PkOVJcVKCiE70h16Z6t3bLyHaoea2yceSfSydseFhQT37Hq8YgbisR3sFrMFAwffAerBTJj++LVd7Ba5HKxbza+g9WChvEbDv85PCoYxpk9Hf77MMMFI53TDH9eqjDU/PEdqiZQluYD35FqI08lXoh2jQ/naZ58B6oPlqiJ9yccjR4QwTTqgjCyRoxzbfhNKRVsfIdoyIvsUZz7jtCYpH9mE7/gWbHvrRhxyeIn3cNNnMvCFur2h3EZb0Xmju1jSz9NnKvebuqrKsZkN5RemisWm92yLMt5sxqkHiGEEEIIId0kT/v9Pkm2vuP4BdarZj4tio9tAuc/RbrcVSffQVkjqWcd6aHyWMfczvpJLWmoy1/tSR6qRzlVVzIDuPi+w+HQAKWEydHWCvVF/mWiu3oIXHpbPD7soG88k++tGCbQl3Wl9YFL0+srVFoHxNxGIsyt4UleQrjGQkHBqWGj6HemNK5cOjR8Uv0BL5h2J7szXOCNH9cY3qnODPGm+TvMSieuDNGGgVaMyl+ODI0EzfqV3BhuzASNnkUnhgszvXf0R1QXhpJNqhjjgA0PaONVL2WwhlOlPQ896D6Kv29o4SG88BKoYao7lblDc8f1rxtaRK81KyZDvcEmJkNxGryh1pMYlaFWI29chjrvxLgMi8EbitPgDTUaziMznA7eUKjn+mMzVF8Jx2aonpTyZJiWmsti9bmpa8Mir+qvmUlSN+ppcOVVolvDcnM778rgYtsnyiU3l4Zp68e8qey31hhqHBp2TirxXZBCI8XvzLDoWaFnCpkO5cHUlWHR+6qWnor3H+U1oitDyVwEv1GV522ODKVn2uFDapiG8trRFj11LExDZOEKl6dU+9+cGELbw9DxVHVS48IQGxzQIqpqEcqFIXZSLxZJkIYFmAMEzwMK0HAJhgLepgEaottQwfPxAjREE9Vr7JUYniF+dg+2HA7PEF8MYMdWhWeI1xqw3tPwDPFFOdb6Fp4hnsPFehrCM1zDsWBHj4VnqBBL+7+goKFvQ4Wj7LZxGqrkVaAlYnCGacelNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIw8EaOv9vSH1AsaieDbnNxnKyrr28yMUKwQCfNs7+KhoSQgghhBBCCCGEEGKTf/M7W8VSr0RZAAAAAElFTkSuQmCC" alt="LinkedIn"/>
</a> 
<a href="https://www.facebook.com/imanstupid/">
    <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg==" alt="Facebook"/>
</a> 
<a href="https://www.instagram.com/karnashish/">
    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" alt="Instagram"/>
</a> 
<a href="https://twitter.com/ashishkumarkarn">
    <img className="logo" src="https://3.bp.blogspot.com/-NxouMmz2bOY/T8_ac97cesI/AAAAAAAAGg0/e3vY1_bdnbE/s320/Twitter+logo+2012.png" alt="Twitter"/>
</a> 

</div>
</div>
</div>
    </>)
}
export default contact;