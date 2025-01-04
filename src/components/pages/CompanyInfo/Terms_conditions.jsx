import React from 'react';
import { CheckCircle, AlertCircle } from "lucide-react";


const Terms_conditions = () => {
    return (
        <div className="bg-gray-50 min-h-screen px-6 py-10 md:px-20 mt-16">
          <header className="border-b pb-6 mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions of Fast Office</h1>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: <span className="font-medium">January 4, 2025</span>
            </p>
          </header>
    
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Welcome to Fast Office! Our platform provides fully furnished office spaces to startups and companies. By using our services, you agree to comply with these Terms and Conditions. These terms are designed to ensure a seamless and professional experience for all users.
              </p>
            </section>
    
            <section>
              <h2 className="text-xl font-semibold text-gray-800">2. Acceptance of Terms</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                By accessing Fast Office, you affirm that you have read, understood, and accepted these terms. This agreement applies to all users, including those who register for an account or access our services without registration.
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-600 space-y-2">
                <li>Your access to our services implies your consent to these terms.</li>
                <li>Failure to comply with these terms may result in suspension or termination of access.</li>
              </ul>
            </section>
    
            <section>
              <h2 className="text-xl font-semibold text-gray-800">3. Modifications to Terms</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                We may update these terms to reflect changes in laws, services, or user feedback. It is your responsibility to review these updates. Continued use of our platform indicates your acceptance of the revised terms.
              </p>
              <p className="text-gray-600 mt-2">
                Significant changes will be communicated through announcements on our platform or via email.
              </p>
            </section>
    
            <section>
              <h2 className="text-xl font-semibold text-gray-800">4. User Responsibilities</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Users of Fast Office are expected to adhere to the following guidelines:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-600 space-y-2">
                <li>Provide accurate and truthful information during registration and booking.</li>
                <li>Ensure that all interactions on the platform are professional and respectful.</li>
                <li>Avoid misuse of our resources, including furniture and facilities.</li>
              </ul>
            </section>
    
            <section>
              <h2 className="text-xl font-semibold text-gray-800">5. Contact Us</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                If you have any questions or require support regarding these terms, feel free to reach out to us:
              </p>
              <p className="text-gray-600 mt-1">
                <CheckCircle className="inline-block w-5 h-5 text-green-500 mr-2" />
                <span>Email: support@fastoffice.com</span>
              </p>
              <p className="text-gray-600 mt-1">
                <AlertCircle className="inline-block w-5 h-5 text-red-500 mr-2" />
                <span>Phone: +1-800-123-4567</span>
              </p>
            </section>
    
            <section>
              <h2 className="text-xl font-semibold text-gray-800">6. Privacy Policy</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Your personal information is collected, used, and stored in accordance with our Privacy Policy. We are committed to safeguarding your data and ensuring that it is used only for legitimate purposes, such as improving our services and fulfilling your requests.
              </p>
            </section>
    
            <section>
              <h2 className="text-xl font-semibold text-gray-800">7. Intellectual Property</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                All materials on our platform, including text, images, logos, and designs, are the exclusive property of Fast Office or its licensors. Unauthorized reproduction, modification, or distribution of these materials is strictly prohibited.
              </p>
            </section>
    
            <section>
              <h2 className="text-xl font-semibold text-gray-800">8. Limitations of Liability</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Fast Office shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services. This includes, but is not limited to, loss of data, revenue, or business opportunities.
              </p>
            </section>
    
            <section>
              <h2 className="text-xl font-semibold text-gray-800">9. Termination</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                We reserve the right to suspend or terminate your account or access to our services without prior notice if you violate these terms or engage in any unlawful or inappropriate behavior.
              </p>
              <p className="text-gray-600 mt-2">
                You may also terminate your account by contacting our support team. Upon termination, your access to certain features may be permanently revoked.
              </p>
            </section>
    
            <section>
              <h2 className="text-xl font-semibold text-gray-800">10. Governing Law</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which Fast Office operates. Any disputes arising from these terms will be resolved exclusively in the courts of that jurisdiction.
              </p>
            </section>
          </div>
    
          <footer className="mt-12 text-center text-gray-400 text-sm">
            © 2025 Fast Office. All rights reserved.
          </footer>
        </div>
      );
    };

export default Terms_conditions;