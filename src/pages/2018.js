import React from 'react';
import Layout from '../components/indexLayout'
import Report from '../components/reportLayout';
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const state18 = (props) => (
  <Layout>
    <Report>
      <div className="page">
        <section className="2018-Report" style={{
          fontSize: '20px',
        }}>
          <div className="container">
          <Img
              fluid={props.data.imageFirst.childImageSharp.fluid}
              className="sosc-logo"
              alt="sosc logo"
              style={{
                height:'10%',
                width:'10%',
              }}
            />
            <h1 
              style={{
              fontSize: '35px',
              }}
              >2018 Yearly Report<div className="dash" />
            </h1>
              <p 
              style = {{ 
                fontSize:'22px',
              }}
              >
              2018 was a truly memorable year for us, at Sahyadri Open Source Community.<br />
                We watched our community increase in size and many members developed and learnt new skills;<br />
                We also provided mentorship, organised a handful of Events, Workshops, and an OverNight Hackathon!<br /><br />
                Here's a report of SOSC's 2018:
                <p 
                  style = {{ 
                    fontSize:'20px',
                  }}
                >
                  <ul>
                    <li><h1>Rustathon 2k18<div className="dash" /></h1>
                      <br />10th February 
                      <br />
                      <br />Rustathon 2k18 was the first workshop of the year for SOSC, based on the blazing fast RUST programming language
                            organized by the Mozilla community. This event was a part of the MozActivate campaign of Mozilla. 
                            The speaker of this event was Mr Jayesh Katta Ramalingaiah, A Mozilla Representative and Full Stack Developer;
                            upto 10,000$ worth of Amazon Web Service(AWS) credits were sponsored by Amazon Solely for Rust-AWS Projects.<br />
                            <br />
                            <Img
                              fluid={props.data.rust.childImageSharp.fluid}
                            />
                    </li>
                    <br />
                    <li><h1>DevHost:18<div className="dash" /></h1>
                      <br />04th and 5th May 
                        <br />
                        <br />devhost:18 was the first annual Student Developers meet organised by Sahyadri Open-Source Community (SOSC)
                              to bring together young and talented developers from in and around Mangalore. 
                              devhost:18 was aimed to create a platform to join together clubs and organizations to spread the information
                              on latest techologies and trends in the IT industry and train the students to be part of it.
                              devhost:18 was a two day event which took place on 4th and 5th May 2018 and had speakers from various organizations. 
                              The event was open-to-all and was free of cost for anyone who was interested. <br />
                              <br />
                              <Img
                              fluid={props.data.devhost.childImageSharp.fluid}
                            />
                    </li>
                    <br />
                    <li><h1>Python Bootcamp<div className="dash" /></h1>
                      <br />9th May 
                        <br />
                        <br />Python Bootcamp was a series of Python-workshops which was held for interested 
                              students of Sahyadri. The main initiative of this series of workshops was to basically 
                              train the attendees/participants from beginner to advanced level in python. 
                              These workshops were conducted by students from SOSC.<br />
                              <br />
                    </li>
                    <br />
                    <li><h1>Image Processing<div className="dash" /></h1>
                      <br />28th July 
                        <br />
                        <br />A Workshop on image processing was conducted by Sahyadri Open Source Community (SOSC) 
                              on a popular open source computer vision library, OpenCV, by Intel. 
                              This workshop aimed at giving an introduction to OpenCV and cover up some of it's 
                              advanced topics so that the students can apply these concepts in some real world projects.
                              To cover up more topics, the workshop was conducted in three phases and 
                              each of these phases were conducted a week apart so that the students could get thourough
                              with the topics covered.<br />
                              <br />
                              <Img
                              fluid={props.data.imageproc.childImageSharp.fluid}
                            />
                    </li>
                    <br />
                    <li><h1>Problem Solving 101<div className="dash" /></h1>
                      <br />1st September
                        <br />
                        <br />Problem Solving 101 was a workshop dedicated to students to improve their problem solving and analysis skills. 
                              Workshop was aimed at students from all the branches and years and we have got the best speaker who knows the crowd,
                              our alumni and favorite Karthik K Bhat. He is also an experienced senior software developer at UniCourt. 
                              It was an amazing 3 hours of hands on experience on solving various problems and teaching the students how to crack em.<br />
                              <br />
                              <Img
                              fluid={props.data.ps101.childImageSharp.fluid}
                            />
                    </li>
                    <br />
                    <li><h1>SOSC Family Expands as it hits a remarkable 100 members<div className="dash" /></h1>
                      <br />2nd September  
                        <br />
                        <br />Students of Sahyadri College of Engineering and Management were given the chance to join SOSC
                              as community members. Each interested student was made to talk to an existing core team member to express their interest, 
                              and the truly interested students were added to the Official members group with over 100+ Open Source Loving Members <br />
                    </li>
                    <br />
                    <li><h1>The start of the Sahyadri Machine Learning Group(MLG)<div className="dash" /></h1>
                      <br />2nd September 
                        <br />
                        <br />The Sahyadri Machine Learning Group, also known as MLG is the newest addition to the clubs at SOSC.
                              MLG is a community of students that are Machine Learning Enthusiasts and aims to create a community
                              of students that contributes toward 
                              Machine Learning and Deep Learning research through projects and papers created by its members <br />
                    </li>
                    <br />
                    <li><h1>Git+Github Workshop<div className="dash" /></h1>
                      <br />30th September
                        <br />
                        <br />This workshop was conducted by SOSC members and Sahyadri's very own GitHub campus expert, Musthaq Ahamad, who is also an SOSC member. 
                              Most of the students were able to understand Git and GitHub workflow and how it can be used in their academic
                              projects. A good percentage of the attendees were able to submit their very first pull request and were super 
                              excited to get into hacktoberfest.
                              Enlightened most of the attendees with the usefulness of linux OS while working with open source technologies.<br />
                              <br />
                              <Img
                              fluid={props.data.github.childImageSharp.fluid}
                            />
                    </li>
                    <br />
                    <li><h1>The start of the Sahyadri Open Source Womens Community(SOSWC)<div className="dash" /></h1>
                      <br />1st October 
                        <br />
                        <br />The Sahyadri Open Source Womens community was another new addition to the various clubs under SOSC,
                              SOSWC was formed to encourage the growth of technical knowledge of the Female population of Sahyadri, 
                              SOSWC aims at giving women the power and knowledge to sharpen their technical abilities
                              and to increase the contribution stats of women in Open-Source and the various technical fields.<br />
                    </li>
                    <br />
                    <li><h1>HacktoberFest HackNight<div className="dash" /></h1>
                      <br />13th October
                        <br />
                        <br />This was one of the most successful event our community conducted! 
                              We're planning to host the same for upcoming years too. 
                              There were a lot of ups and downs for hosting this event, but everything went well, 
                              thanks to the early arrival of GitHub sponsorship and Sponsorship from our state gov's
                              initiative to promote technical and entrepreneurship activities in colleges.
                              We had 140 participants + 30 Mentors/volunteers. The no. of the mentors may seem large,
                              since it is a beginner friendly event, we had to work a little harder to mentor the teams 
                              throughout the night because most of them were at their very first hackathon or they were 
                              building something with their academic knowledge for the first time.<br />
                              <br />
                              <p style={{textAlign:'center',}}>
                              <img src="https://user-images.githubusercontent.com/18684321/47107243-6ce14580-d266-11e8-9c3a-18f0b49013d4.jpg" ></img>
                              </p>
                    </li>
                    <br />
                    <li><h1>Mentoring of PU students by SOSC members during Sahyadri Science Talent Hunt(SSTH)<div className="dash" /></h1>
                      <br />10th February 
                        <br />
                        <br />To create awareness on the importance of Projects and Research among the student community of pre-university level,
                              Sahyadri College of Engineering and Management started the Sahyadri Science Talent Hunt(SSTH) program in which
                              the students of various backgrounds can exhibit their talent in the form of various innovative projects.
                              various SOSC members were put in charge as mentors for these PU students, for guidance.<br />
                    </li>
                    <br />
                    <li><h1>Data Science Workshop<div className="dash" /></h1>
                      <br />17th November 
                        <br />
                        <br />In this workshop, the Basics of data analysis was discussed.
                              With this workshop, the SOSC members that organised the event, Melvin, Akshay and Shreyas Baliga
                              conveyed the basics of understanding certain patterns in data while pre-processing and also the
                              simple manipulations that one can perform on them.
                              The topics covered were: Data preprocessing techniques using numpy and pandas,
                              Statistical data analysis, Visual data analysis using plotly, matplotlib and seaborn<br />
                    </li>
                    <br />
                    <br />
                    </ul>
                  </p>
                  We look forward to having many more years of such success, if not greater, at SOSC. Cheers!
              </p>
          </div>
        </section>
      </div>
    </Report>
  </Layout>
)

export default state18
export const pageQuery = graphql`
  query {
    imageFirst: file(relativePath: { eq: "images/logo_grad.png" }) {
      ...firstSiteImages
    }
    rust: file(relativePath: { eq: "contents/events/rustathon2k18/9.jpg" }) {
      ...firstSiteImages
    }
    devhost: file(relativePath: { eq: "contents/events/devhost18/day1.jpg" }) {
      ...firstSiteImages
    }
    ps101: file(relativePath: { eq: "contents/events/problem-solving-101/img5.jpg" }) {
      ...firstSiteImages
    }
    github: file(relativePath: { eq: "contents/events/git-github-2018/git_cover.jpg" }) {
      ...firstSiteImages
    }
    imageproc: file(relativePath: { eq: "contents/events/ImageProcessing/2.jpg" }) {
      ...firstSiteImages
    }
  }
`