import "/node_modules/flag-icons/css/flag-icons.min.css";
import React, { useState } from 'react';
import classNames from 'classnames';

const Home = () => {

  const languageText = {
    en: {
        title: "Shipping Cost Calculator",        
        weight: "Weight (in kg)",
        length: "Distance (in km)",
        calculate: "Calculate",
        shippingCost: "Shipping Cost",
    },
    fr: {
        title: "Calculateur de coût d'expédition",
        weight: "Poids (en kg)",
        length: "Distance (en km)",
        calculate: "Calculer",
        shippingCost: "Coût d'expédition",
    },
    pl:{
        title: "Kalkulator kosztów wysyłki",
        weight: "Waga (w kg)",
        length: "Odległość (w km)",
        calculate: "Oblicz",
        shippingCost: "Koszt wysyłki",
    },
}

  const [weight, setWeight] = useState('');
  const [distance, setDistance] = useState('');
  const [shippingCost, setShippingCost] = useState(0);
  const [language, setLanguage] = useState('en');

  const t = languageText[language];

  const calculateShippingCost = () => {
    // Add your shipping cost calculation logic here
    const calculatedCost = weight * distance * 0.1;
    setShippingCost(calculatedCost.toFixed(2));
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen  ">
      <div className='flex flex-row gap-10 justify-center items-center my-4 ' >
        <span  className='fi fi-gb cursor-pointer' onClick={()=> setLanguage('en')}></span>
        <span  className='fi fi-fr cursor-pointer' onClick={()=> setLanguage('fr')}></span>
        <span  className='fi fi-pl cursor-pointer' onClick={()=> setLanguage('pl')}></span>
      </div>
        <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
        <div className="w-80 bg-white p-6 shadow-md rounded-md">
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 font-medium mb-2">{t.weight}</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="distance" className="block text-gray-700 font-medium mb-2">{t.length}</label>
            <input
              type="number"
              id="distance"
              value={distance}
              onChange={e => setDistance(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            onClick={calculateShippingCost}
            className={classNames('w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md focus:outline-none', {
              'cursor-not-allowed opacity-50': !weight || !distance,
            })}
            disabled={!weight || !distance}
          >
            {t.calculate}
          </button>
          {shippingCost > 0 && (
            <div className="mt-4">
              <p className="text-gray-700 font-medium">{t.shippingCost}</p>
              <p className="text-xl font-bold">${shippingCost}</p>
            </div>
          )}
        </div>
      </div>
  );
};

export default Home;
