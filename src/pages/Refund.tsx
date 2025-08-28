const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Refund Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Our commitment to fair and transparent refund procedures
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: November 2024
          </p>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
            <p className="text-muted-foreground mb-6">
              DigitalTech Solutions Ltd is committed to client satisfaction and providing high-quality software 
              development and IT services. This Refund Policy outlines the conditions under which refunds may be 
              requested and processed for our digital services and custom software development projects.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. Refund Eligibility</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Project-Based Services</h3>
            <p className="text-muted-foreground mb-4">Refunds for project-based services may be considered under the following circumstances:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Failure to deliver agreed-upon deliverables as specified in the project scope</li>
              <li>Significant deviation from agreed timeline without valid justification or client approval</li>
              <li>Technical issues that cannot be resolved and prevent project completion</li>
              <li>Mutual agreement to terminate the project before completion</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Ongoing Services</h3>
            <p className="text-muted-foreground mb-4">For ongoing services such as maintenance and support:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Service cancellation requests must be made with 30 days written notice</li>
              <li>Refunds for unused portions of pre-paid services may be provided on a pro-rata basis</li>
              <li>No refunds for services already rendered or in progress</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. Non-Refundable Services</h2>
            <p className="text-muted-foreground mb-4">The following services are non-refundable:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Consultation fees and project discovery sessions</li>
              <li>Work completed and delivered according to specifications</li>
              <li>Third-party software licenses and subscriptions purchased on client's behalf</li>
              <li>Custom development work that has been approved and delivered</li>
              <li>Services terminated due to client breach of contract</li>
              <li>Changes in project requirements initiated by the client</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Refund Process</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Request Submission</h3>
            <p className="text-muted-foreground mb-4">To request a refund:</p>
            <ol className="list-decimal list-inside text-muted-foreground mb-6 space-y-2">
              <li>Contact us in writing within 30 days of the issue occurrence</li>
              <li>Provide detailed explanation of the grounds for refund request</li>
              <li>Include relevant project documentation and correspondence</li>
              <li>Allow us reasonable opportunity to address and resolve the issue</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Evaluation Process</h3>
            <p className="text-muted-foreground mb-4">Upon receiving a refund request:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>We will acknowledge receipt within 2 business days</li>
              <li>Investigation and evaluation will be completed within 14 business days</li>
              <li>We may request additional information or documentation</li>
              <li>A written response with our decision will be provided</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. Refund Calculations</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Partial Refunds</h3>
            <p className="text-muted-foreground mb-4">When partial refunds are approved:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Refund amount will be calculated based on work not completed or delivered</li>
              <li>Time and resources already invested will be deducted</li>
              <li>Any third-party costs incurred on client's behalf will be deducted</li>
              <li>Administrative fees may apply for processing</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Full Refunds</h3>
            <p className="text-muted-foreground mb-6">
              Full refunds are rare and typically only considered in cases of significant service failure on our part 
              where no deliverables have been provided or where we cannot fulfill our contractual obligations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">6. Refund Methods and Timing</h2>
            <p className="text-muted-foreground mb-4">Approved refunds will be processed as follows:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Refunds will be issued to the original payment method when possible</li>
              <li>Processing time is typically 5-10 business days from approval</li>
              <li>Bank transfer refunds may take additional time depending on financial institutions</li>
              <li>Refund confirmation will be sent once processing is complete</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">7. Dispute Resolution</h2>
            <p className="text-muted-foreground mb-6">
              If you disagree with our refund decision, we encourage you to first contact our management team 
              for a review. If the matter cannot be resolved through direct communication, disputes may be 
              resolved through mediation or arbitration as specified in our Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">8. Alternative Remedies</h2>
            <p className="text-muted-foreground mb-4">
              Before seeking a refund, consider these alternative remedies:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Project scope modification to address concerns</li>
              <li>Additional support and training</li>
              <li>Extended maintenance period</li>
              <li>Credit toward future services</li>
              <li>Corrective work at no additional charge</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">9. Client Obligations</h2>
            <p className="text-muted-foreground mb-4">
              To be eligible for a refund, clients must:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Have fulfilled their payment obligations up to the point of the issue</li>
              <li>Cooperate with our investigation and provide requested information</li>
              <li>Return or cease use of any delivered work product if applicable</li>
              <li>Maintain confidentiality of proprietary information received</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">10. Force Majeure</h2>
            <p className="text-muted-foreground mb-6">
              In cases where project delays or failures are due to circumstances beyond our reasonable control 
              (including but not limited to natural disasters, government actions, or global pandemics), 
              refund eligibility will be evaluated on a case-by-case basis with consideration for alternative 
              solutions such as project postponement or scope adjustment.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">11. Policy Updates</h2>
            <p className="text-muted-foreground mb-6">
              This Refund Policy may be updated periodically to reflect changes in our business practices or 
              legal requirements. Updated policies will apply to new projects and services ordered after the 
              effective date of the update.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For refund requests or questions about this policy, contact us:
            </p>
            <div className="text-muted-foreground space-y-1 mb-6">
              <p><strong>Refund Department</strong></p>
              <p>DigitalTech Solutions Ltd</p>
              <p>Innovation Centre, 123 Tech Street</p>
              <p>Manchester, M1 2AB, United Kingdom</p>
              <p>Email: refunds@digitaltechsolutions.co.uk</p>
              <p>Phone: +44 161 123 4567</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">13. Consumer Rights</h2>
            <p className="text-muted-foreground mb-6">
              This policy does not affect your statutory rights as a consumer under UK law. If you are a consumer, 
              you may have additional rights under the Consumer Rights Act 2015 and other applicable consumer 
              protection legislation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;