import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {

  articles = [
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": null,
        "title": "De Kock stars as South Africa thrash Bangladesh",
        "description": "Watch the highlights as South Africa trounce Bangladesh by 149 runs at the Cricket World Cup in Mumbai.",
        "url": "http://www.bbc.co.uk/sport/av/cricket/67205375",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/5317/production/_131517212_p0gnjbqn.jpg",
        "publishedAt": "2023-10-25T10:22:26.5784821Z",
        "content": "'You have one chance, be ready' - Xavi's advice to Guiu before debut. Video, 00:00:57'You have one chance, be ready' - Xavi's advice to Guiu before debut"
    },
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": null,
        "title": "World Cup: Australia v Netherlands - clips, radio & text",
        "description": "Follow live text, in-play video clips and radio commentary as Australia play the Netherlands in the Men's Cricket World Cup 2023.",
        "url": "http://www.bbc.co.uk/sport/live/cricket/66858545",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
        "publishedAt": "2023-10-25T08:52:21.6089437Z",
        "content": "Australia: Mitchell Marsh, David Warner, Steve Smith, Marnus Labuschagne, Josh Inglis, Glenn Maxwell, Cameron Green, Mitchell Starc, Pat Cummins, Adam Zampa, Josh Hazlewood.\r\nNetherlands: Max O'Dowd,… [+161 chars]"
    },
    {
        "source": {
            "id": "news-com-au",
            "name": "News.com.au"
        },
        "author": "Andrew McMurtry",
        "title": "Aussies’ ‘horrible’ World Cup truth exposed",
        "description": "Welcome to news.com.au’s live coverage of the Cricket World Cup match between Australia and the Netherlands.",
        "url": "https://www.news.com.au/sport/cricket/cricket-world-cup-2023-australia-vs-netherlands-live/news-story/fcc22dd794a77e6de5fc791cbd551d19",
        "urlToImage": "https://content.api.news/v3/images/bin/7ff92ddac0c44d32ee707d5b5e793f82",
        "publishedAt": "2023-10-25T08:32:00Z",
        "content": "Welcome to news.com.au’s live coverage of the Cricket World Cup match between Australia and the Netherlands.\r\nAustralia has bounced back from a horror start to the World Cup with two convincing wins … [+2789 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
  
  constructor(){
    super();
    console.log("Hello I am a constructor");
    this.state={
      articles : this.articles,
      loading : false

    }
  }




  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          { this.state.articles.map( (element)=>{

          return <div className="col-md-4" key={element.url}>
          <Newsitem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>

          
          })}

          
          

                 

        </div>
      </div>
    );
  }
}

export default News;
