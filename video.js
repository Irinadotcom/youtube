const videoData = [
    {
        title: "Title1",
        description: "Description1",
        url: "url",

        // новый обьект //
        user: {
            name: "Username",
            subscribers: 1000,
        },
    },

    {
        title: "Title2",
        description: "Description1",
        url: "url",

        // новый обьект //
        user: {
            name: "Username",
            subscribers: 1000,
        },
    },

    {
        title: "Title3",
        description: "Description1",
        url: "url",

        // новый обьект //
        user: {
            name: "Username",
            subscribers: 1000,
        },
    },
];


const listCnt = document.getElementById("list-cnt");

const renderVideoItem = (title, description) => `
    <li>
        <h1 class="content_title">${title}</h2>
        <p class="content_description">${description}</p>
    </li>
`

const renderVideolist = () => {
    let htmlItems = "";
    videoData.forEach(videoItem => {
        let htmlItem = renderVideoItem(videoItem.title, videoItem.description);
        listCnt.append(htmlItem);
        htmlItems += htmlItem;
    });
    listCnt.innerHTML = htmlItems;
}

renderVideolist();