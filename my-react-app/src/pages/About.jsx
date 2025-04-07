// import React from "react";

// function About() {
//     return (
//         <div className="p-6">
//             <h1 className="text-3xl font-bold">About Us</h1>
//             <p className="mt-4 text-lg">This is the About Us page.</p>
//         </div>
//     );
// }

// export default About;
// import React from "react";

// function About() {
//     return (
//         <div
//             className="p-6 min-h-screen bg-cover bg-center flex items-center justify-center"
//             style={{ backgroundImage: "url('/background.JPEG')" }} // 👈 Replace with your image path
//         >
//             <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-5xl w-full space-y-8">
//                 <h1 className="text-4xl font-extrabold text-pink-600 text-center">About Us</h1>

//                 {/* Mission */}
//                 <section>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">🎯 Our Mission</h2>
//                     <p className="text-lg text-gray-700 leading-relaxed">
//                         At <span className="font-semibold text-pink-600">LifeCheck</span>, our mission is to support early breast cancer detection by leveraging AI technology — making health predictions accessible, trustworthy, and easy to use for everyone.
//                     </p>
//                 </section>

//                 {/* Who We Are */}
//                 <section>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">👩‍💻 Who Are We?</h2>
//                     <p className="text-lg text-gray-700 leading-relaxed">
//                         We are a team of dedicated IT students passionate about building meaningful tools that impact lives. With a combination of web development, machine learning, and UX design skills, we aim to merge tech and healthcare for the greater good.
//                     </p>
//                 </section>

//                 {/* Why We Built It */}
//                 <section>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">💡 Why We Built This</h2>
//                     <p className="text-lg text-gray-700 leading-relaxed">
//                         Breast cancer is one of the most common health issues affecting women globally. We wanted to create a platform that enables early prediction and awareness — especially for those who may not have easy access to frequent medical checkups.
//                     </p>
//                 </section>

//                 {/* How It Works */}
//                 <section>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">⚙️ How It Works</h2>
//                     <p className="text-lg text-gray-700 leading-relaxed">
//                         Our system uses an AI-powered model trained on medical datasets. Users can input key health indicators, and the model will analyze the data and predict whether further medical consultation is advisable. It’s fast, private, and easy to use.
//                     </p>
//                 </section>

//                 {/* Disclaimers */}
//                 <section>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">⚠️ Disclaimers</h2>
//                     <p className="text-lg text-gray-700 leading-relaxed">
//                         This platform does not replace professional medical advice or diagnosis. It is intended for educational and awareness purposes only. Please consult your doctor for any health concerns or symptoms.
//                     </p>
//                 </section>

//                 {/* Feedback Section */}
//                 <section>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">💬 Feedback</h2>
//                     <p className="text-lg text-gray-700 leading-relaxed">
//                         We’d love to hear from you! Whether it's a suggestion, bug report, or encouragement — your feedback helps us grow and improve. Reach out through our contact page or drop us a message anytime.
//                     </p>
//                 </section>

//                 <p className="text-center text-pink-500 italic font-medium pt-6">
//                     Together, let’s build a healthier tomorrow with tech and trust. 💖
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default About;
import React from "react";
import Footer from "../components/Footer"; // ✅ Add this
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function About() {
    return (

<>
  <Navbar/>

        <div
        className="min-h-screen flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover p-6 mt-32"
        style={{ backgroundImage: "url('/background.jpeg')" }} // Ensure the image is in the /public folder
      >
      
        
            <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-5xl w-full space-y-10">
                <h1 className="text-4xl font-extrabold text-pink-600 text-center">About Us</h1>

                {/* Our Mission */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">🎯 Our Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At <span className="font-semibold text-pink-600">LifeCheck</span>, we believe that early detection saves lives. Our mission is to harness the power of Artificial Intelligence to help individuals detect potential signs of breast cancer earlier, easier, and more accurately. We aim to break down barriers to healthcare by making prediction tools available to all — no matter where they are or what resources they have.
                    </p>
                </section>

                {/* Who We Are */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">👩‍💻 Who Are We?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We are a group of passionate IT students, innovators, and tech enthusiasts who came together with a single goal: to make a difference using code. With diverse backgrounds in full-stack web development, data science, and user experience design, our team worked collaboratively to develop a reliable tool that could positively impact lives. This is not just a project — it’s our way of contributing to a healthier future.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-2">
                        Our journey began with an idea in a university lab, fueled by curiosity and compassion. Today, we're proud to share a platform that reflects our dedication to combining healthcare with cutting-edge technology.
                    </p>
                </section>

                {/* Why We Built This */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">💡 Why We Built This</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Breast cancer continues to affect millions of women every year. We noticed a critical gap — not everyone has access to regular checkups, awareness programs, or early diagnostics. This inspired us to build something that could bridge that gap using technology most people already have: the internet and a smartphone or computer.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-2">
                        Our vision was to create a simple tool that could inform and empower users, giving them better control over their health and peace of mind. We want to remove the fear around testing and replace it with clarity and proactive care.
                    </p>
                </section>

                {/* How It Works */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">⚙️ How It Works</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our web app is powered by a machine learning model trained on a comprehensive dataset of medical records. Users enter key health-related metrics such as age, tumor size, texture, and other biological features. The system then analyzes the input in real time and provides a prediction on whether further clinical examination is recommended.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-2">
                        The platform is designed with security and privacy in mind — your data is never stored without your permission. Each prediction is a step toward awareness, not a final diagnosis. The interface is clean, mobile-friendly, and simple enough for anyone to use.
                    </p>
                </section>

                {/* Disclaimers */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">⚠️ Important Disclaimers</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Please note that <span className="font-semibold">LifeCheck is not a diagnostic tool</span>. It is intended to assist users in becoming more aware of potential risks and encourage early consultation with licensed healthcare professionals.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-2">
                        The predictions are based on data and probabilities, not certainty. We do not collect or share your personal health data without explicit consent, and our goal is to provide helpful information — not replace your doctor.
                    </p>
                </section>

                {/* Feedback / Contact */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">💬 We’d Love Your Feedback</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Your thoughts matter! Whether you're a patient, a developer, a doctor, or someone just curious — your feedback helps us evolve. Have an idea? Spotted a bug? Just want to say hi? We'd be thrilled to hear from you.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-2">
                        You can reach us through our contact form or email. Help us improve this platform and shape the future of digital health.
                    </p>
                </section>

                {/* FAQ Section */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">❓ Frequently Asked Questions (FAQs)</h2>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <div>
                            <h3 className="font-semibold text-pink-600">1. Is this app a substitute for medical diagnosis?</h3>
                            <p>No. This app is for educational and awareness purposes only. It is not a replacement for professional medical advice or diagnosis.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-pink-600">2. How accurate is the prediction model?</h3>
                            <p>The model is trained on verified datasets and performs well in identifying patterns, but no model is 100% accurate. Always consult a doctor for a confirmed diagnosis.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-pink-600">3. Is my data safe?</h3>
                            <p>Yes. We prioritize your privacy. No data is stored or shared without your permission. You remain in full control of your information.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-pink-600">4. Who built this platform?</h3>
                            <p>This platform was created by a group of passionate IT students as part of an initiative to merge technology with healthcare and spread awareness about early breast cancer detection.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-pink-600">5. How should I interpret the prediction result?</h3>
                            <p>If your result shows “Possible Risk,” it means you should consider visiting a healthcare professional for further testing. A “No Risk Detected” result does not mean you're fully clear — regular checkups are still important.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-pink-600">6. Can I use this tool on mobile?</h3>
                            <p>Absolutely! Our website is responsive and optimized for use on mobile, tablet, and desktop devices.</p>
                        </div>
                    </div>
                </section>

                {/* Final Statement */}
                <p className="text-center text-pink-500 italic font-medium pt-6 text-xl">
                    Together, we believe in awareness, action, and early detection. Let’s use technology to make healthcare smarter and lives longer. 💖
                </p>
            </div>
        </div>

<Footer/>

  </>
    );
}

export default About;

              
