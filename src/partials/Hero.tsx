import {
  ColorTags,
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Shrey Kumar Singh</GradientText> 👋
        </>
      }
      description={
        <>
          I am a skilled developer with expertise in JavaScript, C, C++, DSA,
          OOP, and Next.js. Specializing in backend development, I create robust
          APIs using technologies Nodejs,postman,postgresql. Proficient in data
          visualization using Three.js and Chart.js, I excel in problem-solving.
          A cooperative team player and effective leader, I bring strong
          communication skills to the table.
        </>
      }
      avatar={
        <img
          className="w-70 h-80"
          src="/shrey.jpeg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/Shreysi29721576  ">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/sshrey15/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/channel/UC0AAfaslrzAR6IRJY1TpljA">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
      category={
        <>
          <Tags color={ColorTags.VIOLET}>Next.js</Tags>
          <Tags color={ColorTags.EMERALD}>OpenLeaflet</Tags>
          <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
        </>
      }
    />
  </Section>
);

export { Hero };
