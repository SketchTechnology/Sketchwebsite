import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './LangDropDown.css';
import Flags from 'country-flag-icons/react/3x2';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const flagWidth = 45; // Width of the flag icon
  const flagHeight = 20; // Height of the flag icon

  return (
    <div className="langDropDown">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          {i18n.language}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ minWidth: `${flagWidth}px` }}>
          <Dropdown.Item
            onClick={() => changeLanguage('ar')}
            className={`text-dark ${i18n.language === 'ar' ? 'd-none' : ''}`}
            style={{ padding: '5px', margin: '0' }} // Adjust padding and margin
          >
            <Flags.AE style={{ width: `${flagWidth}px`, height: `${flagHeight}px` }} />
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeLanguage('en')}
            className={`text-dark ${i18n.language === 'en' ? 'd-none' : 'd-flex'}`}
            style={{ padding: '5px', margin: '0' }} // Adjust padding and margin
          >
            <Flags.US style={{ width: `${flagWidth}px`, height: `${flagHeight}px` }} />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageDropdown;
