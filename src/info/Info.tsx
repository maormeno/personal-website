import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mateo",
    lastName: "Ormeño",
    initials: "mo", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎🇨🇱',
            text: 'currently based in Chile'
        },
        {
            emoji: "💼",
            text: "Part-time Software Engineer in DataScope"
        },
        {
            emoji: '📚',
            text: 'MSc student'
        },
        {
            emoji: "📧",
            text: "maormeno@uc.cl"
        }
    ],
    socials: [
        {
            link: "https://github.com/maormeno",
            // icon: "fa-brands fa-github",
            icon: faGithub,
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/mateo-ormeno",
            // icon: "fa-brands fa-linkedin",
            icon: faLinkedin,
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Mateo. I'm a part-time software engineer at DataScope. I studied Computing Engineering at Pontificia Universidad Catolica de Chile and currently pursing a Master's degree, researching about Human Centered AI. I enjoy going to the gym, learning new things, playing videogames, knowing new people and spending time with my family and friends. I strongly believe computers along with well-developed software, enhanced with correctly designed and implemented AI, can lead to really positive and meaningful impacts in our lives. Contact me!",
    skills:
        {
            proficientWith: ['python', 'typescript', 'ruby', 'React', 'Ruby on Rails', 'git', 'github', 'postgres'],
            exposedTo: ['C', 'pytorch', 'django', 'docker', 'UNIX', 'sklearn', 'gurobi']
        }
    ,
    hobbies: [
        {
            label: 'videogames',
            emoji: '👾'
        },
        {
            label: 'gym',
            emoji: '🏋️‍♀️'
        },
        {
            label: 'series/movies',
            emoji: '🎥'
        },
        {
            label: 'friends',
            emoji: '🫂'
        },
        {
            label: 'traveling',
            emoji: '🗺'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "SmartCities",
            live: "http://ma-teo.me/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/maormeno/smartcities", // this should be a link to the **repository** of the project, where the code is hosted.
            image: 'notyet'
        },
        {
            title: "Optrip",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/cfalvarez2/optrip-frontend",
            image: 'notyet'
        },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}