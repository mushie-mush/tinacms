import Head from "next/head";
import Image from "next/image";
import { client } from "../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Cards from "@/components/cards";
import Carousel from "@/components/carousel";

export const getStaticProps = async () => {
  const home = await client.request({
    query: `query getHomepage {
      homepage(relativePath: "Home.json") {
        title
        Carousel {
          carouselTitle
          carouselImage
          carouselText
        }
        introductionSection {
          contentBody
          featuredImage01
        }
      }
    }
    `,
  });

  const posts = await client.request({
    query: `query getAllPosts {
      postConnection {
        edges {
          node {
            title
            subtitle
            banner
            body
          }
        }
      }
    }`,
  });

  return {
    props: {
      posts: posts.data.postConnection.edges,
      home: home.data.homepage,
    },
  };
};

export default function Home(props) {
  const featuredPosts = props.posts;
  const homepageData = props.home;

  return (
    <div className="container">
      <Carousel items={homepageData.Carousel} />
      <div className="row featurette">
        <div className="col-md-7">
          <TinaMarkdown
            content={homepageData.introductionSection.contentBody}
          />
        </div>
        <div className="col-md-5 position-relative">
          <Image
            src={homepageData.introductionSection.featuredImage01}
            alt={``}
            fill={true}
          />
        </div>
      </div>
      <hr className="featurette-divider"></hr>
      <Cards items={featuredPosts}></Cards>
    </div>
  );
}
