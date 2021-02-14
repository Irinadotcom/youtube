const readFromJSON = () => JSON.parse(data);
let videoData = readFromJSON();

const listCnt = document.getElementById("list-cnt");
const mainVideo = document.getElementById("main_video");
const videoTitle = document.getElementById("video_title");
const videoDescription = document.getElementById("video_description");

const renderVideoItem = (title, description, videoId) => `
    <li onclick="onVideoItemClick('${videoId}')">
        <h1 class="content_title">${title}</h2>
        <p class="content_description">${description}</p>
    </li>
`;

const renderVideolist = () => {
  let htmlItems = "";
  videoData.forEach((videoItem) => {
    let htmlItem = renderVideoItem(
      videoItem.title,
      videoItem.description,
      videoItem.id
    );
    listCnt.append(htmlItem);
    htmlItems += htmlItem;
  });
  listCnt.innerHTML = htmlItems;
};

const onVideoItemClick = (videoId) => {
  let videoItem = videoData.find((element) => element.id == videoId);
  updateHTMLVideoData(videoItem);
};

const updateHTMLVideoData = (videoItem) => {
  mainVideo.src = `https://www.youtube.com/embed/${videoItem.id}`;
  videoTitle.innerHTML = videoItem.title;
  videoDescription.innerHTML = videoItem.description;
};

updateHTMLVideoData(videoData[0]);
renderVideolist();
