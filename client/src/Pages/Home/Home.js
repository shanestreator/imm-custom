import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Media from 'react-media'

import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

export default class Home extends Component {
  render() {
    return (
      <div
        id="container"
        className="container home__container-shadow py-5 px-md-5 bg-light"
      >
        <div className="py-4" />
        <div className="container-md px-md-4">
          <div className="embed-responsive embed-responsive-16by9 home__video rounded mt-5">
            <iframe
              title="Impact Motivation Manual Video"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/RMCOrd3W0rQ"
              allowFullScreen
            />
          </div>

          <div className="d-flex justify-content-center">
            <Link to="/store">
              <img
                className="mt-5 img-fluid px-5 px-md-0"
                src="/images/Paypal-Buy-Now-Button.webp"
                alt=""
              />
            </Link>
          </div>

          <hr className="mt-5 border" />

          <div className="text-center mt-5 pt-3">
            <h3 className="home__dark-red mb-0">
              <strong className="home__dark-red">
                Regardless of the business, sport, educational, operational or
                personal life goal you're pursuing, you can
              </strong>
            </h3>
            <h2 className="home__h2-font-spacing home__dark-red my-2">
              <strong>MAXIMIZE PERFORMANCE</strong>
            </h2>
            <h3 className="home__dark-red">
              <strong>
                in yourself, your workforce, personnel, students or team you
                lead.
              </strong>
            </h3>

            <hr className="mt-5 border" />

            <div className="card bg-light my-4" style={{ border: 'none' }}>
              <div className="card-body text-center px-0">
                <h3 className="card-title about__dark-red">
                  <strong>The Impact Motivation Manual contains 101</strong>
                </h3>
                <p className="card-text pb-2">
                  motivational, inspirational, thought provoking and knowledge
                  building principles, concepts and philosophies from some of
                  the worlds greatest thinkers...and doers.
                </p>
              </div>
            </div>

            <hr className="mt-5 border" />

            <ObserverWrapper>
              <div
                className="card bg-light mt-4 mb-0"
                style={{ border: 'none' }}
              >
                <div className="card-body text-center px-0 pb-0">
                  <h3 className="card-title about__dark-red">
                    <strong>
                      How does your Business/Organization benefit?
                    </strong>
                  </h3>
                  <p className="card-text pb-2">
                    With the possibility of improved performance and
                    productivity through the hands of more motivated, inspired,
                    content, disciplined and successful team/workforce.
                  </p>
                </div>
              </div>

              <div className="row d-flex px-4 mt-2">
                {/* INTEGRITY, HONESTY, MENTAL TOUGHNESS, PERSISTENCE, DISCIPLINE, COURAGE */}
                {/* TENACITY, DETERMINATION, RELENTLESS DRIVE, LEADERSHIP, ACCOUNTABILITY, INDOMITABLE SPIRIT */}
                <ul className="list-inline d-flex align-items-center">
                  <div className="row px-2">
                    <div className="col-sm-12 col-md-6 pl-0 pr-0">
                      <div className="row d-flex justify-content-start">
                        <div className="col-sm-12 col-md-12 col-lg-4 ">
                          <li className="list-inline-item">
                            <table className="table table-borderless home__action-words-table pl-0 mb-0">
                              <tbody className="container">
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-3"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>INTEGRITY</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-3"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>HONESTY</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-3"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>PERSISTENCE</strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </li>
                        </div>
                        <div className="col" />
                        <div className="col-sm-12 col-md-12 col-lg-7">
                          <li className="list-inline-item">
                            <table className="table table-borderless home__action-words-table pl-0">
                              <tbody className="container">
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-3"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>COURAGE</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-3"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>DETERMINATION</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-0"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>MENTAL TOUGHNESS</strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </li>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 pl-md-3 pr-md-0 home__list-table-single-col">
                      <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                          <li className="list-inline-item">
                            <table className="table table-borderless home__action-words-table pl-0 mb-0">
                              <tbody className="container">
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-3"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>TENACITY</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-3"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>LEADERSHIP</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-3"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>DISCIPLINE</strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </li>
                        </div>
                        <div className="col" />
                        <div className="col-sm-12 col-md-12 col-lg-7">
                          <li className="list-inline-item">
                            <table className="table table-borderless home__action-words-table pl-0">
                              <tbody className="container">
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-0"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>RELENTLESS DRIVE</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-3"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>ACCOUNTABILITY</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-right pl-0 pr-1">
                                    <img
                                      src="/images/checkmark-30px.webp"
                                      alt="checkmark"
                                      style={{ width: '30px', height: '30px' }}
                                    />
                                  </td>
                                  <td
                                    className="text-left pl-0 pr-0"
                                    style={{ width: '185px' }}
                                  >
                                    <strong>INDOMITABLE SPIRIT</strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>

              <hr className="mb-5 mt-2 border" />

              <div
                className="card bg-light mt-4 mb-0"
                style={{ border: 'none' }}
              >
                <div className="card-body text-center px-0 pb-0">
                  <h3 className="card-title about__dark-red">
                    <strong>
                      How does your Workforce, Personnel or Team benefit?
                    </strong>
                  </h3>
                  <p className="card-text pb-2">
                    Those who embrace the qualities and attributes this manual
                    promotes can dynamically optimize virtually any area of
                    life. They can learn to overcome hindering, negative
                    thoughts and develop or strengthen powerful, positive
                    characteristics.
                  </p>
                </div>
              </div>

              <hr className="mt-5 border" />

              <div className="mt-5 pt-3">
                <h3 className="card-title home__dark-red my-4">
                  <strong>
                    The IMPACT MOTIVATION MANUAL is a great tool/gift for:
                  </strong>
                </h3>
                <div className="card-text text-left px-4">
                  <ul
                    className="home__ul"
                    // style={{
                    //   listStyleImage: 'url(/images/checkmark-30px.webp)'
                    // }}
                  >
                    <li className="">
                      <strong>Yourself</strong>
                    </li>
                    <li className="">
                      <strong>Your family</strong>
                    </li>
                    <li className="">
                      <strong>Your friends</strong>
                    </li>
                    <li className="">
                      <strong>Your team / athletes</strong>
                    </li>
                    <li className="">
                      <strong>Your employees / personnel</strong>
                    </li>
                    <li className="">
                      <strong>Your students / graduates / teachers</strong>
                    </li>
                    <li className="">
                      <strong>
                        Anyone that would benefit from improved and optimized
                        performance!
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <Link to="/store">
                  <img
                    className="my-5 img-fluid px-5 px-md-0"
                    src="/images/Paypal-Buy-Now-Button.webp"
                    alt=""
                  />
                </Link>
              </div>

              <hr className="my-5 border" />

              <div
                className="card bg-light mt-4 mb-0"
                style={{ border: 'none' }}
              >
                <div className="card-body text-center px-0 pb-0">
                  <h3 className="card-title about__dark-red">
                    <strong>TESTIMONIALS</strong>
                  </h3>
                  <div className="my-5">
                    <div className="row">
                      <div
                        className="col-8 shadow py-2"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}
                      >
                        <p className="card-text mb-0 font-italic text-muted">
                          <strong>
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              "{' '}
                            </span>
                            perfect for a quick pick me up
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              {' '}
                              "
                            </span>
                          </strong>
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Tyson W. - Riverside, IA
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Teacher
                        </p>
                      </div>
                      <div className="col-4" />
                    </div>
                  </div>

                  <div className="my-5">
                    <div className="row">
                      <div className="col-4" />
                      <div
                        className="col-8 shadow py-2"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}
                      >
                        <p className="card-text mb-0 font-italic text-muted">
                          <strong>
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              "{' '}
                            </span>
                            Keep it in my wallet...Fantastic, wonderful read
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              {' '}
                              "
                            </span>
                          </strong>
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Debi M. - Colliervile, TN
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Global Ops Manager
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="my-5">
                    <div className="row">
                      <div
                        className="col-8 shadow py-2"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}
                      >
                        <p className="card-text mb-0 font-italic text-muted">
                          <strong>
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              "{' '}
                            </span>
                            Having to travel a lot this is very convenient,
                            helpful & motivational
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              {' '}
                              "
                            </span>
                          </strong>
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Angela C. - Shaw, MS
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Director of Clinical Services
                        </p>
                      </div>
                      <div className="col-4" />
                    </div>
                  </div>

                  <div className="my-5">
                    <div className="row">
                      <div className="col-4" />
                      <div
                        className="col-8 shadow py-2"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}
                      >
                        <p className="card-text mb-0 font-italic text-muted">
                          <strong>
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              "{' '}
                            </span>
                            create positive change, experience positive outcomes
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              {' '}
                              "
                            </span>
                          </strong>
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Dr. Michael G. - Elgin, IL
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Clinical Psychologist
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="my-5">
                    <div className="row">
                      <div
                        className="col-8 shadow py-2"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}
                      >
                        <p className="card-text mb-0 font-italic text-muted">
                          <strong>
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              "{' '}
                            </span>
                            great motivation for miles of running!
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              {' '}
                              "
                            </span>
                          </strong>
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Bianca P. - Friendship, WI
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Ultra Runner
                        </p>
                      </div>
                      <div className="col-4" />
                    </div>
                  </div>

                  <div className="my-5">
                    <div className="row">
                      <div className="col-4" />
                      <div
                        className="col-8 shadow py-2"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}
                      >
                        <p className="card-text mb-0 font-italic text-muted">
                          <strong>
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              "{' '}
                            </span>
                            thought provoking and motivational
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              {' '}
                              "
                            </span>
                          </strong>
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Shane S. - Chicago, IL
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Web Developer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="my-5">
                    <div className="row">
                      <div
                        className="col-8 shadow py-2"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}
                      >
                        <p className="card-text mb-0 font-italic text-muted">
                          <strong>
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              "{' '}
                            </span>
                            helped accelerate my career, recommend to friends,
                            family and co-workers
                            <span style={{ color: '#be141b', opacity: '.5' }}>
                              {' '}
                              "
                            </span>
                          </strong>
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Tyler B. - Las Vegas, NV
                        </p>
                        <p
                          className="card-text mb-0"
                          style={{ fontSize: '12px' }}
                        >
                          Firefighter/Paramedic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-5 border" />

              <div
                className="card bg-light mt-4 mb-0"
                style={{ border: 'none' }}
              >
                <div className="card-body text-center px-0 pb-0">
                  <h3 className="card-title about__dark-red">
                    <strong>
                      How the Impact Motivation Manual came to be:
                    </strong>
                  </h3>
                  <p className="card-text pb-2 text-left">
                    I was a shy, naive, insecure kid. Moving into my young adult
                    years, I was trying to find my own path. I struggled through
                    hard times. This is not uncommon, but how one comes out of
                    these times is what’s most important. One day, one event
                    sparked a change in me, in how I lived my life.
                  </p>
                </div>
              </div>

              <div
                className="card bg-light mt-4 mb-0"
                style={{ border: 'none' }}
              >
                <div className="card-body text-center px-0 pb-0">
                  <h4 className="card-title about__dark-red">The Spark</h4>
                  <p className="card-text pb-2 text-left">
                    How this hit me was a little strange, but who am I to argue
                    with what sparks creation/passion in the human mind?
                  </p>
                  <p className="card-text pb-2 text-left">
                    I was watching an old black and white movie on TV. I heard
                    the following quote:
                  </p>
                  <div className="mb-4 px-3 pt-2 pb-1 mx-5">
                    <p className="card-text font-italic text-muted mb-0">
                      “The reasonable man adapts to the world, the unreasonable
                      man expects the world to adapt to him. Most of the
                      progress in the world is made by unreasonable men.”
                    </p>
                    <p
                      className="card-text pb-2 text-muted"
                      style={{ fontSize: '12px' }}
                    >
                      - George Bernard Shaw
                    </p>
                  </div>
                  <p className="card-text pb-2 text-left">
                    That was it! A passion was sparked at that moment that
                    changed my life.
                  </p>
                  <p className="card-text pb-2 text-left">
                    The next few days I couldn’t get that quote out of my head.
                    I couldn’t remember it word for word, or who said it, but I
                    needed to know. I found the movie in TV guide and then found
                    a copy on video. Once I found the quote and author, I wrote
                    it down on a small piece of paper and kept it in my wallet.
                    I started carrying a pen with me all the time and wrote down
                    any quote, concept or idea that had a powerful, positive
                    message that immediately “impacted” me. That small piece of
                    paper in my wallet filled over time. The design of the
                    manual was born out of the desire to have it always
                    available to help re-energize and re-focus my mind, thoughts
                    and actions to the positively driven places they belonged.
                  </p>
                  <p className="card-text pb-2">
                    That’s how the Impact Motivation Manual was born.
                  </p>
                </div>
              </div>

              <div
                className="card bg-light mt-4 mb-0"
                style={{ border: 'none' }}
              >
                <div className="card-body text-center px-0 pb-0">
                  <h4 className="card-title about__dark-red">
                    I embraced, concentrated on and implemented the principles
                    of:
                  </h4>
                  <p className="card-text pb-2">
                    Motivation, inspiration, discipline, leadership,
                    determination and more, that are in the Impact Motivation
                    Manual.
                  </p>
                  <p className="card-text pb-2">
                    <span style={{ color: '#be141b' }}>
                      It created a mindset change in me,
                    </span>{' '}
                    that enabled my accomplishments in sports, work/business and
                    relationships.
                  </p>
                </div>
              </div>

              <hr className="my-5 border" />

              <div className="card bg-light my-4" style={{ border: 'none' }}>
                <div className="card-body text-center">
                  <h3 className="card-title about__dark-red">
                    <strong>
                      How does this manual help create mindset change?
                    </strong>
                  </h3>
                  <p className="card-text text-left pb-2">
                    Well...One of the impactful principles in this manual tells
                    exactly how to get the most out of the information contained
                    in it.
                  </p>
                  <p className="card-text py-2">
                    It states that{' '}
                    <span className="font-italic text-muted">
                      "Thoughts, positive or negative, grow stronger when
                      fertilized with constant repitition."
                    </span>{' '}
                    <span className="text-muted" style={{ fontSize: '12px' }}>
                      - David Schwartz{' '}
                    </span>
                  </p>
                  <p className="card-text pt-2 text-left">
                    So I got started...I started{' '}
                    <span className="font-italic">"fertilizing"</span> my mind
                    with the positive principles, concepts and philosophies that
                    I had collected and gathered in my manual. I thought on
                    these things during tough, uncertain times and good times as
                    well.
                  </p>
                  <h4 className="card-text pt-2" style={{ color: '#be141b' }}>
                    And you know what?
                  </h4>
                  <h4 className="text-center">
                    It worked...It made a difference...It changed my life.
                  </h4>
                  <h4 className="card-text" style={{ color: '#be141b' }}>
                    Here's How
                  </h4>
                  <img
                    style={{ width: 'auto', height: '75px', opacity: '.65' }}
                    className="img-fluid mt-4"
                    src="/images/3-red-arrows-down.webp"
                    alt="red arrows down"
                  />
                </div>
              </div>

              <div
                className="card bg-light mb-5 pt-0"
                style={{ border: 'none' }}
              >
                <div className="card-body text-center pt-0">
                  <h4 className="card-title about__dark-red">
                    Weak minded follower...to Disciplined champion fighter
                  </h4>

                  <p className="card-text">
                    I got into martial arts and became a champion fighter with
                    50(+) fights in Boxing, Kickboxing, Thai Boxing, Savate, San
                    Shou, Bare Knuckle Karate, Brazilian Jui Jitsu and Extreme
                    Fighting, and won numerous state, regional and U.S. titles.
                  </p>
                  <div className="container card-text carousel-width d-flex justify-content-center w-100">
                    <Media query="(max-width: 480px)">
                      {matches =>
                        matches ? (
                          <Carousel
                            className="carousel-width w-100"
                            autoPlay
                            swipeable
                            stopOnHover
                            dynamicHeight
                            centerMode
                            showStatus={false}
                            interval={4000}
                            transitionTime={1000}
                            showArrows={true}
                            showIndicators={false}
                            showThumbs={false}
                            centerSlidePercentage={100}
                          >
                            <div>
                              <img
                                src="/images/fight/fight-pic-1.webp"
                                alt="..."
                              />
                            </div>
                            <div>
                              <img
                                src="/images/fight/fight-pic-2.webp"
                                alt="..."
                              />
                            </div>
                            <div>
                              <img
                                src="/images/fight/fight-pic-3.webp"
                                alt="..."
                              />
                            </div>
                            <div>
                              <img
                                src="/images/fight/fight-pic-4.webp"
                                alt="..."
                              />
                            </div>
                            <div>
                              <img
                                src="/images/fight/fight-pic-5.webp"
                                alt="..."
                              />
                            </div>
                          </Carousel>
                        ) : (
                          <Carousel
                            className="carousel-width w-100"
                            autoPlay
                            swipeable
                            stopOnHover
                            dynamicHeight
                            centerMode
                            showStatus={false}
                            interval={4000}
                            transitionTime={1000}
                            showArrows={true}
                            showIndicators={false}
                            showThumbs={false}
                            centerSlidePercentage={34}
                          >
                            <div>
                              <img
                                src="/images/fight/fight-pic-1.webp"
                                alt="..."
                              />
                            </div>

                            <div>
                              <img
                                src="/images/fight/fight-pic-3.webp"
                                alt="..."
                              />
                            </div>

                            <div>
                              <img
                                src="/images/fight/fight-pic-2.webp"
                                alt="..."
                              />
                            </div>

                            <div>
                              <img
                                src="/images/fight/fight-pic-4.webp"
                                alt="..."
                              />
                            </div>
                            <div>
                              <img
                                src="/images/fight/fight-pic-5.webp"
                                alt="..."
                              />
                            </div>
                          </Carousel>
                        )
                      }
                    </Media>
                  </div>
                </div>
              </div>

              <div className="card bg-light my-5" style={{ border: 'none' }}>
                <div className="card-body text-center ">
                  <h4 className="card-title about__dark-red">
                    Construction laborer...to Business owner
                  </h4>

                  <p className="card-text">
                    I went from a construction laborer (an important, demanding
                    job I was proud of, but I wanted more) to a supervisor in
                    manufacturing, to a manager in asset recovery. I built
                    highly motivated, disciplined, loyal and profitable teams in
                    each of these industries. My latest step was starting my own
                    online business which I run in my spare time.
                  </p>
                  <div className="container card-text carousel-width d-flex justify-content-center w-100">
                    <Media query="(max-width: 480px)">
                      {matches =>
                        matches ? (
                          <Carousel
                            className="carousel-width w-100"
                            autoPlay
                            swipeable
                            stopOnHover
                            dynamicHeight
                            centerMode
                            showStatus={false}
                            interval={4000}
                            transitionTime={1000}
                            showArrows={true}
                            showIndicators={false}
                            showThumbs={false}
                            centerSlidePercentage={100}
                          >
                            <div>
                              <img
                                src="/images/career/construction-helmets.webp"
                                alt="..."
                              />
                            </div>
                            <div>
                              <img
                                src="/images/career/hands-in.webp"
                                alt="..."
                              />
                            </div>
                            <div>
                              <img
                                src="/images/career/construction-site.webp"
                                alt="..."
                              />
                            </div>
                          </Carousel>
                        ) : (
                          <Carousel
                            className="carousel-width w-100"
                            autoPlay
                            swipeable
                            stopOnHover
                            dynamicHeight
                            centerMode
                            showStatus={false}
                            interval={4000}
                            transitionTime={1000}
                            showArrows={true}
                            showIndicators={false}
                            showThumbs={false}
                            centerSlidePercentage={34}
                          >
                            <div>
                              <img
                                src="/images/career/construction-helmets.webp"
                                alt="..."
                              />
                            </div>
                            <div>
                              <img
                                src="/images/career/hands-in.webp"
                                alt="..."
                              />
                            </div>
                            <div>
                              <img
                                src="/images/career/construction-site.webp"
                                alt="..."
                              />
                            </div>
                          </Carousel>
                        )
                      }
                    </Media>
                  </div>
                </div>
              </div>

              <div className="card bg-light my-5" style={{ border: 'none' }}>
                <div className="card-body text-center ">
                  <h4 className="card-title about__dark-red">
                    Unhappy marriage/divorce...to Amazing, lasting relationship
                  </h4>

                  <p className="card-text">
                    I went from an unhappy marriage and the financial/emotional
                    challenges of a difficult divorce to finding an awesome and
                    positive relationship with an amazing woman who I married
                    and have had only happiness with from the beginning.
                  </p>
                  <div className="container card-text carousel-width d-flex justify-content-center w-100">
                    <Media query="(max-width: 480px)">
                      {matches =>
                        matches ? (
                          <Carousel
                            className="carousel-width w-100"
                            autoPlay
                            swipeable
                            stopOnHover
                            dynamicHeight
                            centerMode
                            showStatus={false}
                            interval={4000}
                            transitionTime={1000}
                            showArrows={true}
                            showIndicators={false}
                            showThumbs={false}
                            centerSlidePercentage={100}
                          >
                            <div>
                              <img src="/images/wed/wed-pic-4.webp" alt="..." />
                            </div>
                            <div>
                              <img src="/images/wed/wed-pic-3.webp" alt="..." />
                            </div>
                            <div>
                              <img src="/images/wed/wed-pic-6.webp" alt="..." />
                            </div>
                            <div>
                              <img src="/images/wed/wed-pic-1.webp" alt="..." />
                            </div>
                            <div>
                              <img src="/images/wed/wed-pic-5.webp" alt="..." />
                            </div>

                            <div>
                              <img src="/images/wed/wed-pic-2.webp" alt="..." />
                            </div>
                          </Carousel>
                        ) : (
                          <Carousel
                            className="carousel-width w-100"
                            autoPlay
                            swipeable
                            stopOnHover
                            dynamicHeight
                            centerMode
                            showStatus={false}
                            interval={4000}
                            transitionTime={1000}
                            showArrows={true}
                            showIndicators={false}
                            showThumbs={false}
                            centerSlidePercentage={34}
                          >
                            <div>
                              <img src="/images/wed/wed-pic-4.webp" alt="..." />
                            </div>
                            <div>
                              <img src="/images/wed/wed-pic-3.webp" alt="..." />
                            </div>
                            <div>
                              <img src="/images/wed/wed-pic-6.webp" alt="..." />
                            </div>
                            <div>
                              <img src="/images/wed/wed-pic-1.webp" alt="..." />
                            </div>
                            <div>
                              <img src="/images/wed/wed-pic-5.webp" alt="..." />
                            </div>

                            <div>
                              <img src="/images/wed/wed-pic-2.webp" alt="..." />
                            </div>
                          </Carousel>
                        )
                      }
                    </Media>
                  </div>
                </div>
              </div>

              <div
                className="card bg-light mt-4 mb-0"
                style={{ border: 'none' }}
              >
                <div className="card-body text-center">
                  <p className="card-text pb-2">
                    Now I want to share this powerful tool with everyone and
                    anyone who is looking for a positive change in their life or
                    simply want to optimize what they're already doing.
                  </p>
                </div>
              </div>

              <hr className="my-5 border" />

              <h4 className="mt-5" style={{ color: '#be141b' }}>
                Motivate and inspire yourself and/or your team to a higher level
                today!
              </h4>

              <p className="mt-4 mb-0">
                Get all the powerful, positive benefits described here for as
                low as
              </p>
              <p>
                <strong className="home__dark-red">$3.00 per manual!</strong>
              </p>

              <Link to="/store">
                <img
                  className="p-5 img-fluid"
                  src="/images/Paypal-Buy-Now-Button.webp"
                  alt=""
                />
              </Link>

              <hr className="my-5 border" />
            </ObserverWrapper>
          </div>
        </div>
      </div>
    )
  }
}
