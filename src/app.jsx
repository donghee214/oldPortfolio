import React from 'react';
import Landing from './landing.jsx';
import '../styles/index.scss';
import Title from './Title.jsx';
import Divider from './Divider.jsx';
import Logos from './Logos.jsx';
import LeftInfo from './LeftInfo.jsx';
import TopNav from './TopNav.jsx';
import ImageContainer from './image.jsx';
import Box1 from './box1.jsx';
import HoldButton from './holdButton.jsx'
import pink from './pink.svg'; 
import lightblue from './lightblue.svg'; 
import green from './green.svg'; 
import yellow from './yellow.svg'; 
import Code from './code.jsx';
import Research from './research.jsx'
import Design from './design.jsx'


// import hackthesix1 from './hackthesix1.jpg'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    var images=['http://res.cloudinary.com/donghee214/image/upload/v1502156825/enlight3_uyag5v.png']
    // console.log(arrayImages[0])
    this.state = {
      holdMouseDown: null,
      showInstruction: false,
      nameDisplay: 0,
      AnimationFinished: false,
      moveDivider: false,
      hoveredOnce:false,
      navClicked: false,
      subHover: false,
      displayImage: false,
      imageText: "None",
      boxes: null,
      subtract: [0, -30, -60, -90, -120, -150],
      width: [95, 89, 83, 77, 71, 65],
      none:
      [
        {
          Date: "",
          Title: "",
          Employer: "",
          Description: "",
          tags:[],
          imageDetails: ["RESEARCH","CENTRAL","May 2017","Aug 2017","blah blah"],
          link:[],
          key: 'one',
          width: 91,
          subtract: 0,
          arrow: false
        },

        {
          Date: "",
          Title: "",
          Employer: "",
          Description: "",
          tags:[],
          imageDetails: ["RESEARCH","CENTRAL","May 2017","Aug 2017","blah blah"],
          link:[],
          key: 'two',
          width: 87.5,
          subtract: -20,
          arrow: false
        },
 
        {
          Date: "",
          Title: "",
          Employer: "",
          Description: "",
          tags:[],
             link:[],
          key:'three',
          width: 84,
          subtract: -40,
          arrow:false
        },
 
        {
          Date: "",
          Title: "",
          Employer: "",
          Description: "",
          tags:[],
             link:[],
          imageDetails: ["RESEARCH","CENTRAL","May 2017","Aug 2017","blah blah"],
          key: 'four',
          width: 80.5,
          subtract: -60,
          arrow: false
        },
      ],
      experience:
        [
          {
            Date: "2017",
            Title: "Product Designer",
            Employer: "RBC",
            Description: "Worked on user research all the way to technical development on a new enterprise data repository for and research assets. \ Built the front-end off React and Redux and continued through iterations with UX feedback",
            tags: ["Illustrator", "InVIsion", "Figma","React.js", "Node.js"],
            imageDetails: ["PRODUCT","DESIGNER","May 2017","- Aug 2017", [["The majority of term was spent on a project where we saw it through from research to development. The project was to build a platform to help researchers access insights or artifacts that other researchers would have done within the enterprise.", <Research />], ["Prior to jumping into interviews, pre-research was conducted through case studies and benchmarking existing technologies.", <Research />], ["Following, interview questions were crafted and tested on a small sample group and iterated on to minimize ambiguity.",<Research />],[" After the interviews, the recorded replies with transcribed and clustered for repeating themes. From those themes, insights were drawn over a week locked in a room with the team.", <Research />], ["Finally, from these insights a new \'How Might We\' statement was written to guide the design choices that followed.", <Design />]]],
            imageIndex: 
            ["http://res.cloudinary.com/donghee214/image/upload/v1505337558/pathway1_qdckgr.jpg",
             "http://res.cloudinary.com/donghee214/image/upload/v1505337558/pathway2_nbxkoq.jpg",
             "http://res.cloudinary.com/donghee214/image/upload/v1505337558/pathway3.5_cegj7x.jpg",
             "http://res.cloudinary.com/donghee214/image/upload/v1505337558/pathway3_zwvdnd.jpg",
             "http://res.cloudinary.com/donghee214/image/upload/v1505338437/pathway4_elfdsa.jpg"],
            key: 'five',
            width: 91,
            subtract: 0,
            arrow:true,
            link:["http://PathwayDraft.mybluemix.net", "WEB"],
          },

          {
            Date: "2016",
            Title: "Front-end Dev/Designer",
            Employer: "Jezter",
            Description: "Worked on the front-end of a web-app that aggregates media content intended for children onto a single platform. Hired later onto the app, I worked primarily on cleaning up the interface and adding transitions.",
            tags: ["Illustrator", "Javascript", "RoR", "Bootstrap"],
            imageDetails: ["DEV","DESIGNER","Dec 2016","- CURRENT",[["Can't show any picture of this due to some legal document I signed.", null], ["Working primarily as a designer and front-end dev, my role involved creating svg icons and logos to be used on their webapp", <Design />], ["The architecture had already been laid out, so my main dev role involed implementing the svg artifacts I had created and animating user interactions", <Code />]]],
            imageIndex: [pink],
            key: 'six',
            width: 87.5,
            subtract: -20,
            arrow:true,
            link:[]
          },

          {
            Date: "2017",
            Title: "Digital Development",
            Employer: "UofT - VEEP",
            Description: "Working on implementing a reworked version of their site. Improving UI, implementing an application portal using typeform, and an interactive timeline of a typical project flow",
            tags: ["Illustrator", "Figma", "InVision","React.js"],
            imageDetails: ["DIGITAL","DEVELOPMENT","May 2017","- Aug 2017",[["Started with researching into the main purpose and use of their website through interviews", <Research />], ["Following, functionalities and features were discussed with the club co-founders in a pseudo-ideation session", <Research />], ["3 High-fidelity mock-ups were created and voted on by the whole team to continue development", <Design />], ["The chosen mock-up was then made interactive on InVision and then used for user-testing", <Design />], ["Finally, the product was built off standard web technologies with React.js as a framework.", <Code />]]],
            imageIndex: ["http://res.cloudinary.com/donghee214/image/upload/v1505333537/veep1_vbbso6.jpg",
                         "http://res.cloudinary.com/donghee214/image/upload/v1505333537/veep2_mxwsbz.jpg",
                         "http://res.cloudinary.com/donghee214/image/upload/v1505333537/veep3_cqfpgj.jpg",
                         "http://res.cloudinary.com/donghee214/image/upload/v1505333537/veep4_ugzh7g.jpg",
            ],
            key: 'seven',
            width: 84,
            subtract: -40,
            arrow:true,
            link:["http://www.uoftveep.com/views/index.html", "WEB/MOBILE"]
          },
      
          {
            Date: "2016",
            Title: "Webmaster",
            Employer: "UofT - ChemECar",
            Description: "Worked on creating their initial website. Designed primarily to display the members within each division and a way to contact the team",
            tags: ["Illustrator", "Javascript"],
            imageDetails: ["","WEBMASTER","May 2017","- Aug 2017",[["The purpose of the site was discussed in order to get a better grasp of features and uses", <Research />], ["From that, an existing HTML5 template was used and added onto in order to better fit the clubs vision.", <Design />], ["Contacting functionalities were built off sendgrid for Node.js, and applications were done through typeform integration.", <Code />]]],
            imageIndex: ["http://res.cloudinary.com/donghee214/image/upload/v1505328386/chemecar1_hioxmb.jpg",
             "http://res.cloudinary.com/donghee214/image/upload/v1505328615/chemecar2_rgxgr1.jpg",
             "http://res.cloudinary.com/donghee214/image/upload/v1505328998/chemecar3_lngiww.jpg"],
            key: 'eight',
            width: 80.5,
            subtract: -60,
            arrow:true,
            link:["http://uoftchem.mybluemix.net/", "WEB/MOBILE"]
          },

          {
            Date: "2016",
            Title: "Web Developer",
            Employer: "RBC",
            Description: "Involved in potential adoption of blockchain technology. To better demo this to the team, a simple webapp was built.",
            tags: ["Javascript", "Solidity.js"],
            imageDetails: ["WEB","DEVELOPER","May 2017","- Aug 2017",[["The application is running Solidity.js to allow for interactions with the Ethereum blockchain. Users would be able to play around with smart-contracts without Ether", <Code />]]],
            imageIndex: ["http://res.cloudinary.com/donghee214/image/upload/v1505332440/blockchain_k7sjs3.jpg"],
            key: 'nine',
            width: 77,
            subtract: -80,
            arrow:true,
            link:["https://block-demo.mybluemix.net/", "WEB"]
          }
      ],
    hackathons: 
      [
          {
            Date: "2017",
            Title: "Hack the North",
            Employer: "UofWaterloo",
            Description: "Took the Spotify API to another level by linking artist aimilarities across genres. Using the Watson to scrape through top musicians, the application had created personality profiles which was taken into consideration when returning similar artists.",
            tags: ["Figma", "Illustrator", "React.js", "Node.js", "Python"],
            imageDetails: ["HACKTHE","NORTH","DID NOT PLACE","", [["After the idea was conceived, the layout and the views were planned out and voted upon by the team", <Design />],["I used Spotify API to scrape through the top 500 artists and their associated metadata(acousticness, speechiness, tempo, etc) for each major genre. This csv was used as data for future reference.", <Code />],["Following, a user would search for an artist where upon selection, it would retrieve the artists metadata from Spotify and search for the closest matches across the genres in the database", <Code />],["The top 5 selected would have its sentiment analyzed and compared to the searched artist through Watson Twitter API", <Code/>],["Finally, an artist from each genre would be returned by how similar they are to the searched artist in personality and music", <Code />], ["INCOMPLETE", null]]],
            imageIndex: ["http://res.cloudinary.com/donghee214/image/upload/v1505831299/htn0_loh45g.jpg",
                         "http://res.cloudinary.com/donghee214/image/upload/v1505831299/htn1_qdggre.jpg",
                         "http://res.cloudinary.com/donghee214/image/upload/v1505831299/htn2_ac8wfv.jpg"
            ],
            key: 'fiveFive',
            width: 91,
            subtract: 0,
            arrow:true,
            link:["http://htn.mybluemix.net", "WEB"]
        },
        {
          Date: "2017",
          Title: "Hack the 6ix",
          Employer: "Nspire",
          Description: "Upon discovery of the cool stuff the Spotify API offers, we had taught a machine learnging algorithm based off data scraped of the Spotify API. We had a dataset of 5000 popular songs each with 30 metadata properties we ran the data through to find a pattern/formula for a \'popular\' song.",
          tags: ["Figma", "Javascript", "Node.js", "Python"],
          imageDetails: ["HACKTHE","6IX","DID NOT PLACE","",[["Low-fidelty paper mock-ups were created in order to get a sense of direction of the product", <Design />],["After the full functionalities were decided on, 2 High-fidelity mock-ups of cards were created and voted on", <Design />], ["First, I had written a script for scrape through of 2000 songs off Spotify along with its metadata as a training set",<Code/>],["Those songs were fed into a deep learning algorithm in order to set weights on the different types of metadata in order to produce a popular song", <Code/>], ["KINDA INCOMPLETE", null]]],
          imageIndex: 
          ["http://res.cloudinary.com/donghee214/image/upload/v1505831607/ht6_b4xepa.jpg"],
          key: 'fiveBlah',
          width: 87.5,
          subtract: -20,
          arrow:true,
          link:["http://crystalball.mybluemix.net", "WEB"]
        },
        {
          Date: "2017",
          Title: "United Way Hackathon",
          Employer: "United Way",
          Description: "To help lower income families, built something to help bring people of all statuses together. This portal's purpose is to help communities host dinners where everyone was welcome and share their experiences",
          tags: ["Javascript"],
          imageDetails: ["UNITEDWAY","HACKATHON","DID NOT PLACE","",[["Deciding to focus on bridging the gap between families of different incomes, we conducted a problem framing session to question why it even exists", <Research />], ["Once we arrived on the idea of connecting people through food, I had started with the creation of branding and marketting posters. This bad established the overall theme and colour scheme of the site.", <Design />], ["Finally the site was created as a portal for users to find out about upcoming dinner and learning sessions near them.", <Code />]]],
          imageIndex: ["http://res.cloudinary.com/donghee214/image/upload/v1505321284/Unitedway1_pq0mbz.jpg",
                       "http://res.cloudinary.com/donghee214/image/upload/v1505955656/Unitedway2_vjztdj.jpg",
                       "http://res.cloudinary.com/donghee214/image/upload/v1505955657/Unitedway3_twxhdc.jpg",
                       "http://res.cloudinary.com/donghee214/image/upload/v1505955657/Unitedway4_vyblyj.jpg"
          ],
          key: 'ten',
          width: 84,
          subtract: -40,
          arrow: true,
          link:["https://unitedway.mybluemix.net/", "WEB"]
        },
        {
          Date: "2016",
          Title: "Hackference",
          Employer: "ENlight",
          Description: "Keeping the theme of productivity in mind, we built an application to assist users find a study location catered to their needs(noise, wifi, seats, overall vibe).",
          tags: ["Figma", "Javascript", "React.js"],
          imageDetails: ["","HACKFERENCE","3rd Place","- $300",[["Looked into and research existing technologies focues on assisting poeple find study locations. Noting some features for campus specific apps, we had decided that a gap had existed", <Research/>], ["Used an existing HTML5 template to base mobile webapp around. Design and interaction was revolved around css transitions and swipe gestures", <Code/>]]],
          imageIndex: 
          ["http://res.cloudinary.com/donghee214/image/upload/v1505317432/enlight1_g6czic.jpg",
           "http://res.cloudinary.com/donghee214/image/upload/v1505317432/enlight2_btbnsl.jpg",
           "http://res.cloudinary.com/donghee214/image/upload/v1505317432/enlight3_whfmip.jpg",
           "http://res.cloudinary.com/donghee214/image/upload/v1505317432/enlight4_mot7fx.jpg"
          ],
          key: 'twelve',
          width: 80.5,
          subtract: -60,
          arrow: true,
          link:["https://hackference.mybluemix.net/", "MOBILE"]
        },
        {
          Date: "2016",
          Title: "NGI",
          Employer: "RBC/IBM",
          Description: "Built a virtual assisant revolved around helping small businesses with financial tasks. Using Google's NLP and Translate API, it was able to parse invoices, send reminders, etc.",
          tags: ["Javascript", "Node.js"],
          imageDetails: ["","NGI","1st Place","- $10000",[["Conducted a short research session into the current gaps small businesses face and existing technologies that work to solve the problem. On further inspection, there was a lack of integration between finances meaning that users had to use multiple applications to manage their cashflow during a sitting.", <Research />], ["Google's NLP and translate API was used to create a virtual assistant that speaks over 100 languages. User's would be able to manage their cashflow through a conversation with a bot!", <Code/>]]],
          imageIndex: [pink],
          key: 'thirteen',
          width: 77,
          subtract: -80,
          arrow:true,
          link:[]
        },
        {
          Date: "2016",
          Title: "Hack The 6ix",
          Employer: "Nspire",
          Description: "Ever wanted to meet other travellers or even locals when you travel? Look no further! This application acts as a tour guide with the capability of opening group chats based on geographical location!",
          tags: ["Javascript", "Node.js"],
          imageDetails: ["HACKTHE","6IX","1st Place - $1000","",[["Designed the overall layout of the mobile webapp before proceding with the code. Being a travel app, design was relatively easy as images could be used as a crutch when needing to fill space", <Design />], ["To enable live chat, Socket.io was implemented allow users to chat about their surrounding experiences", <Code />]]],
          imageIndex: 
          ["http://res.cloudinary.com/donghee214/image/upload/v1505316751/hackthesix1_t6eqp5.jpg",
           "http://res.cloudinary.com/donghee214/image/upload/v1505316752/hackthesix2_n1f8yw.jpg",
           "http://res.cloudinary.com/donghee214/image/upload/v1505316751/hackthesix3_bhxy8q.jpg",
           "http://res.cloudinary.com/donghee214/image/upload/v1505316751/hackthesix4_mxza8v.jpg",
           "http://res.cloudinary.com/donghee214/image/upload/v1505316751/hackthesix5_ffwetx.jpg",
           "http://res.cloudinary.com/donghee214/image/upload/v1505316750/hackthesix6_sydftj.jpg",
           "http://res.cloudinary.com/donghee214/image/upload/v1505316752/hackthesix7_s82ypg.jpg",
          ],
          key: 'fourteen',
          width: 73.5,
          subtract: -100,
          arrow:true,
          link:["http://app-ollo.mybluemix.net/", "MOBILE"]
        },
      ],
     projects:
        [
          {
            Date: "2017",
            Title: "Stranded",
            Employer: "Geolocation App",
            Description: "Working on an assignment to conduct user research, interview, ideate, prototype, and conduct user testing. The problem is helping people who have spare time in an unfamiliar location to find activities to do",
            tags: ["Paper Prototyping","Figma", "Illustrator"],
            imageDetails: ["","STRANDED","Sept 2017","- CURRENT", [["Designed and iterated on a questionnaire to send out to a set of about 100 students", <Research />], ["9 Interviews were conducted on the target group which was decided to be young adults. The interviews were then transcribed and turned into a formative report", <Research/>], ["Out of that, persona's would be created in order to aid the process of ideating as a team", <Research/>], ["Currently, we are in process of storyboarding our idea on how the user would interact with our application", <Design />]]],
            imageIndex: ["http://res.cloudinary.com/donghee214/image/upload/v1506437311/Untitled-1_z4fhi5.png"],
            key: 'six',
            width: 91,
            subtract: 0,
            arrow:true,
            link:[]
          },
          {
            Date: "2017",
            Title: "Time Alive",
            Employer: "Data Visualiztion",
            Description: "As a way to play around with React, built an interactive bar graph to show time spent doing common activities between age groups. Data is being pulled from a json file that contains a rough average of the hours spent on a task for each age",
            tags: ["React.js", "Node.js"],
            imageDetails: ["TIME","ALIVE","Jan 2017","- Feb 2017", [["This was pretty spontaneous to be honest. I was reading some infographic about time people spend doing activities, and then I thought it would be cool to show the data in an interactive way", <Code/>]]],
            imageIndex: 
            ["http://res.cloudinary.com/donghee214/image/upload/v1505845663/average1_slsgvp.jpg",
            "http://res.cloudinary.com/donghee214/image/upload/v1505845664/average2_a45for.jpg"],
            key: 'fifteen',
            width: 87.5,
            subtract: -20,
            arrow:true,
            link:["https://timealive.mybluemix.net/", "WEB/MOBILE"]
          },

          {
            Date: "2017",
            Title: "Pathfinder",
            Employer: "Small Game",
            Description: "For a course project, created a small game of Python that makes use of the A* algorithm to find the most optimal path through barriers",
            tags: ["Python"],
            imageDetails: ["","PATHFINDER","July 2017","",[["Kind of forgot the A* algorithm, but I got it to work! For an interview I'll brush up on algorithms"], <Code />]],
            imageIndex: [green],
            key: 'sixteen',
            width: 84,
            subtract: -40,
            arrow:true,
            link:[]
          },
          {
            Date: "2017",
            Title: "Sudoku",
            Employer: "Small Game",
            Description: "For another project, created a Sudoku game that the user can initialize to play on a 4x4, 9x9, 16x16, or 25x25. The history of each move is stored in a Tree to allow undos, hints, and auto-solve.",
            tags: ["Python"],
            imageDetails: ["","SUDOKU","Aug 2017","",[["Used and MVC pattern to layout both Sudoku and Word Ladder game", <Code/>], ["Users would input a command where it's legality would be immediately checked", <Code/>], ["If the command was for an auto-solve, the current state of the game would be read off the tree and all legal moves would be tried until the possibilities are exhausted or won", <Code/>], ["An undo function returns the user to its parent", <Code/>], ["A moves function returns all the moves the user has made from that position. This returns the children of that particular node", <Code/>]]],
            imageIndex: [yellow],
            key: 'seventeen',
            width: 80.5,
            subtract: -60,
            arrow: true,
            link:[]
          },
          {
            Date: "2017",
            Title: "Word Ladder",
            Employer: "Small Game",
            Description: "Used the same abstract classes as the Sudoku game to store the history of each move and recursion to solve the puzzle.",
            tags: ["Python"],
            imageDetails: ["WORD","LADDER","Aug 2017","",[["The exact same MVC pattern was used for the Sudoku game", <Code/>], ["Most of the classes and method were reused with the exception of the rules of games. This allowed for the same inputs and functionalities", <Code/>]]],
            imageIndex: [lightblue],
            key: 'eightteen',
            width: 77,
            subtract: -80,
            arrow:true,
            link:[]
          }
      ]
    };

  }
  componentDidMount() {
    this.x = document.getElementsByTagName('canvas')
    setTimeout(function () { this.setState({ AnimationFinished: true, holdMouseDown: <HoldButton mouseMoveHandler={this.mouseMoveHandler.bind(this) } mouseUpHandler={this.mouseUpHandler.bind(this)}/> }) }.bind(this), 4000);
    const cardList = this.state.none.map((info) =>
          <Box1 key={info.key} displayImageCaller={this.displayImageCaller.bind(this)} moveDivider={this.state.navClicked}  content={info} width = {info.width} minus={info.subtract} subHover={false}>
            </Box1>
    );
    this.setState({boxes: cardList})
    // this.x.className += "clickedCss"
    // this.setState({images: images})
    // console.log(this.state.images)
    // console.log(images)
  // this.setState({ images: arrayImages})

  }

  mouseMoveHandler() {
    this.setState({ nameDisplay: 1 });
  }


  mouseUpHandler() {
    this.setState({ nameDisplay: 0 });
  }

  moveDividerCalled() {
    this.setState({ moveDivider: true, holdMouseDown:null });
  }

  onHover(){
    if (this.state.navClicked === false)
    {
    const cardList = this.state.none.map((info) =>
          <Box1 key={info.key} displayImageCaller={this.displayImageCaller.bind(this)} moveDivider={this.state.navClicked}  content={info} width = {info.width} minus={info.subtract} subHover={true}>
            </Box1>
    );
    this.setState({showInstruction:false, boxes: cardList, hoveredOnce:true})}
  }

  displayImageCaller(content, imageIndex){
    this.setState({displayImage: true, imageText: [content, imageIndex]})
  }

  unMountImage(){
    this.setState({displayImage: false})
  }

  onReleaseHover(){
    if (this.state.navClicked === false) {
        const cardList = this.state.none.map((info) =>
          <Box1 key={info.key} displayImageCaller={this.displayImageCaller.bind(this)} moveDivider={this.state.navClicked}  content={info} width = {info.width} minus={info.subtract} subHover={false}>
            </Box1>
    );
    this.setState({boxes: cardList})
    }
  }
  onClick(topic){
    TweenLite.to(camera.position, 1.6, {
        z: 6500,
        ease: Elastic.easeOut.config(1.4, 1)
    });
    this.clicked = true;
    this.setState({navClicked: true})
    this.x[0].className += " animateResize";
    var cardList = null
    if (topic === "Experience"){
        cardList = this.state.experience.map((info) =>
          <Box1 key={info.key} displayImageCaller={this.displayImageCaller.bind(this)} moveDivider={true}  content={info} width = {info.width} minus={info.subtract} subHover={true}>
            </Box1>
      );
    }
    else if(topic === "Hackathons"){
      cardList = this.state.hackathons.map((info) =>
          <Box1 key={info.key} displayImageCaller={this.displayImageCaller.bind(this)} moveDivider={true}  content={info} width = {info.width} minus={info.subtract} subHover={true}>
            </Box1>
      );
    }

    else if (topic === "Projects"){
      cardList = this.state.projects.map((info) =>
          <Box1 key={info.key} displayImageCaller={this.displayImageCaller.bind(this)} moveDivider={true}  content={info} width = {info.width} minus={info.subtract} subHover={true}>
            </Box1>
      );
    }
    this.setState({boxes: cardList})
  }

  showInstruction(){
    if (this.state.hoveredOnce === false)
      {
        this.setState({showInstruction: true})
      }
    
  }



  render() {
    return (
      <div className="landing">
        {this.state.AnimationFinished ? <Title moveDivider={this.state.moveDivider} moveDividerCalled={this.moveDividerCalled.bind(this) } nameShow={this.state.nameDisplay}/> : <Landing />}
        <TopNav moveDivider={this.state.moveDivider} click={this.onClick.bind(this)} onReleaseHover={this.onReleaseHover.bind(this)} onHover={this.onHover.bind(this)}
        moveDividerCalled={this.moveDividerCalled.bind(this) }/>
        <Divider showInstruction={this.showInstruction.bind(this)} moveDivider={this.state.moveDivider}/>
        {this.state.moveDivider ? <LeftInfo showInstruction={this.state.showInstruction} boxes={this.state.boxes} /> : null}
        {this.state.holdMouseDown}
        {this.state.displayImage ? <ImageContainer content={this.state.imageText} unMountImage={this.unMountImage.bind(this)} image={this.state.image} /> : null}
        <Logos />
      </div>
    )
  }
}
