import React from 'react';
import Header from '../components/Header';

import '../scss/style.scss';
import { Link } from 'gatsby';

export default function About() {
  const intro = '';
  const paragraph = [
    {
      title: 'Starting point',
      content: 'Knowledge about what the Internet of Things is and how it works is part of the domain of experts using technical and abstract language. On the other hand, users of interconnected devices interact with the complex IoT infrastructure on a daily basis without directly assimilating its implications. Users\' lack of knowledge about IoT puts the privacy of their personal and sensitive data at risk. Reviewing how interconnected devices are communicated to users allows identifying and reporting which aspects should be covered to promote critical informed use. Communication about the operation of interconnected devices to users is scarce, technical and incomplete. The platforms used by users to understand and inform themselves on personal data are not offering an omni comprehensive communication on the topic. There is hence an urgency to arise questions upon the implications of interconnected devices.\n'
        + '\n'
        + '\n'
        + 'Interconnected is a project developed as Master Degree Thesis Interconnected: interrogating Internet of Things communication  at Politecnico di Milano by Andrea Elena Febres Medina.\n',
    },
    {
      title: 'What\'s the goal',
      content: 'The aim of this project is to inform the audience with simple language and clear content that Internet of Things devices collect, store and elaborate user data. Interconnected aims to visually show how data travels throught the ecosystem of smart objects and to do so dissects the ecosystems itself. The project takes its steps from the opacity of the communication of privacy concerns: smart objects are present in homes and rely on data capture to work. However, users’ privacy and security is not taken into account when talking about the benefit of these objects, that surely help to automate their lives. Interconnected wants to make people understand that inputs become data through algorithms and that this data crossed with the other devices’ one, creates a profile that matches the user and it is not clear where and how this data is used.\n',
    },
    {
      title: 'How was this project done?',
      content: 'The project was designed after a research on smart objects used in homes. The research was made from the user’s point of view following the question: “How can an average user understand how the IoT is structured?”. The following step was to search on Google.com “Internet of Things ecosystem” to see what the answers were. In the first results were used some diagrams to explain better how information is sent and managed by the different things, alongside confusing textual descriptions regarding the topic. It was then decided to use a visual medium, the diagrams, that are of course a simplification of reality but give a general overview on how the whole ecosystem is represented. This decision led to the query “Internet of Things ecosystem diagram”, searched in Google using the Images search engine. The results of this research were used to create the main leit motiv of the project, hence the connections between entities. ',
    },
    {
      title: 'Relevance',
      content: 'quarto testo',
    },

  ];

  return (
    <div>
      <Header />
      <div className="container-fluid h-100">
        <div className="row">
          <p className="display-4 col-11">
            Technology is not neutral. We’re inside of what we make, and it’s inside of us. We’re living in a world of connections — and it matters which ones get made and unmade.
            <em> Donna Haraway, 1991</em>
          </p>
        </div>
        <div className="row bordoTopAbout bordoBottomAbout">
          <div className="col-2">
            <div className="row pt-2 pb-2">
              <Link to="#primo" className="upper">{paragraph[0].title}</Link>
            </div>
            <div className="row bordoTopAbout pt-2 pb-2">
              <Link to="#secondo" className="upper">{paragraph[1].title}</Link>
            </div>
            <div className="row bordoTopAbout pt-2 pb-2">
              <Link to="#terzo" className="upper">{paragraph[2].title}</Link>
            </div>
            <div className="row bordoTopAbout bordoBottomAbout pt-2 pb-2">
              <Link to="#quarto" className="upper">{paragraph[3].title}</Link>
            </div>
          </div>
          <div className="col-10 overflow-auto borderLeftAbout" style={{ height: '70vh' }}>
            <div className="row">
              <div className="col-10">
                <p className="fontText pt-2">{intro}</p>
                {
              paragraph.map(({
                content, title,
              }) => (
                <p className="fontText" id="primo">
                  <span className="fontTextStrong">{title}</span>
                  <br />
                  {content}
                </p>

              ))
            }
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
