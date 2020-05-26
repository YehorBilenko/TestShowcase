import React from 'react'
import {graphql} from 'gatsby'
import Container from '../containers/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/assets/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Button from '../components/footer/Button.jsx'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'
import AboutBlock from '../components/about/AboutBlock.jsx'
import {responsiveTitle1} from '../components/typography.module.css'
import {center} from '../containers/styles/container.module.css'

export const query = graphql`
  query ArchivePageQuery {
    aboutBlocks: allSanityAbout {
      edges {
        node {
          id
          info
          title
        }
      }
    }
    projects: allSanitySampleProject(
      limit: 12
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          linkTo
        }
      }
    }
  }
`

const ArchivePage = props => {
  const {data, errors} = props
  const projects = data && data.projects && mapEdgesToNodes(data.projects)
  const aboutBlocks = data && data.aboutBlocks && mapEdgesToNodes(data.aboutBlocks)
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes = data && data.projects && projects.filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='LightDev' />
      <Container>
        <AboutBlock aboutBlocks={aboutBlocks} />
      </Container>
      <Container>
        <h1 className={responsiveTitle1}>Assets</h1>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Container>
      <Container>
        <div className={center}>
          <Button color='blue' text='Contact us' mailTo='lightdev@gmail.com' />
        </div>
      </Container>
    </Layout>
  )
}

export default ArchivePage
