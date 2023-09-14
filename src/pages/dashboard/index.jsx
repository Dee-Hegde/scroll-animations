import React from 'react';
import '../../assets/css/dashboard.scss';
import { dashboardImages } from '../../utils/dashboard-helper';
import {useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const trending = {
    img: dashboardImages.trending,
    link: '/earthlanding',
  };
  const navItems = [
    {
      title: 'Earth Landing',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias corrupti mollitia dolores voluptate. Veritatis modi quod quia reiciendis quae excepturi praesentium nisi. Deserunt commodi voluptas ex voluptatibus modi expedita?',
      img: dashboardImages.landingcat,
      link: '/earthlanding',
    },
    {
      title: 'Jumping-Doraemon',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias corrupti mollitia dolores voluptate. Veritatis modi quod quia reiciendis quae excepturi praesentium nisi. Deserunt commodi voluptas ex voluptatibus modi expedita?',
      img: dashboardImages.flyDora,
      link: '/doraemon-jump',
    },
    {
      title: 'Earth Landing',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias corrupti mollitia dolores voluptate. Veritatis modi quod quia reiciendis quae excepturi praesentium nisi. Deserunt commodi voluptas ex voluptatibus modi expedita?',
      img: dashboardImages.landingcat,
      link: '/earthlanding',
    },
    {
      title: 'Earth Landing',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias corrupti mollitia dolores voluptate. Veritatis modi quod quia reiciendis quae excepturi praesentium nisi. Deserunt commodi voluptas ex voluptatibus modi expedita?',
      img: dashboardImages.landingcat,
      link: '/earthlanding',
    },
  ];

  const handleNavigation = (link) => {
    navigate(`${link}`);
  };
  return (
    <div className='dashboard-main-container'>
      <div className='trending-container'>
        <img
          onClick={() => handleNavigation(trending.link)}
          src={trending.img}
          alt='Trending'
        />
      </div>
      <div className='sub-titles-container'>
        <h2> Animations : </h2>
      </div>
      <div className='cards-container'>
        {navItems.map((item, index) => (
          <div
            className='card-container'
            onClick={() => handleNavigation(item.link)}>
            <div className='banner-container'>
              <img
                src={item.img}
                alt='poster'
              />
            </div>
            <div className='details-container'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
