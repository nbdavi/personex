import React, { useState } from 'react';
import CreateCampaignModal from '../../components/CreateCampaignModal';

const Campaigns: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Campaigns</h1>
      <p style={{ marginBottom: '20px' }}>No campaigns found. Please create a new campaign.</p>
      
      {/* Botão Create Campaign */}
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Create Campaign
      </button>

      {/* Modal para criar campanha */}
      {isModalOpen && <CreateCampaignModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Campaigns;
