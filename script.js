// image gallery container

const images = [
    { src: "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg", category: "nature" },
    { src: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg", category: "nature" },
    { src: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg", category: "nature" },
    { src: "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg", category: "nature" },
    { src: "https://images.pexels.com/photos/14352934/pexels-photo-14352934.jpeg", category: "nature" },
    { src: "https://images.pexels.com/photos/12272614/pexels-photo-12272614.jpeg", category: "nature" },


    { src: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg", category: "city" },
    { src: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg", category: "city" },
    { src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg", category: "city" },
    { src: "https://images.pexels.com/photos/1168940/pexels-photo-1168940.jpeg", category: "city" },
    { src: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg", category: "city" },
    { src: "https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg", category: "city" },
    { src: "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg", category: "city" },

    { src: "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg", category: "flowers" },
    { src: "https://cdn.pixabay.com/photo/2014/04/10/11/24/rose-320868_1280.jpg", category: "flowers" },
    { src: "https://cdn.pixabay.com/photo/2016/05/15/15/12/hepatica-1393813_640.jpg", category: "flowers" },
    { src: "https://cdn.pixabay.com/photo/2016/10/06/14/07/sunflowers-1719119_640.jpg", category: "flowers" },
    { src: "https://cdn.pixabay.com/photo/2013/07/30/12/25/bouquet-168831_640.jpg", category: "flowers" },
    { src: "https://cdn.pixabay.com/photo/2025/04/21/14/54/daisies-9547672_640.jpg", category: "flowers" },
    { src: "https://cdn.pixabay.com/photo/2020/05/27/22/18/meadow-5229169_640.jpg", category: "flowers" },
    { src: "https://cdn.pixabay.com/photo/2024/10/12/17/15/flowers-9115519_640.jpg", category: "flowers" },
    { src: "https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_640.jpg", category: "flowers" },
    { src: "https://cdn.pixabay.com/photo/2023/05/17/20/32/flower-8000994_640.jpg", category: "flowers" },
    { src: "https://cdn.pixabay.com/photo/2023/04/08/18/01/flower-7909902_640.jpg", category: "flowers" },
    { src: "https://cdn.pixabay.com/photo/2023/06/03/12/52/lantana-8037634_640.jpg", category: "flowers" },


    { src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg", category: "animals" },
    { src: "https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg", category: "animals" },
    { src: "https://images.pexels.com/photos/68550/thailand-elephant-sunset-nature-68550.jpeg", category: "animals" },
    { src: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg", category: "animals" },
    { src: "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg", category: "animals" },
    { src: "https://images.pexels.com/photos/259554/pexels-photo-259554.jpeg", category: "animlas" },

    { src: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg", category: "food" },
    { src: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg", category: "food" },
    { src: "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg", category: "food" },
    { src: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg", category: "food" },
    { src: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg", category: "food" },
    { src: "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg", category: "food" },
    { src: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg", category: "food" },

    { src: "https://cdn.pixabay.com/photo/2017/11/29/22/22/mountains-2987219_640.jpg", category: "travel" },
    { src: "https://cdn.pixabay.com/photo/2017/08/14/03/26/kamchatka-2639231_640.jpg", category: "travel" },
    { src: "https://cdn.pixabay.com/photo/2020/06/14/22/31/mountains-5299599_640.jpg", category: "travel" },
    { src: "https://cdn.pixabay.com/photo/2016/11/29/11/39/road-map-1869235_640.jpg", category: "travel" },
    { src: "https://cdn.pixabay.com/photo/2020/04/30/04/32/indonesia-5111348_640.jpg", category: "travel" },
    { src: "https://cdn.pixabay.com/photo/2018/07/02/13/30/scotland-3511559_640.jpg", category: "travel" },
    { src: "https://cdn.pixabay.com/photo/2021/12/28/21/13/journey-6900194_640.jpg", category: "travel" },
    { src: "https://cdn.pixabay.com/photo/2018/05/01/18/02/the-steam-spectacle-in-2018-3366332_640.jpg", category: "travel" },
    { src: "https://cdn.pixabay.com/photo/2024/08/31/07/08/couple-9010675_640.jpg", category: "travel" },
    { src: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?cs=srgb&dl=pexels-andreimike-1271619.jpg&fm=jpg", category: "travel" }
];

// Selecting the gallery container

const gallery = document.querySelector(".gallery");

// Loop through and add images dynamically 

images.forEach(img => 
    {
    const imageElement = document.createElement("img");
    imageElement.src = img.src;
    imageElement.alt = img.category;
    imageElement.classList.add(img.category);
    gallery.appendChild(imageElement);
});


// Lightbox working

const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

galleryImages.forEach((img, index) => 
    {
    img.addEventListener('click', () => 
        {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

function closeLightbox()    // function for closeing lightbox
{
    lightbox.style.display = 'none';
}

function changeSlide(step) // function for changing slide
{
    currentIndex += step;
    if (currentIndex < 0) currentIndex = galleryImages.length - 1;
    if (currentIndex >= galleryImages.length) currentIndex = 0;
    lightboxImg.src = galleryImages[currentIndex].src;
}


// Filter Function

function filterSelection(category)  //filter button function
{
    let images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        if (category === 'all' || img.classList.contains(category)) 
        {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}