const url_post = `https://jsonplaceholder.typicode.com/posts` ;
const url_albums = `https://jsonplaceholder.typicode.com/albums` ;
const url_photos = `https://jsonplaceholder.typicode.com/photos` ;

const postButton = document.querySelector(".post-button") ;
const photoButton = document.querySelector(".photo-button") ;
const albumButton = document.querySelector(".album-button");

// postButton.addEventListener("click",);
postButton.addEventListener("click",getPhotoAPI(url_photos));
postButton.addEventListener("click",getAlbumAPI(url_albums));

const getPostAPI = async (url) => {
    try {
        const response = await axios.get(url);
        const result = response.data ;
        // Gọi render UI -> renderData()
        renderPostData(result);
    } catch (error) {
        console.log(error) 
    }
};

const renderPostData = (data) => {
    // Show item list 
    const ulHTML = document.querySelector(".post-button");
    // Show item list d/s call từ API -> UI
    let newHTML = `` ;
    data.forEach((item,index) => {
        console.log(item);
        newHTML += `<li>
            <a href="./detail.html?id=${item.id}">
                ${item.title} 
            </a>
        </li>` ;
    }) ;

    // render
    ulHTML.innerHTML = newHTML;
};

const getPhotoAPI = async (url) => {
    try {
        const response = await axios.get(url);
        const result = response.data ;
        // Gọi render UI -> renderData()
        renderPhotoData(result);
    } catch (error) {
        console.log(error) 
    }
};

const renderPhotoData = (data) => {
    // Show item list 
    const ulHTML = document.querySelector(".post-button");
    // Show item list d/s call từ API -> UI
    let newHTML = `` ;
    data.forEach((item,index) => {
        console.log(item);
        newHTML += `<li>
            <a href="./detail.html?id=${item.id}">
                ${item.title} 
            </a>
        </li>` ;
    }) ;

    // render
    ulHTML.innerHTML = newHTML;
};


const getAlbumAPI = async (url) => {
    try {
        const response = await axios.get(url);
        const result = response.data ;
        // Gọi render UI -> renderData()
        renderAlbumData(result);
    } catch (error) {
        console.log(error) 
    }
};

const renderAlbumData = (data) => {
    // Show item list 
    const ulHTML = document.querySelector(".album-button");
    // Show item list d/s call từ API -> UI
    let newHTML = `` ;
    data.forEach((item,index) => {
        console.log(item);
        newHTML += `<li>
            <a href="./detail.html?id=${item.id}">
                ${item.title} 
            </a>
        </li>` ;
    }) ;

    // render
    ulHTML.innerHTML = newHTML;
};


// Show data -> UI



