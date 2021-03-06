import React from 'react';
import './styles/about_page.css';
import PageTitle from '../global/body_components/page_title/page_title';
import PageText from '../global/body_components/page_text/page_text';

export default class AboutPage extends React.Component {
  render() {
    return (
      <section id={"about_page_content"}>
        <PageTitle content="A little bit about me" />
        <PageText content="Words are my symbols, my ideas and thoughts. They are my strongest connection to meaning." />
        <PageText content="Understanding has come hard, but nothing worth doing was ever easy." />
        <PageText content="I'm a full stack web developer in training @ Coder Academy I want to understand the wants and needs of both clients and their customers to produce digital products that enrich our connections and expand our understanding." />
        <PageText content="This web portfolio is here to showcase my skills and interests to anyone who may be need of my abilities presently or in the near future. If you want to view a formal document, click on this link below." />
        <a id="resume_link" href="/2020_11_27_Andrew_Downs_Resume.pdf">
          Developer Resume
        </a>
        <img
          id= "about_image"
          alt= "Pen and paper, type writer and laptop"
          src= "/images/body/about_image1.svg" />
      </section>
    );
  }
}

    