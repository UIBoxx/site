import "../CSS/main.css";
import { Helmet } from "react-helmet";

function LandingPage() {
  return (
    <div className="landingPage">
      <Helmet>
        <meta
          name="description"
          content="Explore free tutorials on different algorithms in DSA with visualization and demos. Master Data Structures and Algorithms, improve problem-solving skills, and enhance algorithmic understanding And Discover our collection of free UI components featuring various interactive elements, visualizations, and demos. Enhance your website's user experience with our easy-to-use and customizable UI components."
        />
        <meta
          name="keywords"
          content="free UI components, UI component features, interactive elements, visualizations, demos, user experience, customizable UI components,DSA algorithms, algorithm tutorials, algorithm visualizations, algorithm demos, DSA visualization, DSA tutorial, algorithmic concepts, data structures and algorithms, free tutorials, interactive learning"
        />
        <title>Home | UIBoxx.in</title>
      </Helmet>
      <div className="landingpage-head">
        <h2>
          Unlock <span>Your Potential</span>
        </h2>
      </div>
      {/* <section className="stats">
        <div className="stats-card">
            <h2>10+</h2>
            <h3>Designs</h3>
        </div>
        <div className="stats-card">
            <h2>10+</h2>
            <h3>Tutorials</h3>
        </div>
        <div className="stats-card">
            <h2>1K+</h2>
            <h3>Users</h3>
        </div>
      </section> */}
      <div className="service" id="service">
        <div className="services">
        <div className="service-type" id="design">
            <h3>Deep Understanding</h3>
            <h2>of Programming & DSA</h2>
            <a href="/Tutorials">Get Started</a>
          </div>
          <div className="service-type" id="ai">
            <h3>Free UI</h3>
            <h2>Components & Design</h2>
            <a href="/UI-Library">Discover</a>
          </div>
          {/* <div className="service-type" id="design">
            <h3>Deep Understanding</h3>
            <h2>of Programming & DSA</h2>
            <a href="/Tutorials">Get Started</a>
          </div> */}
        </div>
      </div>
      <div className="banner-title">
        <h1>What is happening in Tech-world?</h1>
        <a href="/">See All</a>
      </div>
      <div className="underline"></div>
      <section className="news-box">
        <div className="news">
          <div className="news-card">
            <h2>
              Snapchat Introduces 'My AI': An AI-Powered Chatbot Enhancing User
              Engagement and Interaction
            </h2>
            <p>
              Snapchat has introduced "My AI," an AI chatbot based on OpenAI's
              ChatGPT, joining the race among social networking platforms to
              leverage artificial intelligence. This built-in chatbot allows
              Snapchat users to engage in a variety of activities, such as
              asking questions, seeking advice, generating content, planning
              trips, receiving filter recommendations, playing games, and
              enjoying friendly conversation. Accessible to all users without
              the need for a subscription, My AI aims to enhance user engagement
              and create a more interactive experience within the Snapchat app,
              aligning with the trend of integrating AI to attract and retain
              users in the competitive social media landscape.
            </p>
          </div>
          <div className="news-card">
            <h2>
              Amazon Launches Bedrock: AI Platform for Generative Image and
              Language Models
            </h2>
            <p>
              Amazon has introduced Bedrock, an AI platform aimed at providing
              businesses with access to advanced language and image generative
              models. Bedrock enables AWS customers to develop chatbots,
              generate and summarize text, and classify images by leveraging
              pre-trained models like Jurassic-2, Stability AI's Stable
              Diffusion, and Amazon Titan. Coda, an AI document generation
              company, has already adopted Bedrock to create a platform enabling
              users to produce documents based on natural language descriptions.
              This launch reflects Amazon's increasing investment in AI,
              offering powerful automation, enhanced customer service, and
              content generation capabilities for a wide array of businesses.
            </p>
          </div>
          <div className="news-card">
            <h2>
            Elon Musk Wants to Develop TruthGPT, ‘a Maximum Truth-Seeking AI’
            </h2>
            <p>
              Elon Musk has said that he wants to develop his own chatbot,
              called TruthGPT, which he describes as a "maximum truth-seeking
              AI." Musk has previously criticized OpenAI, a non-profit research
              company that is developing artificial general intelligence (AGI),
              and has recruited former DeepMind employee Igor Babuschkin to work
              on his OpenAI rival. It is unclear what Musk's plans are for
              TruthGPT. He has not said whether he wants to build a Large
              Language Model (LLM) or focus on research in other areas of AI.
              However, Musk has said that he wants to create a third option to
              OpenAI and Google, which he believes are not doing enough to
              "create more good than harm." Musk's comments have sparked a
              debate about the future of AI. Some people believe that Musk is
              right to be concerned about the potential dangers of AI, while
              others believe that he is exaggerating the risks. It is too early
              to say what the impact of TruthGPT will be, but it is clear that
              Musk is one of the most influential people in the AI world, and
              his plans for TruthGPT are likely to be closely watched.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="desc">
            <p>At <span>UIBoxx.in</span>, we are a dedicated team of designers and developers committed to providing exceptional user experiences and empowering individuals in the digital realm. Our mission is to offer innovative solutions and resources that enhance your online presence. We believe in providing beautifully designed UI elements through our Free UI feature, while also offering comprehensive coding resources and tutorials to help you stay ahead in the industry. We value creativity, collaboration, and continuous improvement, and we are always striving to exceed your expectations. Join us on this journey to create stunning interfaces, unlock the power of algorithms, and make a lasting impact in the digital world.</p>
        </section> */}
    </div>
  );
}

export default LandingPage;
