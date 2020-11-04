import React, { useEffect, useState } from 'react';

import SectionHeader from '../../../utils/section-header/section-header';

const WhomWeHelp = () => {
  const [foundations, setFoundations] = useState([
    {
      name: 'Fundacja "Dbam o Zdrowie" ',
      desc: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      keys: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki']
    },
    {
      name: 'Fundacja "Dla dzieci" ',
      desc: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
      keys: ['ubrania', 'meble', 'zabawki']
    },
    {
      name: 'Fundacja "Bez domu" ',
      desc: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
      keys: ['ubrania', 'jedzenie', 'ciepłe koce']
    },
    {
      name: 'Fundacja "Lorem Ipsum 1" ',
      desc: 'Quis varius quam quisque id diam quam elementum pulvinar',
      keys: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble']
    },
    {
      name: 'Fundacja "Lorem Ipsum 2" ',
      desc: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      keys: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki']
    },
    {
      name: 'Fundacja "Lorem Ipsum 3" ',
      desc: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      keys: ['ubrania', 'jedzenie', 'zabawki']
    },
    {
      name: 'Fundacja "Lorem Ipsum 4" ',
      desc: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      keys: ['ubrania', 'jedzenie']
    },
    {
      name: 'Fundacja "Lorem Ipsum 5" ',
      desc: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      keys: ['sprzęt AGD', 'meble']
    },
    {
      name: 'Fundacja "Lorem Ipsum 6" ',
      desc: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      keys: ['ubrania', 'sprzęt AGD', 'meble', 'zabawki']
    },
  ]);
  
  const [organizations, setOrganizations] = useState([
    {
      name: 'Organizacja "Lorem Ipsum 1" ',
      desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      keys: ['tempus', 'malesuada', 'maximus']
    },
    {
      name: 'Organizacja "Lorem Ipsum 2" ',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      keys: ['mollis', 'maximus', 'scelerisque', 'cursus']
    },
    {
      name: 'Organizacja "Lorem Ipsum 3" ',
      desc: 'Cras ut maximus lorem, dapibus lobortis massa.',
      keys: ['mollis', 'maximus', 'scelerisque', 'tempus', 'cursus']
    },
    {
      name: 'Organizacja "Lorem Ipsum 4" ',
      desc: 'Quis varius quam quisque id diam quam elementum pulvinar',
      keys: ['mollis', 'tempus']
    },
    {
      name: 'Organizacja "Lorem Ipsum 5" ',
      desc: 'Phasellus sodales semper erat.',
      keys: ['mollis', 'maximus', 'scelerisque', 'cursus']
    },
    {
      name: 'Organizacja "Lorem Ipsum 6" ',
      desc: 'Vestibulum laoreet risus sed tincidunt luctus.',
      keys: ['molnibhlis', 'maximus', 'scelerisque', 'cursus', 'nibh']
    }
  ]);
  
  const [locals, setLocals] = useState([
    {
      name: 'Zbiórka "Lorem Ipsum 1" ',
      desc: 'Neque porro quisquam est qui doak.',
      keys: ['egastas', 'malesuada', 'maximus']
    },
    {
      name: 'Zbiórka "Lorem Ipsum 2" ',
      desc: 'Praesent ac leo fermentum lorem eleifend accumsan vel a lectus.',
      keys: ['mollis', 'maximus', 'scelerisque', 'cursus', 'amet']
    },
    {
      name: 'Zbiórka "Lorem Ipsum 3" ',
      desc: 'Nullam vel nibh nisi.',
      keys: ['mollis', 'maximus', 'tempus', 'cursus']
    },
  ]);
  
  const [pages, setPages] = useState({
    currentPage: 1,
    itemsPerPage: 3,
    pageNr: []
  });
  const [currentDisplay, setCurrentDisplay] = useState('');
  const [currentTab, setCurrentTab] = useState('foundations');


  useEffect(() => {
    const funds = {
      foundations,
      organizations,
      locals
    }
    
    const { currentPage, itemsPerPage } = pages;

    const indexOfLasttItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLasttItem - itemsPerPage;
    
    const currentItems = funds[currentTab].slice(indexOfFirstItem, indexOfLasttItem);

    setCurrentDisplay(currentItems);

    setPages(prev => ({...prev ,pageNr: []}))
    if (Math.ceil(funds[currentTab].length / itemsPerPage) !== 1) {
      for (let i = 1; i <= Math.ceil(funds[currentTab].length / itemsPerPage); i++) {
        setPages(prev => ({
          ...prev,
            pageNr: [...prev.pageNr, i]
        }));
      }
    }
  }, [pages.currentPage, currentTab]);

  const handleChangePage = e => {
    const id = e.target.id.slice(9, 10);
    setPages(prev => ({
      ...prev,
      currentPage: Number(id)
    }))
  }

  const handleTabChange = e => {
    setCurrentTab(e.target.id);
    setPages(prev => ({
      ...prev,
      currentPage: 1
    }));
  }

  return (
    <section className="whom-we-help">
      <SectionHeader title={"Komu pomagamy?"} />
      <div className="whom-we-help__tabs">
        <button 
          onClick={handleTabChange} 
          id="foundations" 
          className={`whom-we-help__button ${currentTab === "foundations" ? "active" : ""}`}>
          Fundacjom
        </button>
        <button 
          onClick={handleTabChange} 
          id="organizations" 
          className={`whom-we-help__button ${currentTab === "organizations" ? "active" : ""}`}>
          Organizacjom pozarządowym 
        </button>
        <button 
          onClick={handleTabChange} 
          id="locals" 
          className={`whom-we-help__button ${currentTab === "locals" ? "active" : ""}`}>
          Lokalnym zbiórkom
        </button>
      </div>
      <p className="whom-we-help__desc">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
      </p>
      <div className="whom-we-help__list">
        {currentDisplay && (
          currentDisplay.map(({name, desc, keys}) => {
            return (
              <div key={name} className="whom-we-help__item">
                <header className="whom-we-help__item__header">
                  <h4 className="whom-we-help__item__header__name">
                    {name}
                  </h4>
                  <p className="whom-we-help__item__header__desc">
                    {desc}
                  </p>
                </header>
                <div className="whom-we-help__item__keys">
                  {keys.join(", ")}
                  {/* {keys.map(
                    key => <span key={key}>{key}</span>
                  )} */}
                </div>
              </div>
            )
          })
        )}
        <div className="whom-we-help__list__buttons">
          {pages.pageNr.length > 0 && (
            pages.pageNr.map(page => (
              <button 
                key={page}
                onClick={handleChangePage}
                className={`whom-we-help__list__button ${pages.currentPage === page ? "active" : ''}`}
                id={`page-btn-${page}`} >
                {page}
              </button>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default WhomWeHelp;
