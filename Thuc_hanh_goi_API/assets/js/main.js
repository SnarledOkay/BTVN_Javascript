const url_btvn = `https://dog.ceo/api/breeds/list/all` ;

const getAPI = async (url) =>{
    try{
        const response = await axios.get(url) ;
        const breedsData = response.data.message ;
        renderData(breedsData);
    }
    catch(error){
        console.log(error);
    }
}

getAPI(url_btvn);

const renderData = (data) => {
  const ulHTML = document.querySelector(".dog-breed");
  let newHTML = ``;

  Object.keys(data).forEach((breed) => {
    newHTML += `<li>
        <a href="./detail.html?id=${breed}">
            ${breed}
        </a>
    </li>`;
  });

  ulHTML.innerHTML = newHTML;
};
