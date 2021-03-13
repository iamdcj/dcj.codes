/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <header>
      <div className="bio">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="https://avatars.githubusercontent.com/u/2306064?s=460&u=bebb1fac64b8721fc6778da60db47162a84edeb7&v=4"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        <div className="bio__main">
          {author?.name && (
            <p>
              Hi, I'm <strong>{author.name}</strong>,
              <br />
              <span dangerouslySetInnerHTML={{ __html: author?.summary}} />
            </p>
          )}
          <nav>
            <ul class="navigation">
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <a href={`https://twitter.com/${social?.github || ``}`}>
                  Github
                </a>
              </li>
              <li>
                <a href={`https://twitter.com/${social?.github || ``}`}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`https://twitter.com/${social?.github || ``}`}>
                  Strava
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
