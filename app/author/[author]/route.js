import axios from "axios";

export async function GET(request) {
    const furl = JSON.stringify(request.url);//29
    const author = (furl.slice(30,-1));
    let quote = "";
    const res = await axios.get(`https://api.quotable.io/quotes?author=${author}`)
    .then((res)=>{ quote = res.data.results[0].content; })

    return Response.json({quote : quote});
}