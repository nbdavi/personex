import React, { useState } from 'react';

interface ModalProps {
  onClose: () => void;
}

const CreateCampaignModal: React.FC<ModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    sendDate: '',
    objective: '',
    prompt: '',
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Form Submitted:', formData); // Substituir pela integração com API
      onClose(); // Fecha o modal após o Step 3
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        width: '500px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      <h2>Create Campaign</h2>
      <p>Fill out each field to create a new campaign.</p>
      <div style={{ marginBottom: '20px' }}>
        {/* Step 1: Form Fields */}
        {step === 1 && (
          <>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  marginBottom: '10px',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
            </label>
            <label>
              Send Date:
              <input
                type="text"
                name="sendDate"
                value={formData.sendDate}
                onChange={handleChange}
                placeholder="e.g. 'tomorrow at 5pm'"
                style={{
                  width: '100%',
                  marginBottom: '10px',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
            </label>
            <label>
              Objective:
              <select
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                style={{
                  width: '100%',
                  marginBottom: '10px',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              >
                <option value="">Select a campaign objective</option>
                <option value="sales">Increase Sales</option>
                <option value="engagement">Boost Engagement</option>
              </select>
            </label>
            <label>
              Prompt:
              <textarea
                name="prompt"
                value={formData.prompt}
                onChange={handleChange}
                placeholder="Write a campaign about..."
                style={{
                  width: '100%',
                  height: '80px',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
            </label>
          </>
        )}

        {/* Step 2: Additional Information */}
        {step === 2 && (
          <div>
            <h3>Additional Campaign Details</h3>
            <p>You can add more details here (future implementation).</p>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div>
            <h3>Review Campaign</h3>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Send Date:</strong> {formData.sendDate}
            </p>
            <p>
              <strong>Objective:</strong> {formData.objective}
            </p>
            <p>
              <strong>Prompt:</strong> {formData.prompt}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={onClose}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ccc',
            color: '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Close
        </button>
        <button
          onClick={handleNext}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {step < 3 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default CreateCampaignModal;
