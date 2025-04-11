const FormSection = () => {
  return (
    <section
      id="form"
      className="py-16 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Fuar&apos;da bizimle tanıştığınız için teşekkür ederiz! Şimdi iletişim bilgilerinizi bırakın,
            size özel teklifimizi gönderelim.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6 mb-8">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-posta Adresi
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="ornek@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefon Numarası
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="05XX XXX XX XX"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Gönder
            </button>
          </form>

          <div className="mt-8">
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Yükleniyor…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
