/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <header>
      <div className="bio">
        <div className="bio-avatar">
          <StaticImage
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="https://avatars.githubusercontent.com/u/2306064?s=460&u=bebb1fac64b8721fc6778da60db47162a84edeb7&v=4"
            width={50}
            height={50}
            quality={95}
            alt="Profile picture"
          />
        </div>
        <div className="bio__main">
          {author?.name && (
            <>
              <p>
                Hi, I'm <strong>{author.name}</strong> <br />
                <span dangerouslySetInnerHTML={{ __html: author?.summary }} />
              </p>
              <p>
                <span>
                  {" "}
                  If you would like to know more about me, please check out my{" "}
                  <Link to="/resume">Resumé</Link>.
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
