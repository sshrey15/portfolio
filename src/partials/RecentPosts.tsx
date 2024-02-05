import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  ColorTags,
  GradientText,
  Section,
  Tags,
} from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Ongoing <GradientText>Projects</GradientText>
        </div>
      </div>
    }
  >
    <div className="flex flex-wrap gap-2 sm:gap-5">
      <Tags color={ColorTags.VIOLET}>Next.js</Tags>
      <Tags color={ColorTags.EMERALD}>OpenLeaflet</Tags>
      <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
      <Tags color={ColorTags.VIOLET}>PrismaDB</Tags>
      <Tags color={ColorTags.EMERALD}>DSA</Tags>
      <Tags color={ColorTags.FUCHSIA}>ReactJs</Tags>
      <Tags color={ColorTags.LIME}>Postman</Tags>
      <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
      <Tags color={ColorTags.ROSE}>TypeScript</Tags>
    </div>
    <div className="mt-4 flex flex-wrap gap-2 sm:gap-5">
      <Tags color={ColorTags.YELLOW}>Threejs</Tags>
      <Tags color={ColorTags.VIOLET}>Nodejs</Tags>
      <Tags color={ColorTags.EMERALD}>RestAPIs</Tags>
      <Tags color={ColorTags.YELLOW}>C++</Tags>
      <Tags color={ColorTags.VIOLET}>C</Tags>
      <Tags color={ColorTags.EMERALD}>Object Oriented Programming</Tags>
      <Tags color={ColorTags.YELLOW}>Unit Testing</Tags>
      <Tags color={ColorTags.VIOLET}>GitHub</Tags>
      <Tags color={ColorTags.EMERALD}>Linux</Tags>
    </div>
  </Section>
);

export { RecentPosts };
