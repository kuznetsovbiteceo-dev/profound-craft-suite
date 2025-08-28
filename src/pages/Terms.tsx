const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms and conditions carefully before using our services
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: November 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using the services provided by DigitalTech Solutions Ltd ("Company", "we", "our", or "us"), 
              a company registered in England and Wales (Company Number: 12345678), you agree to be bound by these Terms 
              and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
            <p className="text-muted-foreground mb-4">
              DigitalTech Solutions Ltd provides professional software development and IT services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Custom web development and design</li>
              <li>Mobile application development</li>
              <li>Cloud integration and migration services</li>
              <li>Software as a Service (SaaS) solutions</li>
              <li>UX/UI design services</li>
              <li>IT consulting and strategic planning</li>
              <li>Ongoing support and maintenance</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. Client Responsibilities</h2>
            <p className="text-muted-foreground mb-4">As our client, you agree to:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Provide accurate and complete information required for project delivery</li>
              <li>Respond to communications and requests for feedback in a timely manner</li>
              <li>Make payments according to the agreed schedule</li>
              <li>Provide necessary access to systems, accounts, and resources as required</li>
              <li>Respect intellectual property rights and licensing agreements</li>
              <li>Use our services in compliance with applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              Payment terms are specified in individual project agreements. Generally:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Invoices are payable within 14 days of issue</li>
              <li>Late payments may incur interest charges at 8% per annum above the Bank of England base rate</li>
              <li>Work may be suspended for overdue accounts</li>
              <li>All prices are exclusive of VAT unless otherwise stated</li>
              <li>Refunds are subject to our separate Refund Policy</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property Rights</h2>
            <p className="text-muted-foreground mb-4">
              Upon full payment of all fees:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>You will own the intellectual property rights to custom-developed solutions created specifically for you</li>
              <li>We retain rights to our proprietary tools, methodologies, and pre-existing intellectual property</li>
              <li>Third-party components remain subject to their respective licenses</li>
              <li>We reserve the right to use project knowledge for improving our services (excluding confidential information)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">6. Confidentiality</h2>
            <p className="text-muted-foreground mb-6">
              We respect the confidentiality of your business information and will not disclose confidential information 
              to third parties without your consent, except as required by law. This obligation continues indefinitely 
              beyond the termination of our service agreement.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Our liability for any claim is limited to the total amount paid by you for the specific service</li>
              <li>We exclude liability for indirect, consequential, or special damages</li>
              <li>We do not warrant that our services will be uninterrupted or error-free</li>
              <li>You are responsible for maintaining backups of your data</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">8. Force Majeure</h2>
            <p className="text-muted-foreground mb-6">
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable 
              control, including but not limited to acts of God, government actions, war, terrorism, pandemic, 
              fire, flood, or network failures.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">9. Termination</h2>
            <p className="text-muted-foreground mb-6">
              Either party may terminate the service agreement with 30 days written notice. Upon termination, 
              you remain liable for payment of all work completed and expenses incurred up to the termination date. 
              We will provide you with all deliverables completed as of the termination date.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">10. Data Protection</h2>
            <p className="text-muted-foreground mb-6">
              We process personal data in accordance with UK data protection laws and our Privacy Policy. 
              We implement appropriate technical and organizational measures to protect personal data and 
              will notify you of any data breaches in accordance with legal requirements.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These Terms are governed by and construed in accordance with the laws of England and Wales. 
              Any disputes arising from these Terms or our services shall be subject to the exclusive 
              jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website 
              and will take effect immediately upon posting. Continued use of our services after changes constitutes 
              acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">13. Severability</h2>
            <p className="text-muted-foreground mb-6">
              If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions 
              will continue to be valid and enforceable to the fullest extent permitted by law.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms, please contact us:
            </p>
            <div className="text-muted-foreground space-y-1">
              <p><strong>DigitalTech Solutions Ltd</strong></p>
              <p>Innovation Centre, 123 Tech Street</p>
              <p>Manchester, M1 2AB, United Kingdom</p>
              <p>Email: legal@digitaltechsolutions.co.uk</p>
              <p>Phone: +44 161 123 4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;