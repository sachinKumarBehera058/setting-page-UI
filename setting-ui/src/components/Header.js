import React from 'react';
import { MainHeader } from '@attrybtech/attryb-ui';
import './Header.css';

const Header = ({ title, supportingText }) => {
  return (
    <div className='setting-page-header-section'>
      <div className="setting-page-header-section-container">
        <div className="page-header">
          <div className="page-header-content">
            <div className="text-and-supporting">
              <MainHeader title={title} supportingText={supportingText} />
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Header;
