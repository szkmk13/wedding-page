import React, { useState } from 'react';
import { Car, X } from 'lucide-react';

const RideShareButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    origin: '',
    seats: '',
    contact: '',
    consentToShare: false
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać kod do obsługi wysyłania formularza
    console.log('Formularz wysłany:', formData);
    // Po wysłaniu zamykamy modal
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Przycisk otwierający modal */}
      <button 
        onClick={handleOpenModal}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold/60 px-4 py-2 text-gray-800 shadow transition hover:bg-gold/90 sm:w-auto"
      >
        <Car className="h-6 w-6" />
        Jadę i mam wolne miejsca
      </button>

      {/* Modal z formularzem */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-xl font-bold mb-4">Udostępnij przejazd</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="origin" className="block font-medium">
                  Skąd jadę:
                </label>
                <input
                  id="origin"
                  name="origin"
                  type="text"
                  value={formData.origin}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="np. Warszawa, ul. Marszałkowska"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="seats" className="block font-medium">
                  Ile mam miejsc:
                </label>
                <input
                  id="seats"
                  name="seats"
                  type="number"
                  min="1"
                  value={formData.seats}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="np. 3"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contact" className="block font-medium">
                  Kontakt do mnie:
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="np. tel: 123 456 789 lub email: przyklad@email.com"
                />
              </div>
              
              <div className="flex items-start">
                <input
                  id="consentToShare"
                  name="consentToShare"
                  type="checkbox"
                  checked={formData.consentToShare}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-2"
                />
                <label htmlFor="consentToShare" className="text-sm">
                  Zgadzam się, żeby dane podane w kontakcie były widoczne dla wszystkich, którzy mogą wejść na tę stronę
                </label>
              </div>
              
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Anuluj
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Udostępnij
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RideShareButton;