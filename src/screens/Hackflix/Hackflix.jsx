import React, { useEffect, useRef } from 'react';



import { About } from "../../components/About";
import { HeaderTransition } from "../../components/HeaderTransition";
import { Navbar } from "../../components/Navbar";
import Accordion, { FAQ } from "../../components/FAQ";
import { Opportunities } from "../../components/Opportunities";
import  Contact from "../../components/Contact/Contact";
import { Team } from "../../components/Team";
import { Venue } from "../../components/Venue";
import "./style.css";

export const Hackflix = () => {
  return (
    <div className="hackflix">
      <div className="div-2">
        <header className="header">
          <div className="overlap-group-2">
            <div className="home">
              <div className="front-header">
              <HeaderTransition
                  property1="frame-48"
                  propertyFrame="/img/tag-header.svg"
                  propertyFrameClassName="tag-header"
                />
              </div>
              <div className="text-header">
                <img className="img-2" alt="The FIRST EDITION" src="/img/the-first-edition.png" />
                <div className="div-styles-tagline">
                  <div className="heading">
                    <div className="text-wrapper-5">IDEATE. IMPLEMENT. INNOVATE</div>
                  </div>
                  <div className="p-styles-taglinetext">
                    <p className="india-s-largest">
                      India&#39;s largest student run hackathon. Join the forces on 12-14th January.
                    </p>
                  </div>
                </div>
              </div>
              <div className="social-header">
                <div className="a">
                <a href="https://twitter.com/itznishuu_" rel="noopener noreferrer" target="_blank">
                  <img className="twitter-svg" alt="Twitter svg" src="/img/twitter-svg.svg" />
                  </a>
                </div>
                <div className="a">
                <a href="https://discord.com/" rel="noopener noreferrer" target="_blank">
                  <img className="discord-svg" alt="Discord svg" src="/img/discord-svg.png" />
                  </a>
                </div>
                <div className="a">
                <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
                  <img className="insta-svg" alt="Insta svg" src="/img/insta-svg.png" />
                  </a>
                </div>
                <div className="a">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noopener noreferrer" target="_blank">
                  <img className="youtube-svg" alt="Youtube svg" src="/img/youtube-svg.png" />
                  </a>
                </div>
                <div className="a">
                  <a className="mail-svg" href="mailto:itsnisargthakkar@gmail.com" rel="noopener noreferrer" target="_blank">
                    <img className="image-3" alt="Image" src="/img/image.svg" />
                  </a>
                </div>
                <div className="a">
                  <a className="linkedin-svg" href="https://www.linkedin.com/in/nishu0/" rel="noopener noreferrer" target="_blank">
                    <img className="linkedin-c-svg" alt="Linkedin svg" src="/img/linkedin-77c4292-svg.svg" />
                  </a>
                </div>
              </div>
            </div>
            <img className="vector-2" alt="Vector" src="/img/vector-2.png" />
          </div>
        </header>
        <div className="mentors">
          <div className="overlap">
            <div className="mentors-wrapper">
              <div className="mentors-2">
                <div className="mentors-3">
                  <div className="overlap-group-3">
                    <div className="frame-wrapper">
                      <div className="frame-10">
                        <div className="group-3">
                          <div className="frame-11">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-4">
                          <div className="frame-13">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-5">
                          <div className="frame-11">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-6">
                          <div className="frame-14">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-15">
                      <div className="frame-16">
                        <div className="group-7">
                          <div className="frame-17">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-8">
                          <div className="frame-18">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-9">
                          <div className="frame-17">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-10">
                          <div className="frame-19">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-20">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap-2">
                    <div className="frame-21">
                      <div className="frame-22">
                        <div className="group-11">
                          <div className="frame-11">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-12">
                          <div className="frame-13">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-13">
                          <div className="frame-11">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-14">
                          <div className="frame-14">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-23">
                      <div className="frame-24">
                        <div className="group-15">
                          <div className="frame-17">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-16">
                          <div className="frame-18">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-17">
                          <div className="frame-17">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-12">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                        <div className="group-18">
                          <div className="frame-19">
                            <div className="text-wrapper-6">Prashant Bhavsar</div>
                            <div className="frame-20">
                              <div className="text-wrapper-7">M.Tech Cybersecurity</div>
                              <div className="text-wrapper-8">NFSU</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mentors-highlight">Mentors</div>
          </div>
          <p className="text-wrapper-10">JUDGES , mentors AND SPEAKERS</p>
        </div>
        <div className="team-2">
          <div className="overlap-3">
            <div className="team-3">
              <div className="team-wrapper">
                <Team
                  className="team-instance"
                  divClassName="team-8"
                  divClassNameOverride="team-9"
                  overlapClassName="team-5"
                  overlapClassNameOverride="team-6"
                  overlapGroupClassName="team-4"
                  overlapGroupClassNameOverride="team-7"
                  property1="team-state1"
                />
              </div>
            </div>
            <div className="text-wrapper-11">TEAM</div>
          </div>
        </div>
        <div className="COC">
          <div className="COC-2">
            <div className="coc-highlight">CoC</div>
            <div className="COC-3">
              <div className="frame-25">
                <div className="text-wrapper-13">CODE OF CONDUCT</div>
              </div>
              <p className="the-following-is-a">
                <span className="text-wrapper-14">
                  The following is a proposed code of conduct for Bsides Mumbai:
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-15">
                  Respect others: <br />
                </span>
                <span className="text-wrapper-14">
                  Treat everyone with respect, regardless of their background, gender, race, ethnicity, religion, sexual
                  orientation, or any other characteristic.
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-15">
                  No harassment:
                  <br />
                </span>
                <span className="text-wrapper-14">
                  Bsides Mumbai is dedicated to providing a harassment-free experience for everyone, whether it be
                  physical, verbal, or online. Any form of harassment or discrimination will not be tolerated.
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-15">
                  No violence:
                  <br />
                </span>
                <span className="text-wrapper-14">
                  Physical violence, threats of violence, or any other form of aggressive behavior will not be
                  tolerated.
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-15">
                  Follow the law: <br />
                </span>
                <span className="text-wrapper-14">
                  Attendees are required to comply with all applicable laws and regulations. Any illegal activity will
                  not be tolerated.
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-15">
                  No disruptive behavior: <br />
                </span>
                <span className="text-wrapper-14">
                  Attendees are expected to behave in a professional and respectful manner. Disruptive behavior, such as
                  heckling or interrupting speakers, will not be tolerated.
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-15">
                  No drugs or alcohol: <br />
                </span>
                <span className="text-wrapper-14">
                  The use of illegal drugs or excessive consumption of alcohol is not allowed at the event.
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-15">
                  Report any violations: <br />
                </span>
                <span className="text-wrapper-14">
                  If you witness any violations of this code of conduct, please report it to the organizers immediately.
                  <br />
                </span>
                <span className="text-wrapper-16">
                  <br />
                  HackFlix Hackthon
                </span>
                <span className="text-wrapper-14">
                  {" "}
                  is committed to providing a safe and welcoming environment for all attendees. We expect everyone to
                  abide by this code of conduct and to help create a positive experience for all.
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="welcome">
          <p className="text-wrapper-17">Welcome to Hackflix hackathon</p>  
          <p className="text-wrapper-17">
            Hackflix Hackathon is an exciting event that brings together talented developers, designers, and innovators
            to collaborate and create innovative solutions in the field of entertainment technology. Our mission is to
            revolutionize the way people interact with and enjoy digital media.
          </p>
        </div>
        <div className="about-us">
          <div className="overlap-4">
            <div className="about-highlight">About us</div>
            <About className="about-instance" property1="frame-1000001775" />
          </div>
        </div>
        <Navbar className="navbar-instance" />
        <div className="FAQ">
        <div className="faq-highlight">FAQ</div>
          <Accordion />
          <div className="text-wrapper-21">FAQ</div>
        </div>
        <div className="community-partners">
          <div className="text-wrapper-22">COMMUNITY PARTNERS</div>
          <div className="comunity-partners">
            <div className="frame-28">
              <div className="group-20">
                <div className="group-21">
                  <div className="text-wrapper-23">+</div>
                  <div className="rectangle-wrapper">
                    <img className="rectangle-15" alt="Rectangle" src="/img/rectangle-22-1.png" />
                  </div>
                </div>
                <div className="group-22">
                  <div className="text-wrapper-24">+</div>
                  <img className="rectangle-16" alt="Rectangle" src="/img/rectangle-21-9.png" />
                </div>
                <div className="group-23">
                  <div className="text-wrapper-25">+</div>
                  <img className="rectangle-17" alt="Rectangle" src="/img/rectangle-21-8.png" />
                </div>
                <div className="group-24">
                  <div className="text-wrapper-26">+</div>
                  <img className="rectangle-18" alt="Rectangle" src="/img/rectangle-21-7.png" />
                </div>
                <div className="group-25">
                  <div className="text-wrapper-27">+</div>
                  <img className="rectangle-15" alt="Rectangle" src="/img/rectangle-21-6.png" />
                </div>
              </div>
              <div className="group-26">
                <div className="group-27">
                  <div className="text-wrapper-23">+</div>
                  <img className="rectangle-19" alt="Rectangle" src="/img/rectangle-21-5.png" />
                </div>
                <div className="group-28">
                  <div className="text-wrapper-24">+</div>
                  <img className="rectangle-16" alt="Rectangle" src="/img/rectangle-21-4.png" />
                </div>
                <div className="group-29">
                  <div className="text-wrapper-25">+</div>
                  <img className="rectangle-17" alt="Rectangle" src="/img/rectangle-21-3.png" />
                </div>
                <div className="group-30">
                  <div className="text-wrapper-26">+</div>
                  <img className="rectangle-18" alt="Rectangle" src="/img/rectangle-21-2.png" />
                </div>
                <div className="group-31">
                  <div className="text-wrapper-28">+</div>
                  <img className="rectangle-15" alt="Rectangle" src="/img/rectangle-21-1.png" />
                </div>
              </div>
            </div>
            <div className="partners-highlight">Partners</div>
          </div>
        </div>
        <div className="highlights">
          <div className="highlight-highlight">Highlights</div>
          <div className="highlights-2">
            <div className="highlight">
              <Opportunities className="highlight-points" />
            </div>
            <div className="text-wrapper-31">Event Highlights</div>
          </div>
        </div>
        <div className="sponsers">
          <div className="sponsers-2">
            <div className="text-wrapper-32">Busters</div>
            <div className="overlap-group-4">
              <div className="text-wrapper-33">Hits</div>
              <div className="frame-29">
                <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-29.png" />
                <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-29.png" />
                <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-29.png" />
                <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-29.png" />
              </div>
            </div>
            <div className="text-wrapper-34">Pro</div>
            <img className="rectangle-21" alt="Rectangle" src="/img/rectangle-29.png" />
            <div className="frame-30">
              <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-29.png" />
              <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-29.png" />
              <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-29.png" />
              <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-29.png" />
              <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-29.png" />
            </div>
          </div>
          <div className="text-wrapper-35">Sponsers</div>
        </div>
        <div className="venue-2">
          <div className="venue-highlight">Venue</div>
          <p className="LD-engineering">
            LD ENGineering Collge , Ahmedabad
            <br />
            hackflix auditorium
          </p>
          <Venue
            className="venue-instance"
            img="/img/rectangle-17.png"
            property1="frame-1000001756"
            rectangle="/img/rectangle-17.png"
            rectangle1="/img/rectangle-20.png"
            rectangle2="/img/rectangle-20.png"
            rectangle3="/img/rectangle-20.png"
          />
        </div>
        <div className="contact">
          <Contact />
        </div>
        
        
      </div>
    </div>
  );
};
