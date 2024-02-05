import self from '../img/self.png';
import timberstock from '../img/timberstock.png';
import smartcities from '../img/smartcities.png';
import aiobservatories from '../img/aiobservatories.png';
import searchengines from '../img/searchengines.png';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
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
  firstName: 'Mateo',
  lastName: 'Ormeño',
  initials: 'mo', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Software Engineer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🌎🇯🇵🇨🇱',
      text: 'currently based in Tokyo',
      link: false,
    },
    {
      emoji: '✖ 💼',
      text: 'Graduate Researcher at NII',
    },
    {
      emoji: '📚',
      text: 'MSc student at ',
      link: true,
    },
    {
      emoji: '📧',
      text: 'maormeno@uc.cl',
      link: false,
    },
  ],
  socials: [
    {
      link: 'https://github.com/maormeno',
      // icon: "fa-brands fa-github",
      icon: faGithub,
      label: 'github',
    },
    {
      link: 'https://linkedin.com/in/mateo-ormeno',
      // icon: "fa-brands fa-linkedin",
      icon: faLinkedin,
      label: 'linkedin',
    },
    {
      link: 'https://www.instagram.com/mateo.ormeno_/',
      // icon: 'fa-brands fa-instagram',
      icon: faInstagram,
      label: 'instagram',
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],

  // bio1: "Yooo Mateo desu, an apparently -not so- random software engineer from Chile. Engineering bachelor's (soon master's) from PUC - Top #1 University in Latam QS -, currently a graduate researcher at the National Institute of Informatics of Japan in Web Privacy Measurements, which composes my master's thesis about Online Behavioral Advertising. I am also working in a Woodtech project near to be launched in Chile.",
  // bio2: 'I consider to have solid foundations among different areas of Software Development including Frontend, Backend, Systems Designs, Cloud Computing, and Data Science. \n\n I envision myself as an eternal student that seeks for knowledge and wisdom from the people and the opportunities of life, making my best to contribute to the world with everything within my reach (and beyond). My relatives often see me as a driven person with a boiling ambition towards my objectives, facing the path that God has set for me. I believe in restoring a healthy organic relationship between humanity and technology by absorving it consciously and not the other way.\n\nIf you would like to connect or talk about any topic, feel free to reach out to my instagram.',
  // otherInterests:
  //   'Besides software and technology, you can find me training martial arts, lifting at the gym, spending time with my friends, reading, studying Japanese or learning about something new - currently geography -. Depending on the season, I also enjoy going out partying, traveling, watching series/anime or playing videogames).',
  bio1: "Hey there, I'm Mateo, an atypical software engineer from the vibrant landscapes of Chile. With a bachelor's (and almost a master's) from PUC – the crème de la crème of universities in Latam according to QS – I'm currently navigating the intricate world of Web Privacy Measurements in Japan. My master's thesis? A deep dive into the murky waters of Online Behavioral Advertising. Meanwhile, back in Chile, I'm on the brink of launching an innovative Woodtech project that's about to shake things up.",
  bio2: "My toolkit? A robust blend of skills spanning Frontend, Backend, System Designs, Cloud Computing, and Data Science. But beyond the code, I see myself as a lifelong learner, forever curious and eager to soak up wisdom from the diverse tapestry of life. My close people and homies say I'm a man on a mission, fueled by a fiery ambition and guided by a higher path. My dream? To forge a world where technology and humanity dance in harmony, each enhancing the other consciously.",
  bio3: "If you're interested in discussing technology, sharing insights on personal growth, or simply exchanging thoughts, feel free to connect. You can reach out to my Instagram",
  otherInterests:
    "When I'm not coding or conceptualizing something in particular, I'm embracing the balance of mind and body through martial arts and hitting the gym. My downtime is spent enjoying the company of friends, diving into a good book, studying Japanese language or learning about world geography. Depending on the season, you might also find me living it up at a party, a techno club, exploring new travel destinations, binge-watching series/anime, or playing video games.",
  skills: {
    proficientWith: [
      'python',
      'typescript',
      'ruby',
      'FastAPI',
      'React',
      'Ruby on Rails',
      'git',
      'postgres',
      'NoSQL',
      'GCP',
      'AWS',
    ],
    exposedTo: [
      'C',
      'pytorch',
      'django',
      'docker',
      'UNIX',
      'sklearn',
      'gurobi',
      'React-Native',
    ],
  },
  hobbies: [
    {
      label: 'videogames',
      emoji: '👾',
    },
    {
      label: 'gym',
      emoji: '🏋️‍♀️',
    },
    {
      label: 'series/movies',
      emoji: '🎥',
    },
    {
      label: 'friends',
      emoji: '🫂',
    },
    {
      label: 'traveling',
      emoji: '🗺',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'Research Paper: Investigating Search Engines Leakages',
      description:
        "This is the first academic paper that I publish. It was published and presented in the CoNEXT 2023 Conference Student Workshop in Paris. It is about the privacy implications of the search engines' leakages of the user's queries to third-party services. You can read the abstract and get acces to the full paper in the button",
      live: 'https://dl.acm.org/doi/10.1145/3630202.3630236',
      image: searchengines,
    },
    {
      title: 'TimberStock',
      //   live: 'http://ma-teo.me/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      //   source: 'https://github.com/maormeno/smartcities', // this should be a link to the **repository** of the project, where the code is hosted.
      image: timberstock,
      description:
        "Sadly, I can't show you the source code for this project. However, although it is still WIP, it is a very exciting initiative which I am very proud of, that assembles different services and technologies in order to provide a solution to the massive timber stealing problem that we currently have in the South of Chile. It involves a React Native mobile app powered by Expo (to emit electronic office guides), a FastAPI backend service (that connects to the national taxes service to genuinely sign the authenticity of those guides), a Firestore database (for offline-first approach), and several Cloud Functions to handle the XMLs, PDFs, communication between the services, and more.",
    },
    {
      title: 'SmartCities',
      live: 'http://ma-teo.me/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/maormeno/smartcities', // this should be a link to the **repository** of the project, where the code is hosted.
      image: smartcities,
      description:
        'This was a project for the course "Software Systems Architecture" at PUC. It is a fully dockerized software project built with a microservices architecture that includes a broker script client that subscribes by MQTT protocol to an "emergencies" topic where messages are published by an external server, once a new message was received, it was then stored in a RDS instance for them to be managed by a Django Web application (these two services were deployed in an EC2 instance and used an inverse proxy).',
    },
    {
      title: 'AI Observatories SERPER',
      // live: "https://paytonpierce.dev",
      source: 'https://github.com/maormeno/ai-observatories-serper',
      image: aiobservatories,
      description:
        'This is a project to help me and my partner in our research about systematizing the gathering of information about the actual state of the AI Observatories in Latin America. It consists of a Django REST API that is connected to a PostgreSQL database, and a React frontend that consumes the API. It also includes a script that SERPs (Search Engine Results Page) all the links that result by mixing a set of keywords and making the search in Google (they were 1200), then they are stored in the database untagged, and then they are manually tagged by the user as "yes", "maybe" or " not" answering certain criteria to consider them as useful or not. After this, we built a script that writed an xlsx file with our results and compared them batch by batch, obtaining the Kappa score to measure the agreement between the two people that tagged the links in order to fine-tune our criteria. Once we got to a kappa score of 1 in a batch of 50, we considered the criteria was good enough.',
    },
    {
      title: 'Optrip',
      // live: "https://paytonpierce.dev",
      source: 'https://github.com/cfalvarez2/optrip-frontend',
      description:
        'WebApp made with Typescript and React that takes takes inputs such as origin, destination, and date, and sends it to the backend made of a webscrapper built as a Flask-based app to collect flights and bus tickets using Selenium web-scraping, so as to compare the costs and times to help the user decide which is the best option.',
    },
    // {
    //     title: "Project 5",
    //     live: "https://paytonpierce.dev",
    //     source: "https://github.com/paytonjewell",
    //     image: mock5
    // }
  ],
};
