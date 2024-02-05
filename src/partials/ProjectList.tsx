import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Gec Bazzar"
        description="Introducing the College Materials Marketplace – 
        a dynamic and user-friendly application designed to streamline 
        the buying and selling of essential college materials. Built with 
        Next.js, our platform provides an efficient way for students to access,
         explore, and connect with sellers offering items such as bombers, drafters,
          and boiler suits.

        "
        link="https://gec-ecommerce.vercel.app/"
        img={{
          src: 'public/assets/images/gecBazzar.ico',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Nextjs</Tags>
            <Tags color={ColorTags.LIME}>MongoDb</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />

      <Project
        name="Engineering CGPA Calculator"
        description="Embark on an academic journey with the Engineering CGPA Calculator, a meticulously crafted application powered by Next.js and enriched with dynamic data visualization through Chart.js. This tool not only simplifies the calculation of Cumulative Grade Point 
        Average (CGPA) but also provides a visual representation of your academic progress over time."
        link="https://chartjs-dashboard.vercel.app/"
        img={{ src: 'src/images/cgpa.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>chart.js</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Three.js Landing page"
        description="Step into a realm of artistic brilliance and spirituality with our Three.js Landing Page, a mesmerizing showcase of cutting-edge web development.
        This immersive experience is brought to life by a captivating 3D animation featuring a majestic model of Lord Shiva, seamlessly crafted with Three.js technology.."
        link="https://threejs-shrey.vercel.app/"
        img={{ src: 'src/images/three.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>ThreeJs</Tags>
            <Tags color={ColorTags.INDIGO}>WEbgl</Tags>
            <Tags color={ColorTags.ROSE}>Javascript</Tags>
          </>
        }
      />
      <Project
        name="Youtube Trending Videos Analysis"
        description="Explore the world of trending videos like never before with our YouTube Trending Videos Finder, an interactive application that seamlessly integrates OpenLeaflet maps.
         Immerse yourself in the global pulse of content creation by discovering trending videos based on geographical locations. "
        link="https://github.com/sshrey15/Youtube_Trends"
        img={{ src: 'src/images/yttrend.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>OpenLeaflet</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
